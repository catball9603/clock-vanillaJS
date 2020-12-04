const todoForm = document.querySelector(".todo_form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector(".todo_List");

const TODOS_LS = "toDos"; //localStorage의 key:value

let toDos = [];

//HTML 삭제
function deleteToDo(e) {
	const btn = e.target;

	//console.dir(btn); -> 부모요소인 li를 찾음
	const li = btn.parentNode;
	todoList.removeChild(li);

	//localStorage에서 삭제
	//todo.id와 li.id의 type이 다르다. parseInt();
	const cleanToDos = toDos.filter((todo) => todo.id !== parseInt(li.id));

	//이전 toDos를 변경된 cleanToDos로 update
	//toDos의 변수 설정이 const -> let으로 변경
	toDos = cleanToDos;

	//새로운 배열을 저장함
	saveToDos();
}

function saveToDos() {
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
//localStorage에는 js data를 저장 할 수 없다. 오직type이 string만가능

const paintToDo = (text) => {
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	delBtn.innerText = "❌";
	delBtn.addEventListener("click", deleteToDo);
	const span = document.createElement("span");
	const newId = toDos.length + 1;
	span.innerText = text;

	li.appendChild(delBtn);
	li.appendChild(span);
	li.id = newId;
	todoList.appendChild(li);

	const toDoObj = {
		id: newId,
		text: text,
	};

	toDos.push(toDoObj);
	saveToDos();
};

function handleSubmit(e) {
	e.preventDefault();
	const currentValue = todoInput.value;
	paintToDo(currentValue);
	todoInput.value = "";
}

function loadTodos() {
	const loadToDos = localStorage.getItem(TODOS_LS);
	if (loadToDos !== null) {
		const parsedToDos = JSON.parse(loadToDos);
		parsedToDos.forEach((todo) => paintToDo(todo.text));
	}
}

function init() {
	loadTodos();
	todoForm.addEventListener("submit", handleSubmit);
}
init();
