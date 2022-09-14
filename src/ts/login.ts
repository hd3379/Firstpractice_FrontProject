
  
function show_regist_info() {
    const user = JSON.parse(<string>localStorage.getItem("user"));

    (<HTMLElement>document.getElementById("show_id")).innerHTML = user.id;
    (<HTMLElement>document.getElementById("show_password")).innerHTML = user.password;
    (<HTMLElement>document.getElementById("show_name")).innerHTML = user.name;
    (<HTMLElement>document.getElementById("show_phone")).innerHTML = user.phone;
    (<HTMLElement>document.getElementById("show_email")).innerHTML = user.email;
}
function login() {
    // 문서에서 id로 input data 가져오기
    const id = (<HTMLInputElement>document.getElementById("id")).value;
    const password = (<HTMLInputElement>document.getElementById("password")).value;

    // 로컬스토리지에 "user" 키로 저장된 item 가져와서 json 객체로 만들기
    const user = JSON.parse(<string>localStorage.getItem("user"));

    if (
        user.id &&
        user.password &&
        user.id === id &&
        user.password === password
    ) {
        window.location.assign("main_page.html");
        alert("로그인 성공 !");
    } else {
        alert("로그인 실패 !");
    }
}
  
  
function click_login() {
    (<HTMLElement>document.getElementById("myDropdown")).classList.toggle("show");
}
  
  // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!(<HTMLTextAreaElement>event.target).matches('.dropbtn')) {

        const dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        /*if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }*/
        }
    }
}