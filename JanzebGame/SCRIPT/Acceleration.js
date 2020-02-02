function Acceleration() {
//variables to store the acceleration for x and y axis
    //acceleration variables for each direction
    var pm_af = 0;
    //private member variable for gravity
    var pm_gravity = -0.0009

    //create a public property variable X (denotes x-axis)
    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'af',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_af;
            },

        });
    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'ab',
        {
            //getter
            get: function () {
                //return the value of y (lower case)
                return pm_ab;
            },
        });

    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'au',
        {
            //getter
            get: function () {
                //return the value of x (lower case)
                return pm_au;
            },

        });

    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'ad',
        {
            //getter
            get: function () {
                //return the value of y (lower case)
                return pm_ad;
            },
        });

    //'this' key word relates to object in this case its the Spaceship
    Object.defineProperty(this, 'gravity',
        {
            //getter
            get: function () {
                //return the value of pm_gravity
                return pm_gravity;
            },
        });
    //public property method for change in forward acceleration 
    Acceleration.prototype.ForwardAcceleration = function (accelerationValue) {
        pm_af += accelerationValue;
        //when accelerating forward reset acceleration in other directions
    }
    //public property method for stopping forward acceleration 
    Acceleration.prototype.StopForwardAcceleration = function () {
        pm_af = 0;
        //when accelerating forward reset acceleration in other directions
    }
 

}