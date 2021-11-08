let draw = SVG().addTo('div').size('800', '800');

let color = {
    lightGreen: '#7CFC00',
    darkGray: '#4c4a4b',
    mediumGray: '#363434',
    red: '#FF0000',
    black: '#000',
    yellow: '#FFFF00',
    green: '#008000',
    lightGray: '#e7e7e7',
    white: '#FFFFFF',
};

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
    carRedDark: 870,
};

function createTheGrass(draw) {
    draw.rect(800, 900).move(0, 0).fill(color.lightGray);
}

function createTheStreet(draw) {
    draw.rect(209, 800).move(290, 0).fill(color.darkGray); // Vertical
    draw.rect(800, 209).move(0, 290).fill(color.darkGray); // Horizontal

    // Vertical - Faixa Amarela
    draw.rect(20, 80).center(400, 20).fill(color.yellow);
    draw.rect(20, 80).center(400, 150).fill(color.yellow);
    draw.rect(20, 80).center(400, 670).fill(color.yellow);
    draw.rect(20, 80).center(400, 800).fill(color.yellow);

    // Horizontal - Faixa Amarela
    draw.rect(80, 20).center(40, 390).fill(color.yellow);
    draw.rect(80, 20).center(170, 390).fill(color.yellow);
    draw.rect(80, 20).center(560, 390).fill(color.yellow);
    draw.rect(80, 20).center(690, 390).fill(color.yellow);
    draw.rect(80, 20).center(820, 390).fill(color.yellow);

    // Faixa de Pedreste - Horizontal - Cima
    draw.rect(15, 50).center(314, 250).fill(color.white);
    draw.rect(15, 50).center(334, 250).fill(color.white);
    draw.rect(15, 50).center(354, 250).fill(color.white);
    draw.rect(15, 50).center(374, 250).fill(color.white);
    draw.rect(15, 50).center(394, 250).fill(color.white);
    draw.rect(15, 50).center(414, 250).fill(color.white);
    draw.rect(15, 50).center(434, 250).fill(color.white);
    draw.rect(15, 50).center(454, 250).fill(color.white);
    draw.rect(15, 50).center(474, 250).fill(color.white);

    // Faixa de Pedreste - Horizontal - Baixo
    draw.rect(15, 50).center(314, 540).fill(color.white);
    draw.rect(15, 50).center(334, 540).fill(color.white);
    draw.rect(15, 50).center(354, 540).fill(color.white);
    draw.rect(15, 50).center(374, 540).fill(color.white);
    draw.rect(15, 50).center(394, 540).fill(color.white);
    draw.rect(15, 50).center(414, 540).fill(color.white);
    draw.rect(15, 50).center(434, 540).fill(color.white);
    draw.rect(15, 50).center(454, 540).fill(color.white);
    draw.rect(15, 50).center(474, 540).fill(color.white);
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
        carRedDark: 870,
    };
}

