
// Perspective is one of a few cameras
// FOV - first param is in degrees
var camera = new THREE.PerspectiveCamera( 
    70, window.innerWidth / window.innerHeight, 1, 20 );
var scene = new THREE.Scene();
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
camera.position.z = 8;

// Ellipse class, which extends the virtual base class Curve
function Ellipse( xRadius, yRadius ) {
    THREE.Curve.call( this );
    // add radius as a property
    this.xRadius = xRadius;
    this.yRadius = yRadius;
}
function Ring(radius, lineColor) {
    var curve = new THREE.EllipseCurve(
        0, 0, radius, radius, 0, 2*Math.PI, false, 0);
    var points = curve.get_points( 50 );
    var ringGeometry = new THREE.BufferGeometry().setFromPoints( points );
    var elipseMaterial = new THREE.LineBasicMaterial( { color : lineColor });
    var ring = new THREE.Line( ringGeometry, elipseMaterial );
    return ring;
}
function Cube(radius, color, wireframe, opacity){
    // use Pythagorean theorem to get edge length from radius
    var cubeEdge = Math.sqrt(2) * radius
    var material = new THREE.MeshBasicMaterial( 
        { color: color, wireframe: wireframe, opacity: opacity });
    var cubeGeometry =	new THREE.BoxBufferGeometry( cubeEdge, cubeEdge, cubeEdge );
    var cube = new THREE.Mesh( cubeGeometry, material );
    return cube
}
function Tetrahedron(radius, color, wireframe, opacity){
    var material = new THREE.MeshBasicMaterial( 
        { color: color, wireframe: wireframe, opacity: opacity });
    var tetrahedronGeometry =	new THREE.TetrahedronBufferGeometry( radius );
    var tetrahedron = new THREE.Mesh( tetrahedronGeometry, material );
    return tetrahedron
}
function Dodecahedron(radius, color, wireframe, opacity){
    var material = new THREE.MeshBasicMaterial( 
        { color: color, wireframe: wireframe, opacity: opacity });
    var dodecahedronGeometry =	new THREE.DodecahedronBufferGeometry( radius );
    var dodecahedron = new THREE.Mesh( dodecahedronGeometry, material );
    return dodecahedron
}
function Icosahedron(radius, color, wireframe, opacity){
    var material = new THREE.MeshBasicMaterial( 
        { color: color, wireframe: wireframe, opacity: opacity });
    var icosahedronGeometry =	new THREE.IcosahedronBufferGeometry( radius );
    var icosahedron = new THREE.Mesh( icosahedronGeometry, material );
    return icosahedron
}
function Octahedron(radius, color, wireframe, opacity){
    var material = new THREE.MeshBasicMaterial( 
        { color: color, wireframe: wireframe, opacity: opacity });
    var octahedronGeometry =	new THREE.DodecahedronBufferGeometry( radius );
    var octahedron = new THREE.Mesh( octahedronGeometry, material );
    return octahedron
}
/*
Planetary measurements relative to the Sun
*/ 
planetRadius = {
    saturn: {outer: 183.93228895793544, inner: 153.88649309560518},
    jupiter: {outer: 89.08262406715185, inner: 81.10740472097561},
    mars: {outer: 27.058996539821955, inner: 22.876361835005497},
    earth: {outer: 18.179511520801732, inner: 16.725292124066016},
    venus: {outer: 13.288351891282018, inner: 12.483628022382645},
    mercury: {outer: 8.828342449357729, inner: 4.072423664626422}
}
planetDegree = {
    saturn:  { outer: [10, 35, 56], inner: [  8, 51,  8] },
    jupiter: { outer: [ 5,  6, 39], inner: [  4, 39,  8] },
    mars:    { outer: [ 1, 33,  2], inner: [  1, 18, 39] },
    earth:   { outer: [ 1,  2, 30], inner: [  0, 57, 30] },
    venus:   { outer: [ 0, 45, 41], inner: [  0, 42, 55] },
    mercury: { outer: [ 0, 30, 21], inner: [  0, 14,  0] }    
}

// controls
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.addEventListener( 'change', render );
controls.enableZoom = true;

function animate() {
    requestAnimationFrame( animate );
    //cube.rotation.x += 0.001;
    //cube.rotation.y += 0.001;
    // tetrahedron.rotation.x += 0.002;
    // tetrahedron.rotation.y += 0.002;
    //dodecahedron.rotation.x += 0.004;
    //dodecahedron.rotation.y += 0.004;
    //icosohedron.rotation.x += 0.008;
    //icosohedron.rotation.y += 0.008;								
    //octahedron.rotation.x += 0.016;
    //octahedron.rotation.y += 0.016;
    render();
    //stats.update();
    window.addEventListener( 'resize', onWindowResize, false );
}
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );
}
function render() {
    renderer.render( scene, camera );
}
animate();