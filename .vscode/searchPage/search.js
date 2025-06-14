const recipeData = JSON.parse(localStorage.getItem("searchResults"));

const mainPageTitle = document.getElementById("mainPageTitle");
const searchBtn = document.getElementById("recipeSearchBtn");

const tagInput = document.getElementById("tagInput");
const tagContainer = document.querySelector(".tag-container");

let storedKeywords = JSON.parse(localStorage.getItem("ingredient keywords"));
let recipeList;
let keywords = [];
let currentPage = 1;
const recipesPerPage = 18;

function fetchKeyword(kw = storedKeywords) {
  fetchRecipe(kw);
}

function loadStoredKeywordsAsTags() {
  let stored = localStorage.getItem("ingredient keywords");
  console.log("로컬스토리지에서 불러온 키워드:", stored);
  if (!stored) return;

  let parsedKeywords = [];
  try {
    parsedKeywords = JSON.parse(stored);
    if (!Array.isArray(parsedKeywords)) throw new Error();
  } catch (e) {
    parsedKeywords = stored
      .split(/[+\s,]+/)
      .map((kw) => kw.replace(/"/g, "").trim())
      .filter((kw) => kw !== "");
    //console.log("문자열로부터 키워드 파싱:", parsedKeywords);
  }
  // 중복 방지
  keywords = [];

  parsedKeywords.forEach((kw) => {
    console.log("키워드:", kw);
    if (!keywords.includes(kw)) {
      createTag(kw);
      keywords.push(kw);
    }
  });

  fetchKeyword();
}

async function fetchRecipe(keyword) {
  const url = `http://127.0.0.1:8000/api/search/?q=${keyword}`;
  //console.log("검색 URL:", url);
  try {
    const response = await fetch(url);
    console.log("검색 결과:", response);
    if (!response.ok) throw new Error("서버 응답 오류");
    const data = await response.json();
    console.log("검색 데이터:", data);
    const results = data.results;
    console.log("검색 결과:", results[0].title);
    if (results) {
      recipeList = results;
      console.log("검색된 레시피:", recipeList);
      showRecipe();
    } else {
      console.log("검색 결과가 없습니다.");
    }
  } catch (error) {
    console.error("검색 중 오류:", error);
  }
}

function showRecipe() {
  const grid = document.querySelector(".card-grid");
  grid.innerHTML = "";

  const startIdx = (currentPage - 1) * recipesPerPage;
  const endIdx = startIdx + recipesPerPage;
  const paginatedRecipes = recipeList.slice(startIdx, endIdx);

  paginatedRecipes.forEach((recipe) => {
    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = recipe.image_url || "https://via.placeholder.com/150";
    img.alt = "요리 이미지";

    const title = document.createElement("h2");
    title.textContent = recipe.title || "제목 없음";

    card.appendChild(img);
    card.appendChild(title);
    grid.appendChild(card);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth", // 부드럽게 스크롤
  });

  renderPagination();
}

function renderPagination() {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(recipeList.length / recipesPerPage);

  const prevBtn = document.createElement("button");
  prevBtn.textContent = "이전";
  prevBtn.disabled = currentPage === 1;
  prevBtn.addEventListener("click", () => {
    currentPage--;
    showRecipe();
  });
  paginationContainer.appendChild(prevBtn);

  const pageIndicator = document.createElement("span");
  pageIndicator.textContent = ` ${currentPage} / ${totalPages} `;
  paginationContainer.appendChild(pageIndicator);

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "다음";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.addEventListener("click", () => {
    currentPage++;
    showRecipe();
  });
  paginationContainer.appendChild(nextBtn);
}

function onClickMyPageTitle() {
  window.location.href = "../mainPage/main.html";
}

async function onClickSearchRecipe() {
  localStorage.setItem("ingredient keywords", JSON.stringify(keywords));
  const query = keywords.join("+");
  fetchKeyword(query); // ✅ 배열이 아닌 문자열로 전달
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
  // 이미 존재하는 태그면 생략
  if (keywords.includes(text)) return;

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

document.addEventListener("DOMContentLoaded", () => loadStoredKeywordsAsTags());
tagInput.addEventListener("keydown", onEnterIngredient);
searchBtn.addEventListener("click", onClickSearchRecipe);
mainPageTitle.addEventListener("click", onClickMyPageTitle);
