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
function PlanetEllipse(xRadius, yRadius, color, npoints=50,
    rotationx=0, rotationy=0, rotationz=0) {
    var curve = new THREE.EllipseCurve(
        0, 0,               // ax, aY (center of the ellipse)
        xRadius, yRadius,   // xRadius, yRadius
        0, 2*Math.PI,       // aStartAngle, aEndAngle
        false,              // aClockwise
        0                   // aRotation
    );
    var points = curve.getPoints( npoints );
    var geometry = new THREE.BufferGeometry().setFromPoints( points );
    var material = new THREE.LineBasicMaterial({ color : color });
    var ellipse = new THREE.Line( geometry, material );
    ellipse.rotation.x = rotationx;
    ellipse.rotation.y = rotationy;
    ellipse.rotation.z = rotationz;
    return ellipse;
}
function PlanetSphere(radius, color, wireframe=true,
                      heightSegments, widthSegments,
                      phiStart, phiLength, 
                      thetaStart, thetaLength){
    var sphere = new THREE.SphereGeometry(
        radius, heightSegments, widthSegments,
        phiStart, phiLength, thetaStart, thetaLength); 
    var material = new THREE.MeshBasicMaterial(
        {wireframe: wireframe, color: color});
    var mesh = new THREE.Mesh(sphere, material);
    mesh.rotation.x = Math.PI / 2;
    return mesh
}
var PlanetShape = function(radiusInner, radiusOuter,
                          ringColor, sphereColor) {
    this.innerRing = true;
    this.outerRing = true;
    this.innerSphere = true;
    this.outerSphere = false;
    this.heightSegments = 50;
    this.widthSegments = 50;
    this.phiStart = 0;
    this.phiLength = 2*Math.PI;
    this.thetaStart = Math.PI/2;
    this.thetaLength =Math.PI;
    InnerRing = PlanetEllipse(radiusInner, radiusInner, ringColor);
    OuterRing = PlanetEllipse(radiusOuter, radiusOuter, ringColor);
    InnerSphere = PlanetSphere(radiusInner, sphereColor, 
                               heightSegments, widthSegments,
                               phiStart, phiLength, 
                               thetaStart, thetaLength);
    OuterSphere = PlanetSphere(radiusOuter, sphereColor,
                               heightSegments, widthSegments,
                               phiStart, phiLength, 
                               thetaStart, thetaLength);
    if (this.innerRing){
        scene.add(InnerRing)
    }
    else {scene.remove(InnerRing)}
    if (this.outerRing){
        scene.add(OuterRing)
    }
    else {scene.remove(OuterRing)}
    if (this.innerSphere){
        scene.add(InnerSphere)
    }
    else {scene.remove(InnerSphere)}
    if (this.outerSphere){
        scene.add(OuterSphere)
    }
    else {scene.remove(OuterSphere)}
};
const saturnColor = 0x007fff;
var Saturn = PlanetShape(pRad.saturn.inner, pRad.saturn.outer, saturnColor);
const jupiterColor = 0xff9933;
var Jupiter = PlanetShape(pRad.jupiter.inner, pRad.jupiter.outer, jupiterColor);
const marsColor = 0xff0000;
var Mars = PlanetShape(pRad.mars.inner, pRad.mars.outer, marsColor);
const earthColor = 0xdff7e0;
var Earth = PlanetShape(pRad.earth.inner, pRad.earth.outer, earthColor);
const venusColor = 0xc0c0ff;
var Venus = PlanetEllipse(pRad.venus.inner, pRad.venus.outer, venusColor);
const mercuryColor = 0x80ffc0;
var Mercury = PlanetEllipse(pRad.mercury.inner, pRad.mercury.outer, mercuryColor);
