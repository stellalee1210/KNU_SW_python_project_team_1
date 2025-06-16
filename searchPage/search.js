//여기 추가함***************************
document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get("q");
  console.log("✅ 쿼리 파라미터 확인:", query);  // ← 이거 반드시 넣어서 확인해봐

  const username = localStorage.getItem("username");
  const welcomeMessage = document.getElementById("welcomeMessage");
  const logoutBtn = document.getElementById("logoutBtn");
  const loginBtn = document.getElementById("loginBtn");
  const signUpBtn = document.getElementById("signUpBtn");

  if (username && welcomeMessage && logoutBtn && loginBtn && signUpBtn) {
    welcomeMessage.textContent = `${username}`;
    welcomeMessage.style.display = "inline-block";
    logoutBtn.style.display = "inline-block";
    loginBtn.style.display = "none";
    signUpBtn.style.display = "none";

    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("username");
      alert("로그아웃 되었습니다.");
      location.href = "/mainpage/";
    });
  }

  if (query) {
    const decodedKeywords = decodeURIComponent(query).split("+");
    keywords = [];
    decodedKeywords.forEach((kw) => {
      if (!keywords.includes(kw)) {
        keywords.push(kw);
        createTag(kw);
      }
    });
    const joinedKeywords = decodedKeywords.join(" ");
    fetchKeyword(joinedKeywords); // 🟨 URL에서 가져온 키워드로 검색 실행
  } else {
    loadStoredKeywordsAsTags(); // 🟨 기본 로컬 저장 키워드 로딩
  }
});//여기까지****************************
const recipeData = JSON.parse(localStorage.getItem("searchResults"));

const mainPageTitle = document.getElementById("mainPageTitle");
const searchBtn = document.getElementById("recipeSearchBtn");

const tagInput = document.getElementById("tagInput");
const tagContainer = document.querySelector(".tag-container");

const grid = document.querySelector(".card-grid");
const paginationContainer = document.querySelector("#pagination");

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
  currentPage = 1;
  fetchKeyword();
}

async function fetchRecipe(keyword) {
  showLoader();
  const url = `http://127.0.0.1:8000/api/recipes/search/?q=${keyword}`;
  //console.log("검색 URL:", url);
  try {
    const response = await fetch(url);
    //console.log("검색 결과:", response);
    if (!response.ok) throw new Error("서버 응답 오류");
    const data = await response.json();
    //console.log("검색 데이터:", data);
    //console.log("검색 결과:", results[0].title);
    recipeList = data.results;
    if (recipeList) {
      showRecipe();
      console.log("검색된 레시피:", recipeList);
    } else {
      console.log("검색 결과가 없습니다.");
    }
  } catch (error) {
    console.error("검색 중 오류:", error);
  } finally {
    hideLoader();
  }
}

function showRecipe() {
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

    // 카드에 정보 저장
    card.dataset.title = title.textContent;

    card.appendChild(img);
    card.appendChild(title);
    grid.appendChild(card);
  });

  window.scrollTo({
    top: 0,
    behavior: "smooth", // 부드럽게 스크롤
  });
  const totalPages = Math.ceil(recipeList.length / recipesPerPage);
  if (currentPage > totalPages) currentPage = totalPages;

  renderPagination();
}

function renderPagination() {
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
  window.location.href = "/mainpage/";
}

async function onClickSearchRecipe() {
  localStorage.setItem("ingredient keywords", JSON.stringify(keywords));
  const query = keywords.join("+");
  currentPage = 1;
  const encodedQuery = encodeURIComponent(query); // 🟨 인코딩 추가
  window.location.href = `/searchpage/?q=${encodedQuery}`; // 🟨 쿼리로 넘김
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

function showLoader() {
  grid.classList.add("hidden");
  paginationContainer.classList.add("hidden");
  document.getElementById("loader").classList.remove("hidden");
}

function hideLoader() {
  grid.classList.remove("hidden");
  paginationContainer.classList.remove("hidden");
  document.getElementById("loader").classList.add("hidden");
}

function onClickGrid() {
  const card = document.querySelector(".card");

  recipeList.forEach((recipe) => {
    if (recipe.title != card.dataset.title) {
      return;
    }
    localStorage.setItem("selectedRecipeInfo", JSON.stringify(recipe));
    window.location.href = "/recipedetail/";
  });
  //localStorage.setItem("selectedRecipeInfo", JSON.stringify(recipeList[currentPage - 1]));
}

//document.addEventListener("DOMContentLoaded", () => loadStoredKeywordsAsTags());
tagInput.addEventListener("keydown", onEnterIngredient);
searchBtn.addEventListener("click", onClickSearchRecipe);
mainPageTitle.addEventListener("click", onClickMyPageTitle);
grid.addEventListener("click", onClickGrid);
