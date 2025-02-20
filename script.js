let targetNumber=Math.floor(Math.random()*10)+1;
let attempts=0;

function checkGuess(){
    let guess=document.getElementById('guess').value;
    let feedback=document.getElementById('feedback');
    let attemptDisplay=document.getElementById('attempts');

    if(guess === ''){
        feedback.textContent="Please Enter A Number";
        feedback.style.color='orange';
        return;
    }
    guess=Number(guess);
    if(guess <1 || guess >10){
        feedback.textContent="Please Enter A Number Between 1 and 10";
        feedback.style.color='orange';
        return;
    }
    attempts++;

    if(guess < targetNumber){
        feedback.textContent="Too Low!Try Again😞";
        feedback.style.color='red';
    }
    else if(guess>targetNumber){
        feedback.textContent='Too High!Try Again😞';
        feedback.style.color='red';
    }
    else{
        feedback.textContent='Congratulation!You Won🎊🎉';
        feedback.style.color='green';
        attemptDisplay.textContent=`It took You ${attempts} Attempts`;
        document.querySelector('button').disabled=true;
    }

   if (guess !== targetNumber) {
    attemptDisplay.textContent = `Attempts: ${attempts}`;
    }
}





















//     if(isNaN(guess)|| guess < 1 || guess > 10 ){
//         message.textContent='Please enter a number between 1 and 10.';
//         return;
//     }
//     attempts++;
//     if(guess === targetNumber){
//         message.textContent='Congratulations!You win🎉🎉'
//         message.classList.add('win');
//         attempts.textContent=`It took you ${attempts} attempts.`;
//         hint.textContent='';
//     }
//     else
//     {
//         message.textContent=guess<targetNumber?'Too Low!Try Again':'Too High!Try Again.';
//         message.classList.add('lose');
//         hint.textContent=guess<targetNumber?'Hint:Try a higher Number':'Hint:Try a lower number.';
//         attempts.textContent=`Attempts:${attempts}`;
//     }
  
// }