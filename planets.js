function Planet(radius){
    var geometry = new THREE.SphereBufferGeometry(
        radius,  // radius 
        50, // width segments
        50, // height segments
        0, // horizontal start angle
        Math.PI * 2, // horizontal sweep angle size
        0, // vertical start angle
        Math.PI * 2 ); // vertical sweep angle size
    var material = new THREE.MeshNormalMaterial();
    var sphere = new THREE.Mesh( geometry, material );
    return sphere
}
function Ellipse( xRadius, yRadius ) {
    THREE.Curve.call( this );
    // add radius as a property
    this.xRadius = xRadius;
    this.yRadius = yRadius;
}
// getPoint function for the elipse sub-class
Ellipse.prototype = Object.create( THREE.Curve.prototype );
Ellipse.prototype.constructor = Ellipse;
Ellipse.prototype.getPoint = function ( t ) {
    var radians = 2 * Math.PI * t;
    return new THREE.Vector3( 
        this.xRadius * Math.cos( radians ),
        this.yRadius * Math.sin( radians ), 0 );
};
function initPlanet( pRadius, xRadius, yRadius, 
    timesteps, elipseColor) {
    // sphere
    planet = Planet(pRadius);
    path = new Ellipse( xRadius, yRadius );
    // ellipse class, extends the virtual base class Curve
    var curve = new THREE.EllipseCurve(
        0,  0,            // ax, aY
        xRadius, yRadius, // xRadius, yRadius
        0,  2 * Math.PI,  // aStartAngle, aEndAngle
        false,            // aClockwise
        0                 // aRotation
    );
    var points = curve.getPoints( timesteps );
    var elipse_geometry = new THREE.BufferGeometry().setFromPoints( points );
    var elipse_material = new THREE.LineBasicMaterial( { color : elipseColor } );
    var elipse = new THREE.Line( elipse_geometry, elipse_material );
    return elipse
}
function orbitPlanet(t){
    // set the marker position
    pt = path.getPoint( t );
    // set the marker position
    marker.position.set( pt.x, pt.y, pt.z );
    // get the tangent to the curve
    tangent = path.getTangent( t ).normalize();
    // calculate the axis to rotate around
    axis.crossVectors( up, tangent ).normalize();
    // calcluate the angle between the up vector and the tangent
    radians = Math.acos( up.dot( tangent ) );
    // set the quaternion
    marker.quaternion.setFromAxisAngle( axis, radians );
    t += 0.002;
}