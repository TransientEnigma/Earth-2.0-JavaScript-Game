//Create the constructor for the Spaceship class
function SpaceRock() {
    //private member variables
    var x = 1100; 
    //set the rock to launch from a random position
    //space rock appears between 50 and 450 in y direction
    var y = 50 + Math.floor(Math.random() * 400);
    //var vx = 0.0; 
    var t = 0.0;
    //left hand side edge of rock
    var pm_spaceRockXL = x - 20;
    //left hand side edge of rock
    var pm_spaceRockXR = x + 20;
    //top edge of rock
    var pm_spaceRockYT = y - 20;
    //top edge of rock
    var pm_spaceRockYB = y + 20;
    //variable to store the number of hits to a rock
    var pm_rockHits = 0;
    //declare variable for gravity
    var pm_gravity;

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
    Object.defineProperty(this, 'T',
        {
            //getter
            get: function () {
                //return the value of y (lower case)
                return t;
            },

            //setter
            set: function (value) {
                //set the value of y (lower case)
                t = value;
            }
        });
/****** Properties for the spaceRock sides Left, Right, Top, Bottom *********/
    Object.defineProperty(this, 'spaceRockXL',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_spaceRockXL;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_spaceRockXL = value;
            }
        });
    Object.defineProperty(this, 'spaceRockXR',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_spaceRockXR;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_spaceRockXR = value;
            }
        });
    Object.defineProperty(this, 'spaceRockYT',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_spaceRockYT;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_spaceRocYT = value;
            }
        });
    Object.defineProperty(this, 'spaceRockYB',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_spaceRockYB;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_spaceRockXB = value;
            }
        });
    //private member variable to store the number of times the rock is hit
    Object.defineProperty(this, 'rockHits',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_rockHits;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_rockHits = value;
            }
        });
   
    //the rock recieves hits passed to it based on the power of the weapon 
    SpaceRock.prototype.PassHits = function (Hits) {
        //add to the rockhits
        pm_rockHits = pm_rockHits + Hits;
    }
    //this function is used to reset the hits
    SpaceRock.prototype.ResetHits = function () {
        //reset rock hits to zero
        pm_rockHits = 0;
    }

   
    //add the draw function to the Spaceship class, accepts the parameter context
    SpaceRock.prototype.draw = function (context) 
    {
        // each time its drawn we need to update the variables, for collision detection
        //left hand side edge of rock
        pm_spaceRockXL = x - 20;
        //left hand side edge of rock
        pm_spaceRockXR = x + 20;
        //top edge of rock
        pm_spaceRockYT = y - 20;
        //top edge of rock
        pm_spaceRockYB = y + 20;
        //save the context, this means that the other elements on the screen are in
        //suspended animation while we draw the new position
        context.save();
        //draw the circle
        context.beginPath();
        //x, y, radius, start_angle, end_angle, anti-clockwise
        context.arc(x, y, 20, 0, (Math.PI * 2));
        //close the path drawn
        context.closePath();
        //choose fill colour
        context.fillStyle = "#857959";
        //fill the shape
        context.fill();
        //choose the line colour
        context.strokeStyle = "#736b54";
        //go ahead and draw the line
        context.stroke();

        /*******Draw a crator1 within the rock*********/
        //draw the circle
        context.beginPath();
        //x, y, radius, start_angle, end_angle, anti-clockwise
        context.arc(x - 12, y -2, 5, 0, (Math.PI * 2));
        //close the path drawn
        context.closePath();
        //choose fill colour
        context.fillStyle = "#857959";
        //fill the shape
        context.fill();
        //choose the line thickness
        context.lineWidth = 5;
        //choose the line colour
        context.strokeStyle = "#70674a";
        //go ahead and draw the line
        context.stroke();
        //draw the circle
        context.beginPath();
        //x, y, radius, start_angle, end_angle, anti-clockwise
        context.arc(x + 2, y + 2, 5, 0, (Math.PI * 2));
        //close the path drawn
        context.closePath();
        //choose fill colour
        context.fillStyle = "#857959";
        //fill the shape
        context.fill();
        //choose the line thickness
        context.lineWidth = 1;
        //choose the line colour
        context.strokeStyle = "#70674a";

        /*******Draw a crator2 within the rock*********/
        //draw the circle
        context.beginPath();
        //x, y, radius, start_angle, end_angle, anti-clockwise
        context.arc(x + 6, y - 12, 5, 0, (Math.PI * 2));
        //close the path drawn
        context.closePath();
        //choose fill colour
        context.fillStyle = "#857959";
        //fill the shape
        context.fill();
        //choose the line thickness
        context.lineWidth = 5;
        //choose the line colour
        context.strokeStyle = "#70674a";
        //go ahead and draw the line
        context.stroke();
        //draw the circle
        context.beginPath();
        //x, y, radius, start_angle, end_angle, anti-clockwise
        context.arc(x + 7, y -11, 5, 0, (Math.PI * 2));
        //close the path drawn
        context.closePath();
        //choose fill colour
        context.fillStyle = "#857959";
        //fill the shape
        context.fill();
        //choose the line thickness
        context.lineWidth = 1;
        //choose the line colour
        context.strokeStyle = "#70674a";

        /*******Draw a crator3 within the rock*********/
        //draw the circle
        context.beginPath();
        //x, y, radius, start_angle, end_angle, anti-clockwise
        context.arc(x + 10, y + 6, 5, 0, (Math.PI * 2));
        //close the path drawn
        context.closePath();
        //choose fill colour
        context.fillStyle = "#857959";
        //fill the shape
        context.fill();
        //choose the line thickness
        context.lineWidth = 5;
        //choose the line colour
        context.strokeStyle = "#70674a";
        //go ahead and draw the line
        context.stroke();
        //draw the circle
        context.beginPath();
        //x, y, radius, start_angle, end_angle, anti-clockwise
        context.arc(x + 11, y + 7, 5, 0, (Math.PI * 2));
        //close the path drawn
        context.closePath();
        //choose fill colour
        context.fillStyle = "#857959";
        //fill the shape
        context.fill();
        //choose the line thickness
        context.lineWidth = 1;
        //choose the line colour
        context.strokeStyle = "#70674a";

        //go ahead and draw the line
        context.stroke();
        /***************************************************/

        //restore the state of the context to add the other object in their positions
        context.restore();


            if (x > 0) {
                /***** Some Physics - Newtons Equations of Motion Explanation *****/
                //the equation for velocity after given time duration is v = u + a*t is one of Newtons laws of motion
                //the equation for distance covered is x = u*t + 0.5*a*t*t
                //u is the initial velocity
                //v is the final velocity
                //a is acceleration
                //t is the time
                //x is the distance covered
                //if we want to find velocit after time t, from rest u=0 thne: v = u + a*t, becomes v = a*t
                //if after time measured t seconds, we want to know the distance cover
                //from rest then u = 0; and equation becomes
                //x = 0*t + 0.5 * a * t * t);
                //or x = 0.5*a*t*t

                /****** Relationship bewteen Gravity and Acceleration ***********/
                //In space gravity can be pulling from any direction, where there is e.g. a planet. 
                //Gravity is an accelaration, we say acceleration due to gravity
                //gravity is negative when falling from rest; a = -ve and u = 0, as above so we have e.g.
                //var gravity = -0.00001

                //********** Equation for gravity *************/
                //I make the rock start from rest (off screen). As the rock starts from rest at a distance of x (always 1100 (offscreen))
                x = x + (0.5 * pm_gravity * t * t);
                //increment t for next frame, in this case the time passed will be t+0.1
                //(in real life it is in seconds but here we can adjust time). Also we can
                //think of time as being proportional to the distance, e.g. a longer time 
                //means more distance will be covered on screen by object (as is the case in
                //in real life if you drop a ball and it accelerates to the ground)
                t = t + 1;
            }
            else if (x < 0) {
                //reset the rock variables to launch from a random position
                //reset velocity
                vx = 0;
                //reset x coordinate
                x = 1100;
                //pick a randon y coordinate
                //space rock appears between 50 and 450 in y direction
                y = 50 + Math.floor(Math.random() * 400);
                // reset time step
                t = 0;
            }
    }
    SpaceRock.prototype.giveGravity = function (Acceleration) {
        pm_gravity = Acceleration.gravity;
    }
}
