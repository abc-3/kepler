function PlanetEllipse(xRadius, yRadius, color, npoints=50) {
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
    return ellipse;
}

function PlanetSphere(radius, color, wireframe,
                      heightSegments, widthSegments,
                      phiStart, phiLength, 
                      thetaStart, thetaLength) {
    var sphere = new THREE.SphereGeometry(
        radius = radius, 
        widthSegments = widthSegments,
        heightSegments = heightSegments, 
        phiStart = phiStart, 
        phiLength = phiLength, 
        thetaStart = thetaStart, 
        thetaLength = thetaLength); 
    var material = new THREE.MeshBasicMaterial(
        {wireframe: wireframe, color: color});
    var mesh = new THREE.Mesh(sphere, material);
    mesh.rotation.x = Math.PI / 2;
    // this.mesh = mesh
    // this.update = function(v, hS, wS, pS, pL, tS, tL, c){
    //     this.mesh.visibility = v
    //     this.mesh.geometry.heightSegments = hS;
    //     this.mesh.geometry.widthSegments = wS;
    //     this.mesh.geometry.phiStart = pS;
    //     this.mesh.geometry.phiLength = pL;
    //     this.mesh.geometry.thetaStart = tS;
    //     this.mesh.geometry.thetaLength = tL;
    //     this.mesh.material.color.setHex(c);
    //     this.mesh.geometry.verticesNeedUpdate = true;
    // }
    return mesh
}

function rad_to_deg(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}

