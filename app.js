let btns=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let msg_cont=document.querySelector(".msg-container");
let para=document.querySelector("#msg");


let count=0;
let turnO= true; //Player O
let turnX=false; //Player X
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
];
btns.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("clicked");
        count++;
      if(turnO==true){
        box.innerText="X";
        turnO=false;
      }
      else{
        box.innerText="O";
        turnO=true;
      }
      box.disabled=true;
      CheckWinner();
    })

});

const CheckWinner=()=>{
    for(let Pattern of winPattern){
      let pos1=btns[Pattern[0]].innerText;
      let pos2=btns[Pattern[1]].innerText;
      let pos3=btns[Pattern[2]].innerText;
      
      if(pos1!="" && pos2!=""&& pos3!=""){
        if(pos1===pos2&&pos2===pos3){
          console.log("Winner",pos1);
          showWinner(pos1);
        }
        else if(pos1!==pos2&&pos2!==pos3&&count==9){
          console.log("Draw");
          draw();
        }
      }
      
     
    }
};
const disable=()=>{
  for(let box of btns){
    box.disabled=true;
  }
}

const showWinner = (winner)=>{
  msg_cont.innerText=`Congratulations ,Winner is ${winner}`;
  msg_cont.classList.remove("hide");
  disable();
}

const draw =()=>{
  msg_cont.innerText=`Draw game start new game`;
  msg_cont.classList.remove("hide");

}

btns.forEach((box)=>{
resetbtn.addEventListener("click",()=>{
  count=0;
    box.innerText="";
    box.disabled=false;
    msg_cont.classList.add("hide");
})
});
