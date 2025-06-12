const mainPageTitle = document.getElementById("mainPageTitle");
const searchBtn = document.getElementById("recipeSearchBtn");

const tagInput = document.getElementById("tagInput");
const tagContainer = document.querySelector(".tag-container");

let keywords = [];

function onClickMyPageTitle() {
  window.location.href = "../mainPage/main.html";
}

function onClickSearchRecipe() {
  //console.log("click search recipe");
  console.log("현재 키워드 목록:", keywords);
  window.location.href = "../searchPage/search.html";
}

// ✅ 키워드 입력 처리
function onEnterIngredient(e) {
  if (e.key === " " && this.value.trim() !== "") {
    e.preventDefault(); // 공백 입력 방지
    const tagText = this.value.trim();

    console.log("입력된 단어:", tagText);

    createTag(tagText);
    keywords.push(tagText); // 배열에 추가
    console.log("현재까지 키워드 목록:", keywords);

    this.value = "";
  }
}

// ✅ 태그 생성 함수
function createTag(text) {
  const tag = document.createElement("div");
  tag.className = "tag";
  tag.textContent = text;

  const removeBtn = document.createElement("span");
  removeBtn.className = "remove-btn";
  removeBtn.textContent = "×";

  removeBtn.addEventListener("click", function () {
    tagContainer.removeChild(tag);
    keywords = keywords.filter((kw) => kw !== text); // 배열에서 삭제
    console.log(`'${text}' 키워드 제거됨. 현재 키워드 목록:`, keywords);
  });

  tag.appendChild(removeBtn);
  tagContainer.insertBefore(tag, tagInput);
}

tagInput.addEventListener("keydown", onEnterIngredient);
searchBtn.addEventListener("click", onClickSearchRecipe);
mainPageTitle.addEventListener("click", onClickMyPageTitle);
