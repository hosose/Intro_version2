/*
1. 위치까지 맞으면 - 초록칠
2. 위치는 안맞으면 - 노란칠
3. 그것들 다 아니면 - 회색칠
*/
var 답 = "fruit";
document.querySelector("button").addEventListener("click", function () {
  let input = document.querySelectorAll(".input");
  for (let i = 0; i < 5; i++) {
    if (input[i].value == 답[i]) {
      input[i].style.background = "green";
    } else if (답.includes(input[i].value)) {
      input[i].style.background = "yellow";
    } else {
      input[i].style.background = "lightgrey";
    }
    input[i].classList.remove("input");
  }
  var template = `<div>
<input class="input" maxlength="1">
<input class="input" maxlength="1">
<input class="input" maxlength="1">
<input class="input" maxlength="1">
<input class="input" maxlength="1">
</div>`;
  document.querySelector("body").insertAdjacentHTML("beforeend", template);
});
