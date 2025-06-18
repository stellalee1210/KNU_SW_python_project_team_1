//login.js
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
//여기 추가함
  fetch("/users/login/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: username,
      password: password,
      remember_me: true  // 너가 백엔드에서 이거 체크하고 있으니까!
    })
  })
  .then(res => {
    if (!res.ok) throw new Error("로그인 실패");
    return res.json();
  })
  .then(data => {
    sessionStorage.setItem("token", data.token);
    sessionStorage.setItem("username", data.username);
    window.location.href = "/mainpage/";
  })
  .catch(err => {
    alert("로그인에 실패했습니다.");
    console.error(err);
  });
}

  //console.log("click log in");

  // 로그인 성공 시 메인페이지로 이동~
 // window.location.href = "/mainpage/";
//}

function onClickSignUp() {
  console.log("click sign up");
  window.location.href = "/signuppage/";
}

function onClickMyPageTitle() {
  console.log("click title");
  window.location.href = "/mainpage/";
}

loginBtn.addEventListener("click", onClickLogin);
signUpBtn.addEventListener("click", onClickSignUp);
mainPageTitle.addEventListener("click", onClickMyPageTitle);
