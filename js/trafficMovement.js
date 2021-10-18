let draw = SVG().addTo('div').size('800', '800');

let color = {
    lightGreen: '#7CFC00',
    darkGray: '#4c4a4b',
    mediumGray: '#363434',
    red: 'red',
    black: '#000',
    yellow: 'yellow',
    green: 'green',
    lightGray: '#e7e7e7'
}

let timerInterval = 300;

let position = {
    carYellow: 0,
    carGreen: 200,
    carPink: 670,
    carOrange: 870,
    carBlue: 0,
    carBrown: 200,
    carRed: 670,
    carPurple: 870,
    carPinkDark: 0,
    carPurpleDark: 200,
    carGreenDark: 670,
    carBlueDark: 870,
    carOrangeDark: 0,
    carYellowDark: 200,
    carBrownDark: 670,
    carRedDark: 870
}

function createTheGrass(draw) {
    draw.rect(800, 900).move(0, 0).fill(color.lightGray);
}

function createTheStreet(draw) {

    draw.rect(209, 800).move(290, 0).fill(color.darkGray); // Vertical
    draw.rect(800, 209).move(0, 290).fill(color.darkGray); // Horizontal

    // Vertical - Faixa Amarela
    draw.rect(20, 80).center(400, 20).fill('yellow');
    draw.rect(20, 80).center(400, 150).fill('yellow');
    draw.rect(20, 80).center(400, 670).fill('yellow');
    draw.rect(20, 80).center(400, 800).fill('yellow');

    // Horizontal - Faixa Amarela
    draw.rect(80, 20).center(40, 390).fill('yellow');
    draw.rect(80, 20).center(170, 390).fill('yellow');
    draw.rect(80, 20).center(560, 390).fill('yellow');
    draw.rect(80, 20).center(690, 390).fill('yellow');
    draw.rect(80, 20).center(820, 390).fill('yellow');

    // Faixa de Pedreste - Horizontal - Cima
    draw.rect(15, 50).center(314, 250).fill('white');
    draw.rect(15, 50).center(334, 250).fill('white');
    draw.rect(15, 50).center(354, 250).fill('white');
    draw.rect(15, 50).center(374, 250).fill('white');
    draw.rect(15, 50).center(394, 250).fill('white');
    draw.rect(15, 50).center(414, 250).fill('white');
    draw.rect(15, 50).center(434, 250).fill('white');
    draw.rect(15, 50).center(454, 250).fill('white');
    draw.rect(15, 50).center(474, 250).fill('white');

    // Faixa de Pedreste - Horizontal - Baixo
    draw.rect(15, 50).center(314, 540).fill('white');
    draw.rect(15, 50).center(334, 540).fill('white');
    draw.rect(15, 50).center(354, 540).fill('white');
    draw.rect(15, 50).center(374, 540).fill('white');
    draw.rect(15, 50).center(394, 540).fill('white');
    draw.rect(15, 50).center(414, 540).fill('white');
    draw.rect(15, 50).center(434, 540).fill('white');
    draw.rect(15, 50).center(454, 540).fill('white');
    draw.rect(15, 50).center(474, 540).fill('white');
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

function clearFrame(timerInterval) {
    let position = {
        carYellow: 0,
        carGreen: 200,
        carPink: 670,
        carOrange: 870
    }
    setTimeout(trafficMovement(timerInterval, position), 320)
}

function getPositionInitial() {
    return {
        carYellow: 0,
        carGreen: 200,
        carPink: 670,
        carOrange: 870,
        carBlue: 0,
        carBrown: 200,
        carRed: 670,
        carPurple: 870,
        carPinkDark: 0,
        carPurpleDark: 200,
        carGreenDark: 670,
        carBlueDark: 870,
        carOrangeDark: 0,
        carYellowDark: 200,
        carBrownDark: 670,
        carRedDark: 870
    }
}


function firstMovement(timerInterval, position) {

    let carYellow = createCar(draw, 'car_topview_yellow.svg');
    let carPink = createCar(draw, 'car_topview_pink.svg');
    let carGreen = createCar(draw, 'car_topview_green.svg');
    let carOrange = createCar(draw, 'car_topview_orange.svg');

    carYellow.size(200, 120).rotate(90).move(325, 0);
    carGreen.size(200, 120).rotate(90).move(325, 200);
    carPink.size(200, 120).move(300, 670);
    carOrange.size(200, 120).move(300, 870);

    let status = {
        carYellow: true,
        carGreen: true,
        carOrange: true
    }

    movement = setInterval(() => {
        if (position.carYellow !== -150 && status.carYellow) {
            carYellow.move(325, position.carYellow)
            position.carYellow -= 50;
        } else {
            trafficLightRedAndGreen();
            if (position.carPink !== -180) {
                carPink.move(300, position.carPink)
                position.carPink -= 50;
                if (position.carPink === 520) trafficLightEmptyAndYellow();
            } else {
                trafficLightGreenAndRed();
                if (position.carYellow !== -900) {
                    status.carYellow = false;
                    carYellow.move(325, position.carYellow)
                    position.carYellow -= 50;
                } else {
                    trafficLightYellowAndGreen();
                    if (position.carGreen !== -150 && status.carGreen) {
                        carGreen.move(325, position.carGreen)
                        carOrange.move(300, position.carOrange)
                        position.carGreen -= 50;
                        position.carOrange -= 50;
                    } else {
                        trafficLightRedAndGreen();
                        if (position.carOrange !== 370 && status.carOrange) {
                            carOrange.move(300, position.carOrange);
                            position.carOrange -= 50;
                        } else {
                            if (position.carOrange !== -220) position.carOrange -= 30;
                            if (status.carOrange) carOrange.move(300, position.carOrange).rotate(90)
                            else carOrange.move(300, position.carOrange)
                            if (position.carOrange !== -220) {
                                status.carOrange = false;
                                carOrange.move(300, position.carOrange)
                                position.carOrange -= 50;
                            } else {
                                trafficLightGreenAndYellow();
                                if (position.carGreen !== -1000) {
                                    status.carGreen = false;
                                    trafficLightEmptyAndRed();
                                    carGreen.move(325, position.carGreen)
                                    position.carGreen -= 50;
                                } else {
                                    trafficLightGreenAndYellow();
                                    clearInterval(movement);

                                    let position = getPositionInitial()
                                    trafficMovement(timerInterval, position);
                                }
                            }
                        }
                    }
                }
            }
        }
    }, timerInterval);
}

function secondMovement(timerInterval, position) {
    let carBlue = createCar(draw, 'car_topview_blue.svg');
    let carBrown = createCar(draw, 'car_topview_brown.svg');
    let carRed = createCar(draw, 'car_topview_red.svg');
    let carPurple = createCar(draw, 'car_topview_purple.svg');

    carBlue.size(200, 120).rotate(90).move(325, 0);
    carBrown.size(200, 120).rotate(90).move(325, 200);
    carRed.size(200, 120).move(300, 670);
    carPurple.size(200, 120).move(300, 870);

    let status = {
        carBlue: true,
        carBrown: true,
        carRed: true,
        carPurple: true
    }

    movement = setInterval(() => {
        if (position.carBlue !== -150 && status.carBlue) {
            carBlue.move(325, position.carBlue)
            position.carBlue -= 50;
        } else {
            trafficLightRedAndGreen();
            if (position.carRed !== -180) {
                carRed.move(300, position.carRed)
                position.carRed -= 50;
                if (position.carRed === 520) trafficLightEmptyAndYellow();
            } else {
                trafficLightGreenAndRed();

                if (position.carBlue !== -900) {
                    if (position.carBlue === -300) carBlue.move(325, position.carBlue).rotate(-90)
                    status.carBlue = false;
                    carBlue.move(325, position.carBlue)
                    position.carBlue -= 50;
                } else {
                    trafficLightYellowAndGreen();
                    if (position.carBrown !== -150 && status.carBrown) {
                        carBrown.move(325, position.carBrown)
                        carPurple.move(300, position.carPurple)
                        position.carBrown -= 50;
                        position.carPurple -= 50;
                    } else {
                        trafficLightRedAndGreen();
                        if (position.carPurple !== 370 && status.carPurple) {
                            carPurple.move(300, position.carPurple);
                            position.carPurple -= 50;
                        } else {
                            if (position.carPurple !== -220) position.carPurple -= 30;

                            if (status.carPurple) carPurple.move(300, position.carPurple).rotate(90)
                            else carPurple.move(300, position.carPurple)

                            if (position.carPurple !== -220) {
                                status.carPurple = false;
                                carPurple.move(300, position.carPurple)
                                position.carPurple -= 50;
                            } else {
                                trafficLightGreenAndYellow();
                                if (position.carBrown !== -1000) {
                                    status.carBrown = false;
                                    trafficLightEmptyAndRed();
                                    carBrown.move(325, position.carBrown)
                                    position.carBrown -= 50;
                                } else {
                                    trafficLightGreenAndYellow();
                                    clearInterval(movement);

                                    let position = getPositionInitial()
                                    trafficMovement(timerInterval, position);
                                }
                            }
                        }
                    }
                }
            }
        }

    }, timerInterval);
}

function thirdMovement(timerInterval, position) {
    let carPinkDark = createCar(draw, 'car_topview_pink_dark.svg');
    let carPurpleDark = createCar(draw, 'car_topview_purple_dark.svg');
    let carGreenDark = createCar(draw, 'car_topview_green_dark.svg');
    let carBlueDark = createCar(draw, 'car_topview_blue_dark.svg');

    carPinkDark.size(200, 120).rotate(90).move(325, 0);
    carPurpleDark.size(200, 120).rotate(90).move(325, 200);
    carGreenDark.size(200, 120).move(300, 670);
    carBlueDark.size(200, 120).move(300, 870);

    let status = {
        carPinkDark: true,
        carPurpleDark: true,
        carGreenDark: true,
        carBlueDark: true
    }

    movement = setInterval(() => {
        if (position.carPinkDark !== -150 && status.carPinkDark) {
            carPinkDark.move(325, position.carPinkDark)
            position.carPinkDark -= 50;
        } else {
            trafficLightRedAndGreen();
            if (position.carGreenDark !== -180) {
                carGreenDark.move(300, position.carGreenDark)
                position.carGreenDark -= 50;
                if (position.carGreenDark === 520) trafficLightEmptyAndYellow();
            } else {
                trafficLightGreenAndRed();
                if (position.carPinkDark !== -900) {
                    status.carPinkDark = false;
                    carPinkDark.move(325, position.carPinkDark)
                    position.carPinkDark -= 50;
                } else {
                    trafficLightYellowAndGreen();
                    if (position.carPurpleDark !== -150 && status.carPurpleDark) {
                        carPurpleDark.move(325, position.carPurpleDark)
                        carBlueDark.move(300, position.carBlueDark)
                        position.carPurpleDark -= 50;
                        position.carBlueDark -= 50;
                    } else {
                        trafficLightRedAndGreen();
                        if (position.carBlueDark !== 370 && status.carBlueDark) {
                            carBlueDark.move(300, position.carBlueDark);
                            position.carBlueDark -= 50;
                        } else {
                            if (position.carBlueDark !== -220) position.carBlueDark -= 30;

                            if (status.carBlueDark) carBlueDark.move(300, position.carBlueDark).rotate(90)
                            else carBlueDark.move(300, position.carBlueDark)

                            if (position.carBlueDark !== -220) {
                                status.carBlueDark = false;
                                carBlueDark.move(300, position.carBlueDark)
                                position.carBlueDark -= 50;
                            } else {
                                trafficLightGreenAndYellow();
                                if (position.carPurpleDark !== -1000) {
                                    status.carPurpleDark = false;
                                    trafficLightEmptyAndRed();
                                    carPurpleDark.move(325, position.carPurpleDark)
                                    position.carPurpleDark -= 50;
                                } else {
                                    trafficLightGreenAndYellow();
                                    clearInterval(movement);

                                    let position = getPositionInitial()
                                    trafficMovement(timerInterval, position);
                                }
                            }
                        }
                    }
                }
            }
        }

    }, timerInterval);
}

function fourthMovement(timerInterval, position) {
    let carOrangeDark = createCar(draw, 'car_topview_orange_dark.svg');
    let carYellowDark = createCar(draw, 'car_topview_yellow_dark.svg');
    let carBrownDark = createCar(draw, 'car_topview_brown_dark.svg');
    let carRedDark = createCar(draw, 'car_topview_red_dark.svg');

    carOrangeDark.size(200, 120).rotate(90).move(325, 0);
    carYellowDark.size(200, 120).rotate(90).move(325, 200);
    carBrownDark.size(200, 120).move(300, 670);
    carRedDark.size(200, 120).move(300, 870);

    let status = {
        carOrangeDark: true,
        carYellowDark: true,
        carBrownDark: true,
        carRedDark: true
    }

    movement = setInterval(() => {
        if (position.carOrangeDark !== -150 && status.carOrangeDark) {
            carOrangeDark.move(325, position.carOrangeDark)
            position.carOrangeDark -= 50;
        } else {
            trafficLightRedAndGreen();
            if (position.carBrownDark !== -230) {
                if (position.carBrownDark === 320) carBrownDark.move(300, position.carBrownDark).rotate(90)
                carBrownDark.move(300, position.carBrownDark)
                position.carBrownDark -= 50;
                if (position.carBrownDark === 520) trafficLightEmptyAndYellow();
            } else {
                trafficLightGreenAndRed();
                if (position.carOrangeDark !== -900) {
                    if (position.carOrangeDark === -300) carOrangeDark.move(325, position.carOrangeDark).rotate(-90)
                    status.carOrangeDark = false;
                    carOrangeDark.move(325, position.carOrangeDark)
                    position.carOrangeDark -= 50;
                } else {
                    trafficLightYellowAndGreen();
                    if (position.carYellowDark !== -150 && status.carYellowDark) {
                        carYellowDark.move(325, position.carYellowDark)
                        carRedDark.move(300, position.carRedDark)
                        position.carYellowDark -= 50;
                        position.carRedDark -= 50;
                    } else {
                        trafficLightRedAndGreen();
                        if (position.carRedDark !== 370 && status.carRedDark) {
                            carRedDark.move(300, position.carRedDark);
                            position.carRedDark -= 50;
                        } else {
                            if (position.carRedDark !== -220) position.carRedDark -= 30;
                            if (status.carRedDark) carRedDark.move(300, position.carRedDark).rotate(90)
                            else carRedDark.move(300, position.carRedDark)
                            if (position.carRedDark !== -220) {
                                status.carRedDark = false;
                                carRedDark.move(300, position.carRedDark)
                                position.carRedDark -= 50;
                            } else {
                                trafficLightGreenAndYellow();
                                if (position.carYellowDark !== -1000) {
                                    status.carYellowDark = false;
                                    trafficLightEmptyAndRed();
                                    carYellowDark.move(325, position.carYellowDark)
                                    position.carYellowDark -= 50;
                                } else {
                                    trafficLightGreenAndYellow();
                                    clearInterval(movement);

                                    let position = getPositionInitial();
                                    trafficMovement(timerInterval, position);
                                }
                            }
                        }
                    }
                }
            }
        }

    }, timerInterval);
}

function random() {
    let i = Math.floor(Math.random() * 4) + 1;
    if (i <= 0) return random();
    return i;
}

function trafficMovement(timerInterval, position) {
    let i = random();

    if (i === 1) firstMovement(timerInterval, position);
    else if (i === 2) secondMovement(timerInterval, position);
    else if (i === 3) thirdMovement(timerInterval, position);
    else if (i === 4) fourthMovement(timerInterval, position);
}

trafficMovement(timerInterval, position);