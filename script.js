let scriptNumber = math.floor(math.random()*10+1);
function checkguess{
    let guess = Number(document.getelementbyId ("guess").value);
    let message =document.getelementbyId("message");
    if (guess<1|| guess > 10 || guess===0);
    message.textcontent ="enter a number between 1 and 10";
}
else if(guess < secretNumber){
message.textcontent = "too low ! try again";
}
else if(guess > secretNumber){
    message.textcontent ="too high! try again";

}
else{
    message.textcontent ="congratulation! you won";
    
}