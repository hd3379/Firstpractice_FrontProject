function regist() {
    // 문서에서 id 로 input data 가져오기
    const id = (<HTMLInputElement>document.getElementById("id")).value;
    const password = (<HTMLInputElement>document.getElementById("password")).value;
    const name = (<HTMLInputElement>document.getElementById("name")).value;
    const email = (<HTMLInputElement>document.getElementById("email")).value;
    const phone = (<HTMLInputElement>document.getElementById("phone")).value;
  
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
      window.location.replace("registerCheck.html");
    }
}
  
export {
    regist
};