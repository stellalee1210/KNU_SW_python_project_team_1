//RecipeDetail.js
/*function showUserName() {
  // 🔹 로그인한 사용자 이름 표시
  const username = localStorage.getItem("username");
  if (username) {
    const userSpan = document.querySelector(".header-right span");
    userSpan.textContent = `${username}님`;
  }
}*/
//여기 추가함**************************
document.addEventListener("DOMContentLoaded", () => {
  const username = sessionStorage.getItem("username");
  const welcomeMessage = document.getElementById("welcomeMessage");
  const logoutBtn = document.getElementById("logoutBtn");

  if (username && welcomeMessage && logoutBtn) {
    welcomeMessage.textContent = `${username}님`;
    welcomeMessage.style.display = "inline-block";
    logoutBtn.style.display = "inline-block";

    logoutBtn.addEventListener("click", () => {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("username");
      alert("로그아웃 되었습니다.");
      location.href = "/mainpage/";
    });
  }

  displayRecipeDetails();  // ✅ 레시피 표시도 이 안에서 실행
});

//여기까지******************************


document.getElementById("RecipeDetailPageTitle").addEventListener("click", ()=>{
  window.location.href = "/mainpage/";
})

function displayRecipeDetails() {
  // 🔸 레시피 데이터 표시
  const recipe = JSON.parse(localStorage.getItem("selectedRecipeInfo"));
  const modifiedIngredients = modifyRecipe(recipe.ingredients);
  console.log("Selected Recipe:", recipe);

  document.getElementById("recipeTitle").innerText = recipe.title;
  document.getElementById("recipeContent").innerText = recipe.instructions;
  document.getElementById("recipeNutrient").innerHTML = modifiedIngredients;
  document.getElementById("recipeImage").src = recipe.image_url;
}

function modifyRecipe(ingredient) {
  const ingredientLines = ingredient.split("\n");
  let formattedIngredients = "";

  for (let i = 0; i < ingredientLines.length; i += 2) {
    const name = ingredientLines[i]?.trim() || "";
    const amount = ingredientLines[i + 1]?.trim() || "";
    formattedIngredients += `
      <div style="display: flex; justify-content: center; margin:0% 5% 1% 0%; font-size: 1rem;">
        <span style="width: 100px; text-align: right; margin-right: 50px;">${name}</span>
        <span style="width: 60px; text-align: left;">${amount}</span>
      </div>`;
  }

  return formattedIngredients;
}

//document.addEventListener("DOMContentLoaded", displayRecipeDetails);