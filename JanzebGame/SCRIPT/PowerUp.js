//Create the constructor for the Booster class
function PowerUp() {
    //private member variables for 
    var x = 1100;
    //private member variable. 
    //The random Y coordinate is deliberately set to a value wider than the screen, so it appears less often
    var y = Math.floor(Math.random() * 50) + Math.floor(Math.random() * 1500);
    //left hand side edge of rock
    var pm_powerUpXL = x - 10;
    //left hand side edge of rock
    var pm_powerUpXR = x + 10;
    //top edge of rock
    var pm_powerUpYT = y - 10;
    //top edge of rock
    var pm_powerUpYB = y + 10;
    //sets the randomly generated weapon type of the powerup
    var pm_setWeapon = 0;

    //some named constants so we can see in the program what powerups they represent 
    var Laser = 1;
    var PowerLaser = 2;
    var Ray = 3;
    var Wave = 4;
    var selectWeapon = 4;

    //we have a flashingControl we can set to control the speed of colour change of the powerup ball
    var flashingControl = 15;

    //colour variable to store the random colour associated with the random power up (above)
    var colour = "white";

    //this is a variable counter for how many times a powerups colour is displayed
    var displayColourCounter = 0;

    //create a public property variable X (denotes x-axis)
    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'X',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return x;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                x = value;
            }
        });
    //create a public property variable X (denotes y-axis)
    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'Y',
        {
            //getter
            get: function () {
                //return the value of y (lower case)
                return y;
            },

            //setter
            set: function (value) {
                //set the value of y (lower case)
                y = value;
            }
        });

/****** Properties for the powerup ball sides Left, Right, Top, Bottom *********/
    Object.defineProperty(this, 'powerUpXL',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_powerUpXL;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_powerUpXL = value;
            }
        });
    Object.defineProperty(this, 'powerUpXR',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_powerUpXR;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_powerUpXR = value;
            }
        });
    Object.defineProperty(this, 'powerUpYT',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_powerUpYT;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_powerUpYT = value;
            }
        });
    Object.defineProperty(this, 'powerUpYB',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_powerUpYB;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_powerUpYB = value;
            }
        });
    Object.defineProperty(this, 'setWeapon',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_setWeapon;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_setWeapon = value;
            }
        });

    //INTERNAL ANIMATION OF THE POWER UP BALL - the powerup ball colour and powerup weapon type are linked
    //so if the ball is a particular colour it will mean a particular weapon
    //this means that although we can animate the balls by changing the colour randomly
    //we have to be mindfull that the colour is presentative of the weapon type.
    //add the draw function to the Spaceship class, accepts the parameter context
    PowerUp.prototype.draw = function (context) {
    
    //update the variables each time its drawn, for collision detection
    pm_powerUpXL = x - 10;
    //left hand side edge of rock
    pm_powerUpXR = x + 10;
    //top edge of rock
    pm_powerUpYT = y - 10;
    //top edge of rock
    pm_powerUpYB = y + 10;

        //after drawn 15 times the new colour is picked and a new random weapon set
        if (displayColourCounter >= flashingControl) {
            //create random weapontype used to set the weapon
            pm_setWeapon = Math.floor(1 + Math.random() * selectWeapon);
            switch (pm_setWeapon) {
                case Laser: colour = "yellow"; break;
                case PowerLaser: colour = "red"; break;
                case Ray: colour = "green"; break;
                case Wave: colour = "blue"; break;
            }  
            //reset the counter on the 15th
            displayColourCounter = 0;
        }
        //reset the counter
        displayColourCounter++;
        
        //save the context, this means that the other elements on the screen are in
        //suspended animation while we draw the new position
        context.save();
        //draw the circle
        context.beginPath();

        //x, y, radius, start_angle, end_angle, anti-clockwise
        context.arc(x - 5, y + 13, 10, 0, (Math.PI * 2));
        //close the path drawn
        context.closePath();

        //choose fill colour
        context.fillStyle = colour;
        //fill the shape
        context.fill();

        //choose the line colour
        context.strokeStyle = "green";
        //go ahead and draw the line
        context.stroke();
        //restore the state of the context to add the other object in their positions
        context.restore();
            
        //controls the speed of the powerup ball across the screen - right to left
        if (x > 0) {
            x= x - 3;
        }
        //when it gets to the left of the screen the position is reset
        else if (x <= 0){
            //reset x coordinate
            x = 1100;
            //pick a randon y coordinate
            y = Math.floor(Math.random() * 1100);
        }
    }
}
