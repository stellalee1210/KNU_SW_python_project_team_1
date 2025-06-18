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

---

## 🎯 주요 기능

- 🔍 **재료 기반 레시피 검색** – 입력한 재료로 가능한 요리를 추천
- 🍽️ **간편한 재료 필터링** – 취향에 맞는 요리 선택
- 👤 **회원가입 / 로그인 기능** – 개인화 기능 준비
- 🔄 **레시피 크롤링** – 다양한 레시피 DB 확보

---

## ⚙️ 기술 스택

| 구분 | 기술 |
|------|------|
| 🎨 Frontend | HTML, CSS, JavaScript (in VSCode) |
| 🧠 Backend | Python (Django) |
| 🗄️ Database | Firebase Realtime DB |

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
├── frontend/            # 사용자 인터페이스 (HTML/CSS)
│   ├── index.html
│   └── recipeDetail.html
├── backend/             # Django 기반 백엔드
│   ├── views.py
│   └── urls.py
├── static/              # 정적 리소스 (CSS)
│   └── style.css
├── data/                # 레시피 데이터(JSON)
│   └── recipes.json
├── requirements.txt     # Python 패키지 리스트
└── README.md

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
