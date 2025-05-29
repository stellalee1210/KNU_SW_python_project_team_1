const mainPageTitle = document.getElementById("mainPageTitle");
const searchBtn = document.getElementById("recipeSearchBtn");
const loginBtn = document.getElementById("loginBtn");
const signUpBtn = document.getElementById("signUpBtn");

function onClickMyPageTitle() {
  console.log("click title");
}
function onClickLogin() {
  window.location.href = "/loginPage/login.html";
  console.log("click log in");
}

function onClickSignUp() {
  console.log("click sign up");
}

function onClickSearchRecipe() {
  console.log("click search recipe");
}

mainPageTitle.addEventListener("click", onClickMyPageTitle);
searchBtn.addEventListener("click", onClickSearchRecipe);
loginBtn.addEventListener("click", onClickLogin);
signUpBtn.addEventListener("click", onClickSignUp);
