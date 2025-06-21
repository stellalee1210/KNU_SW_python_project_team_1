
# KNU_SW_python_project_team_1
경북대학교 소프트웨어학과 '파이썬 기반 빅데이터 분석 기초' 수업 팀 프로젝트 1조<br>
🍚 자취밥 | 냉장고 속 재료로 요리 추천받기<br>
🏫 경북대학교 소프트웨어학과<br>
📌 과목: 파이썬 기반 빅데이터 분석 기초<br>
🧑‍🍳 팀 프로젝트 1조

📌 프로젝트 개요
자취밥은 냉장고 속 재료를 활용한 맞춤형 레시피 추천 웹사이트입니다.<br>
사용자가 현재 보유한 식재료를 검색창에 입력하면, 해당 재료를 활용할 수 있는 다양한 요리 레시피를 추천해줍니다.<br>

🎯 기능 소개<br>
✔ 재료 기반 레시피 검색 – 입력한 재료에 맞는 요리 추천<br>
✔ 간편한 재료기반 필터링 – 취향에 맞는 레시피 선택 가능<br>
✔ 로그인, 회원가입 기능<br>
✔ 크롤링으로 다양한 레시피 데이터 확보<br>
<br>
⚙️ 기술 스택<br>
- Frontend: HTML, CSS, JavaScript ➡️ vscode에서 작업<br>
- Backend: Python (Django)<br>
- Database: Firebase<br>
  <br>
👨‍💻 팀원 소개<br>
| 이름 | 역할 | <br>
| 팀장 정다은 | UI/UX 디자인, 프론트엔드 개발 | <br>
| 팀원 송재현 | 백엔드 개발, 데이터 크롤링 | <br>
| 팀원 이여빈 | 프론트엔드 설계 및 개발, DB 설계 | <br>
<br>
🚀 프로젝트 목표<br>
자취하는 사람들이 손쉽게 냉장고 속 재료를 활용하여 균형 잡히고, 건강한 식사를 할 수 있도록 돕는 것이 목표입니다.<br>
=======
<h1 align="center">🍚 자취밥 | 냉장고 속 재료로 요리 추천받기</h1>

<p align="center">
  <strong>KNU_SW_python_project_team_1</strong><br>
  경북대학교 소프트웨어학과 '파이썬 기반 빅데이터 분석 기초' 수업 팀 프로젝트 1조
</p>

---

## 📌 프로젝트 개요

> **자취밥**은 냉장고 속 재료를 기반으로 다양한 레시피를 추천해주는 웹 애플리케이션입니다.  
> 사용자가 재료를 검색창에 입력하면, 입력한 재료를 활용한 요리를 추천해주어,  
> 자취생도 **간단하고 건강한 식사**를 만들 수 있도록 도와줍니다.
![image](https://github.com/user-attachments/assets/50fb24f5-8e9d-412f-b713-f7cc4521e020)


---

## 🎯 주요 기능

- 🔍 **재료 기반 레시피 검색** – 입력한 재료로 가능한 요리를 추천
- 🍽️ **간편한 재료 필터링** – 취향에 맞는 요리 선택
- 👤 **회원가입 / 로그인 기능** – 개인화 기능 준비
- 🔄 **레시피 크롤링** – 다양한 레시피 DB 확보
![image](https://github.com/user-attachments/assets/16ad6dfa-dccf-4b57-8483-52c285dbe69d)

---

## ⚙️ 기술 스택

| 구분 | 기술 |
|------|------|
| 🎨 Frontend | HTML, CSS, JavaScript (in VSCode) |
| 🧠 Backend | Python (Django) |
| 🗄️ Database | Firebase Realtime DB |

---

## 🛠 설치 및 실행 방법

<details>
<summary><strong>💻 로컬 환경에서 실행하기 (click to expand)</strong></summary>

### 📁 1. 프로젝트 클론

```bash
git clone https://github.com/stellalee1210/KNU_SW_python_project_team_1.git
cd KNU_SW_python_project_team_1
```
### 🐍 2. 가상환경 설정 및 패키지 설치

```bash
# 가상환경 생성

python -m venv venv

# 가상환경 활성화
```bash
# Windows
venv\Scripts\activate
# macOS/Linux
source venv/bin/activate
```

# 필수 패키지 설치
```bash
pip install -r requirements.txt
``` 

🔥 3. Firebase 연동 설정
firebase_config.py 파일에 Firebase Admin SDK 키 경로와 DB URL을 설정

```bash
# firebase_config.py 예시
import firebase_admin
from firebase_admin import credentials, db

cred = credentials.Certificate("path/to/your-firebase-adminsdk.json")
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://your-project-id.firebaseio.com'
})
```

🧠 4. Django 서버 실행
```bash
# 마이그레이션 적용
python manage.py makemigrations
python manage.py migrate

