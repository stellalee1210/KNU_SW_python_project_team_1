document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("registerBtn").addEventListener("click", function () {
    const id = document.getElementById("newName").value.trim();
    const pw = document.getElementById("newPassword").value.trim();
    const pw2 = document.getElementById("confirmPassword").value.trim();

    if (!id || !pw || !pw2) {
      alert("모든 정보를 입력해주세요.");
      return;
    }

    if (pw !== pw2) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    // ✅ Django 백엔드에 회원가입 요청
    fetch("/users/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: id,
        password: pw,
        password2: pw2
      })
    })
      .then(response => {
        if (!response.ok) {
          return response.json().then(err => { throw new Error(JSON.stringify(err)); });
        }
        return response.json();
      })
      .then(data => {
        alert("회원가입이 완료되었습니다!");
        window.location.href = "/loginpage/";
      })
      .catch(err => {
        alert("회원가입 중 오류 발생: " + err.message);
      });
  });

  function onClickMyPageTitle() {
    console.log("click title");
    window.location.href = "../mainPage/main.html";
  }

  mainPageTitle.addEventListener("click", onClickMyPageTitle);
});
