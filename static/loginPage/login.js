function onClickLogin() {
  const username = document.getElementById("userName").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("아이디와 비밀번호를 모두 입력해주세요.");
    return;
  }

  console.log("click log in");

  // 로그인 성공 시 메인페이지로 이동~
  // Django 로그인 API로 요청 보내기
  fetch("http://localhost:8000/users/login/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include", // 세션 쿠키 저장을 위해 필요
    body: JSON.stringify({ username, password })
  })
    .then(response => {
      if (!response.ok) throw new Error("로그인 실패");
      return response.json();
    })
    .then(data => {
      alert(`${data.username}님 환영합니다!`);
      window.location.href =  "/users/mainPage/";
    })
    .catch(error => {
      alert("❌ 로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
      console.error("로그인 오류:", error);
    });
}

// 회원가입 버튼 클릭 시
document.getElementById("signUpBtn").onclick = function () {
  console.log("click sign up");
  window.location.href = "/signupPage/signup.html";
};

function onClickMyPageTitle() { //배너의 자취밥을 누르면 메인페이지로 이동.
  console.log("click title");
  window.location.href = "../mainPage/main.html";  // 상대경로로 이동
}

document.getElementById("mainPageTitle").addEventListener("click", onClickMyPageTitle);