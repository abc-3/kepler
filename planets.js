// function Ellipse( xRadius, yRadius ) {
//     THREE.Curve.call( this );
//     // add radius as a property
//     this.xRadius = xRadius;
//     this.yRadius = yRadius;
// }
// Ellipse.prototype = Object.create( THREE.Curve.prototype );
// Ellipse.prototype.constructor = Ellipse;
// Ellipse.prototype.getPoint = function ( t ) {
//     var radians = 2 * Math.PI * t;
//     return new THREE.Vector3( 
//         this.xRadius * Math.cos( radians ),
//         this.yRadius * Math.sin( radians ), 0 );
// };    // set the marker position

// function OrbitPath(xRadius, yRadius, rotation, timesteps, elipseColor) {
//     // sphere
//     // path = new Ellipse( xRadius, yRadius );
//     // ellipse class, extends the virtual base class Curve
//     var curve = new THREE.EllipseCurve(
//         0,  0,            // ax, aY
//         xRadius, yRadius, // xRadius, yRadius
//         0,  2 * Math.PI,  // aStartAngle, aEndAngle
//         false,            // aClockwise
//         rotation          // aRotation
//     );
//     var points = curve.getPoints( timesteps );
//     var elipse_geometry = new THREE.BufferGeometry().setFromPoints( points );
//     var elipse_material = new THREE.LineDashedMaterial( { color : elipseColor } );
//     var elipse = new THREE.Line( elipse_geometry, elipse_material );
//     return elipse;
// }

function deg_to_rad(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}
function OrbitEllipse(xRadius, yRadius, color, theta, npoints=300) {
    diff = xRadius - yRadius;
    r = diff / 2;
    radius = xRadius - r;
    x = r * Math.cos(theta);
    y = r * Math.sin(theta);
    var curve = new THREE.EllipseCurve(
        x, y,               // ax, aY (center of the ellipse)
        radius, radius,   // xRadius, yRadius
        0, 2*Math.PI,       // aStartAngle, aEndAngle
        false,              // aClockwise
        0                   // aRotation
    );
    var points = curve.getPoints(npoints);
    var material = new THREE.LineDashedMaterial({ color : color });
    var geometry = new THREE.BufferGeometry().setFromPoints(points);
    var ellipse = new THREE.LineSegments( geometry, material );
    ellipse.computeLineDistances();;
    return ellipse;
}

function Planets(){
    this.saturnShow = false;
    this.saturnOrbit = OrbitEllipse(
        pRad.saturn.outer, pRad.saturn.inner, 0xdff7e0, 298.05); 
    this.saturnOrbit.visible = this.saturnShow;
    this.jupiterShow = false;
    this.jupiterOrbit = OrbitEllipse(
        pRad.jupiter.outer, pRad.jupiter.inner, 0xdff7e0, 221.5);
    this.jupiterOrbit.visible = this.jupiterShow; 
    this.marsShow = false;
    this.marsOrbit = OrbitEllipse(
        pRad.mars.outer, pRad.mars.inner, 0xdff7e0, 184.3);
    this.marsOrbit.visible = this.marsShow; 
    this.earthShow = false;
    this.earthOrbit = OrbitEllipse(
        pRad.earth.outer, pRad.earth.inner, 0xdff7e0, 306.6); 
    this.earthOrbit.visible = this.earthShow;
    this.venusShow = false;
    this.venusOrbit = OrbitEllipse(
        pRad.venus.outer, pRad.venus.inner, 0xdff7e0, 349.7);
    this.venusOrbit.visible = this.venusShow;
    this.mercuryShow = false;
    this.mercuryOrbit = OrbitEllipse(
        pRad.mercury.outer, pRad.mercury.inner, 0xdff7e0, 283.6);
    this.mercuryOrbit.visible = this.mercuryShow;

    var Planet = function(){
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
}
// function Orbit(t, planet){
//     // getPoint function for the elipse sub-class
//         pt = path.getPoint( t );
//         // set the marker position
//         planet.position.set( pt.x, pt.y, pt.z );
//         // get the tangent to the curve
//         tangent = path.getTangent( t ).normalize();
//         // calculate the axis to rotate around
//         axis.crossVectors( up, tangent ).normalize();
//         // calcluate the angle between the up vector and the tangent
//         radians = Math.acos( up.dot( tangent ) );
//         // set the quaternion
//         planet.quaternion.setFromAxisAngle( axis, radians );
//         t += 0.002;
// }
// function planetSettings(){
//     /* Planetary measurements relative to the Sun */ 
// }
// saturnOrbit = OrbitPath(xRadius, yRadius, timesteps, elipseColor) 
// saturnPlanet = Planet(pRadius);
// Orbit(t=0, saturnPlanet)