# 개발 서버 실행
python manage.py runserver
```

🌐 5. 웹 접속 및 테스트
- 웹 브라우저에서 [http://127.0.0.1:8000](http://127.0.0.1:8000) 접속
- 메인 페이지 → 재료 검색 → 상세페이지 흐름 확인


---

## 👨‍💻 팀원 소개

| 이름 | 역할 |
|------|------|
| 👩 정다은 (팀장) | UI/UX 디자인, 프론트엔드 개발 |
| 👨 송재현 | 백엔드 개발, 레시피 데이터 크롤링 |
| 👩 이여빈 | 프론트엔드 구조 설계, DB 설계 |

---

## 🚀 프로젝트 목표

> 자취생이 냉장고 속 남은 재료만으로도  
> **쉽고 빠르게 균형 잡힌 레시피를 제공받을 수 있는 방법**을 제공합니다.
> 로그인 하지 않고도 편리하게 사용가능합니다.
> 귀찮은 단계없이 실속있는 사용 추구

📦 프로젝트 폴더 구조 

📦 project-root/
<hr>

<details>
  <summary><strong>📦 Project Folder Structure (click to expand)</strong></summary>

  <pre>

📦 project-root/
├── .idea/                        # PyCharm 프로젝트 설정
├── RecipeDetail/                 # 레시피 상세 페이지 UI
│   ├── RecipeDetail.css
│   ├── RecipeDetail.html
│   └── RecipeDetail.js
├── __pycache__/                  # 파이썬 캐시 파일
├── loginPage/                    # 로그인 페이지 UI
│   ├── login.css
│   ├── login.html
│   └── login.js
├── mainPage/                     # 메인 페이지 UI 및 이미지
│   ├── main.css
│   ├── main.html
│   ├── main.js
│   ├── profile_jde.png
│   ├── profile_sjh.png
│   └── profile_ybl.png
├── recipes/                      # 레시피 관련 Django 앱
│   ├── __pycache__/
│   ├── migrations/
│   ├── __init__.py
│   ├── apps.py
│   ├── urls.py
│   └── views.py
├── searchPage/                   # 검색 결과 페이지 UI
│   ├── search.css
│   ├── search.html
│   └── search.js
├── signupPage/                   # 회원가입 페이지 UI
│   ├── signup.css
│   ├── signup.html
│   └── signup.js
├── user_auth_project/            # Django 프로젝트 설정
│   ├── __pycache__/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── users/                        # 사용자 인증 관련 Django 앱
│   ├── __pycache__/
│   ├── migrations/
│   ├── __init__.py
│   ├── apps.py
│   ├── forms.py
│   ├── serializers.py
│   ├── urls.py
│   └── views.py
├── .gitignore                    # Git 무시 목록 설정
├── README.md                     # 프로젝트 설명 문서
├── firebase_config.py            # Firebase 연동 설정
├── launch.json                   # VSCode 실행 환경 설정
├── manage.py                     # Django 관리 명령어 실행 스크립트
├── structure_back.txt            # 백엔드 구조 요약
├── structure_check.txt           # 체크리스트 및 구조 확인
└── test.js                       # 초기 테스트용 JS 파일

  </pre>
</details>

<details>
<summary><strong>🌿 Git Branch Strategy (click to expand)</strong></summary>

<!-- ✅ 브랜치 소개 -->

<table>
  <thead>
    <tr>
      <th>Branch</th>
      <th>설명</th>
      <th>상태</th>
      <th>작성자</th>
    </tr>
  </thead>
  <tbody>
    <!-- ✅ 브랜치 -->
    <tr><td><code>main</code></td><td>최종 통합된 배포 코드</td><td>✅ 유지</td><td>-</td></tr>
    <tr><td><code>RecipeDetail</code></td><td>레시피 상세페이지 + 정다은 작업 전체 포함</td><td>✅ 유지</td><td>정다은</td></tr>
    <tr><td><code>SignInUpAPI</code></td><td>최종 로그인/회원가입 API 구현</td><td>✅ 유지</td><td>송재현</td></tr>
    <tr><td><code>crawling</code></td><td>전처리된 '만개의 레시피' 크롤링 데이터</td><td>✅ 유지</td><td>송재현</td></tr>
    <tr><td><code>develop-merge-test</code></td><td>프론트, 백, API 최종 통합 테스트 브랜치</td><td>✅ 유지</td><td>송재현, 이여빈</td></tr>
    <tr><td><code>development</code></td><td>중간 버전: 프론트엔드 통합 개발</td><td>✅ 유지</td><td>전체</td></tr>
    <tr><td><code>development-back</code></td><td>중간 버전: 백엔드 통합 개발</td><td>✅ 유지</td><td>송재현</td></tr>
    <tr><td><code>firebase_search</code></td><td>검색 기능용 API 개발</td><td>✅ 유지</td><td>송재현</td></tr>
    <tr><td><code>loginPage</code></td><td>로그린/회원가입 UI(버전관리)</td><td>✅ 유지</td><td>정다은</td></tr>
  </tbody>
</table>

</details>

<hr>


## 📎 기타 사항

- 레시피 데이터는 실제 요리 웹사이트에서 크롤링하여 가공한 JSON 형식입니다.
- 모든 코드와 리소스는 오픈소스로 제공되며, 학습 목적에 한하여 자유롭게 사용할 수 있습니다.

## 🔗 GitHub 링크

<p align="center">
  <a href="https://github.com/stellalee1210/KNU_SW_python_project_team_1">
    <img src="https://img.shields.io/badge/GitHub-프로젝트-blue?logo=github" alt="GitHub 링크">
  </a>
</p>
  
## 🔐 Firebase 연동 정보

- 프로젝트 내에서는 Firebase API 키를 `.env` 또는 `firebase_config.js`로 분리하여 관리합니다.
- 민감한 정보는 GitHub에 업로드되지 않도록 `.gitignore`로 관리해주세요.

