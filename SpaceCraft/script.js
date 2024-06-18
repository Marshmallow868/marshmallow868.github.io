import * as THREE from 'https://unpkg.com/three@0.152.2/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    9999999
);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 100000000);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

const something = {
    geometry: new THREE.SphereGeometry( 0.05, 1000, 60),
    material: new THREE.MeshBasicMaterial( { color: 0x000000 } )
};
something.mesh = new THREE.Mesh(something.geometry, something.material );
scene.add(something.mesh);
something.material.side = THREE.BackSide;

/*
object.on('click', function() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
});
*/

const middle_of_the_earth = {
    geometry: new THREE.SphereGeometry( 1, 1000, 60),
    material: new THREE.MeshBasicMaterial( { color: 0xffffcc } )
};
middle_of_the_earth.mesh = new THREE.Mesh(middle_of_the_earth.geometry, middle_of_the_earth.material );
scene.add(middle_of_the_earth.mesh);
middle_of_the_earth.material.side = THREE.BackSide;

const middle_of_the_earth_2 = {
    geometry: new THREE.SphereGeometry( 1, 1000, 60),
    material: new THREE.MeshBasicMaterial( { color: 0xffffcc } )
};
middle_of_the_earth_2.mesh = new THREE.Mesh(middle_of_the_earth_2.geometry, middle_of_the_earth_2.material );
scene.add(middle_of_the_earth_2.mesh);
middle_of_the_earth_2.material.side = THREE.FrontSide;

const half_of_the_earth = {
    geometry: new THREE.SphereGeometry( 3, 1000, 60),
    material: new THREE.MeshBasicMaterial( { color: 0xfed240 } )
};
half_of_the_earth.mesh = new THREE.Mesh(half_of_the_earth.geometry, half_of_the_earth.material );
scene.add(half_of_the_earth.mesh);
half_of_the_earth.material.side = THREE.BackSide;

const half_of_the_earth_2 = {
    geometry: new THREE.SphereGeometry( 3, 1000, 60),
    material: new THREE.MeshBasicMaterial( { color: 0xfed240 } )
};
half_of_the_earth_2.mesh = new THREE.Mesh(half_of_the_earth_2.geometry, half_of_the_earth_2.material );
scene.add(half_of_the_earth_2.mesh);
half_of_the_earth_2.material.side = THREE.FrontSide;

const world = {
    geometry: new THREE.SphereGeometry(5, 1000, 65),
    material: new THREE.MeshBasicMaterial( { color: 0x41a317 } )
};
world.mesh = new THREE.Mesh(world.geometry, world.material);
scene.add(world.mesh);

const atmosphere = {
    geometry: new THREE.SphereGeometry( 7, 1000, 60),
    material: new THREE.MeshBasicMaterial( { color: 0x45b6fe, opacity: 0.2, transparent: true } )
};
atmosphere.mesh = new THREE.Mesh(atmosphere.geometry, atmosphere.material );
scene.add(atmosphere.mesh);
atmosphere.material.side = THREE.BackSide;

const atmosphere_2 = {
    geometry: new THREE.SphereGeometry( 7, 1000, 60),
    material: new THREE.MeshBasicMaterial( { color: 0x45b6fe, opacity: 0.2, transparent: true } )
};
atmosphere_2.mesh = new THREE.Mesh(atmosphere_2.geometry, atmosphere_2.material );
scene.add(atmosphere_2.mesh);
atmosphere_2.material.side = THREE.FrontSide;

const end_of_the_solar_system = {
    geometry: new THREE.SphereGeometry( 1000, 1000, 25),
    material: new THREE.MeshBasicMaterial({ color: 0xcc0000, opacity: 0.2, transparent: true })
}
end_of_the_solar_system.mesh = new THREE.Mesh(end_of_the_solar_system.geometry, end_of_the_solar_system.material);
scene.add(end_of_the_solar_system.mesh);

