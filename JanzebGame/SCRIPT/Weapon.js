/*The design of this class allows for selection of weapons externally first, and then fireing the weapon after. 
 * This is done by setting the boolean values for the the chosen weapon to true. One method (like a power up) can set the 
 * chosen weapon boolean value so that later the weapon can be fired by the */
//Create the constructor for the Weapon class
function Weapon()
{
    //private member variables for 
    var pm_x = 0;
    //private member variable
    var pm_y = 0;

    //weapon can only be fired if this value is true;
    var pm_FireWeapon = false;

    //private member variables that are used to specify the different weapons
    var pm_ReadyLaser = 1;
    var pm_ReadyPowerLaser = 2;
    var pm_ReadyRay = 3;
    var pm_ReadyWave = 4;

    //private member variable that is used to select the weapon
    var pm_weaponType = 0;

    //create a public property variable X (denotes x-axis)
    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'X',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_x;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_x = value;
            }
        });
    //create a public property variable X (denotes y-axis)
    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'Y',
        {
            //getter
            get: function () {
                //return the value of y (lower case)
                return pm_y;
            },

            //setter
            set: function (value) {
                //set the value of y (lower case)
                pm_y = value;
            }
        });

    //create a public property variable X (denotes x-axis)
    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'FireWeapon',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_FireWeapon;
            },

            //setter
            set: function (value) {

                //return the value of pm_FireWeapon (lower case)
                return pm_FireWeapon = value;
            }
        });

    //create a public property variable X (denotes x-axis)
    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'weaponType',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_weaponType;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_weaponType = value;
            }
        });

    /********************** LAZER *****************************/
    //Private Property Variables for the Laser
    Object.defineProperty(this, 'lazerXL',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_lazerXL;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_lazerXL = value;
            }
        });
    Object.defineProperty(this, 'lazerXR',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_lazerXR;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_lazerXR = value;
            }
        });
    Object.defineProperty(this, 'lazerYT',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_lazerYT;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_lazerYT = value;
            }
        });
    Object.defineProperty(this, 'lazerYB',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_lazerYB;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_lazerYB = value;
            }
        });
    /********************** POWER LAZER *****************************/
    //Private Property Variables for the PowerLaser
    Object.defineProperty(this, 'PowerlazerXL',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_PowerlazerXL;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_PowerlazerXL = value;
            }
        });
    Object.defineProperty(this, 'PowerlazerXR',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_PowerlazerXR;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_PowerlazerXR = value;
            }
        });
    Object.defineProperty(this, 'PowerlazerYT',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_PowerlazerYT;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_PowerlazerYT = value;
            }
        });
    Object.defineProperty(this, 'PowerlazerYB',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_PowerlazerYB;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_PowerlazerYB = value;
            }
        });


    /************************ RAY ***************************/
    //Private Property Variables for the Ray
    Object.defineProperty(this, 'RayXL',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_RayXL;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_RayXL = value;
            }
        });
    Object.defineProperty(this, 'RayXR',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_RayXR;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_RayXR = value;
            }
        });
    Object.defineProperty(this, 'RayYT',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_RayYT;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_RayYT = value;
            }
        });
    Object.defineProperty(this, 'RayYB',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_RayYB;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_RayYB = value;
            }
        });



    /************************ WAVE ***************************/
    //Private Property Variables for the Wave
    Object.defineProperty(this, 'WaveXL',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_WaveXL;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_WaveXL = value;
            }
        });
    Object.defineProperty(this, 'WaveXR',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_WaveXR;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_WaveXR = value;
            }
        });
    Object.defineProperty(this, 'WaveYT',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_WaveYT;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_WaveYT = value;
            }
        });
    Object.defineProperty(this, 'WaveYB',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_WaveYB;
            },

            //setter
            set: function (value) {
                //set the value of x (lower case)
                pm_WaveYB = value;
            }
        });


    //variable to store the counted times drawing attempted
    var counter = 0;
    //add the draw function to the Spaceship class, accepts the parameter context
    Weapon.prototype.draw = function (context)
    {
        //this will optimise the game for speed and smooth running (few times drawn = less processing to more speed)
        counter++;
        if (counter > 0)
        {

            //this will allow us to select and fire different weapons
            //this fire the laser if laser ready and fire true
            if ((pm_weaponType == pm_ReadyLaser) & pm_FireWeapon) {

                //save the context, this means that the other elements on the screen are in
                //suspended animation while we draw the new position
                context.save();
                //choose fill colour
                context.fillStyle = "#fccf03";
                //fill the shape
                context.fillRect(pm_x + 65, pm_y + 24, 200, 4);
                //choose the line colour
                //restore the state of the context to add the other object in their positions
                context.restore();
            }

            //update the values of the variables - required for collision detection
            pm_lazerXL = pm_x + 65;
            pm_lazerXR = pm_x + 65 + 200;
            pm_lazerYT = pm_y + 24;
            pm_lazerYB = pm_y + 24 + 4;

            //this fire the Powerlaser if laser ready and fire true
            if ((pm_weaponType == pm_ReadyPowerLaser) & pm_FireWeapon) {

                //save the context, this means that the other elements on the screen are in
                //suspended animation while we draw the new position
                context.save();
                //choose fill colour
                context.fillStyle = "#fc0303";
                //fill the shape
                context.fillRect(pm_x + 65, pm_y + 23, 200, 6);
                //choose the line colour
                //restore the state of the context to add the other object in their positions
                context.restore();
            }
            //update the values of the variables - required for collision detection
            pm_PowerlazerXL = pm_x + 65;
            pm_PowerlazerXR = pm_x + 65 + 200;
            pm_PowerlazerYT = pm_y + 24;
            pm_PowerlazerYB = pm_y + 24 + 6;

            if ((pm_weaponType == pm_ReadyRay) & pm_FireWeapon) {
                //save the context, this means that the other elements on the screen are in
                //suspended animation while we draw the new position
                context.save();

                //draw the circle
                context.beginPath();
                //x, y, radius, start_angle, end_angle, anti-clockwise
                context.arc(pm_x + 67, pm_y + 24, 5, 0, (Math.PI * 2));
                //close the path drawn
                context.closePath();
                //choose the line thickness
                context.lineWidth = 3;
                //choose the line colour
                context.strokeStyle = "#03fc20";
                //go ahead and draw the line
                context.stroke();

                //draw the circle
                context.beginPath();
                //x, y, radius, start_angle, end_angle, anti-clockwise
                context.arc(pm_x + 82, pm_y + 24, 10, 0, (Math.PI * 2));
                //close the path drawn
                context.closePath();
                //draw the circle
                //choose the line thickness
                context.lineWidth = 3;
                //choose the line colour
                context.strokeStyle = "#03fc20";
                //go ahead and draw the line
                context.stroke();

                context.beginPath();
                //x, y, radius, start_angle, end_angle, anti-clockwise
                context.arc(pm_x + 106, pm_y + 24, 12, 0, (Math.PI * 2));
                //close the path drawn
                context.closePath();
                //choose the line thickness
                context.lineWidth = 3;
                //choose the line colour
                context.strokeStyle = "#03fc20";
                //go ahead and draw the line
                context.stroke();

                //draw the circle
                context.beginPath();
                //x, y, radius, start_angle, end_angle, anti-clockwise
                context.arc(pm_x + 131, pm_y + 24, 14, 0, (Math.PI * 2));
                //close the path drawn
                context.closePath();
                //choose the line thickness
                context.lineWidth = 3;
                //choose the line colour
                context.strokeStyle = "#03fc20";
                //go ahead and draw the line
                context.stroke();

                //draw the circle
                context.beginPath();
                //x, y, radius, start_angle, end_angle, anti-clockwise
                context.arc(pm_x + 161, pm_y + 24, 16, 0, (Math.PI * 2));
                //close the path drawn
                context.closePath();
                //choose the line thickness
                context.lineWidth = 3;
                //choose the line colour
                context.strokeStyle = "#03fc20";
                //go ahead and draw the line
                context.stroke();

                //draw the circle
                context.beginPath();
                //x, y, radius, start_angle, end_angle, anti-clockwise
                context.arc(pm_x + 191, pm_y + 24, 16, 0, (Math.PI * 2));
                //close the path drawn
                context.closePath();
                //choose the line thickness
                context.lineWidth = 3;
                //choose the line colour
                context.strokeStyle = "#03fc20";
                //go ahead and draw the line
                context.stroke();

                //restore the state of the context to add the other object in their positions
                context.restore();
            }

            //update the values of the variables - required for collision detection
            pm_RayXL = pm_x + 67 - 5; //x coordianate of circle - radius
            pm_RayXR = pm_x + 191 + 16; //x-coordiante of circle  + radius
            pm_RayYT = pm_y + 24 - 16;
            pm_RayYB = pm_y + 24 + 16;

            if ((pm_weaponType == pm_ReadyWave) & pm_FireWeapon) {

                //save the context, this means that the other elements on the screen are in
                //suspended animation while we draw the new position
                context.save();

                //draw the arc
                context.beginPath();
                //x, y, radius, start_angle, end_angle, anti-clockwise
                context.arc(pm_x + 62, pm_y + 24, 5, -(Math.PI / 2), (Math.PI / 2));
                //choose the line thickness
                context.lineWidth = 4;
                //choose the line colour
                context.strokeStyle = "#07e6d7";
                //go ahead and draw the line
                context.stroke();

                //draw the arc
                context.beginPath();
                //x, y, radius, start_angle, end_angle, anti-clockwise
                context.arc(pm_x + 77, pm_y + 24, 10, -(Math.PI / 2), (Math.PI / 2));
                 //choose the line thickness
                context.lineWidth = 4;
                //choose the line colour
                context.strokeStyle = "#07e6d7";
                //go ahead and draw the line
                context.stroke();

                //draw the arc
                context.beginPath();
                //x, y, radius, start_angle, end_angle, anti-clockwise
                context.arc(pm_x + 102, pm_y + 24, 12, -(Math.PI / 2), (Math.PI / 2));
                //choose the line thickness
                context.lineWidth = 4;
                //choose the line colour
                context.strokeStyle = "#07e6d7";
                //go ahead and draw the line
                context.stroke();

                //draw the arc
                context.beginPath();
                //x, y, radius, start_angle, end_angle, anti-clockwise
                context.arc(pm_x + 128, pm_y + 24, 14, -(Math.PI / 2), (Math.PI / 2));
                //choose the line thickness
                context.lineWidth = 4;
                //choose the line colour
                context.strokeStyle = "#07e6d7";
                //go ahead and draw the line
                context.stroke();

                //draw the arc
                context.beginPath();
                //x, y, radius, start_angle, end_angle, anti-clockwise
                context.arc(pm_x + 156, pm_y + 24, 16, -(Math.PI / 2), (Math.PI / 2));
                //choose the line thickness
                context.lineWidth = 4;
                //choose the line colour
                context.strokeStyle = "#07e6d7";
                //go ahead and draw the line
                context.stroke();

                //draw the arc
                context.beginPath();
                //x, y, radius, start_angle, end_angle, anti-clockwise
                context.arc(pm_x + 186, pm_y + 24, 16, -(Math.PI / 2), (Math.PI / 2));
                //context.fill();
                //choose the line thickness
                context.lineWidth = 4;
                //choose the line colour
                context.strokeStyle = "#07e6d7";
                //go ahead and draw the line
                context.stroke();

                //restore the state of the context to add the other object in their positions
                context.restore();
            }
            //update the values of the variables - required for collision detection
            pm_WaveXL = pm_x + 62 - 5;
            pm_WaveXR = pm_x + 186 + 16;
            pm_WaveYT = pm_y + 24 - 16;
            pm_WaveYB = pm_y + 24 + 16;
            //reset the counter so it only draws 1/500 times
            counter = 0;
        }
    }
}
