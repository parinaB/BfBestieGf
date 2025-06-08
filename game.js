let userScore=0;
let compScore=0;

const userscorep= document.querySelector("#UserScore"); 
const compscorep= document.querySelector("#CompScore"); 
const choices=document.querySelectorAll(".choices"); 
const outcome= document.querySelector("#message"); 

const showWin=(userWin, userchoice,compchoice) => {
    if(userWin){
        userScore++; 
        userscorep.innerText=userScore; 
        outcome.innerText=`Lucky bitch ! ${userchoice} beats ${compchoice}`; 
        outcome.style.backgroundColor= "Green"; 
        outcome.style.color="white"; 
       

    }
    else{
        compScore++; 
        compscorep.innerText=compScore; 
       outcome.innerText=`Suck it ! ${compchoice} beats ${userchoice} `; 
        outcome.style.backgroundColor= "yellow"; 
        outcome.style.color="red";  
        
    }
}


const gencompChoice=()=>{
    const options =["GF", "BF", "Bestie"]; 
    const randIdx=Math.floor(Math.random()*3); 
    const comp= options[randIdx];

    options.forEach(opt => {
        const elem = document.getElementById(opt);
        elem.style.border = "none";
    }); 

    const cc= document.getElementById(comp); 

    cc.style.border="5px solid blue"





    return comp; 

}; 



const playGame=(userchoice)=>{
    
    console.log("User choice = ", userchoice); 
    const compchoice= gencompChoice(); 
    console.log("Comp choice = ", compchoice); 


    if(userchoice === compchoice){
        // Draw 
        outcome.innerText ="DRAW"
        outcome.style.backgroundColor= "blue"; 
        outcome.style.color="white"; 
        result="draw"
    }

    else{
        let userWin=true; 
        if(userchoice ==="GF"){
            userWin= compchoice==="BF"?true : false; 
        }
        else if (userchoice ==="BF"){
            userWin=compchoice ==="Bestie"?true: false; 
        }
        else if (userchoice ==="Bestie"){
            userWin = compchoice ==="GF"? true:false;
        }
        showWin(userWin, userchoice,compchoice); 

        
    }
    


}; 


["GF", "BF", "Bestie"].forEach(id=>{
    const choice=document.getElementById(id);
    const userchoice= id; 

    choice.addEventListener("click", ()=>{
       
        playGame(userchoice); 
    });
});
