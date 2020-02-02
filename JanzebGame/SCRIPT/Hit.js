//Create the constructor for the Booster class
function Hit() {

    //private member variables for 
    var x = 1200;
    //private member variable
    var y = 700;
    var pm_keepHitting = false;
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

    //create a public property variable X (denotes y-axis)
    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'keepHitting',
        {
            //getter
            get: function () {
                //return the value of y (lower case)
                return pm_keepHitting;
            },

            //setter
            set: function (value) {
                //set the value of y (lower case)
                pm_keepHitting = value;
            }
        });
var hitcounter = 0;
    //add the draw function to the Spaceship class, accepts the parameter context
    Hit.prototype.draw = function (context) 
    {
        

        if (pm_keepHitting) {

            //the randome displacement can be used to adjust the image displayed
            //randomDisplacment = (x or y adjuster) + (random 0 to 0.9) * magnitude of displacemnt
            var randomDisplacemntx = 1 + Math.random() * 15;
            var randomDisplacemnty = -40 + Math.random() * 15;

            var randomDisplacemnta = 1 + Math.random() * 15;
            var randomDisplacemntb = -10 + Math.random() * 15;

            //save the context, this means that the other elements on the screen are in
            //suspended animation while we draw the new position
            context.save();
            //draw the circle
            context.beginPath();
            //x, y, radius, start_angle, end_angle, anti-clockwise
            context.arc(x - 6 + randomDisplacemntx, y + 25 + randomDisplacemnty, 10, 0, (Math.PI * 2));
            //close the path drawn
            context.closePath();
            //choose fill colour
            context.fillStyle = "orange";
            //fill the shape
            context.fill();
            //choose the line thickness
            context.lineWidth = 3;
            //choose the line colour
            context.strokeStyle = "yellow";
            //go ahead and draw the line
            context.stroke();

            //draw the circle
            context.beginPath();
            //x, y, radius, start_angle, end_angle, anti-clockwise
            context.arc(x - 14 + randomDisplacemnta, y + 25 + randomDisplacemntb, 10, 0, (Math.PI * 2));
            //close the path drawn
            context.closePath();
            //choose fill colour
            context.fillStyle = "orange";
            //fill the shape
            context.fill();
            //choose the line thickness
            context.lineWidth = 3;
            //choose the line colour
            context.strokeStyle = "yellow";
            //go ahead and draw the line
            context.stroke();


            //restore the state of the context to add the other object in their positions
            context.restore();

            //code required for firefox, Edge and Chrome browsers
            //so index will raw it on screen 10 times
            //increment the hit counter
            hitcounter++;
            //lets it draw the hits a few times before turning off
            if (hitcounter > 10) {
                pm_keepHitting = false;
                hitcounter = 0;
            }
           

        }
    }
}