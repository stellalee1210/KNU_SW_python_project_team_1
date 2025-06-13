document.getElementById("registerBtn").addEventListener("click", function () {
  const id = document.getElementById("newUserId").value.trim();
  const pw = document.getElementById("pw").value.trim();
  const pw2 = document.getElementById("pw2").value.trim();

  if (!id || !pw || !pw2) {
    alert("모든 정보를 입력해주세요.");
    return;
  }

  if (pw !== pw2) {
    alert("비밀번호가 일치하지 않습니다.");
    return;
  }

  // Django의 회원가입 API로 요청 보내기
  fetch("http://localhost:8000/users/register/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: id,
      password: pw,
      password2: pw2
    })
  })
    .then(res => {
      if (!res.ok) throw new Error("회원가입 실패");
      return res.json();
    })
    .then(data => {
      alert("🎉 회원가입이 완료되었습니다!");
      // ✅ 로그인 페이지 경로를 실제 서버에서 렌더링하는 경로로 맞춰야 함
      window.location.href = "/users/loginPage/";  // 예시: Django에서 login_page를 이 경로에 바인딩했을 경우
    })
    .catch(err => {
      alert("회원가입 실패. 다시 시도해주세요.");
      console.error("회원가입 오류:", err);
    });
});
