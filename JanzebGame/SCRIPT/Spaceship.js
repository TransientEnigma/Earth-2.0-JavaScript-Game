//Create the constructor for the Spaceship class
function Spaceship() {
    //private member variable for x
    var x = 0.0000;
    //private member variable for y
    var y = 0.0000; 
    //private member variables forvelocity
    var vx = 0.009; 
    //private member variables forvelocity
    var vy = 0.009;

    //the flash it the line on the screen, the x and y have to be incremented in steps to draw it each time and animate it
    var flashXstep = 0;
    var flashYstep = 0;
    //variable to store the counter
    var displayColourCounter = 0;
    //
    var flashXstepDirection = 1;
    var flashYstepDirection = 1.5;

    //var stepCounter = 0;
    var pm_spaceshipXL = x;
    var pm_spaceshipXR = x + 60;
    var pm_spaceshipYT = y;
    var pm_spaceshipYB = y + 50;
    var pm_repeat;


/******************** Ship X and Y Coordinates ***********************/
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
/******************** Ship velocity X (vx) and velocity Y (vy)  ***********************/
    //create a public property variable VX and VY
    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'VX',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return vx;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                vx = value;
            }
        });

    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'VY',
        {
            //getter
            get: function () {
                //return the value of y (lower case)
                return vy;
            },

            //setter
            set: function (value) {
                //set the value of y (lower case)
                vy = value;
            }
        });
/******************** Ship vector magnitude (vectorMagnitude) and vector direction (VectorDirection) ***********************/
    //create a public property variable VectorMagnitude and VectorDirection
    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'VectorMagnitude',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return vectorMagnitude;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                vectorMagnitude = value;
            }
        });

    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'VectorDirection',
        {
            //getter
            get: function () {
                //return the value of y (lower case)
                return vectorDirection;
            },

            //setter
            set: function (value) {
                //set the value of y (lower case)
                vectorDirection = value;
            }
        });

