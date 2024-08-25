let random=parseInt(Math.random()*100+1)
console.log(random)
const prevguesses=document.querySelector(".prevguess")
const guess=document.querySelector(".guess")
console.log(guess.innerHTML)
const button=document.querySelector(".btn")
 



const total=document.querySelector(".total")
const remaining=document.querySelector(".remaining")
// console.log(remaining.innerHTML)
const submit=document.querySelector("button")
// console.log(document.querySelector(".input"))
const input=document.querySelector(".input")
const message=document.querySelector(".message")


let playguess=true;
totalcnt=0;
if(playguess==true){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess1=input.value;
        console.log(guess); 
        validateGuess(guess1)    
    })
}
 
function validateGuess(guess1){
    if(guess1<0 || guess1>100 ){
        alert("Number should be in between 1 and 100 only")
    }
    if(isNaN(guess1) ){
        alert("please enter a valid number") 
    }
    else if(guess1>100){
        alert("You have to enter a number below 100")
    }
     else{
        if(totalcnt>=9){
            displayGuess(guess1)
            endGame()
            displayMessage(`Game Over . The Actual Number is ${random}`)
        }
        else{
            displayGuess(guess1)
            checkGuess(guess1)

        }
     }
    
}
function checkGuess(guess1){
    if(guess1==random){
        displayMessage("WON!!")
        endGame()
    }
    else{
        if(guess1>random){
            displayMessage("Try for a smaller number ")
        }
        else if(guess1<random){
            displayMessage("Try for a larger number ")
        }
       
    }
}
function displayGuess(guess1){
    input.value=""
    guess.innerText+= `${guess1 }  ,`
    totalcnt++;
    remaining.innerHTML=10-totalcnt;
    if(remaining.innerHTML<=0){
        submit.setAttribute("disabled","")
    }

}
function displayMessage(message1){
    message.innerHTML=message1
}
function endGame(){
     input.value=""
     input.setAttribute("disabled","")
     button.style.display="block"
     playguess=false;
     submit.setAttribute("disabled","")
     newGame()
}
function newGame(){
  button.addEventListener("click",()=>{
    random=parseInt(Math.random()*100+1)
    console.log(random)
    submit.removeAttribute('disabled')
    input.removeAttribute("disabled")
    guess.innerText=""
    totalcnt=0;
    remaining.innerHTML=10-totalcnt
    message.innerHTML=""
    button.style.display="none"
    playguess=true

  })
}