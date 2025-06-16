document.addEventListener("DOMContentLoaded", function () {
  const mainPageTitle = document.getElementById("mainPageTitle");
  const searchBtn = document.getElementById("recipeSearchBtn");
  const loginBtn = document.getElementById("loginBtn");
  const signUpBtn = document.getElementById("signUpBtn");
  const tagInput = document.getElementById("tagInput");
  const tagContainer = document.querySelector(".tag-container");

  let keywords = [];

  function onClickMyPageTitle() {
    console.log("click title");
  }
  function onClickLogin() {
    window.location.href = "/loginpage/";
  }
  function onClickSignUp() {
    console.log("click sign up");
    window.location.href = "/signuppage/";
  }
  function onClickSearchRecipe() {
    console.log("click search recipe");
    console.log("현재 키워드 목록:", keywords);
  }

  function onEnterIngredient(e) {
    if (e.key === " " && this.value.trim() !== "") {
      e.preventDefault();
      const tagText = this.value.trim();
      createTag(tagText);
      keywords.push(tagText);
      this.value = "";
    }
  }

  function createTag(text) {
    const tag = document.createElement("div");
    tag.className = "tag";
    tag.textContent = text;

    const removeBtn = document.createElement("span");
    removeBtn.className = "remove-btn";
    removeBtn.textContent = "×";

    removeBtn.addEventListener("click", function () {
      tagContainer.removeChild(tag);
      keywords = keywords.filter((kw) => kw !== text);
    });

    tag.appendChild(removeBtn);
    tagContainer.insertBefore(tag, tagInput);
  }

  mainPageTitle.addEventListener("click", onClickMyPageTitle);
  searchBtn.addEventListener("click", onClickSearchRecipe);
  loginBtn.addEventListener("click", onClickLogin);
  signUpBtn.addEventListener("click", onClickSignUp);
  tagInput.addEventListener("keydown", onEnterIngredient);
});
