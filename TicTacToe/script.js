let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true; //playerO , PlayerX

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const resetGame = () => {
     turnO=true;
     enableBoxes();
     msgContainer.classList.add("hide");
}
const newGame = () => {
     turnO=true;
     enableBoxes();
     msgContainer.classList.add("hide");
     resetBtn.disabled = false;
}

newGameBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);

boxes.forEach((box) =>{
    box.addEventListener("click",() => {
    if(turnO){
        box.innerText = "O";
        turnO = false;
    }
    else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled=true;
    checkWinner();
});
});

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    resetBtn.disabled=true;
}
const checkWinner = () => {
    for(let patten of winPatterns){
        let pos1Val = boxes[patten[0]].innerText;
        let pos2Val = boxes[patten[1]].innerText;
        let pos3Val = boxes[patten[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}