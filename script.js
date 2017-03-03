var playerChoice = prompt("choose a Zodiac Knight between Seiya, Shiryu, Hyoga, Shun or Ikki");
var computerChoice = Math.random();
console.log(computerChoice);

if(0<computerChoice<=0.20){
  computerChoice = "Seiya";
}
else if (0.20<computerChoice<=0.40) {
  computerChoice = "Shiryu";
}
else if (0.40<computerChoice<=0.60) {
  computerChoice = "Hyoga";
}
else if (0.60<computerChoice<=0.80) {
  computerChoice = "Shun";
}
else {
  computerChoice = "Ikki";
} console.log("Computer: " + computerChoice);

var compare = function(choice1,choice2){
  if(choice1 === choice2){
    return "Draw";
  }
  if (choice1 === choice2) {
    return "Draw",
  }
  else if (choice1 === "Seiya") {
    if(choice2 === "Shun" || choice2 === "Ikki"){
      return "Pegasasu Ryūsei Ken: Seiya wins!"
    }
    else{
      return "Seiya died in one kick"
    }
  }

  else if (choice1 === "Hyoga") {
    if(choice2 === "Seiya" || choice2 === "Shun"){
      return "Tou Ketsu Ken: Hyoga wins!"
    }
    else{
      return "Hyoga died in one kick"
    }
  }

  else if (choice1 === "Shiryu") {
    if(choice2 === "Hyoga" || choice2 === "Seiya"){
      return "Rozan Shō Ryū Ha: Shiryu wins!"
    }
    else{
      return "Shiryu died in one kick"
    }
  }

  else if (choice1 === "Ikki") {
    if(choice2 === "Shiryu" || choice2 === "Hyoga"){
      return "Hōō Genma Ken: Ikki wins!"
    }
    else{
      return "Ikki died in one kick"
    }
  }

  else if (choice1 === "Shun") {
    if(choice2 === "Ikki" || choice2 === "Shiryu"){
      return "Nebyura Chēn: Shun wins!"
    }
    else{
      return "Shun died in one kick"
    }
  }
};

compare(userChoice, computerChoice);
