/*
Planetary measurements relative to the Sun
*/ 
pRad = {
    saturn: {outer: 183.93228895793544, inner: 153.88649309560518},
    jupiter: {outer: 89.08262406715185, inner: 81.10740472097561},
    mars: {outer: 27.058996539821955, inner: 22.876361835005497},
    earth: {outer: 18.179511520801732, inner: 16.725292124066016},
    venus: {outer: 13.288351891282018, inner: 12.483628022382645},
    mercury: {outer: 8.828342449357729, inner: 4.072423664626422}
}
pDeg = {
    saturn:  { outer: [10, 35, 56], inner: [8, 51,  8] },
    jupiter: { outer: [ 5,  6, 39], inner: [4, 39,  8] },
    mars:    { outer: [ 1, 33,  2], inner: [1, 18, 39] },
    earth:   { outer: [ 1,  2, 30], inner: [0, 57, 30] },
    venus:   { outer: [ 0, 45, 41], inner: [0, 42, 55] },
    mercury: { outer: [ 0, 30, 21], inner: [0, 14,  0] }    
}
// Ellipse class, which extends the virtual base class Curve
function Ellipse( xRadius, yRadius ) {
    THREE.Curve.call( this );
    // add radius as a property
    this.xRadius = xRadius;
    this.yRadius = yRadius;
}
function OrbitRing(radius, lineColor) {
    var curve = new THREE.EllipseCurve(
        0, 0, radius, radius, 0, 2*Math.PI, false, 0);
    var points = curve.getPoints( 50 );
    var ringGeometry = new THREE.BufferGeometry().setFromPoints( points );
    var elipseMaterial = new THREE.LineBasicMaterial( { color : lineColor });
    var ring = new THREE.Line( ringGeometry, elipseMaterial );
    return ring;
}
function OrbitSphere(radius, meshColor, wireframe=true){
    var sphere = new THREE.SphereGeometry(
        radius, 50, 50, 0, 2*Math.PI, 0, Math.PI); // Full Sphere
        // radius, 50, 50, Math.PI, Math.PI, 2*Math.PI/2); // Half Sphere
    var material = new THREE.MeshBasicMaterial(
        {wireframe: wireframe, color: meshColor});
    var mesh = new THREE.Mesh(sphere, material);
    mesh.material.side = THREE.DoubleSide;
    return mesh
}
function Cube(radius, color=0x00ff00, wireframe=true, opacity=0.5){
    // use Pythagorean theorem to get edge length from radius
    var cubeEdge = Math.sqrt(4/3 * Math.pow(radius, 2))
    var material = new THREE.MeshBasicMaterial( 
        { color: color, wireframe: wireframe, opacity: opacity });
    var cubeGeometry =	new THREE.BoxBufferGeometry( cubeEdge, cubeEdge, cubeEdge );
    var cube = new THREE.Mesh( cubeGeometry, material );
    return cube
}
function Tetrahedron(radius, color=0x00ff00, wireframe=true, opacity=0.5){
    var material = new THREE.MeshBasicMaterial( 
        { color: color, wireframe: wireframe, opacity: opacity });
    var tetrahedronGeometry =	new THREE.TetrahedronBufferGeometry( radius );
    tetrahedronGeometry.rotateY(Math.PI / 4);
    tetrahedronGeometry.rotateX(-Math.PI / 5.1);
    var tetrahedron = new THREE.Mesh( tetrahedronGeometry, material );
    return tetrahedron
}
function Dodecahedron(radius, color=0x00ff00, wireframe=true, opacity=0.5){
    var material = new THREE.MeshBasicMaterial( 
        { color: color, wireframe: wireframe, opacity: opacity });
    var dodecahedronGeometry =	new THREE.DodecahedronBufferGeometry( radius );
    var dodecahedron = new THREE.Mesh( dodecahedronGeometry, material );
    return dodecahedron
}
function Icosahedron(radius, color=0x00ff00, wireframe=true, opacity=0.5){
    var material = new THREE.MeshBasicMaterial( 
        { color: color, wireframe: wireframe, opacity: opacity });
    var icosahedronGeometry =	new THREE.IcosahedronBufferGeometry( radius );
    var icosahedron = new THREE.Mesh( icosahedronGeometry, material );
    return icosahedron
}
function Octahedron(radius, color=0x00ff00, wireframe=true, opacity=0.5){
    var material = new THREE.MeshBasicMaterial( 
        { color: color, wireframe: wireframe, opacity: opacity });
    var octahedronGeometry =	new THREE.OctahedronBufferGeometry( radius );
    var octahedron = new THREE.Mesh( octahedronGeometry, material );
    return octahedron
}

const saturnRingColor = 0x007fff;
const saturnSphereColor = 0x007fff;
saturnOuterRing = OrbitRing(pRad.saturn.outer, saturnRingColor);
saturnInnerRing = OrbitRing(pRad.saturn.inner, saturnRingColor);
saturnOuterSphere = OrbitSphere(pRad.saturn.outer, saturnSphereColor);
saturnInnerSphere = OrbitSphere(pRad.saturn.inner, saturnSphereColor);

const jupiterRingColor = 0xff9933;
const jupiterSphereColor = 0xff9933;
jupiterOuterRing = OrbitRing(pRad.jupiter.outer, jupiterRingColor);
jupiterInnerRing = OrbitRing(pRad.jupiter.inner, jupiterRingColor);
jupiterOuterSphere = OrbitSphere(pRad.jupiter.outer, jupiterSphereColor);
jupiterInnerSphere = OrbitSphere(pRad.jupiter.inner, jupiterSphereColor);

const marsRingColor = 0xff0000;
const marsSphereColor = 0xff0000;
marsOuterRing = OrbitRing(pRad.mars.outer, marsRingColor);
marsInnerRing = OrbitRing(pRad.mars.inner, marsRingColor);
marsOuterSphere = OrbitSphere(pRad.mars.outer, marsSphereColor);
marsInnerSphere = OrbitSphere(pRad.mars.inner, marsSphereColor);

const earthRingColor = 0xdff7e0;
const earthSphereColor = 0xdff7e0;
earthOuterRing = OrbitRing(pRad.earth.outer, earthRingColor);
earthInnerRing = OrbitRing(pRad.earth.inner, earthRingColor);
earthOuterSphere = OrbitSphere(pRad.earth.outer, earthSphereColor);
earthInnerSphere = OrbitSphere(pRad.earth.inner, earthSphereColor);

const venusRingColor = 0xc0c0ff;
const venusSphereColor = 0xc0c0ff;
venusOuterRing = OrbitRing(pRad.venus.outer, venusRingColor);
venusInnerRing = OrbitRing(pRad.venus.inner, venusRingColor);
venusOuterSphere = OrbitSphere(pRad.venus.outer, venusSphereColor);
venusInnerSphere = OrbitSphere(pRad.venus.inner, venusSphereColor);

const mercuryRingColor = 0x80ffc0;
const mercurySphereColor = 0x80ffc0;
mercuryOuterRing = OrbitRing(pRad.mercury.outer, mercuryRingColor);
mercuryInnerRing = OrbitRing(pRad.mercury.inner, mercuryRingColor);
mercuryOuterSphere = OrbitSphere(pRad.mercury.outer, mercurySphereColor);
mercuryInnerSphere = OrbitSphere(pRad.mercury.inner, mercurySphereColor);

cube = Cube(pRad.saturn.inner);
tetrahedron = Tetrahedron(pRad.jupiter.inner);
dodecahedron = Dodecahedron(pRad.mars.inner);
icosahedron = Icosahedron(pRad.earth.inner);
octahedron = Octahedron(pRad.venus.inner);