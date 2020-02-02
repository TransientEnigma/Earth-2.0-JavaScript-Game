function Collision() {
    
    //sets the dificulty level
    var difficulty = 1;
    /*Inorder to determine whether there is a collision I have decided to work out firstly when there is no collision for each side of the spaceship with the rock, 
    /* (the rock will be treated as a box), then by using not (no-Collision) we get the logic for a collision. I have chosen this way because its easier for me to 
    /* to get my head around:
    /* so NO_COLLISION =
    /*      No Collision: SpaceRock.spaceRockYB < Spaceship.spaceshipYT (the rock is above the spaceship)
    /*  or  No Collision: SpaceRock.spaceRockYT > Spaceship.spaceshipYB (ther rock is below spaceship)
    /*  or  No Collision: SpaceRock.spaceRockXR < Spaceship.spaceshipXL (the rock is to the left of the spaceship)
    /*  or  No Collision: SpaceRock.spaceRockXL > Spaceship.spaceshipXR (the rock is to the right of the spaceship)
    /* This means we get collision if !NO_COLLISION
    */ 
    Collision.prototype.checkRockCollision = function (Player, SpaceRock, Spaceship) {
        //get the boolean logic for a no-collison
        var NO_COLLISION = (SpaceRock.spaceRockYB < Spaceship.spaceshipYT) || (SpaceRock.spaceRockYT > Spaceship.spaceshipYB) || 
                            (SpaceRock.spaceRockXR < Spaceship.spaceshipXL)||(SpaceRock.spaceRockXL > Spaceship.spaceshipXR);
        //so when we get a collison reset the spaceship to start position and send rock off screen to random start point.
        if (!NO_COLLISION && (Spaceship.repeat >= 100)) {

            //reset the X,Y co-ordinate of ship to start position
            Spaceship.X = 0;
            Spaceship.Y = 0;
            //make it flash a few times, by reseting how many times it will repeat flash
            //this also gives the ship a shield for a little while
            Spaceship.repeat = 0;
            //reset the rock to random loccation off screen
            SpaceRock.X = 1200;
            //reset rock t property
            SpaceRock.T = 0;
            SpaceRock.Y = Math.floor(Math.random() * 600);
                    
            //Later when I create a player class
            Player.playerLives--;
            }
      }

    /* Similar method to above, this time the collision is between the powerup ball and the spaceship */
        Collision.prototype.checkPowerUpCollision = function (Spaceship, PowerUp, Weapon) {
        //get the boolean logic for a no-collison
        var NO_COLLISION = (PowerUp.powerUpYB < Spaceship.spaceshipYT) || (PowerUp.powerUpYT > Spaceship.spaceshipYB) || 
                            (PowerUp.powerUpXR < Spaceship.spaceshipXL)||(PowerUp.powerUpXL > Spaceship.spaceshipXR);
        //so when we get a collison reset the spaceship to start position and send rock off screen to random start point.
        if (!NO_COLLISION) {
            //make it flash a few times, by reseting how many times it will repeat flash
            //this also gives the Spaceship a shield for a little while
            Spaceship.repeat = 0;
            //if collision occurs then reset the powerup to off screen 
            //half side of screen and rock other side
            PowerUp.X = 1100;
            //pick a randon y coordinate, increase the y span, so it appears on screen less often
            PowerUp.Y = Math.floor(Math.random() * 1200);
            //set the weapon type to the powerup weapon type
            Weapon.weaponType = PowerUp.setWeapon;
            }
        }



    Collision.prototype.CheckWeaponCollision = function (Player, SpaceRock, Weapon, Hit, context) 
    {
        //some named constants so we can see in the program what powerups they represent 
        var Laser = 1;
        var PowerLaser = 2;
        var Ray = 3;
        var Wave = 4;



     /* Similar method to above, this time the collision is between the spacerock  and the weapon fire */
            if (Weapon.FireWeapon) 
            {
                if (Weapon.weaponType == Laser) 
                {
                    //check for no-collision with weapon fired
                    var NO_LAZER_COLLISION = (SpaceRock.spaceRockYB < Weapon.lazerYT) || (SpaceRock.spaceRockYT > Weapon.lazerYB) ||
                        (SpaceRock.spaceRockXR < Weapon.lazerXL) || (SpaceRock.spaceRockXL > Weapon.lazerXR);
                    //if collision occurs with weapon fired then reset the rock to origin 
                    if (!NO_LAZER_COLLISION) 
                    {
                        //if there is a collision with weapon draw the hit at the specified coordinates
                        Hit.X = SpaceRock.spaceRockXL;
                        Hit.Y = SpaceRock.Y
                        Hit.keepHitting = true;
                        Hit.draw(context);

                        //each time the rock is hit up the score
                        Player.playerScore++;

                        //the lazer is hit power is 1
                        SpaceRock.PassHits(Laser);

                        //check the hits are greater than 5
                        if (SpaceRock.rockHits / (1000 * difficulty) > 5)
                        {
                            //send rock off screen
                            SpaceRock.X = 1100;
                            //pick a randon y coordinate
                            SpaceRock.Y = Math.floor(Math.random() * 600);
                            //reset rock t property
                            SpaceRock.T = 0;
                            //reset the number of hits to zero for the next rock
                            SpaceRock.ResetHits();
                        }
                    }
                }
   

                if (Weapon.weaponType == PowerLaser) 
                {
                    //check for no-collision with weapon fired
                    var NO_POWERLAZER_COLLISION = (SpaceRock.spaceRockYB < Weapon.PowerlazerYT) || (SpaceRock.spaceRockYT > Weapon.PowerlazerYB) ||
                        (SpaceRock.spaceRockXR < Weapon.PowerlazerXL) || (SpaceRock.spaceRockXL > Weapon.PowerlazerXR);
                    //if collision occurs with weapon fired then reset the rock to origin 
                    if (!NO_POWERLAZER_COLLISION) 
                    {
                        //if there is a collision with weapon draw the hit at the specified coordinates
                        Hit.X = SpaceRock.spaceRockXL;
                        Hit.Y = SpaceRock.Y
                        Hit.keepHitting = true;
                        Hit.draw(context);
                        //each time the rock is hit up the score
                        Player.playerScore++;

                        //the Powerlazer hit power is 2
                        SpaceRock.PassHits(PowerLaser);

                        //check the hits are greater than 5
                        if (SpaceRock.rockHits / (1000 * difficulty) > 5) {
                            //send rock off screen
                            SpaceRock.X = 1100;
                            //reset rock t property
                            SpaceRock.T = 0;
                            //pick a randon y coordinate
                            SpaceRock.Y = Math.floor(Math.random() * 600);
                            //reset the number of hits to zero for the next rock
                            SpaceRock.ResetHits();
                        }
                    }
                }

                if (Weapon.weaponType == Ray) 
                {
                    //check for no-collision with weapon fired
                    var NO_RAY_COLLISION = (SpaceRock.spaceRockYB < Weapon.RayYT) || (SpaceRock.spaceRockYT > Weapon.RayYB) ||
                        (SpaceRock.spaceRockXR < Weapon.RayXL) || (SpaceRock.spaceRockXL > Weapon.RayXR);
                    //if collision occurs with weapon fired then reset the rock to origin 
                    if (!NO_RAY_COLLISION) 
                    {
                        //if there is a collision with weapon draw the hit at the specified coordinates
                        Hit.X = SpaceRock.spaceRockXL;
                        Hit.Y = SpaceRock.Y
                        Hit.keepHitting = true;
                        Hit.draw(context);
                        //each time the rock is hit up the score
                        Player.playerScore++;
                        //the Ray hit power is 3
                        SpaceRock.PassHits(Ray);

                        //check the hits are greater than 5
                        if (SpaceRock.rockHits / (1000 * difficulty) > 5) {
                            //send rock off screen
                            SpaceRock.X = 1100;
                            //reset rock t property
                            SpaceRock.T = 0;
                            //pick a randon y coordinate
                            SpaceRock.Y = Math.floor(Math.random() * 600);

                            //reset the number of hits to zero for the next rock
                            SpaceRock.ResetHits();
                        }
                    }

                }

                if (Weapon.weaponType == Wave) 
                {
                    //check for no-collision with weapon fired
                    var NO_WAVE_COLLISION = (SpaceRock.spaceRockYB < Weapon.WaveYT) || (SpaceRock.spaceRockYT > Weapon.WaveYB) ||
                        (SpaceRock.spaceRockXR < Weapon.WaveXL) || (SpaceRock.spaceRockXL > Weapon.WaveXR);
                    //if collision occurs with weapon fired then reset the rock to origin 
                    if (!NO_WAVE_COLLISION) 
                    {
                        //if there is a collision with weapon draw the hit at the specified coordinates
                        Hit.X = SpaceRock.spaceRockXL;
                        Hit.Y = SpaceRock.Y
                        Hit.keepHitting = true;
                        Hit.draw(context);
                        //each time the rock is hit up the score
                        Player.playerScore++;
                        //the Wave hit power is 4
                        SpaceRock.PassHits(Wave);

                        //check the hits are greater than 5
                        if (SpaceRock.rockHits / (1000 * difficulty) > 5)
                        {
                            //send rock off screen
                            SpaceRock.X = 1100;
                            //reset rock t property
                            SpaceRock.T = 0;
                            //pick a randon y coordinate
                            SpaceRock.Y = Math.floor(Math.random() * 600);
                            //reset the number of hits to zero for the next rock
                            SpaceRock.ResetHits();

                        }
                    }
                }



            }


    }

}