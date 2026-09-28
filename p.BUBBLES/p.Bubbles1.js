const BUBBLESmv = document.querySelector('model-viewer');
const ax = 145;
const ay = 60;
const d = '200m';

BUBBLESmv.removeAttribute('camera-controls');

window.addEventListener('mousemove', (event) => {
    const x = (event.clientX / window.innerWidth) - 0.5;
    const y = (event.clientY / window.innerHeight) - 0.5;
    const axmax = 40;
    const aymax = 20;
    newTheta = ax + (x * axmax)
    newPhi = ay + (y * aymax);

    BUBBLESmv.cameraOrbit = `${newTheta}deg ${newPhi}deg ${d}`;
});