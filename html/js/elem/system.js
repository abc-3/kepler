function SolarSystem(scene, cameraPosition){
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
    let cube = Cube(pRad.saturn.inner, color=0xdff7e0);
    let tetrahedron = Tetrahedron(pRad.jupiter.inner, color=0xdff7e0);
    let dodecahedron = Dodecahedron(pRad.mars.inner, color=0xdff7e0);
    let icosahedron = Icosahedron(pRad.earth.inner, color=0xdff7e0);
    let octahedron = Octahedron(pRad.venus.inner, color=0xdff7e0);

    let saturn = new PlanetShape(
        scene, pRad.saturn.inner, pRad.saturn.outer, 0x2b5371, cube);
    let jupiter = new PlanetShape(scene, pRad.jupiter.inner, pRad.jupiter.outer, 0xaf703b, tetrahedron); 
    let mars = new PlanetShape(scene, pRad.mars.inner, pRad.mars.outer, 0xaa3939, dodecahedron); 
    let earth = new PlanetShape(scene, pRad.earth.inner, pRad.earth.outer, 0xdff7e0, 0); 
    let venus = new PlanetShape(scene, pRad.venus.inner, pRad.venus.outer, 0x927bb1, icosahedron); 
    let mercury = new PlanetShape(scene, pRad.mercury.inner, pRad.mercury.outer, 0x71aa9c, octahedron);

    let zodiac = new ZodiacRing(color=0xdff7e0);
    let planets = new Planets();


    scene.add(planets.saturnOrbit);
    scene.add(planets.jupiterOrbit);
    scene.add(planets.marsOrbit);
    scene.add(planets.earthOrbit);
    scene.add(planets.venusOrbit);
    scene.add(planets.mercuryOrbit);
    scene.add(zodiac.ringMesh);
    scene.add(zodiac.segmentsMesh);
    scene.add(saturn.innerRing);
    scene.add(saturn.outerRing);
    scene.add(saturn.innerSphere);
    scene.add(saturn.outerSphere);
    scene.add(saturn.solid)
    scene.add(jupiter.innerRing);
    scene.add(jupiter.outerRing);
    scene.add(jupiter.innerSphere);
    scene.add(jupiter.outerSphere);
    scene.add(jupiter.solid);
    scene.add(mars.innerRing);
    scene.add(mars.outerRing);
    scene.add(mars.innerSphere);
    scene.add(mars.outerSphere);
    scene.add(mars.solid);
    scene.add(earth.innerRing);
    scene.add(earth.outerRing);
    scene.add(earth.innerSphere);
    scene.add(earth.outerSphere);
    scene.add(venus.innerRing);
    scene.add(venus.outerRing);
    scene.add(venus.innerSphere);
    scene.add(venus.outerSphere);
    scene.add(venus.solid);
    scene.add(mercury.innerRing);
    scene.add(mercury.outerRing);
    scene.add(mercury.innerSphere);
    scene.add(mercury.outerSphere);
    scene.add(mercury.solid);

    initControllers(
        scene, saturn, jupiter, mars, earth, venus, mercury, zodiac, planets);
}