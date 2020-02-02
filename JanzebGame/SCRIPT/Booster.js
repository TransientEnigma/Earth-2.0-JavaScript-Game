//Create the constructor for the Booster class
function Booster() {

    //private member variables for 
    var x = 0;
    //private member variable
    var y = 0;
    //private member variable for that decides when the booster is coming on
    var pm_boosterOn = false;

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
    //create a public property variable Y 
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
    //create a public property variable _boosterOn (to store booster value)
    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'boosterOn',
        {
            //getter
            get: function () {
                //return the value of boosterOn 
                return pm_boosterOn;
            },

            //setter
            set: function (Value) {
                //set the value of boosterOn
                pm_boosterOn = Value;
            }
        });


    //variable to store the counted times drawing attempted
    var counter = 0;
    //add the draw function to the Spaceship class, accepts the parameter context
    Booster.prototype.draw = function (context) {

        if (pm_boosterOn) {
            //this will optimise the game for speed and smooth running (few times drawn = less processing to more speed)
            counter++;
            if (counter > 0) {
                //save the context, this means that the other elements on the screen are in
                //suspended animation while we draw the new position
                context.save();
                //draw the circle
                context.beginPath();
                //x, y, radius, start_angle, end_angle, anti-clockwise
                context.arc(x - 6, y + 25, 6, 0, (Math.PI * 2));
                //close the path drawn
                context.closePath();
                //choose fill colour
                context.fillStyle = "orange";
                //fill the shape
                context.fill();
                //choose the line colour
                context.strokeStyle = "yellow";
                //go ahead and draw the line
                context.stroke();

                //draw the circle
                context.beginPath();
                //x, y, radius, start_angle, end_angle, anti-clockwise
                context.arc(x - 14, y + 25, 4, 0, (Math.PI * 2));
                //close the path drawn
                context.closePath();
                //choose fill colour
                context.fillStyle = "orange";
                //fill the shape
                context.fill();
                //choose the line colour
                context.strokeStyle = "yellow";
                //go ahead and draw the line
                context.stroke();

                //restore the state of the context to add the other object in their positions
                context.restore();

                //reset the counter so it only draws 1/500 times
                counter = 0;
            }
        }
    }

}
