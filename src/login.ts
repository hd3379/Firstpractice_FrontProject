
  
function show_regist_info() {
    const user = JSON.parse(localStorage.getItem("user"));

    document.getElementById("show_id").innerHTML = user.id;
    document.getElementById("show_password").innerHTML = user.password;
    document.getElementById("show_name").innerHTML = user.name;
    document.getElementById("show_phone").innerHTML = user.phone;
    document.getElementById("show_email").innerHTML = user.email;
}
function login() {
    // 문서에서 id로 input data 가져오기
    const id = document.getElementById("id").value;
    const password = document.getElementById("password").value;

    // 로컬스토리지에 "user" 키로 저장된 item 가져와서 json 객체로 만들기
    const user = JSON.parse(localStorage.getItem("user"));

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
    document.getElementById("myDropdown").classList.toggle("show");
}
  
  // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        /*if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }*/
        }
    }
}