function deg_to_rad(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function PlanetSettings(color) {
    this.solidShow = true;
    this.innerRingShow = true;
    this.innerSphereShow = true;
    this.innerRingColor = color;
    this.innerSphereColor = color;
    this.innerHeightSegments = 50;
    this.innerWidthSegments = 50;
    this.innerPhiStartR = 0;
    this.innerPhiLengthR = Math.PI;
    this.innerThetaStartR = Math.PI/2;
    this.innerThetaLengthR = Math.PI;
    this.outerRingShow = true;
    this.outerSphereShow = false;
    this.outerRingColor = color;
    this.outerSphereColor = color;
    this.outerHeightSegments = 50;
    this.outerWidthSegments = 50;
    this.outerPhiStartR = 0;
    this.outerPhiLengthR = Math.PI;
    this.outerThetaStartR = Math.PI/2;
    this.outerThetaLengthR = Math.PI;
};

function PlanetShape(scene, radiusInner, radiusOuter, color, solid) {
    settings = new PlanetSettings(color)
    this.solid = solid;
    this.solidShow = settings.solidShow;
    this.innerRingShow = settings.innerRingShow;
    this.innerSphereShow = settings.innerSphereShow;
    this.innerRingColor = settings.innerRingColor;
    this.innerSphereColor = settings.innerSphereColor;
    this.innerHeightSegments = settings.innerHeightSegments;
    this.innerWidthSegments = settings.innerWidthSegments;
    this.innerPhiStartR = settings.innerPhiStartR;
    this.innerPhiLengthR = settings.innerPhiLengthR;
    this.innerThetaStartR = settings.innerThetaStartR;
    this.innerThetaLengthR = settings.innerThetaLengthR;
    this.innerPhiStart = rad_to_deg(this.innerPhiStartR);
    this.innerPhiLength = rad_to_deg(this.innerPhiLengthR);
    this.innerThetaStart = rad_to_deg(this.innerThetaStartR);
    this.innerThetaLength = rad_to_deg(this.innerThetaLengthR);
    this.outerRingShow = settings.outerRingShow;
    this.outerSphereShow = settings.outerSphereShow;
    this.outerRingColor = settings.outerRingColor;
    this.outerSphereColor = settings.outerSphereColor;
    this.outerHeightSegments = settings.outerHeightSegments;
    this.outerWidthSegments = settings.outerWidthSegments;
    this.outerPhiStartR = settings.outerPhiStartR;
    this.outerPhiLengthR = settings.outerPhiLengthR;
    this.outerThetaStartR = settings.outerThetaStartR;
    this.outerThetaLengthR = settings.outerThetaLengthR;
    this.outerPhiStart = rad_to_deg(this.outerPhiStartR);
    this.outerPhiLength = rad_to_deg(this.outerPhiLengthR);
    this.outerThetaStart = rad_to_deg(this.outerThetaStartR);
    this.outerThetaLength = rad_to_deg(this.outerThetaLengthR);
    this.innerRing = new PlanetEllipse(radiusInner, radiusInner, this.innerRingColor);
    this.outerRing = new PlanetEllipse(radiusOuter, radiusOuter, this.outerRingColor);
    this.innerSphere = new PlanetSphere(
        radiusInner, this.innerSphereColor, true,
        this.innerHeightSegments, this.innerWidthSegments,
        this.innerPhiStartR, this.innerPhiLengthR, 
        this.innerThetaStartR, this.innerThetaLengthR);
    this.innerSphere.visible = this.innerSphereShow;
    this.outerSphere = new PlanetSphere(
        radiusOuter, this.outerSphereColor, true,
        this.innerHeightSegments, this.innerWidthSegments,
        this.innerPhiStartR, this.innerPhiLengthR, 
        this.innerThetaStartR, this.innerThetaLengthR);
    this.outerSphere.visible = this.outerSphereShow;
    this.updateInnerSpherePhiStart = function(value) {
        this.innerSphere.geometry.dispose();
        this.innerPhiStart = value;
        this.innerPhiStartR = deg_to_rad(this.innerPhiStart);
        this.innerSphere = new PlanetSphere(
            radiusInner, this.innerSphereColor, true,
            this.innerHeightSegments, this.innerWidthSegments,
            this.innerPhiStartR, this.innerPhiLengthR, 
            this.innerThetaStartR, this.innerThetaLengthR);
    }
    this.updateInnerSpherePhiLength = function(value) {
        this.innerSphere.geometry.dispose();
        this.innerPhiLength = value;
        this.innerPhiLengthR = deg_to_rad(this.innerPhiLength);
        this.innerSphere = new PlanetSphere(
            radiusInner, this.innerSphereColor, true,
            this.innerHeightSegments, this.innerWidthSegments,
            this.innerPhiStartR, this.innerPhiLengthR, 
            this.innerThetaStartR, this.innerThetaLengthR);
    }
    this.updateInnerSphereThetaStart = function(value) {
        this.innerSphere.geometry.dispose();
        this.innerThetaStart = value;
        this.innerThetaStartR = deg_to_rad(this.innerThetaStart);
        this.innerSphere = new PlanetSphere(
            radiusInner, this.innerSphereColor, true,
            this.innerHeightSegments, this.innerWidthSegments,
            this.innerPhiStartR, this.innerPhiLengthR, 
            this.innerThetaStartR, this.innerThetaLengthR);
    }
    this.updateInnerSphereThetaLength = function(value) {
        this.innerSphere.geometry.dispose();
        this.innerThetaLength = value;
        this.innerThetaLengthR = deg_to_rad(this.innerThetaLength);
        this.innerSphere = new PlanetSphere(
            radiusInner, this.innerSphereColor, true,
            this.innerHeightSegments, this.innerWidthSegments,
            this.innerPhiStartR, this.innerPhiLengthR, 
            this.innerThetaStartR, this.innerThetaLengthR);
    }
    this.updateOuterSpherePhiStart = function(value) {
        this.outerSphere.geometry.dispose();
        this.outerPhiStart = value;
        this.outerPhiStartR = deg_to_rad(this.outerPhiStart);
        this.outerSphere = new PlanetSphere(
            radiusOuter, this.outerSphereColor, true,
            this.outerHeightSegments, this.outerWidthSegments,
            this.outerPhiStartR, this.outerPhiLengthR, 
            this.outerThetaStartR, this.outerThetaLengthR);
    }
    this.updateOuterSpherePhiLength = function(value) {
        this.outerSphere.geometry.dispose();
        this.outerPhiLength = value;
        this.outerPhiLengthR = deg_to_rad(this.outerPhiLength);
        this.outerSphere = new PlanetSphere(
            radiusOuter, this.outerSphereColor, true,
            this.outerHeightSegments, this.outerWidthSegments,
            this.outerPhiStartR, this.outerPhiLengthR, 
            this.outerThetaStartR, this.outerThetaLengthR);
    }
    this.updateOuterSphereThetaStart = function(value) {
        this.outerSphere.geometry.dispose();
        this.outerThetaStart = value;
        this.outerThetaStartR = deg_to_rad(this.outerThetaStart);
        this.outerSphere = new PlanetSphere(
            radiusOuter, this.outerSphereColor, true,
            this.outerHeightSegments, this.outerWidthSegments,
            this.outerPhiStartR, this.outerPhiLengthR, 
            this.outerThetaStartR, this.outerThetaLengthR);
    }
    this.updateOuterSphereThetaLength = function(value) {
        this.outerSphere.geometry.dispose();
        this.outerThetaLength = value;
        this.outerThetaLengthR = deg_to_rad(this.outerThetaLength);
        this.outerSphere = new PlanetSphere(
            radiusOuter, this.outerSphereColor, true,
            this.outerHeightSegments, this.outerWidthSegments,
            this.outerPhiStartR, this.outerPhiLengthR, 
            this.outerThetaStartR, this.outerThetaLengthR);
    }
}
