import requests
from bs4 import BeautifulSoup
import csv
import time
import os
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

# ✅ 여기만 바꾸면 원하는 구간만 크롤링 가능
start_page = 2292  # 시작 페이지
end_page = 6186    # 끝 페이지

# 세션 설정
session = requests.Session()
retry = Retry(connect=5, backoff_factor=1)
adapter = HTTPAdapter(max_retries=retry)
session.mount("http://", adapter)
session.mount("https://", adapter)

base_url = "https://www.10000recipe.com"
headers = {"User-Agent": "Mozilla/5.0"}

csv_filename = "전체_레시피_이미지포함.csv"
fieldnames = ["제목", "대표 이미지 URL", "재료", "양념", "조리 순서"]

# 기존 저장 제목 불러오기
existing_titles = set()
if os.path.exists(csv_filename):
    with open(csv_filename, encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        for row in reader:
            existing_titles.add(row["제목"])
    print(f"📄 저장된 레시피: {len(existing_titles)}개")

# 새 파일일 경우 헤더 작성
if not os.path.exists(csv_filename):
    with open(csv_filename, mode="w", newline="", encoding="utf-8-sig") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()

count = len(existing_titles)

def clean_items(ul_tag):
    items = []
    for li in ul_tag.select("li"):
        lines = li.get_text(separator="\n").strip().split("\n")
        clean_lines = [line.strip() for line in lines if "구매" not in line and line.strip()]
        if len(clean_lines) >= 2:
            items.append(f"{clean_lines[0]}\n{clean_lines[1]}")
        elif len(clean_lines) == 1:
            items.append(clean_lines[0])
    return items

# ✅ 지정된 범위만 크롤링
for page in range(start_page, end_page + 1):
    print(f"🌐 페이지 {page}/{end_page} 처리 중...")

    try:
        list_url = f"{base_url}/recipe/list.html?order=reco&page={page}"
        res = session.get(list_url, headers=headers)
        soup = BeautifulSoup(res.text, "html.parser")
        cards = soup.select("ul.common_sp_list_ul li.common_sp_list_li a.common_sp_link")

        for card in cards:
            detail_url = base_url + card["href"]

            try:
                detail_res = session.get(detail_url, headers=headers)
                detail_soup = BeautifulSoup(detail_res.text, "html.parser")

                # 제목
                title_tag = detail_soup.select_one("div.view2_summary h3")
                title = title_tag.text.strip() if title_tag else "제목 없음"
                if title in existing_titles: 
                    print(f"⏩ 이미 저장됨: {title}")
                    continue

                # 대표 이미지 URL
                image_tag = detail_soup.select_one("div.centeredcrop img")
                image_url = image_tag["src"] if image_tag else ""

                # 재료 / 양념
                ingre_lists = detail_soup.select("div.ready_ingre3 ul")
                ingredient_text = ""
                seasoning_text = ""

                if len(ingre_lists) >= 1:
                    ingredient_text = "\n".join(clean_items(ingre_lists[0]))
                if len(ingre_lists) >= 2:
                    seasoning_text = "\n".join(clean_items(ingre_lists[1]))

                # 조리 순서 (링크만 제거)
                step_tags = detail_soup.select("div.view_step div.view_step_cont")
                steps = []
                for s in step_tags:
                    for a_tag in s.find_all("a"):
                        a_tag.decompose()
                    plain = s.get_text(separator=" ").strip()
                    if "구매" not in plain and plain:
                        steps.append(plain)
                steps_text = "\n".join([f"{i+1}. {s}" for i, s in enumerate(steps)])

                # 저장
                with open(csv_filename, mode="a", newline="", encoding="utf-8-sig") as f:
                    writer = csv.DictWriter(f, fieldnames=fieldnames)
                    writer.writerow({
                        "제목": title,
                        "대표 이미지 URL": image_url,
                        "재료": ingredient_text,
                        "양념": seasoning_text,
                        "조리 순서": steps_text
                    })

                existing_titles.add(title)
                count += 1
                print(f"✅ 저장 완료 ({count}) : {title}")

            except Exception as e:
                print(f"⚠️ 상세 페이지 에러: {e}")
            time.sleep(1)

    except Exception as e:
        print(f"❌ 목록 페이지 에러 (page {page}): {e}")

    if page % 100 == 0:
        print("🛌 100페이지 마다 10초 휴식...")
        time.sleep(10)

print(f"🎉 지정 범위 크롤링 완료! 총 {count}개 저장됨 ✅")