function continueCarTrajectory(car, position, status, type) {
    let movementFinal;
    switch (type) {
        case 'yellow':
            movementFinal = position.carYellow === -900;
            if (!movementFinal && status.carYellow) {
                car.move(325, position.carYellow);
                position.carYellow -= 50;
            }
            break;
        case 'pink':
            movementFinal = position.carPink === -230;
            if (!movementFinal && status.carPink) {
                car.move(300, position.carPink);
                position.carPink -= 50;
            }
            break;
        case 'green':
            movementFinal = position.carGreen === -900;
            if (!movementFinal && status.carGreen) {
                car.move(325, position.carGreen);
                position.carGreen -= 50;
            }
            break;
        case 'orange':
            movementFinal = position.carOrange === -330;
            if (!movementFinal && status.carOrange) {
                car.move(300, position.carOrange);
                position.carOrange -= 50;
                if (position.carOrange === 270) car.rotate(90);
            }
            break;
        case 'blue':
            movementFinal = position.carBlue === -900;
            if (!movementFinal && status.carBlue) {
                car.move(325, position.carBlue);
                position.carBlue -= 50;
                if (position.carBlue === -350) car.rotate(-90);
            }
            break;
        case 'red':
            movementFinal = position.carRed === -900;
            if (!movementFinal && status.carRed) {
                car.move(300, position.carRed);
                position.carRed -= 50;
                if (position.carRed === 270) car.rotate(90);
            }
            break;
        case 'brown':
            movementFinal = position.carBrown === -900;
            if (!movementFinal && status.carBrown) {
                car.move(325, position.carBrown);
                position.carBrown -= 50;
                if (position.carBrown === 270) car.rotate(90);
            }
            break;
        case 'purple':
            movementFinal = position.carPurple === -230;
            if (!movementFinal && status.carPurple) {
                car.move(300, position.carPurple);
                position.carPurple -= 50;
            }
            break;
        case 'pinkDark':
            movementFinal = position.carPinkDark === -900;
            if (!movementFinal && status.carPinkDark) {
                car.move(325, position.carPinkDark);
                position.carPinkDark -= 50;
            }
            break;
        case 'greenDark':
            movementFinal = position.carGreenDark === -900;
            if (!movementFinal && status.carGreenDark) {
                car.move(300, position.carGreenDark);
                position.carGreenDark -= 50;
            }
            break;
        case 'purpleDark':
            movementFinal = position.carPurpleDark === -900;
            if (!movementFinal && status.carPurpleDark) {
                car.move(325, position.carPurpleDark);
                position.carPurpleDark -= 50;
                if (position.carPurpleDark === 270) car.rotate(90);
            }
            break;
        case 'blueDark':
            movementFinal = position.carBlueDark === -230;
            if (!movementFinal && status.carBlueDark) {
                car.move(300, position.carBlueDark);
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

function changeColorTrafficLight(status, step, frame) {
    if (frame === 'first') {
        switch (status) {
            case 'RedAndRed':
                if (step === 6 || step === 39 || step === 64 || step === 99) trafficLightRedAndRed();
                break;
            case 'RedAndGreen':
                if (step === 12 || step === 70) trafficLightRedAndGreen();
                break;
            case 'RedAndYellow':
                if (step === 33 || step === 93) trafficLightRedAndYellow();
                break;
            case 'GreenAndRed':
                if (step === 44 || step === 104) trafficLightGreenAndRed();
                break;
            case 'YellowAndRed':
                if (step === 58 || step === 118) trafficLightYellowAndRed();
                break;
        }
    } else if (frame === 'second') {
        switch (status) {
            case 'RedAndRed':
                if (step === 6 || step === 40 || step === 65 || step === 98) trafficLightRedAndRed();
                break;
            case 'RedAndGreen':
                if (step === 12 || step === 71) trafficLightRedAndGreen();
                break;
            case 'RedAndYellow':
                if (step === 34 || step === 92) trafficLightRedAndYellow();
                break;
            case 'GreenAndRed':
                if (step === 45 || step === 103) trafficLightGreenAndRed();
                break;
            case 'YellowAndRed':
                if (step === 59 || step === 117) trafficLightYellowAndRed();
                break;
        }
    } else if (frame === 'third') {
        switch (status) {
            case 'RedAndRed':
                if (step === 6 || step === 39 || step === 64 || step === 97) trafficLightRedAndRed();
                break;
            case 'RedAndGreen':
                if (step === 12 || step === 70) trafficLightRedAndGreen();
                break;
            case 'RedAndYellow':
                if (step === 33 || step === 91) trafficLightRedAndYellow();
                break;
            case 'GreenAndRed':
                if (step === 44 || step === 102) trafficLightGreenAndRed();
                break;
            case 'YellowAndRed':
                if (step === 58 || step === 116) trafficLightYellowAndRed();
                break;
        }
    }
}

function carMovement(position, orderNumber) {
    let nameColor = {
        yellow: 'yellow',
        pink: 'pink',
        green: 'green',
        orange: 'orange',
        blue: 'blue',
        red: 'red',
        brown: 'brown',
        purple: 'purple',
        pinkDark: 'pinkDark',
        greenDark: 'greenDark',
        purpleDark: 'purpleDark',
        blueDark: 'blueDark',
    };

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
        carRedDark: true,
    };

    let carPlace = {
        firstStop: {
            yellowCar: -150,
            greenCar: -150,
            blueCar: -150,
            brownCar: -150,
            pinkDarkCar: -150,
            purpleDarkCar: -150,
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
            blueDarkCar: -230,
        },
    };

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

            frame(
                carYellow,
                carPink,
                carGreen,
                carOrange,
                position,
                status,
                carPlace,
                nameColor.yellow,
                nameColor.pink,
                nameColor.green,
                nameColor.orange,
                'first'
            );
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

            frame(
                carBlue,
                carRed,
                carBrown,
                carPurple,
                position,
                status,
                carPlace,
                nameColor.blue,
                nameColor.red,
                nameColor.brown,
                nameColor.purple,
                'second'
            );
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

            frame(
                carPinkDark,
                carGreenDark,
                carPurpleDark,
                carBlueDark,
                position,
                status,
                carPlace,
                nameColor.pinkDark,
                nameColor.greenDark,
                nameColor.purpleDark,
                nameColor.blueDark,
                'third'
            );
            break;
    }
}

function frame(
    car1,
    car2,
    car3,
    car4,
    position,
    status,
    carPlace,
    nameColor1,
    nameColor2,
    nameColor3,
    nameColor4,
    type
) {
    let step = 0;
    movement = setInterval(() => {
        continueCarTrajectory(car1, position, status, nameColor1);
        if (carFirstStop(position, carPlace, nameColor1)) {
            carStop(status, nameColor1);
            changeColorTrafficLight('RedAndRed', step, type);
            setTimeout(() => {
                changeColorTrafficLight('RedAndGreen', step, type);
                continueCarTrajectory(car2, position, status, nameColor2);
            }, timerTrafficLight);
        }

        if (carFinalMovement(position, carPlace, nameColor2)) {
            carStop(status, nameColor2);
            changeColorTrafficLight('RedAndYellow', step, type);
            setTimeout(() => {
                changeColorTrafficLight('RedAndRed', step, type);
                setTimeout(() => {
                    changeColorTrafficLight('GreenAndRed', step, type);
                    carContinue(status, nameColor1);
                }, timerTrafficLight);
            }, timerTrafficLight);
        }

        if (carFinalMovement(position, carPlace, nameColor1)) {
            continueCarTrajectory(car3, position, status, nameColor3);
            changeColorTrafficLight('YellowAndRed', step, type);
            if (carFirstStop(position, carPlace, nameColor3)) {
                changeColorTrafficLight('RedAndRed', step, type);
                carStop(status, nameColor3);
                setTimeout(() => {
                    changeColorTrafficLight('RedAndGreen', step, type);
                    continueCarTrajectory(car4, position, status, nameColor4);
                }, timerTrafficLight);
            }
        }

        if (carFinalMovement(position, carPlace, nameColor4)) {
            carStop(status, nameColor4);
            changeColorTrafficLight('RedAndYellow', step, type);
            setTimeout(() => {
                changeColorTrafficLight('RedAndRed', step, type);
                setTimeout(() => {
                    changeColorTrafficLight('GreenAndRed', step, type);
                    carContinue(status, nameColor3);
                }, timerTrafficLight);
            }, timerTrafficLight);
        }

        if (carFinalMovement(position, carPlace, nameColor3)) {
            carStop(status, nameColor3);
            changeColorTrafficLight('YellowAndRed', step, type);
            clearInterval(movement);
            location.reload();
            let position = getPositionInitial();
            trafficMovement(position);
        }
        step++;
    }, timerInterval);
}

function random() {
    let i = Math.floor(Math.random() * 3) + 1;
    if (i <= 0) return random();
    return i;
}

function trafficMovement(position) {
    let orderNumber = random();
    carMovement(position, orderNumber);
}

trafficMovement(position);