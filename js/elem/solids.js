function Cube(radius, color=0x00ff00 ){
    // use Pythagorean theorem to get edge length from radius
    var edge = Math.sqrt(4/3 * Math.pow(radius, 2))
    var material = new THREE.LineBasicMaterial({ color: color });
    var cube =	new THREE.BoxBufferGeometry( edge, edge, edge );
    var geometry = new THREE.EdgesGeometry( cube ); 
    var wireframe = new THREE.LineSegments( geometry, material );
    return wireframe
}
function Tetrahedron(radius, color=0x00ff00){
    var material = new THREE.LineBasicMaterial({ color: color });
    var tetrahedron =	new THREE.TetrahedronBufferGeometry( radius );
    tetrahedron.rotateY(Math.PI / 4);
    tetrahedron.rotateX(-Math.PI / 5.1);
    tetrahedron.rotateZ(Math.PI);
    var geometry = new THREE.EdgesGeometry( tetrahedron ); 
    var wireframe = new THREE.LineSegments( geometry, material );
    // var tetrahedron = new THREE.Mesh( geometry, material );
    return wireframe
}
function Dodecahedron(radius, color=0x00ff00 ){
    var material = new THREE.LineBasicMaterial({ color: color });
    var dodecahedron =	new THREE.DodecahedronBufferGeometry( radius );
    dodecahedron.rotateY(-Math.PI / 5.6);
    dodecahedron.rotateZ(Math.PI / 10.1);
    var geometry = new THREE.EdgesGeometry( dodecahedron ); 
    var wireframe = new THREE.LineSegments( geometry, material );
    // var dodecahedron = new THREE.Mesh( dodecahedronGeometry, material );
    return wireframe
}
function Icosahedron(radius, color=0x00ff00 ){
    var material = new THREE.LineBasicMaterial({ color: color });
    var icosahedron =	new THREE.IcosahedronBufferGeometry( radius );
    icosahedron.rotateY(-Math.PI / 8.5);
    icosahedron.rotateZ(-Math.PI / 6);
    var geometry = new THREE.EdgesGeometry( icosahedron ); 
    // var icosahedron = new THREE.Mesh( icosahedronGeometry, material );
    var wireframe = new THREE.LineSegments( geometry, material );
    return wireframe
}
function Octahedron(radius, color=0x00ff00 ){
    var material = new THREE.LineBasicMaterial({ color: color });
    var octahedron =	new THREE.OctahedronBufferGeometry( radius );
    var geometry = new THREE.EdgesGeometry( octahedron ); 
    // var octahedron = new THREE.Mesh( octahedronGeometry, material );
    var wireframe = new THREE.LineSegments( geometry, material );
    return wireframe
}
