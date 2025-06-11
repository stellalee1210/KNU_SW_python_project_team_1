document.getElementById("registerBtn").addEventListener("click", function () {
  const id = document.getElementById("newUserId").value.trim();
  const pw = document.getElementById("newPassword").value.trim();
  const name = document.getElementById("newName").value.trim();
  

  if (!id || !pw || !name || !email) {
    alert("모든 정보를 입력해주세요.");
    return;
  }

  alert("회원가입이 완료되었습니다!");
  // 실제 서비스라면 이 부분에서 서버로 데이터 전송
  
});
function onClickMyPageTitle() {
  console.log("click title");
  window.location.href = "../mainPage/main.html";
}
mainPageTitle.addEventListener("click", onClickMyPageTitle);
