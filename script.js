// // // var choices = ["seiya","shiryu","hyoga","shun","ikki"];
// // var humanBtn = document.querySelectorAll(".btn");
// // // var resultat = document.querySelector(".resultat");
// //
// // for (var i = 0; i < humanBtn.length; i++) {
// //   humanBtn[i].addEventListener("click", function(){
// //     var humanChoice = this.classList[0];
// //     var robotChoice = choices[Math.random()];
// //   })
// // }
//
var userChoice = prompt("choose a Zodiac Knight between Seiya, Shiryu, Hyoga, Shun or Ikki");
var playerChoice = userChoice.toLowerCase();

var player = document.getElementsByTagName("p")[0];
var computer = document.getElementsByTagName("p")[1];
var attaque = document.getElementsByTagName("p")[2];
var winner = document.getElementsByTagName("p")[3];
var winLose = document.getElementsByTagName("p")[4];

var computerChoice = Math.random();



// function functionSeiya(){
//   var images = document.createElement("img");
//   images.src = "images/seiya.png";
//   document.getElementById("choice").appendChild(images);
// }
// function functionHyoga(){
//   player.innerHTML = "hyoga";
// }
// function functionShiryu(){
//   player.innerHTML = "shiryu";
// }
// function functionIkki(){
//   player.innerHTML = "ikki";
// }
// function functionShun(){
//   player.innerHTML = "shun";
// }


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


    var compare = function(playerChoice,computerChoice){

      if (playerChoice === computerChoice) {
        winLose.innerHTML ="It's a Tie";
      }
      else if (playerChoice === "seiya") {
        if(computerChoice === "shun" || computerChoice === "ikki"){
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

      else if (playerChoice === "hyoga") {
        if(computerChoice === "seiya" || computerChoice === "shun"){
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

      else if (playerChoice === "shiryu") {
        if(computerChoice === "hyoga" || computerChoice === "seiya"){
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

      else if (playerChoice === "ikki") {
        if(computerChoice === "shiryu" || computerChoice === "hyoga"){
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

      else if (playerChoice === "shun") {
        if(computerChoice === "ikki" || computerChoice === "shiryu"){
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

    };
    computer.innerHTML = computerChoice;
    player.innerHTML = playerChoice;
    compare(playerChoice, computerChoice);
