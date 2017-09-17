const arr = [0, 10, 3, 5];
const number = document.getElementById("number");
const send = document.getElementById("send");
const showAnswer = document.querySelector("#answer");
let index;

send.addEventListener("click", function () {
  showAnswer.innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === parseInt(number.value)) {
      index = "the number is located on index " + i;
    }
  }
  if (index === undefined) {
    showAnswer.innerHTML = "not found"
  } else {
    showAnswer.innerHTML =  index;
  }
    number.value = "";
});
