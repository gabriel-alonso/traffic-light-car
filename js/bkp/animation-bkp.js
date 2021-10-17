var draw = SVG().addTo('div').size('800', '800');

draw.rect(800, 900).move(0, 0).fill('#7CFC00'); //cor do gramado
draw.rect(209, 800).move(290, 0).fill('#4c4a4b'); //pista vertical
draw.rect(800, 209).move(0, 290).fill('#4c4a4b'); //pista horizontal

var trafficLightRed = draw.path();
trafficLightRed.marker('end', 200, 300, function(add) {
    add.rect(55, 100).center(150, 50).fill('#000').radius(8);
    add.circle(25).center(150, 20).fill('red');
    add.circle(25).center(150, 50).fill('#363434');
    add.circle(25).center(150, 80).fill('#363434');
});

var trafficLightYellow = draw.path();
trafficLightYellow.marker('end', 200, 300, function(add) {
    add.rect(55, 100).center(150, 50).fill('#000').radius(8);
    add.circle(25).center(150, 20).fill('#363434');
    add.circle(25).center(150, 50).fill('yellow');
    add.circle(25).center(150, 80).fill('#363434');
});

var trafficLightGreen = draw.path();
trafficLightGreen.marker('end', 200, 300, function(add) {
    add.rect(55, 100).center(150, 50).fill('#000').radius(8);
    add.circle(25).center(150, 20).fill('#363434');
    add.circle(25).center(150, 50).fill('#363434');
    add.circle(25).center(150, 80).fill('green');
});



/* Carro */
var carYellow = draw.image('./img/car_topview_yellow.svg');
var carPink = draw.image('./img/car_topview_pink.svg');

carYellow.size(200, 120).rotate(90).move(325, 0)
carPink.size(200, 120).move(300, 670)

/* Semaforo de cima */
trafficLightRed1 = draw.use(trafficLightRed);
trafficLightRed1.move(163, 320);
trafficLightYellow1 = draw.use(trafficLightYellow);
trafficLightYellow1.move(163, 320);
trafficLightYellow1.hide();
trafficLightGreen1 = draw.use(trafficLightGreen);
trafficLightGreen1.move(163, 320);
trafficLightGreen1.hide();

/* Semaforo de baixo */
trafficLightRed2 = draw.use(trafficLightRed);
trafficLightRed2.move(530, 630);
trafficLightYellow2 = draw.use(trafficLightYellow);
trafficLightYellow2.move(570, 630);
trafficLightYellow2.hide();
trafficLightGreen2 = draw.use(trafficLightGreen);
trafficLightGreen2.move(570, 630);
trafficLightGreen2.hide();

// Variaveis
var positionShipX = 0;
var positionShipXY = 400;
var positionShipY = 200;
var shipTurn1 = Math.floor(Math.random() * 2);
var shipTurn2 = Math.floor(Math.random() * 2);

// Funcao para fazer o Ship1 reto ou virar
var myCar1 = setInterval(moveCar1, 7);
async function moveCar1() {
    if (shipTurn1 == 0 && positionShipX == 400) {
        car1.rotate(270);
        positionShipX++;
    }

    car1.move(positionShipX, positionShipXY);

    if (positionShipX >= 1000) {
        shipTurn1 = Math.floor(Math.random() * 2);
        car1.remove();
        car1 = draw.use(carYellow);
        car1.move(100, 500);

        trafficLightRed1.hide();
        trafficLightYellow1.show();
        trafficLightGreen1.hide();
        positionShipX = 0;
    } else if (positionShipX == 250) {
        trafficLightRed1.show();
        trafficLightYellow1.hide();
        trafficLightGreen1.hide();
        clearInterval(myCar1);
        await sleep(10000).then(() => {
            positionShipX = positionShipX + 1;
            myCar1 = setInterval(moveCar1, 7);
            trafficLightRed1.hide();
            trafficLightYellow1.hide();
            trafficLightGreen1.show();
        });
        positionShipX = positionShipX + 1;
    } else {
        positionShipX = positionShipX + 1;
    }
}

// Funcao para fazer o Ship2 reto ou virar
var myCar2 = setInterval(moveCar2, 6);
async function moveCar2() {
    if (shipTurn2 == 0 && positionShipY == 800) {
        car2.rotate(90);
        positionShipY++;
    }

    car2.move(positionShipY - 800, 0);

    if (positionShipY >= 1300) {
        shipTurn2 = Math.floor(Math.random() * 2);
        car2.remove();
        car2 = draw.use(carYellow);
        car2.move(400, 0).rotate(270);

        trafficLightRed2.hide();
        trafficLightYellow2.show();
        trafficLightGreen2.hide();
        positionShipY = 200;
    } else if (positionShipY == 670) {
        trafficLightRed2.show();
        trafficLightYellow2.hide();
        trafficLightGreen2.hide();
        clearInterval(myCar2);
        await sleep(33000).then(() => {
            positionShipY = positionShipY + 1;
            myCar2 = setInterval(moveCar2, 6);
            trafficLightRed2.hide();
            trafficLightYellow2.hide();
            trafficLightGreen2.show();
        });
        positionShipY = positionShipY + 1;
    } else {
        positionShipY = positionShipY + 1;
    }
}

/* Função sleep */
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}