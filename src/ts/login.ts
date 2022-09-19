

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
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
        }
    }
}

document.getElementById("navbar-form")?.addEventListener("click", function (e) {
    const target= e.target as HTMLInputElement;
    if (target.id === "login-click") {
      click_login();
    }
    else if (target.id === "login") {
      login();
    }
  });

export {
    login , click_login
};