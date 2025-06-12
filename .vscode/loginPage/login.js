const loginBtn = document.getElementById("loginBtn");
const signUpBtn = document.getElementById("signUpBtn");
const mainPageTitle = document.getElementById("mainPageTitle");

function onClickLogin() {
  const usernameInput = document.getElementById("userName");
  const passwordInput = document.getElementById("password");

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (!username || !password) {
    alert("아이디와 비밀번호를 모두 입력해주세요.");
    return;
  }

  console.log("click log in");

  // 로그인 성공 시 메인페이지로 이동~
  window.location.href = "../mainPage/main.html";
}

function onClickSignUp() {
  console.log("click sign up");
  window.location.href = "../signupPage/signup.html";
}

function onClickMyPageTitle() {
  console.log("click title");
  window.location.href = "../mainPage/main.html";
}

loginBtn.addEventListener("click", onClickLogin);
signUpBtn.addEventListener("click", onClickSignUp);
mainPageTitle.addEventListener("click", onClickMyPageTitle);
