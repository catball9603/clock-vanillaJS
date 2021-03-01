const clockContainer = document.querySelector('.js-clock');
const clockTitle = clockContainer.querySelector('h1');

function getTime() {
  const date = new Date();
  const mimutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${mimutes < 10 ? `0${mimutes}` : mimutes}`;
}
//: ${seconds < 10 ? `0${seconds}` : seconds}

//정의 된 함수를 실행
function init() {
  getTime(); //시간을 먼저 받고
  setInterval(getTime, 1000); // 1초 단위로 update되게 해준다.
}

init();
