let draw = SVG().addTo('div').size('800', '800');

let color = {
    lightGreen: '#7CFC00',
    darkGray: '#4c4a4b',
    mediumGray: '#363434',
    red: '#FF0000',
    black: '#000',
    yellow: '#FFFF00',
    green: '#008000',
    lightGray: '#e7e7e7'
}

let timerInterval = 400;

let timerTrafficLight = 2000;

let position = {
    carYellow: 200,
    carGreen: 200,
    carPink: 870,
    carOrange: 870,
    carBlue: 200,
    carBrown: 200,
    carRed: 870,
    carPurple: 870,
    carPinkDark: 200,
    carPurpleDark: 200,
    carGreenDark: 870,
    carBlueDark: 870,
    carOrangeDark: 200,
    carYellowDark: 200,
    carBrownDark: 870,
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

function trafficLightRedAndYellow() {
    trafficLightRed1.show();
    trafficLightYellow1.hide();
    trafficLightGreen1.hide();

    trafficLightRed2.hide();
    trafficLightYellow2.show();
    trafficLightGreen2.hide();
}

function trafficLightRedAndRed() {
    trafficLightRed1.show();
    trafficLightYellow1.hide();
    trafficLightGreen1.hide();

    trafficLightRed2.show();
    trafficLightYellow2.hide();
    trafficLightGreen2.hide();
}

function trafficLightGreenAndGreen() {
    trafficLightRed1.hide();
    trafficLightYellow1.hide();
    trafficLightGreen1.show();

    trafficLightRed2.hide();
    trafficLightYellow2.hide();
    trafficLightGreen2.show();
}

function trafficLightGreenAndYellow() {
    trafficLightRed1.hide();
    trafficLightYellow1.hide();
    trafficLightGreen1.show();

    trafficLightRed2.hide();
    trafficLightYellow2.show();
    trafficLightGreen2.hide();
}

function trafficLightGreenAndRed() {
    trafficLightRed1.hide();
    trafficLightYellow1.hide();
    trafficLightGreen1.show();

    trafficLightRed2.show();
    trafficLightYellow2.hide();
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

function trafficLightYellowAndYellow() {
    trafficLightRed1.hide();
    trafficLightYellow1.show();
    trafficLightGreen1.hide();

    trafficLightRed2.hide();
    trafficLightYellow2.show();
    trafficLightGreen2.hide();
}

function trafficLightYellowAndRed() {
    trafficLightRed1.hide();
    trafficLightYellow1.show();
    trafficLightGreen1.hide();

    trafficLightRed2.show();
    trafficLightYellow2.hide();
    trafficLightGreen2.hide();
}

function clearFrame() {
    let position = {
        carYellow: 0,
        carGreen: 200,
        carPink: 670,
        carOrange: 870
    }
    setTimeout(trafficMovement(position), 320)
}

function getPositionInitial() {
    return {
        carYellow: 200,
        carGreen: 200,
        carPink: 870,
        carOrange: 870,
        carBlue: 200,
        carBrown: 200,
        carRed: 870,
        carPurple: 870,
        carPinkDark: 200,
        carPurpleDark: 200,
        carGreenDark: 870,
        carBlueDark: 870,
        carOrangeDark: 200,
        carYellowDark: 200,
        carBrownDark: 870,
        carRedDark: 870
    }
}

function continueCarTrajectory(car, position, status, type) {
    let movementFinal;
    switch (type) {
        case 'yellow':
            movementFinal = position.carYellow === -900;
            if (!movementFinal && status.carYellow) {
                car.move(325, position.carYellow)
                position.carYellow -= 50;
            }
            break;
        case 'pink':
            movementFinal = position.carPink === -230;
            if (!movementFinal && status.carPink) {
                car.move(300, position.carPink)
                position.carPink -= 50;
            }
            break;
        case 'green':
            movementFinal = position.carGreen === -900;
            if (!movementFinal && status.carGreen) {
                car.move(325, position.carGreen)
                position.carGreen -= 50;
            }
            break;
        case 'orange':
            movementFinal = position.carOrange === -330;
            if (!movementFinal && status.carOrange) {
                car.move(300, position.carOrange)
                position.carOrange -= 50;
                if (position.carOrange === 270) car.rotate(90)
            }
            break;
        case 'blue':
            movementFinal = position.carBlue === -900;
            if (!movementFinal && status.carBlue) {
                car.move(325, position.carBlue)
                position.carBlue -= 50;
                if (position.carBlue === -350) car.rotate(-90)
            }
            break;
        case 'red':
            movementFinal = position.carRed === -900;
            if (!movementFinal && status.carRed) {
                car.move(300, position.carRed)
                position.carRed -= 50;
                if (position.carRed === 270) car.rotate(90)
            }
            break;
        case 'brown':
            movementFinal = position.carBrown === -900;
            if (!movementFinal && status.carBrown) {
                car.move(325, position.carBrown)
                position.carBrown -= 50;
                if (position.carBrown === 270) car.rotate(90)
            }
            break;
        case 'purple':
            movementFinal = position.carPurple === -230;
            if (!movementFinal && status.carPurple) {
                car.move(300, position.carPurple)
                position.carPurple -= 50;
            }
            break;
        case 'pinkDark':
            movementFinal = position.carPinkDark === -900;
            if (!movementFinal && status.carPinkDark) {
                car.move(325, position.carPinkDark)
                position.carPinkDark -= 50;
            }
            break;
        case 'greenDark':
            movementFinal = position.carGreenDark === -900;
            if (!movementFinal && status.carGreenDark) {
                car.move(300, position.carGreenDark)
                position.carGreenDark -= 50;
            }
            break;
        case 'purpleDark':
            movementFinal = position.carPurpleDark === -900;
            if (!movementFinal && status.carPurpleDark) {
                car.move(325, position.carPurpleDark)
                position.carPurpleDark -= 50;
                if (position.carPurpleDark === 270) car.rotate(90)
            }
            break;
        case 'blueDark':
            movementFinal = position.carBlueDark === -230;
            if (!movementFinal && status.carBlueDark) {
                car.move(300, position.carBlueDark)
                position.carBlueDark -= 50;
            }
            break;
    }

}

function carStop(status, car) {
    switch (car) {
        case 'yellow':
            status.carYellow = false;
            break;
        case 'pink':
            status.carPink = false;
            break;
        case 'green':
            status.carGreen = false;
            break;
        case 'orange':
            status.carOrange = false;
            break;
        case 'blue':
            status.carBlue = false;
            break;
        case 'red':
            status.carRed = false;
            break;
        case 'brown':
            status.carBrown = false;
            break;
        case 'purple':
            status.carPurple = false;
            break;
        case 'pinkDark':
            status.carPinkDark = false;
            break;
        case 'greenDark':
            status.carGreenDark = false;
            break;
        case 'purpleDark':
            status.carPurpleDark = false;
            break;
    }

}

function carContinue(status, car) {
    switch (car) {
        case 'yellow':
            status.carYellow = true;
            break;
        case 'pink':
            status.carPink = true;
            break;
        case 'green':
            status.carGreen = true;
            break;
        case 'blue':
            status.carBlue = true;
            break;
        case 'brown':
            status.carBrown = true;
            break;
        case 'pinkDark':
            status.carPinkDark = true;
            break;
        case 'purpleDark':
            status.carPurpleDark = true;
            break;
    }
}

function carFirstStop(position, carPlace, car) {
    let condition;

    switch (car) {
        case 'yellow':
            condition = position.carYellow === carPlace.firstStop.yellowCar;
            break;
        case 'green':
            condition = position.carGreen === carPlace.firstStop.greenCar;
            break;
        case 'blue':
            condition = position.carBlue === carPlace.firstStop.blueCar;
            break;
        case 'brown':
            condition = position.carBrown === carPlace.firstStop.brownCar;
            break;
        case 'pinkDark':
            condition = position.carPinkDark === carPlace.firstStop.pinkDarkCar;
            break;
        case 'purpleDark':
            condition = position.carPurpleDark === carPlace.firstStop.purpleDarkCar;
            break;
    }

    return condition;
}

function carFirstMovement(position, carPlace, car) {
    let condition;

    switch (car) {
        case 'pink':
            condition = position.carPink === carPlace.firstMovement.pinkCar;
            break;
        case 'green':
            condition = position.carGreen === carPlace.firstMovement.greenCar;
            break;
        case 'orange':
            condition = position.carOrange === carPlace.firstMovement.orangeCar;
            break;
    }

    return condition;
}

function carFinalMovement(position, carPlace, car) {
    let condition;

    switch (car) {
        case 'pink':
            condition = position.carPink === carPlace.finalMovement.pinkCar;
            break;
        case 'yellow':
            condition = position.carYellow === carPlace.finalMovement.yellowCar;
            break;
        case 'green':
            condition = position.carGreen === carPlace.finalMovement.greenCar;
            break;
        case 'orange':
            condition = position.carOrange === carPlace.finalMovement.orangeCar;
            break;
        case 'red':
            condition = position.carRed === carPlace.finalMovement.redCar;
            break;
        case 'blue':
            condition = position.carBlue === carPlace.finalMovement.blueCar;
            break;
        case 'purple':
            condition = position.carPurple === carPlace.finalMovement.purpleCar;
            break;
        case 'brown':
            condition = position.carBrown === carPlace.finalMovement.brownCar;
            break;
        case 'greenDark':
            condition = position.carGreenDark === carPlace.finalMovement.greenDarkCar;
            break;
        case 'pinkDark':
            condition = position.carPinkDark === carPlace.finalMovement.pinkDarkCar;
            break;
        case 'blueDark':
            condition = position.carBlueDark === carPlace.finalMovement.blueDarkCar;
            break;
        case 'purpleDark':
            condition = position.carPurpleDark === carPlace.finalMovement.purpleDarkCar;
            break;
    }

    return condition;
}

function checkStatusCar(status, car) {
    let condition;
    switch (car) {
        case 'pink':
            condition = status.carPink;
            break;
        case 'blue':
            condition = status.carBlue;
            break;
        case 'red':
            condition = status.carRed;
            break;
        case 'brown':
            condition = status.carBrown;
            break;
        case 'purple':
            condition = status.carPurple;
            break;
        case 'pinkDark':
            condition = status.carPinkDark;
            break;
        case 'greenDark':
            condition = status.carGreenDark;
            break;
        case 'purpleDark':
            condition = status.carPurpleDark;
            break;
        case 'blueDark':
            condition = status.carBlueDark;
            break;

        default:
            break;
    }

    return condition;
}

function carMovement(position, orderNumber) {
    let status = {
        carYellow: true,
        carPink: true,
        carGreen: true,
        carOrange: true,
        carBlue: true,
        carBrown: true,
        carRed: true,
        carPurple: true,
        carPinkDark: true,
        carPurpleDark: true,
        carGreenDark: true,
        carBlueDark: true,
        carOrangeDark: true,
        carYellowDark: true,
        carBrownDark: true,
        carRedDark: true
    }

    let carPlace = {
        firstStop: {
            yellowCar: -150,
            greenCar: -150,
            blueCar: -150,
            brownCar: -150,
            pinkDarkCar: -150,
            purpleDarkCar: -150,
        },
        firstMovement: {
            pinkCar: 570,
            orangeCar: 870,
            carGreen: 200,
            greenDarkCar: 570,
        },
        finalMovement: {
            yellowCar: -900,
            greenCar: -900,
            pinkCar: -230,
            orangeCar: -330,
            blueCar: -900,
            redCar: -280,
            purpleCar: -230,
            brownCar: -900,
            greenDarkCar: -230,
            pinkDarkCar: -900,
            purpleDarkCar: -900,
            blueDarkCar: -230
        }
    }

    switch (orderNumber) {
        case 1:
            let carYellow = createCar(draw, 'car_topview_yellow.svg');
            let carPink = createCar(draw, 'car_topview_pink.svg');
            let carGreen = createCar(draw, 'car_topview_green.svg');
            let carOrange = createCar(draw, 'car_topview_orange.svg');

            carYellow.size(200, 120).rotate(90).move(325, 200);
            carGreen.size(200, 120).rotate(90).move(325, 200);
            carPink.size(200, 120).move(300, 870);
            carOrange.size(200, 120).move(300, 870);

            firstFrame(carYellow, carGreen, carPink, carOrange, position, status, carPlace);
            break;
        case 2:
            let carBlue = createCar(draw, 'car_topview_blue.svg');
            let carBrown = createCar(draw, 'car_topview_brown.svg');
            let carRed = createCar(draw, 'car_topview_red.svg');
            let carPurple = createCar(draw, 'car_topview_purple.svg');

            carBlue.size(200, 120).rotate(90).move(325, 200);
            carBrown.size(200, 120).rotate(90).move(325, 200);
            carRed.size(200, 120).move(300, 870);
            carPurple.size(200, 120).move(300, 870);
            secondFrame(carBlue, carBrown, carRed, carPurple, position, status, carPlace);
            break;
        case 3:
            let carPinkDark = createCar(draw, 'car_topview_pink_dark.svg');
            let carPurpleDark = createCar(draw, 'car_topview_purple_dark.svg');
            let carGreenDark = createCar(draw, 'car_topview_green_dark.svg');
            let carBlueDark = createCar(draw, 'car_topview_blue_dark.svg');

            carPinkDark.size(200, 120).rotate(90).move(325, 200);
            carPurpleDark.size(200, 120).rotate(90).move(325, 200);
            carGreenDark.size(200, 120).move(300, 870);
            carBlueDark.size(200, 120).move(300, 870);
            thirdFrame(carPinkDark, carPurpleDark, carGreenDark, carBlueDark, position, status, carPlace);
            break;
        case 4:
            let carOrangeDark = createCar(draw, 'car_topview_orange_dark.svg');
            let carYellowDark = createCar(draw, 'car_topview_yellow_dark.svg');
            let carBrownDark = createCar(draw, 'car_topview_brown_dark.svg');
            let carRedDark = createCar(draw, 'car_topview_red_dark.svg');

            carOrangeDark.size(200, 120).rotate(90).move(325, 200);
            carYellowDark.size(200, 120).rotate(90).move(325, 200);
            carBrownDark.size(200, 120).move(300, 870);
            carRedDark.size(200, 120).move(300, 870);
            fourthFrame(carOrangeDark, carYellowDark, carBrownDark, carRedDark, position, status, carPlace);
            break;
    }
}

function changeColorTrafficLight(status, count, frame) {

    if (frame === 'first') {
        switch (status) {
            case 'RedAndRed':
                if (count === 6 || count === 39 || count === 64 || count === 99) trafficLightRedAndRed();
                break;
            case 'RedAndGreen':
                if (count === 12 || count === 70) trafficLightRedAndGreen();
                break;
            case 'RedAndYellow':
                if (count === 33 || count === 93) trafficLightRedAndYellow();
                break;
            case 'GreenAndRed':
                if (count === 44 || count === 104) trafficLightGreenAndRed();
                break;
            case 'YellowAndRed':
                if (count === 58) trafficLightYellowAndRed();
                break;
        }
    } else if (frame === 'second') {
        switch (status) {
            case 'RedAndRed':
                if (count === 6 || count === 40 || count === 65 || count === 98) trafficLightRedAndRed();
                break;
            case 'RedAndGreen':
                if (count === 12 || count === 71) trafficLightRedAndGreen();
                break;
            case 'RedAndYellow':
                if (count === 34 || count === 92) trafficLightRedAndYellow();
                break;
            case 'GreenAndRed':
                if (count === 45 || count === 103) trafficLightGreenAndRed();
                break;
            case 'YellowAndRed':
                if (count === 59) trafficLightYellowAndRed();
                break;
        }
    } else if (frame === 'third') {
        switch (status) {
            case 'RedAndRed':
                if (count === 6 || count === 39 || count === 64 || count === 97) trafficLightRedAndRed();
                break;
            case 'RedAndGreen':
                if (count === 12 || count === 70) trafficLightRedAndGreen();
                break;
            case 'RedAndYellow':
                if (count === 33 || count === 91) trafficLightRedAndYellow();
                break;
            case 'GreenAndRed':
                if (count === 44 || count === 102) trafficLightGreenAndRed();
                break;
            case 'YellowAndRed':
                if (count === 58) trafficLightYellowAndRed();
                break;
        }
    }

}

function firstFrame(carYellow, carGreen, carPink, carOrange, position, status, carPlace) {
    let count = 0;
    movement = setInterval(() => {
        continueCarTrajectory(carYellow, position, status, 'yellow');
        if (carFirstStop(position, carPlace, 'yellow')) {
            carStop(status, 'yellow');
            changeColorTrafficLight('RedAndRed', count, 'first');
            setTimeout(() => {
                changeColorTrafficLight('RedAndGreen', count, 'first');
                continueCarTrajectory(carPink, position, status, 'pink');
            }, timerTrafficLight);
        }

        if (carFinalMovement(position, carPlace, 'pink')) {
            carStop(status, 'pink');
            changeColorTrafficLight('RedAndYellow', count, 'first');
            setTimeout(() => {
                changeColorTrafficLight('RedAndRed', count, 'first');
                setTimeout(function() {
                    changeColorTrafficLight('GreenAndRed', count, 'first');
                    carContinue(status, 'yellow');
                }, timerTrafficLight);
            }, timerTrafficLight);
        }

        if (carFinalMovement(position, carPlace, 'yellow')) {
            continueCarTrajectory(carGreen, position, status, 'green');
            changeColorTrafficLight('YellowAndRed', count, 'first');
            if (carFirstStop(position, carPlace, 'green')) {
                changeColorTrafficLight('RedAndRed', count, 'first');
                carStop(status, 'green');
                setTimeout(function() {
                    changeColorTrafficLight('RedAndGreen', count, 'first');
                    continueCarTrajectory(carOrange, position, status, 'orange');
                }, timerTrafficLight);
            }
        }

        if (carFinalMovement(position, carPlace, 'orange')) {
            carStop(status, 'orange');
            changeColorTrafficLight('RedAndYellow', count, 'first');
            setTimeout(function() {
                changeColorTrafficLight('RedAndRed', count, 'first');
                setTimeout(function() {
                    changeColorTrafficLight('GreenAndRed', count, 'first');
                    carContinue(status, 'green');
                }, timerTrafficLight);
            }, timerTrafficLight);
        }

        if (carFinalMovement(position, carPlace, 'green')) {
            clearInterval(movement);
            let position = getPositionInitial()
            trafficMovement(position);
        }
        count++;
    }, timerInterval);
}

function secondFrame(carBlue, carBrown, carRed, carPurple, position, status, carPlace) {
    let count = 0;
    movement = setInterval(() => {
        continueCarTrajectory(carBlue, position, status, 'blue');
        if (carFirstStop(position, carPlace, 'blue')) {
            carStop(status, 'blue');
            changeColorTrafficLight('RedAndRed', count, 'second');
            setTimeout(() => {
                changeColorTrafficLight('RedAndGreen', count, 'second');
                continueCarTrajectory(carRed, position, status, 'red');
            }, timerTrafficLight);
        }

        if (carFinalMovement(position, carPlace, 'red')) {
            carStop(status, 'red');
            changeColorTrafficLight('RedAndYellow', count, 'second');
            setTimeout(() => {
                changeColorTrafficLight('RedAndRed', count, 'second');
                setTimeout(() => {
                    changeColorTrafficLight('GreenAndRed', count, 'second');
                    carContinue(status, 'blue');
                }, timerTrafficLight);
            }, timerTrafficLight);
        }

        if (carFinalMovement(position, carPlace, 'blue')) {
            continueCarTrajectory(carBrown, position, status, 'brown');
            changeColorTrafficLight('YellowAndRed', count, 'second');
            if (carFirstStop(position, carPlace, 'brown')) {
                changeColorTrafficLight('RedAndRed', count, 'second');
                carStop(status, 'brown');
                setTimeout(function() {
                    changeColorTrafficLight('RedAndGreen', count, 'second');
                    continueCarTrajectory(carPurple, position, status, 'purple');
                }, timerTrafficLight);
            }
        }

        if (carFinalMovement(position, carPlace, 'purple')) {
            carStop(status, 'purple');
            changeColorTrafficLight('RedAndYellow', count, 'second');
            setTimeout(function() {
                changeColorTrafficLight('RedAndRed', count, 'second');
                setTimeout(function() {
                    changeColorTrafficLight('GreenAndRed', count, 'second');
                    carContinue(status, 'brown');
                }, timerTrafficLight);
            }, timerTrafficLight);
        }

        if (carFinalMovement(position, carPlace, 'brown')) {
            clearInterval(movement);
            let position = getPositionInitial()
            trafficMovement(position);
        }

        count++;
    }, timerInterval);
}

function thirdFrame(carPinkDark, carPurpleDark, carGreenDark, carBlueDark, position, status, carPlace) {
    let count = 0;
    movement = setInterval(() => {
        continueCarTrajectory(carPinkDark, position, status, 'pinkDark');
        if (carFirstStop(position, carPlace, 'pinkDark')) {
            carStop(status, 'pinkDark');
            changeColorTrafficLight('RedAndRed', count, 'third');
            setTimeout(() => {
                changeColorTrafficLight('RedAndGreen', count, 'third');
                continueCarTrajectory(carGreenDark, position, status, 'greenDark');
            }, timerTrafficLight);
        }

        if (carFinalMovement(position, carPlace, 'greenDark')) {
            carStop(status, 'greenDark');
            changeColorTrafficLight('RedAndYellow', count, 'third');
            setTimeout(() => {
                changeColorTrafficLight('RedAndRed', count, 'third');
                setTimeout(() => {
                    changeColorTrafficLight('GreenAndRed', count, 'third');
                    carContinue(status, 'pinkDark');
                }, timerTrafficLight);
            }, timerTrafficLight);
        }

        if (carFinalMovement(position, carPlace, 'pinkDark')) {
            continueCarTrajectory(carPurpleDark, position, status, 'purpleDark');
            changeColorTrafficLight('YellowAndRed', count, 'third');
            if (carFirstStop(position, carPlace, 'purpleDark')) {
                changeColorTrafficLight('RedAndRed', count, 'third');
                carStop(status, 'purpleDark');
                setTimeout(function() {
                    changeColorTrafficLight('RedAndGreen', count, 'third');
                    continueCarTrajectory(carBlueDark, position, status, 'blueDark');
                }, timerTrafficLight);
            }
        }

        if (carFinalMovement(position, carPlace, 'blueDark')) {
            carStop(status, 'blueDark');
            changeColorTrafficLight('RedAndYellow', count, 'third');
            setTimeout(function() {
                changeColorTrafficLight('RedAndRed', count, 'third');
                setTimeout(function() {
                    changeColorTrafficLight('GreenAndRed', count, 'third');
                    carContinue(status, 'purpleDark');
                }, timerTrafficLight);
            }, timerTrafficLight);
        }

        if (carFinalMovement(position, carPlace, 'purpleDark')) {
            clearInterval(movement);
            let position = getPositionInitial()
            trafficMovement(position);
        }

        count++;
    }, timerInterval);
}

function random() {
    let i = Math.floor(Math.random() * 3) + 1;
    if (i <= 0) return random();
    return i;
}

function trafficMovement(position) {
    let orderNumber = random();
    carMovement(position, 3);
}

trafficMovement(position);