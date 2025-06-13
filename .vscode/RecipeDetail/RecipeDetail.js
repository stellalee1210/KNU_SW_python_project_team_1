document.addEventListener("DOMContentLoaded", () => {
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

  // 이전/다음 이미지
  document.getElementById("prevRecipeImage").src = recipe.prev_image_url;
  document.getElementById("nextRecipeImage").src = recipe.next_image_url;
});

// 뒤로가기
function goBack() {
  window.history.back();
}
