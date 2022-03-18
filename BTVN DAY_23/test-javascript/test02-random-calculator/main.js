const primaryNumber = document.getElementById("primary-number")
const secondaryNumber = document.getElementById
("secondary-number")
const operator = document.getElementById("operator")
const score = document.querySelector(".score")
score.innerText = 0
const input = document.getElementById("result")
const times = document.querySelector(".time")
times.innerText = "10s"

let operators = ["+", "-", "*"]

function render() {
    primaryNumber.innerHTML = Math.floor(Math.random() * 11)
    secondaryNumber.innerHTML = Math.floor(Math.random() * 11)

    let operatorEl = operators[Math.floor(Math.random() * 3)]
    operator.innerHTML = operatorEl 
    input.value = ""
}

render()

input.addEventListener("keydown", function(event) {
    if(event.keyCode == 13) {
        let value = eval(primaryNumber.innerHTML + operator.innerHTML + secondaryNumber.innerHTML)
        if(input.value == value) {
            score.innerText = Number(score.innerText) + 1
            render()

        } else if(input.value == "") {
            alert("Ket qua khong duoc de trong")
        } else {
            alert("Ket qua chua dung")
        }
    }   
})

let count = 10;
let counter = setInterval(timer, 1000); 
 
function timer() {
  count = count - 1;
  times.innerHTML = count + "s";
  if (count <= 0) {
     alert(`Diem cua ban la ${score.innerText}`)
     clearInterval(counter);
  }
  
}