const end_of_the_universe = {
    geometry: new THREE.SphereGeometry( 20000, 10000, 25),
    material: new THREE.MeshBasicMaterial({ color: 0x000000 })
}
end_of_the_universe.mesh = new THREE.Mesh(end_of_the_universe.geometry, end_of_the_universe.material);
scene.add(end_of_the_universe.mesh);
end_of_the_universe.material.side = THREE.BackSide;

const tree_foot = {
    geometry: new THREE.BoxGeometry(11, 0.2, 0.2),
    material: new THREE.MeshBasicMaterial( { color: 0x732e00 } )
};
const tree_top = {
    geometry: new THREE.SphereGeometry(0.3, 15, 15),
    material: new THREE.MeshBasicMaterial( { color: 0x0b6623 } )
};
const tree_top_2 = {
    geometry: new THREE.SphereGeometry(0.3, 15, 15),
    material: new THREE.MeshBasicMaterial( { color: 0x0b6623 } )
};
tree_foot.mesh = new THREE.Mesh(tree_foot.geometry, tree_foot.material);
tree_top.mesh = new THREE.Mesh(tree_top.geometry, tree_top.material);
tree_top_2.mesh = new THREE.Mesh(tree_top_2.geometry, tree_top_2.material);
scene.add(tree_foot.mesh);
scene.add(tree_top.mesh);
scene.add(tree_top_2.mesh);
tree_foot.mesh.rotation.y = 1;
tree_top.mesh.position.x = -3;
tree_top.mesh.position.z = 4.63;
tree_top_2.mesh.position.x = 3;
tree_top_2.mesh.position.z = -4.63;

const tree_foot_2 = {
    geometry: new THREE.BoxGeometry(11, 0.2, 0.2),
    material: new THREE.MeshBasicMaterial( { color: 0x732e00 } )
};
const tree_top_3 = {
    geometry: new THREE.SphereGeometry(0.3, 15, 15),
    material: new THREE.MeshBasicMaterial( { color: 0x0b6623 } )
};
const tree_top_4 = {
    geometry: new THREE.SphereGeometry(0.3, 15, 15),
    material: new THREE.MeshBasicMaterial( { color: 0x0b6623 } )
};
tree_foot_2.mesh = new THREE.Mesh(tree_foot_2.geometry, tree_foot_2.material);
tree_top_3.mesh = new THREE.Mesh(tree_top_3.geometry, tree_top_3.material);
tree_top_4.mesh = new THREE.Mesh(tree_top_4.geometry, tree_top_4.material);
scene.add(tree_foot_2.mesh);
scene.add(tree_top_3.mesh);
scene.add(tree_top_4.mesh);
tree_foot_2.mesh.rotation.y = -1;
tree_top_3.mesh.position.x = 3;
tree_top_3.mesh.position.z = 4.63;
tree_top_4.mesh.position.x = -3;
tree_top_4.mesh.position.z = -4.63;

const player = {
    geometry: new THREE.BoxGeometry(0.2, 0.2, 10.8),
    material: new THREE.MeshBasicMaterial({ color: 0xff0000 })
};
player.mesh = new THREE.Mesh(player.geometry, player.material);
scene.add(player.mesh);

camera.position.z = 25;

const planet = 1;

document.addEventListener("keydown", setupKeyControls, false);

function setupKeyControls() {
    var keyCode = event.which;
    if (keyCode == 87) {
        player.mesh.rotation.x -= 0.05;
    } else if (keyCode == 83) {
        player.mesh.rotation.x += 0.05;
    } else if (keyCode == 65) {
        player.mesh.rotation.y -= 0.05;
    } else if (keyCode == 68) {
        player.mesh.rotation.y += 0.05;
    }
    if (planet == 1 && keyCode == 32) {
        planet = 1
        player.mesh.position.set(20, 20, 20);
        camera.position.set(20, 20, 45);
    }
    if (planet == 2 && keyCode == 32) {
        planet = 1
        player.mesh.position.set(0, 0, 0);
        camera.position.set(0, 0, 25);
    }
};

function render() {
    renderer.render(scene, camera);
    controls.update();
    controls.target.set(0, 0, 0);
    requestAnimationFrame(render);
}
render();