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

project-root/
├── frontend/
│   ├── index.html
│   └── recipeDetail.html
├── backend/
│   ├── views.py
│   └── urls.py
├── static/
│   └── style.css
├── data/
│   └── recipes.json
├── README.md
└── requirements.txt

  </pre>
</details>

<details>
  <summary><strong>🌿 Git Branch Strategy (click to expand)</strong></summary>

  <table>
    <thead>
      <tr>
        <th align="left">Branch</th>
        <th align="left">Purpose</th>
      </tr>
    </thead>
    <tbody>
      <tr><td><code>main</code></td><td>Stable production releases</td></tr>
      <tr><td><code>feature/login</code></td><td>Authentication (login / signup)</td></tr>
      <tr><td><code>feature/search</code></td><td>Ingredient search &amp; recipe recommendation</td></tr>
      <tr><td><code>feature/frontend</code></td><td>UI layout / styling</td></tr>
      <tr><td><code>feature/crawling</code></td><td>Recipe crawling &amp; data pipeline</td></tr>
    </tbody>
  </table>

</details>

<hr>

🌿 브랜치 전략 



## 📎 기타 사항

- 레시피 데이터는 실제 요리 웹사이트에서 크롤링하여 가공한 JSON 형식입니다.
- 모든 코드와 리소스는 오픈소스로 제공되며, 학습 목적에 한하여 자유롭게 사용할 수 있습니다.

