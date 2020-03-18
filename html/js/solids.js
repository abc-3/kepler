function Cube(radius, color=0x00ff00, opacity=0.5){
    // use Pythagorean theorem to get edge length from radius
    var edge = Math.sqrt(4/3 * Math.pow(radius, 2))
    var material = new THREE.LineBasicMaterial({ color: color, opacity: opacity });
    var cube =	new THREE.BoxBufferGeometry( edge, edge, edge );
    var geometry = new THREE.EdgesGeometry( cube ); 
    var wireframe = new THREE.LineSegments( geometry, material );
    return wireframe
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

cube = Cube(pRad.saturn.inner);
tetrahedron = Tetrahedron(pRad.jupiter.inner);
dodecahedron = Dodecahedron(pRad.mars.inner);
icosahedron = Icosahedron(pRad.earth.inner);
octahedron = Octahedron(pRad.venus.inner);