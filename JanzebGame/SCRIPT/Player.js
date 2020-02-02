//Create the constructor for the Booster class
function Player() {

    var pm_playerScore = 0;
    var pm_playerLives = 3;
    //create a public property variable X (denotes x-axis)
    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'playerScore',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_playerScore;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_playerScore = value;
            }
        });
    //create a public property variable X (denotes y-axis)
    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'playerLives',
        {
            //getter
            get: function () {
                //return the value of y (lower case)
                return pm_playerLives;
            },

            //setter
            set: function (value) {
                //set the value of y (lower case)
                pm_playerLives = value;
            }
        });
    //functions that divides down the score
    Player.prototype.CalculatedScore = function () {
        if (pm_playerScore > 0) {
        //returns the integer value of calculation of score divided by 100
        return Math.floor(pm_playerScore/100);
        }
        //if the pm_playerScore is 0 then dont calculate
        return pm_playerScore;
    }

    //function that always returns the top score
    Player.prototype.CalculateTopScore = function (TopScore) {
        //check if the score is greater than topscore
        if (Math.floor(pm_playerScore/100) > TopScore) {
            //sets the new top score
            TopScore = Math.floor(pm_playerScore/100);
            //return the new top score
            return TopScore;
        }
        //if there is no new top score return the original top score
        return TopScore;
  
    }

}
