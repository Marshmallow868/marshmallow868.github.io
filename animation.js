const canvas = document.getElementById("animationCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - 150;

let particles = [];

class Particle {
    constructor() {
        this.x = canvas.width + 10;
        this.y = Math.random() * canvas.height;
        this.vx = -1 - Math.random();
        this.vy = -0.3 - Math.random();
    }
    update() {
        this.x += this.vx;
        this.y += this.vy;
    }
    draw() {
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (Math.random() < 0.05) particles.push(new Particle());
    particles.forEach((particle) => {
        particle.update();
        particle.draw();
    });
    particles = particles.filter((particle) => particle.x > 0 && particle.y > 0);
}

function mainLoop() {
  updateCanvas();
  requestAnimationFrame(mainLoop);
}
requestAnimationFrame(mainLoop);