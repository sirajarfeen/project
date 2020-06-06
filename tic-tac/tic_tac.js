const readLine =require("readLine");

const r1=readLine.createInterface({
    input:ProcessingInstruction.stdin,
    output:ProcessingInstruction.stdout
});
let player='X';
let tic_tac=new Array(9).fill(' '); 

const defaultPlayer=()=> {
    r1.question("Default player is X, Do ypu want to change it,y or n",function(defaultOrChoose){
        let choice = defaultOrChoose.toLowerCase();
        if(choice==='y'){
            setPlayer();
        }else if(choice==='n'){
            console.log("Starting player is X");
            printBoard();
            playtic_tac();
        }
    })
}
 const setPlayer=()=>{
     r1.question("Default player is X,Do you want to change it,enter O?",function(whichplayer){
         changePlayer(whichPlayer);
     });
 }
 const changePlayer=()=>{
     let mov=playerChange.toUpperCase();
     if (mov==='O'|| mov==='X'){
         console.log(`Starting player is ${mov}`);
         player=mov;

     }
 }