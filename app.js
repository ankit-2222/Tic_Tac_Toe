let boxes = document.querySelectorAll(".cellBtn");
let resetButton = document.querySelector(".resetBtn");
let newButton = document.querySelector(".newBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msgWin");

let turn1 = true;

let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", (event) => {
        count++;
        if (turn1) {
            box.innerText = "O";
            turn1 = false;
        } else  {
            box.innerText = "X";
            turn1 = true;
        }
        
        checkWinner();
         
    });
});

const showMsg = () => {
    msg.innerText = "It is a draw.!!!☹️☹️☹️";
    msgContainer.classList.remove("hide");
}

const resetGame = () => {
    turn1 = true;
    enabledBtn();
    msgContainer.classList.add("hide");
    count = 0;
};

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Value = boxes[pattern[0]].innerText;
        let pos2Value = boxes[pattern[1]].innerText;
        let pos3Value = boxes[pattern[2]].innerText;
        
        if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
            if(pos1Value == pos2Value && pos2Value ==pos3Value) {
                console.log("Winner is " + pos1Value);
                showWinner(pos1Value);
            } else{
                if(count == 9){
                    showMsg();
                    count = 0;
                }
            }
        }
    }
};

const showWinner = (Winner) => {
    msg.innerText = `Congratulation🎉🎉🎉, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disabledBtn();
};

const disabledBtn = () => {
    for(box of boxes) {
        box.disabled = true;
    }
};

const enabledBtn = () => {
    for(box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

newButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);