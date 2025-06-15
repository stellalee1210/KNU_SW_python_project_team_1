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