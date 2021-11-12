// window.prompt prompts you to enter your name in a text box on top of a window.
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// Establish an array of enemy robots instead of doing it one by one
var enemyNames = ['Roborto', 'Amy Android', 'Robo Trumble'];
var enemyHealth = 50;
var enemyAttack = 12;

// prints names of enemies
console.log(enemyNames);
// Prints the total number of elements in the array 
console.log(enemyNames.length);
// prints only the first element of the array using the index number 
console.log(enemyNames[0]);
// prints undefined because the the index starts with 0
console.log(enemyNames[3]);

// Function expression that initiates battle. Placeholder in function is enemyName
var fight = function(enemyName) {
  // While (conditon) to determine if the player and enemy have at lease >0 health
  while (playerHealth > 0 && enemyHealth > 0) {
    // If While is true, window.prompt will then prompt fight
    var promptFight = window.prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // estblish with if statement the acceptable answers to the window.prompt for truthy values for skip
    if (promptFight === "skip" || promptFight === "SKIP") {
      // window.confirm asks a yes or no quesiton. notice how you can declare a variable inside the if statement, then use it in the next step to test truthy or falsy
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // use the prior variable declared to test truthy or falsy. If true, then message 
      if (confirmSkip) {
        window.alert(playerName + ' has decided to skip this fight. Goodbye!');
        // Operator to establish consequences for deciding to skip could also use playerMoney -=10 as shorthand assignment
        playerMoney = playerMoney - 10;
        // prints the current amount of money after skipping
        console.log("playerMoney", playerMoney);
        // break ends this loop
        break;
      }
    }

    // There is no longer a need to test for a window.promp of "fight" it's defaulted. If you didn't skip, then you fight.
    // since window.prompt was not "skip", then the function proceeds to fight
    enemyHealth = enemyHealth - playerAttack;
    console.log(
      playerName + ' attacked ' + enemyName + '. ' + enemyName + ' now has ' + enemyHealth + ' health remaining.'
    );

    // after each attack, check if statement to see if enemey has died
    if (enemyHealth <= 0) {
      window.alert(enemyName + ' has died!');

      //If true, get money if you player killed
      playerMoney = playerMoney + 20;
      // Break to end 
      break;
      // use of else here is to determine if they have not died, then display a message of how much life is left
    } else {
      window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
    }

    // Enemy turn to attack
    playerHealth = playerHealth - enemyAttack;
    console.log(
      enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
    );

    // Check if player can proceed to fight
    if (playerHealth <= 0) {
      window.alert(playerName + ' has died!');
      // If they have died, end the loop
      break;
      // if they still have life, display how much 
    } else {
      window.alert(playerName + ' still has ' + playerHealth + ' health left.');
    }
  }
};

// for loop, to move onto the next robot to fight
for (var i = 0; i < enemyNames.length; i++) {
  // Move on to the next robot only if player is still alive
  if (playerHealth > 0) {
    // If true, window.alert, welcome to round increment round after the prior using the parent iterator 
    window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));

    //create a variable / pulls the name from the array which is incremented in the for loop 
    var pickedEnemyName = enemyNames[i];

    // 
    enemyHealth = 50;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // calls the fight using the variable as the argument which is looped in a for loo 
    fight(pickedEnemyName);
  }
  // if all else fails, int this loop, and player health is falsy > 0. you die
  else {
    window.alert('You have lost your robot in battle! Game Over!');
    break;
  }
}
