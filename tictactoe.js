let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msg_container = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = false;
let btnclicks = 0;
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turn0 = false;
    enableBoxes();
    msg_container.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0==true){
            box.innerText = "O";
            turn0 = false;
        }else{
            box.innerText = "X";
            turn0 = true;
        }
        if(btnclicks<=9)btnclicks++;
        box.disabled = true;
        checkwinner();
    })
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations the winner is ${winner}`;
    msg_container.classList.remove("hide");
}

const draw = () =>{
    msg.innerText = `Draw`;
    msg_container.classList.remove("hide");
}

const checkwinner = () =>{
    for(pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != "" ){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log(`Winner${pos1val}!`);
                showWinner(pos1val);
                btnclicks = 0;
            }else{
                if(btnclicks>9){
                    btnclicks = 0;
                    draw();
                }
            }
        }
    }
}

newgame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
