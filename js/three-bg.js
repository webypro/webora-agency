if (window.innerWidth < 768) return;

const canvas = document.getElementById("bg-canvas");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

renderer.setSize(innerWidth, innerHeight);
camera.position.z = 4;

const geometry = new THREE.IcosahedronGeometry(1.5);
const material = new THREE.MeshBasicMaterial({
  wireframe: true,
  color: 0x00f0c0
});

const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

function animate() {
  requestAnimationFrame(animate);
  mesh.rotation.y += 0.002;
  renderer.render(scene, camera);
}

animate();
