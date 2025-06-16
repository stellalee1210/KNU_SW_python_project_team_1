document.addEventListener("DOMContentLoaded", function () {
const mainPageTitle = document.getElementById("mainPageTitle");
const searchBtn = document.getElementById("recipeSearchBtn");
const loginBtn = document.getElementById("loginBtn");
const signUpBtn = document.getElementById("signUpBtn");
const tagInput = document.getElementById("tagInput");
const tagContainer = document.querySelector(".tag-container");
//여기 추가함****************
  const username = localStorage.getItem("username");
  const welcomeMessage = document.getElementById("welcomeMessage");

  if (username && welcomeMessage && loginBtn && signUpBtn) {
    welcomeMessage.textContent = `${username}`;
    welcomeMessage.style.display = "inline-block";
    loginBtn.style.display = "none";
    signUpBtn.style.display = "none";
    const logoutBtn = document.getElementById("logoutBtn");

   if (logoutBtn) {
  logoutBtn.style.display = "inline-block"; // ✅ 반드시 보여주기 설정 필요

  logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("username");
    alert("로그아웃 되었습니다.");
    location.reload();
  });
 }
 }//여기까지****************************
// 키워드 목록 저장용 배열
let keywords = [];

function onClickMyPageTitle() {
  console.log("click title");
}
function onClickLogin() {
  window.location.href = "/loginpage/";
}
function onClickSignUp() {
   window.location.href = "/signuppage/";
  console.log("click sign up");
}
async function onClickSearchRecipe() {
  console.log("현재 키워드 목록:", keywords); // 예: ["김치", "콩나물"]
  const query = keywords.join("+");
  const encodedQuery = encodeURIComponent(query);  // 이거 추가함****************
  localStorage.setItem("ingredient keywords", JSON.stringify(keywords));
  console.log("저장된 키워드:", localStorage.getItem("ingredient keywords"));
  window.location.href = `/searchpage/?q=${encodedQuery}`;
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

// ✅ 이벤트 연결
mainPageTitle.addEventListener("click", onClickMyPageTitle);
searchBtn.addEventListener("click", onClickSearchRecipe);
loginBtn.addEventListener("click", onClickLogin);
signUpBtn.addEventListener("click", onClickSignUp);
tagInput.addEventListener("keydown", onEnterIngredient);
});