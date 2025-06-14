document.addEventListener("DOMContentLoaded", () => {
  // 🔹 로그인한 사용자 이름 표시
  const username = localStorage.getItem("username");
  if (username) {
    const userSpan = document.querySelector(".header-right span");
    userSpan.textContent = `${username}님`;
  }

  // 🔸 레시피 데이터 표시
  const recipe = {
    title: "크림 파스타",
    content: "고소한 크림 소스와 쫄깃한 면발의 환상적인 조화!",
    nutrient: "칼로리: 550kcal, 단백질: 12g, 지방: 22g",
    image_url: "https://example.com/cream-pasta.jpg",
    prev_image_url: "https://example.com/prev.jpg",
    next_image_url: "https://example.com/next.jpg"
  };

  document.getElementById("recipeTitle").innerText = recipe.title;
  document.getElementById("recipeContent").innerText = recipe.content;
  document.getElementById("recipeNutrient").innerText = recipe.nutrient;
  document.getElementById("recipeImage").src = recipe.image_url;

});
/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";

// 🔸 Firebase 설정
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "YOUR_APP_ID"
};

// 🔸 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔸 DOM 로드 후 동작
document.addEventListener("DOMContentLoaded", async () => {
  const username = localStorage.getItem("username");
  if (username) {
    const userSpan = document.querySelector(".header-right span");
    userSpan.textContent = `${username}님`;
  }

  // 🔹 레시피 불러오기 (예: 특정 ID로)
  const recipeId = "exampleRecipeId"; // → 이건 동적으로 받아오게 설정 가능
  const docRef = doc(db, "recipes", recipeId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();

    document.getElementById("recipeTitle").innerText = data["제목"];
    document.getElementById("recipeContent").innerText = `${data["재료"]}\n\n${data["양념"]}`;
    document.getElementById("recipeNutrient").innerText = data["조리 순서"];
    document.getElementById("recipeImage").src = data["대표 이미지 URL"];
  } else {
    console.error("레시피 문서가 존재하지 않습니다.");
  }
});

*/