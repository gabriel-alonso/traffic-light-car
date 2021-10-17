 let firstFrame, secondFrame, thirdFrame, fourthFrame, fifthFrame, sixthFrame, seventhFrame;
 firstFrame = setInterval(() => {
     carYellow.move(325, position.carYellow)
     position.carYellow -= 50;
     if (position.carYellow === -150) {
         trafficLightRedAndGreen();
         clearInterval(firstFrame);

         secondFrame = setInterval(() => {
             carPink.move(300, position.carPink)
             position.carPink -= 50;
             if (position.carPink === 520) trafficLightEmptyAndYellow();

             if (position.carPink === -180) {
                 trafficLightGreenAndRed();
                 clearInterval(secondFrame);


                 thirdFrame = setInterval(() => {
                     carYellow.move(325, position.carYellow)
                     position.carYellow -= 50;
                     if (position.carYellow === -950) {
                         trafficLightYellowAndGreen();
                         clearInterval(thirdFrame);


                         fourthFrame = setInterval(() => {
                             carGreen.move(325, position.carGreen)
                             carOrange.move(300, position.carOrange)

                             position.carGreen -= 50;
                             position.carOrange -= 50;
                             if (position.carGreen === -150) {
                                 trafficLightRedAndGreen();
                                 clearInterval(fourthFrame);


                                 fifthFrame = setInterval(() => {
                                     carOrange.move(300, position.carOrange)

                                     position.carOrange -= 50;
                                     if (position.carOrange === 370) {
                                         position.carOrange -= 30;

                                         carOrange.move(300, position.carOrange).rotate(90)
                                         clearInterval(fifthFrame);


                                         sixthFrame = setInterval(() => {
                                             carOrange.move(300, position.carOrange)
                                             position.carOrange -= 50;
                                             if (position.carOrange === -260) {

                                                 trafficLightGreenAndYellow();
                                                 clearInterval(sixthFrame);


                                                 seventhFrame = setInterval(() => {
                                                     trafficLightEmptyAndRed();
                                                     carGreen.move(325, position.carGreen)
                                                     position.carGreen -= 50;
                                                     if (position.carGreen === -1000) {
                                                         trafficLightGreenAndYellow();

                                                         clearInterval(seventhFrame);

                                                         // clearFrame(timerFixed);
                                                     }
                                                 }, timerFixed)
                                             }
                                         }, timerFixed);
                                     }
                                 }, timerFixed)
                             }
                         }, timerFixed)
                     }
                 }, timerFixed)
             }
         }, timerFixed)
     }
 }, timerFixed);