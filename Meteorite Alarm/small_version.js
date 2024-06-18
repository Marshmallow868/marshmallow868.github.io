let meteors = [
    {x: 20, y: 25, v: 4, d: 21, t: 0},
    {x: 198, y: 25, v: 3, d: 20, t: 0},
    {x: 252, y: 25, v: 6, d: 19, t: 0},
    {x: 430, y: 25, v: 5, d: 20, t: 0},
    {x: 78, y: 25, v: 4, d: 19, t: 0},
    {x: 372, y: 25, v: 4, d: 21, t: 0},
    {x: 140, y: 25, v: 7, d: 20, t: 0},
    {x: 310, y: 25, v: 5, d: 19, t: 0}
];

let ship = {};
let ship_farbe = (135);
let points = 0;
let schilder = 500;
let lives = 3;
let regeneration = 3;
let start = 400;
let run = 0;
let highscore = 0;
let looos = 0;
let wow = 25;
let tot = 0;

function setup() {
    createCanvas(450, 300);
    frameRate(60);
    background(95);
    ship = {x: width / 2, y: height / 2};
    noLoop();
}

function draw() {
    background(95);
    fill(0);
    rect(5, 5, 440, 290, 10);

    noStroke();
    fill(130, 74, 0)
    for (let i = 0; i < meteors.length; i = i + 1) {
        let cm = meteors[i];

        if (cm.t == 3) fill(0);
        if (cm.t == 2) fill(40, 24, 0);
        if (cm.t == 1) fill(80, 54, 0);
        if (cm.t == 0) fill(130, 74, 0);

        if (cm.y < ship.y + 16.5 && cm.y > ship.y - 16.5 && cm.x < ship.x + 16.5) {
            if (cm.x > ship.x - 16.5 && cm.t != 1 && start == 0 && cm.a == 0) {
                if (!keyIsDown(191) && schilder > 0) {
                    lives -= 1;
                    cm.a = 1;
                }
            }
        }

        circle(cm.x, cm.y, cm.d);
        cm.y += cm.v;

        if (cm.y > height + 10) {
            cm.y = 0;
            cm.x = random(0, width);
            cm.x = int(cm.x);
            cm.t = 0;
            cm.a = 0;
            if (start == 0) {
                points += 100;
                if (points > highscore) highscore += 100;
            }
        }
    }

    if (lives == 1) wow = 0;
    else if (lives == 0) {
      tot = 1;
      lives = 3;
    }

    if (tot == 1 && wow == 25) {
        fill(255);
        textSize(12);
        text("Press Space to start again", 298, 289);
        lives = 3;
        regeneration = 3;
        schilder = 500;
        munition = 500;
        points = 0;
        start = 400;
        ship = {x: width / 2, y: height / 2};
        noLoop();
        tot = 0;
    }

    if (keyIsDown(87) && ship.y > 15) ship.y -= 4;
    if (keyIsDown(68) && ship.x < width - 15) ship.x += 4;
    if (keyIsDown(83) && ship.y < height - 15) ship.y += 4;
    if (keyIsDown(65) && ship.x > 15) ship.x -= 4;

    if (run == 0 || keyIsDown(71)) {
        fill(0);
        rect(5, 5, 440, 290, 10);
        fill(255);
        if (run == 0) {
            textSize(12);
            text("Press Space to start", 330, 289);
            textSize(20);
            text("Meteorite Alarm - Start", 9, 25);
        }
        if (run == 1) {
            textSize(20);
            text("Meteorite Alarm - Guide", 9, 25);
        }
        textSize(10);
        text("Use WASD to control your ship", 10, 48);
        text("Press Esc to pause the game", 10, 60);
        text("Press # to activate the shields", 10, 72);
        text("You can only use it for 10 seconds", 10, 84);
        text("Press R to regenerate", 10, 96);
        text("Press G to open this guide", 10, 108);
        noLoop();
    }

    if (keyIsDown(191) && schilder != 0) {
        stroke("yellow");
        strokeWeight(17);
        point(ship.x, ship.y);
        schilder -= 1;
    }
    stroke(ship_farbe);
    strokeWeight(15);
    point(ship.x, ship.y);
    if (wow < 25 && tot == 1) {
        stroke("yellow");
        strokeWeight(wow);
        point(ship.x, ship.y);
        wow = wow + 1;
    }
    noStroke();

    fill(255);
    circle(432, 18, 15);
    if (lives == 3) {
        ship_farbe = (135);
        circle(412, 18, 15);
        circle(392, 18, 15);
    } else if (lives == 2) {
        ship_farbe = (100);
        circle(412, 18, 15);
    } else if (lives == 1) ship_farbe = (65);

    textSize(20);
    fill(255);
    text("Meteorite Alarm", 9, 25);

    textSize(12);
    fill(255);
    text("Shield: " + schilder / 50 + " seconds", 10, 250);
    text("Regeneration: " + regeneration, 10, 263);
    text("Score: " + points, 10, 276);
    text("Highscore: " + highscore, 10, 289);

    if (keyIsDown(82) && lives != 3 && regeneration != 0) {
        lives = 3;
        regeneration = regeneration - 1;
    }

    if (keyIsDown(27)) {
        fill(255);
        textSize(30);
        text("Pause", 186, 159);
        textSize(8);
        text("Press C to continue", 194.5, 290);
        noLoop();
    }

    if (start > 0) start -= 2;

    textSize(30);
    fill(255);
    if (start < 398 && start > 300) text("3", 220, 159);
    else if (start < 300 && start > 200) text("2", 220, 159);
    else if (start < 200 && start > 100) text("1", 220, 159);
    else if (start < 100 && start > 0) text("Go!", 200, 159);
}

function keyPressed() {
    if (keyCode == 32) {
        run = 1;
        loop();
    } else if (keyCode == 67) {
        loop();
        start = 400;
    }
}