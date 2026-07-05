function checkanswer(answer){
    let  result = document.getElementById("result");
    if(answer ==="correct"){
        result.innerHTML = "✔️  Correct! Well Done.";
        result.style.color = "green";
    }
    else{
        result.innerHTML ="❌  Incorrect. Try again.";
        result.style.color = "red";
    }
}