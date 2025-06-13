# recipes/views.py
import sys, os, re
from django.shortcuts import render

# firebase_config.py 위치 경로 추가
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(BASE_DIR)
from firebase_config import db

def search_recipes(request):
    raw_q   = request.GET.get('q', '').strip().lower()
    # 공백/콤마로 키워드 분리
    keywords = [w for w in re.split(r'[\s,]+', raw_q) if w]
    results = []

    if keywords:
        raw = db.reference('Recipes').get() or {}
        # dict이면 .values(), list이면 그대로 필터
        if isinstance(raw, dict):
            items = raw.values()
        else:
            items = [r for r in raw if isinstance(r, dict)]

        # 1) AND 필터
        for rec in items:
            title       = rec.get('제목', '')  # 한글 키
            ingredients = rec.get('재료', '')
            # 모두 포함?
            if all(kw in title.lower() or kw in ingredients.lower() for kw in keywords):
                # 영어 속성명으로 매핑해서 담기
                results.append({
                    'title':        title,
                    'image_url':    rec.get('대표 이미지 URL', ''),
                    'ingredients':  ingredients,
                    'instructions': rec.get('조리 순서', ''),
                })

        # 2) AND 결과 없으면 OR 필터
        if not results:
            for rec in items:
                title       = rec.get('제목', '')
                ingredients = rec.get('재료', '')
                if any(kw in title.lower() or kw in ingredients.lower() for kw in keywords):
                    results.append({
                        'title':        title,
                        'image_url':    rec.get('대표 이미지 URL', ''),
                        'ingredients':  ingredients,
                        'instructions': rec.get('조리 순서', ''),
                    })

    return render(request, 'recipes/search_results.html', {
        'query': raw_q,
        'results': results,
    })