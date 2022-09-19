
function regist() {
  // 문서에서 id 로 input data 가져오기
  const id = (document.getElementById("id") as HTMLInputElement).value;
  const password = (document.getElementById("password") as HTMLInputElement).value;
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;

  // 입력값 검증
  if (!id || !password || !name || !email || !phone) {
    alert("빈칸이 없도록 입력해주세요.");
    return;
  } else {
    // input data로 user 만들기
    const user = {
      id: id,
      password: password,
      name: name,
      email: email,
      phone: phone,
    };

    // user 객체 문자열로 바꿔서 로컬스토리지에 저장
    localStorage.setItem("user", JSON.stringify(user));
    //alert("사용자 등록 성공!");
    window.location.href = "registerCheck.html";

    show_regist_info();
  }
}

function show_regist_info() {
  const user = JSON.parse(localStorage.getItem("user") as string);

  (document.getElementById("show_id") as HTMLParagraphElement).innerText = user.id;
  (document.getElementById("show_password") as HTMLParagraphElement).innerHTML = user.password;
  (document.getElementById("show_name") as HTMLParagraphElement).innerHTML = user.name;
  (document.getElementById("show_phone") as HTMLParagraphElement).innerHTML = user.phone;
  (document.getElementById("show_email") as HTMLParagraphElement).innerHTML = user.email;
}

document.getElementById("register-form")?.addEventListener("onClick", function (e) {
  const target= e.target as HTMLInputElement;
  if (target.id === "do-regist") {
    regist();
  }
});


export {
  regist, show_regist_info
};