const root = document.querySelector(".root");

const openingDiv = document.querySelector(".intro");

const introMessage = `
안녕하세요!
\n미래의 개발자 김세호입니다!
\n모두 행복한 날 보내세요!\n
`;

const timeInterval = 80;

let index = 0;

let typing = () => {
  if (introMessage[index] === "\n") {
    openingDiv.innerHTML += "<br/>";
  } else {
    openingDiv.innerHTML += introMessage[index];
  }

  index += 1;

  if (index > introMessage.length) {
    return;
  }
};

let typingTimer = setInterval(typing, timeInterval);
setTimeout(() => {
  clearInterval(typingTimer);
}, timeInterval * introMessage.length); //이건 무슨 코드인지 모르겠네요
