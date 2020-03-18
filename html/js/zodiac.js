function ZodiacRing(innerRadius, outerRadius, opacity=0.5){
    var ring = new THREE.RingGeometry( innerRadius, outerRadius, 12 );
    var material = new THREE.MeshNormalMaterial({wireframe: false, opacity: opacity, depthTest: false});
    var mesh = new THREE.Mesh(ring, material);
    mesh.material.side = THREE.DoubleSide;
    return mesh
}
// const loader = new THREE.TextureLoader();
// var signs = [
//     new THREE.MeshLambertMaterial({
//         map: loader.load('images/Aquarius.png')
//     }),
//     new THREE.MeshLambertMaterial({
//         map: loader.load('images/Aries.png')
//     }),
//     new THREE.MeshLambertMaterial({
//         map: loader.load('images/Cancer.png')
//     }),
//     new THREE.MeshLambertMaterial({
//         map: loader.load('images/Capricorn.png')
//     }),
//     new THREE.MeshLambertMaterial({
//         map: loader.load('images/Gemini.png')
//     }),
//     new THREE.MeshLambertMaterial({
//         map: loader.load('images/Leo.png')
//     }),
//     new THREE.MeshLambertMaterial({
//         map: loader.load('images/Libra.png')
//     }),
//     new THREE.MeshLambertMaterial({
//         map: loader.load('images/Pisces.png')
//     }),
//     new THREE.MeshLambertMaterial({
//         map: loader.load('images/Sagittarius.png')
//     }),
//     new THREE.MeshLambertMaterial({
//         map: loader.load('images/Scorpio.png')
//     }),
//     new THREE.MeshLambertMaterial({
//         map: loader.load('images/Taurus.png')
//     }),
//     new THREE.MeshLambertMaterial({
//         map: loader.load('images/Virgo.png')
//     })
// ]

const zodiacRingColor = 0xa2a2a2; //0x454545; //0x242745;
zodiacRing = ZodiacRing(200, 225, zodiacRingColor);