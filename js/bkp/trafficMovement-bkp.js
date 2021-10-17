let draw = SVG().addTo('div').size('800', '800');

let color = {
    lightGreen: '#7CFC00',
    darkGrey: '#4c4a4b',
    mediumGray: '#363434',
    red: 'red',
    black: '#000',
    yellow: 'yellow',
    green: 'green'
}

let timerFixed = 300;

let position = {
    carYellow: 0,
    carGreen: 200,
    carPink: 670,
    carOrange: 870
}

function createTheGrass(draw) {
    draw.rect(800, 900).move(0, 0).fill(color.lightGreen);
}

function createTheStreet(draw) {
    draw.rect(209, 800).move(290, 0).fill(color.darkGrey); // vertical
    draw.rect(800, 209).move(0, 290).fill(color.darkGrey); // horizontal
}

function createCar(draw, image) {
    return draw.image(`./img/${image}`);
}

createTheGrass(draw);
createTheStreet(draw);

let trafficLightRed = draw.path();
trafficLightRed.marker('end', 200, 300, function(add) {
    add.rect(55, 100).center(150, 50).fill(color.black).radius(8);
    add.circle(25).center(150, 20).fill(color.red);
    add.circle(25).center(150, 50).fill(color.mediumGray);
    add.circle(25).center(150, 80).fill(color.mediumGray);
});

let trafficLightYellow = draw.path();
trafficLightYellow.marker('end', 200, 300, function(add) {
    add.rect(55, 100).center(150, 50).fill(color.black).radius(8);
    add.circle(25).center(150, 20).fill(color.mediumGray);
    add.circle(25).center(150, 50).fill(color.yellow);
    add.circle(25).center(150, 80).fill(color.mediumGray);
});

let trafficLightGreen = draw.path();
trafficLightGreen.marker('end', 200, 300, function(add) {
    add.rect(55, 100).center(150, 50).fill(color.black).radius(8);
    add.circle(25).center(150, 20).fill(color.mediumGray);
    add.circle(25).center(150, 50).fill(color.mediumGray);
    add.circle(25).center(150, 80).fill(color.green);
});


let carYellow = createCar(draw, 'car_topview_yellow.svg');
let carPink = createCar(draw, 'car_topview_pink.svg');
let carGreen = createCar(draw, 'car_topview_green.svg');
let carOrange = createCar(draw, 'car_topview_orange.svg');

let carBlue = createCar(draw, 'car_topview_blue.svg');
let carBrown = createCar(draw, 'car_topview_brown.svg');
let carRed = createCar(draw, 'car_topview_red.svg');
let carPurple = createCar(draw, 'car_topview_purple.svg');

let carPinkDark = createCar(draw, 'car_topview_pink_dark.svg');
let carPurpleDark = createCar(draw, 'car_topview_purple_dark.svg');
let carGreenDark = createCar(draw, 'car_topview_green_dark.svg');
let carBlueDark = createCar(draw, 'car_topview_blue_dark.svg');

let carOrangeDark = createCar(draw, 'car_topview_orange_dark.svg');
let carYellowDark = createCar(draw, 'car_topview_yellow_dark.svg');
let carBrownDark = createCar(draw, 'car_topview_brown_dark.svg');
let carRedDark = createCar(draw, 'car_topview_red_dark.svg');

carYellow.size(200, 120).rotate(90).move(325, 0)
carGreen.size(200, 120).rotate(90).move(325, 200)
carPink.size(200, 120).move(300, 670)
carOrange.size(200, 120).move(300, 870)

/* Semaforo de cima */
trafficLightRed1 = draw.use(trafficLightRed);
trafficLightRed1.move(163, 320);
trafficLightRed1.hide();
trafficLightYellow1 = draw.use(trafficLightYellow);
trafficLightYellow1.move(163, 320);
trafficLightGreen1 = draw.use(trafficLightGreen);
trafficLightGreen1.move(163, 320);
trafficLightGreen1.hide();

/* Semaforo de baixo */
trafficLightRed2 = draw.use(trafficLightRed);
trafficLightRed2.move(530, 630);
trafficLightYellow2 = draw.use(trafficLightYellow);
trafficLightYellow2.move(530, 630);
trafficLightYellow2.hide();
trafficLightGreen2 = draw.use(trafficLightGreen);
trafficLightGreen2.move(530, 630);
trafficLightGreen2.hide();


function trafficLightRedAndGreen() {
    trafficLightRed1.show();
    trafficLightYellow1.hide();
    trafficLightGreen1.hide();

    trafficLightRed2.hide();
    trafficLightYellow2.hide();
    trafficLightGreen2.show();
}

function trafficLightGreenAndRed() {
    trafficLightRed1.hide();
    trafficLightYellow1.hide();
    trafficLightGreen1.show();

    trafficLightRed2.show();
    trafficLightYellow2.hide();
    trafficLightGreen2.hide();

}

function trafficLightGreenAndYellow() {
    trafficLightRed1.hide();
    trafficLightYellow1.hide();
    trafficLightGreen1.show();

    trafficLightRed2.hide();
    trafficLightYellow2.show();
    trafficLightGreen2.hide();
}

function trafficLightYellowAndGreen() {
    trafficLightRed1.hide();
    trafficLightYellow1.show();
    trafficLightGreen1.hide();

    trafficLightRed2.hide();
    trafficLightYellow2.hide();
    trafficLightGreen2.show();
}

function trafficLightEmptyAndYellow() {
    trafficLightRed2.hide();
    trafficLightYellow2.show();
    trafficLightGreen2.hide();
}

function trafficLightEmptyAndRed() {
    trafficLightRed2.show();
    trafficLightYellow2.hide();
    trafficLightGreen2.hide();
}

function clearFrame(timerFixed) {
    let position = {
        carYellow: 0,
        carGreen: 200,
        carPink: 670,
        carOrange: 870
    }
    setTimeout(trafficMovement(timerFixed, position), 320)
}

function firstMovement(timerFixed, position) {
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
}

function random() {
    let i = Math.floor(Math.random() * 20) % 4;
    if (i <= 0) return random();
    return i;
}

function trafficMovement(timerFixed, position) {
    firstMovement(timerFixed, position);
}

trafficMovement(timerFixed, position);