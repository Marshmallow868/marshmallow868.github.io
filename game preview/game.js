const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const keys = {}, trees = [], rocks = [];
const player = {
    x: canvas.width / 2 - 15, y: canvas.height / 2 - 15, width: 30, height: 30, speed: 1, image: new Image(), lives: 3
};

function update() {
    updatePlayerPositions();
    updatecanvas();
    requestAnimationFrame(update);
}
update();

function loadImage(item, src) {
    item.image.onload = () => update();
    item.image.onerror = () => console.error(`Error loading image: ${src}`);
    item.image.src = src;
}
loadImage(player, "game preview/textures/player.png");

function checkCollisionTree(newTree, existingTrees) {
    for (const tree of existingTrees) {
        if (
            newTree.x < tree.x + tree.width &&
            newTree.x + newTree.width > tree.x &&
            newTree.y < tree.y + tree.height &&
            newTree.y + newTree.height > tree.y
        ) return true;
    }
    return false;
}

function plantTrees(numTrees) {
    for (let i = 0; i < numTrees; i++) {
        let newTree;
        do {
            const randomX = Math.random() * (canvas.width - 90);
            const randomY = Math.random() * (canvas.height - 96);

            newTree = {
                x: randomX,
                y: randomY,
                width: 90,
                height: 96,
                image: new Image()
            };
        } while (checkCollisionTree(newTree, trees));
        loadImage(newTree, "game preview/textures/tree.png");
        trees.push(newTree);
    }
}
plantTrees(3);

window.addEventListener("keydown", (e) => keys[e.key] = true);
window.addEventListener("keyup", (e) => keys[e.key] = false);
function updatePlayerPositions() {
    if (keys["w"]) player.y -= player.speed;
    if (keys["a"]) player.x -= player.speed;
    if (keys["s"]) player.y += player.speed;
    if (keys["d"]) player.x += player.speed;
    if (player.x < 0) player.x = 0;
    else if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
    if (player.y < 0) player.y = 0;
    else if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
}

function updatecanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    rocks.forEach(rock => ctx.drawImage(rock.image, rock.x, rock.y, rock.width, rock.height));
    ctx.drawImage(player.image, player.x, player.y, player.width, player.height);
    trees.forEach(tree => ctx.drawImage(tree.image, tree.x, tree.y, tree.width, tree.height));
}