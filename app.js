const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const link = document.querySelector("a");
function onLoginSubmit(event) {
    event.preventDefault();
    /*preventDefault: default로 이루어지는 행동을 모두 멈춤
    -> 페이지가 새로고침되는 것을 막아줌 */
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, username);
    painGreetings();
    console.log(username);
}

function painGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

function handleLinkClick(event) {
    event.preventDefault();
    console.log(event);
    alert("Clicked!");
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
if (savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    //show the greeting
    painGreetings();
}


loginForm.addEventListener("submit", onLoginSubmit);
/*submit: enter or click할 때 작동 */
link.addEventListener("click", handleLinkClick);


