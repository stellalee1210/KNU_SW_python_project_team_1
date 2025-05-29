function onClickLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("아이디와 비밀번호를 모두 입력해주세요.");
    return;
  }

  console.log("click log in");

  // 로그인 성공 시 메인페이지로 이동
  window.location.href = "/mainPage/main.html";
}

// 회원가입 버튼 클릭 시
document.getElementById("signUpBtn").onclick = function () {
  console.log("click sign up");
  window.location.href = "/signupPage/signup.html";
};