/****** Properties for the spaceship sides Left, Right, Top, Bottom *********/
    Object.defineProperty(this, 'spaceshipXL',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_spaceshipXL;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_spaceshipXL = value;
            }
        });
    Object.defineProperty(this, 'spaceshipXR',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_spaceshipXR;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_spaceshipXR = value;
            }
        });
    Object.defineProperty(this, 'spaceshipYT',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_spaceshipYT;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_spaceshipYT = value;
            }
        });
    Object.defineProperty(this, 'spaceshipYB',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_spaceshipYB;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_spaceshipYB = value;
            }
        });
    //public property for repeat
    Object.defineProperty(this, 'repeat',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_repeat;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_repeat = value;
            }
        });
    //store how many times the drawing is repeated
    var pm_repeat = 0;
    //counnt how many times not to draw it
    var counter = 0;
    //add the draw function to the Spaceship class, accepts the parameter context
    Spaceship.prototype.draw = function (context) {

        counter++;
        //the counter incremented and reset to zero is used to draw the image each time counter is greater than one
        //This makes it flash. This is over ridden by the pm_repeat, after e.g. 100 alternating times draw/not 
        //draw the ship is permanently drawn
        if (counter > 1 || pm_repeat > 100) {

            // each time its drawn we need to update the variables, for collision detection
            pm_spaceshipXL = x;
            pm_spaceshipXR = x + 60;
            pm_spaceshipYT = y;
            pm_spaceshipYB = y + 50;

            //draw spaceship body and colour it 
            DrawShipBody(context, x, y, "silver", "grey");
            //draw spaceship window and colour it #was silver, black
            DrawWindow(context, x, y, "black", "black");
            //Animate the screen flash
            AnimateScreenFlash();

            function AnimateScreenFlash() {

                //this if statement will reposition every 15 increments of counter
                if (displayColourCounter >= 10) {
                    //step the x and y of the flash image to make it move
                    flashXstep = flashXstep + flashXstepDirection;
                    flashYstep = flashYstep + flashYstepDirection;
                    //if the steps in y reach the specified extremes
                    //reverse the direction of the steps
                    if ((flashYstep >= 15) || (flashYstep <= 1)) {
                        flashXstepDirection = (-1) * flashXstepDirection;
                        flashYstepDirection = (-1) * flashYstepDirection;
                    }
                    //reset the counter
                    displayColourCounter = 0;
                }
                // makes a white line across the window, incrementally like a flash
                ScreenFlash(context, x + flashXstep, y + flashYstep, "white", "white");

                //increment the counter
                displayColourCounter++
            }

            function DrawShipBody(context, xPos, yPos, fillColour, strokeColour) {
                // save the context so its state is unchanged while we draw
                context.save();
                //start the line(path)
                context.beginPath();
                //set the start coordinates
                context.moveTo(xPos + 10, yPos);
                //draw the the shape
                context.lineTo(xPos + 30, yPos + 0);
                context.lineTo(xPos + 40, yPos + 10);
                context.lineTo(xPos + 60, yPos + 20);

                context.lineTo(xPos + 60, yPos + 30);
                context.lineTo(xPos + 40, yPos + 40);
                context.lineTo(xPos + 30, yPos + 50);
                context.lineTo(xPos + 10, yPos + 50);

                context.lineTo(xPos + 10, yPos + 40);
                context.lineTo(xPos + 0, yPos + 30);
                context.lineTo(xPos + 10, yPos + 30);
                context.lineTo(xPos + 10, yPos + 20);
                context.lineTo(xPos + 0, yPos + 20);
                context.lineTo(xPos + 10, yPos + 10);
                context.lineTo(xPos + 10, yPos + 10);

                //close the path drawn
                context.closePath();
                //choose fill colour
                context.fillStyle = fillColour;
                //fill the shape
                context.fill();
                //choose the line thickness
                context.lineWidth = 3;
                //choose the line colour
                context.strokeStyle = strokeColour;
                //go ahead and draw the line
                context.stroke();
                //restore the context so the drawing can be added
                context.restore();
            }

            function DrawWindow(context, xPos, yPos, fillColour, strokeColour) {
                // save the context so its state is unchanged while we draw
                context.save();
                //lets draw the spaceship window
                //start the line(path)
                context.beginPath();
                //set the start coordinates
                context.moveTo(xPos + 20, yPos + 10);
                //draw the the shape
                context.lineTo(xPos + 30, yPos + 10);
                context.lineTo(xPos + 40, yPos + 20);
                context.lineTo(xPos + 40, yPos + 30);
                context.lineTo(xPos + 30, yPos + 40);
                context.lineTo(xPos + 20, yPos + 40);
                context.lineTo(xPos + 20, yPos + 10);

                //close the path drawn
                context.closePath();
                //choose fill colour
                context.fillStyle = fillColour;
                //fill the shape
                context.fill();
                //choose the line thickness
                context.lineWidth = 3;
                //choose the line colour
                context.strokeStyle = strokeColour;
                //go ahead and draw the line
                context.stroke();
                //restore the context so the drawing can be added
                context.restore();
            }

            // This function works by using a x and y steps to step the drawing of the flash on the window screen
            // We have a xStart, and yStart positions that are incremented by 1 (flashXstep) and 1.5(flashYstep each time the object is 
            //drawn on screen, but each time the 
            function ScreenFlash(context, xStart, yStart, fillColour, strokeColour) {

                //slow the animation
                displayColourCounter++;

                // save the context so its state is unchanged while we draw
                context.save();
                //lets draw the spaceship window
                //start the line(path)
                context.beginPath();
                //set the start coordinates
                context.moveTo(xStart + 22, yStart + 12);
                //draw the the shape
                context.lineTo(xStart + 23, yStart + 11);
                context.lineTo(xStart + 28, yStart + 11);
                context.lineTo(xStart + 29, yStart + 12);
                context.lineTo(xStart + 29, yStart + 13);
                context.lineTo(xStart + 28, yStart + 14);
                context.lineTo(xStart + 23, yStart + 14);
                context.lineTo(xStart + 22, yStart + 13);

                //close the path drawn
                context.closePath();
                //choose fill colour
                context.fillStyle = fillColour;
                //fill the shape
                context.fill();

                //choose the line colour
                context.strokeStyle = strokeColour;
                //go ahead and draw the line
                context.stroke();
                //restore the context so the drawing can be added
                context.restore();

                //incrent to make it flash until repeat is 20
                pm_repeat++;
                //after every 20 times reset the counter
                counter=0;
            }
        }
    }

        //create the public move method by adding it to the Spaceship class
    Spaceship.prototype.moveForward = function (Acceleration)
    {
        /***** Forward  *****/
            if (x < 920) {
                //increasing/decreasing vx
                x = x + (vx + Acceleration.af);
            }
    }

    //create the public move method by adding it to the Spaceship class
    Spaceship.prototype.moveDownward = function (Acceleration)
    {
        /***** Downward  *****/
        if (y <= 550) {
            y += vy;
            Acceleration.StopForwardAcceleration();
        }
    }

        //create the public move method by adding it to the Spaceship class
    Spaceship.prototype.moveBackward = function (Acceleration)
    {
            /***** Backward  *****/
            if (x > 0) {
                x -= vx;
                Acceleration.StopForwardAcceleration();
        }

    }

    //create the public move method by adding it to the Spaceship class
    Spaceship.prototype.moveUpward = function (Acceleration) {
        /***** Upward  *****/
        if (y > 0) {
            y -= vy;
            Acceleration.StopForwardAcceleration();
        }
    }
}
