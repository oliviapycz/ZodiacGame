var userChoice = prompt("choose a Zodiac Knight between Seiya, Shiryu, Hyoga, Shun or Ikki");
var playerChoice = userChoice.toLowerCase();
var player = document.getElementsByTagName("p")[0];
var computer = document.getElementsByTagName("p")[1];
var attaque = document.getElementsByTagName("p")[2];
var winner = document.getElementsByTagName("p")[3];
var winLose = document.getElementsByTagName("p")[4];
var computerChoice = Math.random();

    if(0<computerChoice<=0.20){
      computerChoice = "seiya";
    }
    else if (0.20<computerChoice<=0.40) {
      computerChoice = "shiryu";
    }
    else if (0.40<computerChoice<=0.60) {
      computerChoice = "hyoga";
    }
    else if (0.60<computerChoice<=0.80) {
      computerChoice = "shun";
    }
    else {
      computerChoice = "ikki";
    }
    console.log("Computer: " + computerChoice);



    var compare = function(choice1,choice2){
      if(choice1 === choice2){
        winLose.innerHTML ="It's a Tie";
      }
      if (choice1 === choice2) {
        winLose.innerHTML ="It's a Tie";
      }
      else if (choice1 === "seiya") {
        if(choice2 === "shun" || choice2 === "ikki"){
          // alert ("Pegasasu Ryūsei Ken: Seiya wins!");
          attaque.innerHTML = "Pegasasu Ryūsei Ken";
          winLose.innerHTML = "WINS";
        }
        else{
          // alert ( "Seiya died in one kick");
          attaque.innerHTML = "Seiya died in one kick";
          winLose.innerHTML = "LOSES";
        }
      }

      else if (choice1 === "hyoga") {
        if(choice2 === "seiya" || choice2 === "shun"){
          // alert ( "Tou Ketsu Ken: Hyoga wins!");
          attaque.innerHTML = "Tou Ketsu Ken";
          winLose.innerHTML = "WINS";
        }
        else{
          // alert ( "Hyoga died in one kick");
          attaque.innerHTML = "hyoga died in one kick";
          winLose.innerHTML = "LOSES";
        }
      }

      else if (choice1 === "shiryu") {
        if(choice2 === "hyoga" || choice2 === "seiya"){
          // alert ( "Rozan Shō Ryū Ha: Shiryu wins!");
          attaque.innerHTML = "Rozan Shō Ryū Ha";
          winLose.innerHTML = "WINS";
        }
        else{
          // alert ("Shiryu died in one kick");
          attaque.innerHTML = "shiryu died in one kick";
          winLose.innerHTML = "LOSES";
        }
      }

      else if (choice1 === "ikki") {
        if(choice2 === "shiryu" || choice2 === "hyoga"){
          // alert ( "Hōō Genma Ken: Ikki wins!");
          attaque.innerHTML = "Hōō Genma Ken";
          winLose.innerHTML = "WINS";
        }
        else{
          // alert ( "Ikki died in one kick");
          attaque.innerHTML = "Ikki died in one kick";
          winLose.innerHTML = "LOSES";
        }
      }

      else if (choice1 === "shun") {
        if(choice2 === "ikki" || choice2 === "shiryu"){
          // alert ( "Nebyura Chēn: Shun wins!");
          attaque.innerHTML = "Nebyura Chēn";
          winLose.innerHTML = "WINS";
        }
        else{
          // alert ( "Shun died in one kick");
          attaque.innerHTML = "Shun died in one kick";
          winLose.innerHTML = "LOSES";
        }
      }
      player.innerHTML = playerChoice;
      computer.innerHTML = computerChoice;
    };



    compare(playerChoice, computerChoice);
