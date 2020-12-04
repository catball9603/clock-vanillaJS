const form = document.querySelector(".js_form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js_greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text) {
	localStorage.setItem(USER_LS, text);
}

function askForName() {
	form.classList.add(SHOWING_CN);
	form.addEventListener("submit", handleSubmit);
}

function handleSubmit(e) {
	e.preventDefault();
	const userName = input.value;
	paintGreeting(userName);
	saveName(userName);
}
function paintGreeting(text) {
	form.classList.remove(SHOWING_CN);
	greeting.classList.add(SHOWING_CN);
	greeting.innerText = `Hello, ${text}`;
}

function loadName() {
	const currentUser = localStorage.getItem(USER_LS);
	if (currentUser === null) {
		askForName();
	} else {
		paintGreeting(currentUser);
	}
}

function init() {
	loadName();
}
init();
