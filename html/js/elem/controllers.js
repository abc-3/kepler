function initControllers(
    scene, saturn, jupiter, mars, earth, venus, mercury, zodiac, planets){
    // data controls
    var gui = new dat.GUI();
    gui.remember(saturn)
    Saturn = gui.addFolder('Saturn');
    saturnS = Saturn.add(saturn, 'solidShow');
    saturnS.name('Cube');
    saturnP = Saturn.add(planets, 'saturnShow');
    saturnP.name('Orbit Path');
    iSaturn = Saturn.addFolder('Inner Ring');
    saturn1 = iSaturn.add(saturn, 'innerRingShow');
    saturn1.name('Ring');
    saturn2 = iSaturn.add(saturn, 'innerSphereShow');
    saturn2.name('Sphere');
    saturn3 = iSaturn.add(saturn, 'innerPhiStart', 0, 360);
    saturn3.name('Phi Start');
    saturn4 = iSaturn.add(saturn, 'innerPhiLength', 0, 360);
    saturn4.name('Phi Length');
    saturn5 = iSaturn.add(saturn, 'innerThetaStart', 0, 360);
    saturn5.name('Theta Start');
    saturn6 = iSaturn.add(saturn, 'innerThetaLength', 0, 360);
    saturn6.name('Theta Length');
    oSaturn = Saturn.addFolder('Outer Ring');
    saturn7 = oSaturn.add(saturn, 'outerRingShow');
    saturn7.name('Show Ring');
    saturn8 = oSaturn.add(saturn, 'outerSphereShow');
    saturn8.name('Show Sphere');
    saturn9 = oSaturn.add(saturn, 'outerPhiStart', 0, 360);
    saturn9.name('Phi Start');
    saturn10 = oSaturn.add(saturn, 'outerPhiLength', 0, 360);
    saturn10.name('Phi Length');
    saturn11 = oSaturn.add(saturn, 'outerThetaStart', 0, 360);
    saturn11.name('Theta Start');
    saturn12 = oSaturn.add(saturn, 'outerThetaLength', 0, 360);
    saturn12.name('Theta Length');
    saturnP.onChange(function(value){
        planets.saturnOrbit.visible = value; 
    });
    saturnS.onChange(function(value){
        saturn.solid.visible = value; 
    });
    saturn1.onChange(function(value){
        saturn.innerRing.visible = value; 
    });
    saturn2.onChange(function(value){
        saturn.innerSphere.visible = value; 
    });
    saturn3.onChange(function(value){
        scene.remove(saturn.innerSphere);
        saturn.updateInnerSpherePhiStart(value);
        scene.add(saturn.innerSphere);
    });
    saturn4.onChange(function(value){
        scene.remove(saturn.innerSphere);
        saturn.updateInnerSpherePhiLength(value);
        scene.add(saturn.innerSphere);
    });
    saturn5.onChange(function(value){
        scene.remove(saturn.innerSphere);
        saturn.updateInnerSphereThetaStart(value);
        scene.add(saturn.innerSphere);
    });
    saturn6.onChange(function(value){
        scene.remove(saturn.innerSphere);
        saturn.updateInnerSphereThetaLength(value);
        scene.add(saturn.innerSphere);
    });
    saturn7.onChange(function(value){
        saturn.outerRing.visible = value; 
    });
    saturn8.onChange(function(value){
        saturn.outerSphere.visible = value; 
    });
    saturn9.onChange(function(value){
        scene.remove(saturn.outerSphere);
        saturn.updateOuterSpherePhiStart(value);
        scene.add(saturn.outerSphere);
    });
    saturn10.onChange(function(value){
        scene.remove(saturn.outerSphere);
        saturn.updateOuterSpherePhiLength(value);
        scene.add(saturn.outerSphere);
    });
    saturn11.onChange(function(value){
        scene.remove(saturn.outerSphere);
        saturn.updateOuterSphereThetaStart(value);
        scene.add(saturn.outerSphere);
    });
    saturn12.onChange(function(value){
        scene.remove(saturn.outerSphere);
        saturn.updateOuterSphereThetaLength(value);
        scene.add(saturn.outerSphere);
    });

    gui.remember(jupiter)
    Jupiter = gui.addFolder('Jupiter');
    jupiterS = Jupiter.add(jupiter, 'solidShow');
    jupiterS.name('Tetrahedron');
    jupiterP = Jupiter.add(planets, 'jupiterShow');
    jupiterP.name('Orbit Path');
    iJupiter = Jupiter.addFolder('Inner Ring');
    jupiter1 = iJupiter.add(jupiter, 'innerRingShow');
    jupiter1.name('Ring');
    jupiter2 = iJupiter.add(jupiter, 'innerSphereShow');
    jupiter2.name('Sphere');
    jupiter3 = iJupiter.add(jupiter, 'innerPhiStart', 0, 360);
    jupiter3.name('Phi Start');
    jupiter4 = iJupiter.add(jupiter, 'innerPhiLength', 0, 360);
    jupiter4.name('Phi Length');
    jupiter5 = iJupiter.add(jupiter, 'innerThetaStart', 0, 360);
    jupiter5.name('Theta Start');
    jupiter6 = iJupiter.add(jupiter, 'innerThetaLength', 0, 360);
    jupiter6.name('Theta Length');
    oJupiter = Jupiter.addFolder('Outer Ring');
    jupiter7 = oJupiter.add(jupiter, 'outerRingShow');
    jupiter7.name('Show Ring');
    jupiter8 = oJupiter.add(jupiter, 'outerSphereShow');
    jupiter8.name('Show Sphere');
    jupiter9 = oJupiter.add(jupiter, 'outerPhiStart', 0, 360);
    jupiter9.name('Phi Start');
    jupiter10 = oJupiter.add(jupiter, 'outerPhiLength', 0, 360);
    jupiter10.name('Phi Length');
    jupiter11 = oJupiter.add(jupiter, 'outerThetaStart', 0, 360);
    jupiter11.name('Theta Start');
    jupiter12 = oJupiter.add(jupiter, 'outerThetaLength', 0, 360);
    jupiter12.name('Theta Length');
    jupiterP.onChange(function(value){
        planets.jupiterOrbit.visible = value; 
    });
    jupiterS.onChange(function(value){
        jupiter.solid.visible = value; 
    });
    jupiter1.onChange(function(value){
        jupiter.innerRing.visible = value; 
    });
    jupiter2.onChange(function(value){
        jupiter.innerSphere.visible = value; 
    });
    jupiter3.onChange(function(value){
        scene.remove(jupiter.innerSphere);
        jupiter.updateInnerSpherePhiStart(value);
        scene.add(jupiter.innerSphere);
    });
    jupiter4.onChange(function(value){
        scene.remove(jupiter.innerSphere);
        jupiter.updateInnerSpherePhiLength(value);
        scene.add(jupiter.innerSphere);
    });
    jupiter5.onChange(function(value){
        scene.remove(jupiter.innerSphere);
        jupiter.updateInnerSphereThetaStart(value);
        scene.add(jupiter.innerSphere);
    });
    jupiter6.onChange(function(value){
        scene.remove(jupiter.innerSphere);
        jupiter.updateInnerSphereThetaLength(value);
        scene.add(jupiter.innerSphere);
    });
    jupiter7.onChange(function(value){
        jupiter.outerRing.visible = value; 
    });
    jupiter8.onChange(function(value){
        jupiter.outerSphere.visible = value; 
    });
    jupiter9.onChange(function(value){
        scene.remove(jupiter.outerSphere);
        jupiter.updateOuterSpherePhiStart(value);
        scene.add(jupiter.outerSphere);
    });
    jupiter10.onChange(function(value){
        scene.remove(jupiter.outerSphere);
        jupiter.updateOuterSpherePhiLength(value);
        scene.add(jupiter.outerSphere);
    });
    jupiter11.onChange(function(value){
        scene.remove(jupiter.outerSphere);
        jupiter.updateOuterSphereThetaStart(value);
        scene.add(jupiter.outerSphere);
    });
    jupiter12.onChange(function(value){
        scene.remove(jupiter.outerSphere);
        jupiter.updateOuterSphereThetaLength(value);
        scene.add(jupiter.outerSphere);
    });

    gui.remember(mars)
    Mars = gui.addFolder('Mars');
    marsS = Mars.add(mars, 'solidShow'); 
    marsS.name('Dodecahedron');
    marsP = Mars.add(planets, 'marsShow');
    marsP.name('Orbit Path');
    iMars = Mars.addFolder('Inner Ring');
    mars1 = iMars.add(mars, 'innerRingShow');
    mars1.name('Ring');
    mars2 = iMars.add(mars, 'innerSphereShow');
    mars2.name('Sphere');
    mars3 = iMars.add(mars, 'innerPhiStart', 0, 360);
    mars3.name('Phi Start');
    mars4 = iMars.add(mars, 'innerPhiLength', 0, 360);
    mars4.name('Phi Length');
    mars5 = iMars.add(mars, 'innerThetaStart', 0, 360);
    mars5.name('Theta Start');
    mars6 = iMars.add(mars, 'innerThetaLength', 0, 360);
    mars6.name('Theta Length');
    oMars = Mars.addFolder('Outer Ring');
    mars7 = oMars.add(mars, 'outerRingShow');
    mars7.name('Show Ring');
    mars8 = oMars.add(mars, 'outerSphereShow');
    mars8.name('Show Sphere');
    mars9 = oMars.add(mars, 'outerPhiStart', 0, 360);
    mars9.name('Phi Start');
    mars10 = oMars.add(mars, 'outerPhiLength', 0, 360);
    mars10.name('Phi Length');
    mars11 = oMars.add(mars, 'outerThetaStart', 0, 360);
    mars11.name('Theta Start');
    mars12 = oMars.add(mars, 'outerThetaLength', 0, 360);
    mars12.name('Theta Length');
    marsP.onChange(function(value){
        planets.marsOrbit.visible = value; 
    });
    marsS.onChange(function(value){
        mars.solid.visible = value; 
    });
    mars1.onChange(function(value){
        mars.innerRing.visible = value; 
    });
    mars2.onChange(function(value){
        mars.innerSphere.visible = value; 
    });
    mars3.onChange(function(value){
        scene.remove(mars.innerSphere);
        mars.updateInnerSpherePhiStart(value);
        scene.add(mars.innerSphere);
    });
    mars4.onChange(function(value){
        scene.remove(mars.innerSphere);
        mars.updateInnerSpherePhiLength(value);
        scene.add(mars.innerSphere);
    });
    mars5.onChange(function(value){
        scene.remove(mars.innerSphere);
        mars.updateInnerSphereThetaStart(value);
        scene.add(mars.innerSphere);
    });
    mars6.onChange(function(value){
        scene.remove(mars.innerSphere);
        mars.updateInnerSphereThetaLength(value);
        scene.add(mars.innerSphere);
    });
    mars7.onChange(function(value){
        mars.outerRing.visible = value; 
    });
    mars8.onChange(function(value){
        mars.outerSphere.visible = value; 
    });
    mars9.onChange(function(value){
        scene.remove(mars.outerSphere);
        mars.updateOuterSpherePhiStart(value);
        scene.add(mars.outerSphere);
    });
    mars10.onChange(function(value){
        scene.remove(mars.outerSphere);
        mars.updateOuterSpherePhiLength(value);
        scene.add(mars.outerSphere);
    });
    mars11.onChange(function(value){
        scene.remove(mars.outerSphere);
        mars.updateOuterSphereThetaStart(value);
        scene.add(mars.outerSphere);
    });
    mars12.onChange(function(value){
        scene.remove(mars.outerSphere);
        mars.updateOuterSphereThetaLength(value);
        scene.add(mars.outerSphere);
    });

    gui.remember(earth)
    Earth = gui.addFolder('Earth');
    earthP = Earth.add(planets, 'earthShow');
    earthP.name('Orbit Path');
    iEarth = Earth.addFolder('Inner Ring');
    earth1 = iEarth.add(earth, 'innerRingShow');
    earth1.name('Ring');
    earth2 = iEarth.add(earth, 'innerSphereShow');
    earth2.name('Sphere');
    earth3 = iEarth.add(earth, 'innerPhiStart', 0, 360);
    earth3.name('Phi Start');
    earth4 = iEarth.add(earth, 'innerPhiLength', 0, 360);
    earth4.name('Phi Length');
    earth5 = iEarth.add(earth, 'innerThetaStart', 0, 360);
    earth5.name('Theta Start');
    earth6 = iEarth.add(earth, 'innerThetaLength', 0, 360);
    earth6.name('Theta Length');
    oEarth = Earth.addFolder('Outer Ring');
    earth7 = oEarth.add(earth, 'outerRingShow');
    earth7.name('Show Ring');
    earth8 = oEarth.add(earth, 'outerSphereShow');
    earth8.name('Show Sphere');
    earth9 = oEarth.add(earth, 'outerPhiStart', 0, 360);
    earth9.name('Phi Start');
    earth10 = oEarth.add(earth, 'outerPhiLength', 0, 360);
    earth10.name('Phi Length');
    earth11 = oEarth.add(earth, 'outerThetaStart', 0, 360);
    earth11.name('Theta Start');
    earth12 = oEarth.add(earth, 'outerThetaLength', 0, 360);
    earth12.name('Theta Length');
    earthP.onChange(function(value){
        planets.earthOrbit.visible = value; 
    });
    earth1.onChange(function(value){
        earth.innerRing.visible = value; 
    });
    earth2.onChange(function(value){
        earth.innerSphere.visible = value; 
    });
    earth3.onChange(function(value){
        scene.remove(earth.innerSphere);
        earth.updateInnerSpherePhiStart(value);
        scene.add(earth.innerSphere);
    });
    earth4.onChange(function(value){
        scene.remove(earth.innerSphere);
        earth.updateInnerSpherePhiLength(value);
        scene.add(earth.innerSphere);
    });
    earth5.onChange(function(value){
        scene.remove(earth.innerSphere);
        earth.updateInnerSphereThetaStart(value);
        scene.add(earth.innerSphere);
    });
    earth6.onChange(function(value){
        scene.remove(earth.innerSphere);
        earth.updateInnerSphereThetaLength(value);
        scene.add(earth.innerSphere);
    });
    earth7.onChange(function(value){
        earth.outerRing.visible = value; 
    });
    earth8.onChange(function(value){
        earth.outerSphere.visible = value; 
    });
    earth9.onChange(function(value){
        scene.remove(earth.outerSphere);
        earth.updateOuterSpherePhiStart(value);
        scene.add(earth.outerSphere);
    });
    earth10.onChange(function(value){
        scene.remove(earth.outerSphere);
        earth.updateOuterSpherePhiLength(value);
        scene.add(earth.outerSphere);
    });
    earth11.onChange(function(value){
        scene.remove(earth.outerSphere);
        earth.updateOuterSphereThetaStart(value);
        scene.add(earth.outerSphere);
    });
    earth12.onChange(function(value){
        scene.remove(earth.outerSphere);
        earth.updateOuterSphereThetaLength(value);
        scene.add(earth.outerSphere);
    });

    gui.remember(venus)
    Venus = gui.addFolder('Venus');
    venusS = Venus.add(venus, 'solidShow'); 
    venusS.name('Icosahedron');
    venusP = Venus.add(planets, 'venusShow');
    venusP.name('Orbit Path');
    iVenus = Venus.addFolder('Inner Ring');
    venus1 = iVenus.add(venus, 'innerRingShow');
    venus1.name('Ring');
    venus2 = iVenus.add(venus, 'innerSphereShow');
    venus2.name('Sphere');
    venus3 = iVenus.add(venus, 'innerPhiStart', 0, 360);
    venus3.name('Phi Start');
    venus4 = iVenus.add(venus, 'innerPhiLength', 0, 360);
    venus4.name('Phi Length');
    venus5 = iVenus.add(venus, 'innerThetaStart', 0, 360);
    venus5.name('Theta Start');
    venus6 = iVenus.add(venus, 'innerThetaLength', 0, 360);
    venus6.name('Theta Length');
    oVenus = Venus.addFolder('Outer Ring');
    venus7 = oVenus.add(venus, 'outerRingShow');
    venus7.name('Show Ring');
    venus8 = oVenus.add(venus, 'outerSphereShow');
    venus8.name('Show Sphere');
    venus9 = oVenus.add(venus, 'outerPhiStart', 0, 360);
    venus9.name('Phi Start');
    venus10 = oVenus.add(venus, 'outerPhiLength', 0, 360);
    venus10.name('Phi Length');
    venus11 = oVenus.add(venus, 'outerThetaStart', 0, 360);
    venus11.name('Theta Start');
    venus12 = oVenus.add(venus, 'outerThetaLength', 0, 360);
    venus12.name('Theta Length');
    venusP.onChange(function(value){
        planets.venusOrbit.visible = value; 
    });
    venusS.onChange(function(value){
        venus.solid.visible = value; 
    });
    venus1.onChange(function(value){
        venus.innerRing.visible = value; 
    });
    venus2.onChange(function(value){
        venus.innerSphere.visible = value; 
    });
    venus3.onChange(function(value){
        scene.remove(venus.innerSphere);
        venus.updateInnerSpherePhiStart(value);
        scene.add(venus.innerSphere);
    });
    venus4.onChange(function(value){
        scene.remove(venus.innerSphere);
        venus.updateInnerSpherePhiLength(value);
        scene.add(venus.innerSphere);
    });
    venus5.onChange(function(value){
        scene.remove(venus.innerSphere);
        venus.updateInnerSphereThetaStart(value);
        scene.add(venus.innerSphere);
    });
    venus6.onChange(function(value){
        scene.remove(venus.innerSphere);
        venus.updateInnerSphereThetaLength(value);
        scene.add(venus.innerSphere);
    });
    venus7.onChange(function(value){
        venus.outerRing.visible = value; 
    });
    venus8.onChange(function(value){
        venus.outerSphere.visible = value; 
    });
    venus9.onChange(function(value){
        scene.remove(venus.outerSphere);
        venus.updateOuterSpherePhiStart(value);
        scene.add(venus.outerSphere);
    });
    venus10.onChange(function(value){
        scene.remove(venus.outerSphere);
        venus.updateOuterSpherePhiLength(value);
        scene.add(venus.outerSphere);
    });
    venus11.onChange(function(value){
        scene.remove(venus.outerSphere);
        venus.updateOuterSphereThetaStart(value);
        scene.add(venus.outerSphere);
    });
    venus12.onChange(function(value){
        scene.remove(venus.outerSphere);
        venus.updateOuterSphereThetaLength(value);
        scene.add(venus.outerSphere);
    });

    gui.remember(mercury)
    Mercury = gui.addFolder('Mercury');
    mercuryS = Mercury.add(mercury, 'solidShow');
    mercuryS.name('Octahedron');
    mercuryP = Mercury.add(planets, 'mercuryShow');
    mercuryP.name('Orbit Path');
    iMercury = Mercury.addFolder('Inner Ring');
    mercury1 = iMercury.add(mercury, 'innerRingShow');
    mercury1.name('Ring');
    mercury2 = iMercury.add(mercury, 'innerSphereShow');
    mercury2.name('Sphere');
    mercury3 = iMercury.add(mercury, 'innerPhiStart', 0, 360);
    mercury3.name('Phi Start');
    mercury4 = iMercury.add(mercury, 'innerPhiLength', 0, 360);
    mercury4.name('Phi Length');
    mercury5 = iMercury.add(mercury, 'innerThetaStart', 0, 360);
    mercury5.name('Theta Start');
    mercury6 = iMercury.add(mercury, 'innerThetaLength', 0, 360);
    mercury6.name('Theta Length');
    oMercury = Mercury.addFolder('Outer Ring');
    mercury7 = oMercury.add(mercury, 'outerRingShow');
    mercury7.name('Show Ring');
    mercury8 = oMercury.add(mercury, 'outerSphereShow');
    mercury8.name('Show Sphere');
    mercury9 = oMercury.add(mercury, 'outerPhiStart', 0, 360);
    mercury9.name('Phi Start');
    mercury10 = oMercury.add(mercury, 'outerPhiLength', 0, 360);
    mercury10.name('Phi Length');
    mercury11 = oMercury.add(mercury, 'outerThetaStart', 0, 360);
    mercury11.name('Theta Start');
    mercury12 = oMercury.add(mercury, 'outerThetaLength', 0, 360);
    mercury12.name('Theta Length');
    mercuryP.onChange(function(value){
        planets.mercuryOrbit.visible = value; 
    });
    mercuryS.onChange(function(value){
        mercury.solid.visible = value; 
    });
    mercury1.onChange(function(value){
        mercury.innerRing.visible = value; 
    });
    mercury2.onChange(function(value){
        mercury.innerSphere.visible = value; 
    });
    mercury3.onChange(function(value){
        scene.remove(mercury.innerSphere);
        mercury.updateInnerSpherePhiStart(value);
        scene.add(mercury.innerSphere);
    });
    mercury4.onChange(function(value){
        scene.remove(mercury.innerSphere);
        mercury.updateInnerSpherePhiLength(value);
        scene.add(mercury.innerSphere);
    });
    mercury5.onChange(function(value){
        scene.remove(mercury.innerSphere);
        mercury.updateInnerSphereThetaStart(value);
        scene.add(mercury.innerSphere);
    });
    mercury6.onChange(function(value){
        scene.remove(mercury.innerSphere);
        mercury.updateInnerSphereThetaLength(value);
        scene.add(mercury.innerSphere);
    });
    mercury7.onChange(function(value){
        mercury.outerRing.visible = value; 
    });
    mercury8.onChange(function(value){
        mercury.outerSphere.visible = value; 
    });
    mercury9.onChange(function(value){
        scene.remove(mercury.outerSphere);
        mercury.updateOuterSpherePhiStart(value);
        scene.add(mercury.outerSphere);
    });
    mercury10.onChange(function(value){
        scene.remove(mercury.outerSphere);
        mercury.updateOuterSpherePhiLength(value);
        scene.add(mercury.outerSphere);
    });
    mercury11.onChange(function(value){
        scene.remove(mercury.outerSphere);
        mercury.updateOuterSphereThetaStart(value);
        scene.add(mercury.outerSphere);
    });
    mercury12.onChange(function(value){
        scene.remove(mercury.outerSphere);
        mercury.updateOuterSphereThetaLength(value);
        scene.add(mercury.outerSphere);
    });

    gui.remember(zodiac);
    // gui.remember(signs);
    Zodiac = gui.addFolder('Zodiac');
    zodiacRing = Zodiac.add(zodiac, 'ringShow');
    zodiacRing.name('Ring');
    zodiacSegments = Zodiac.add(zodiac, 'segmentsShow')
    zodiacSegments.name('Segments');
    // zodiacSigns = Zodiac.add(signs, 'signsShow')
    // zodiacSigns.name('Signs');
    zodiacRing.onChange(function(value){
        zodiac.ringMesh.visible = value; 
    });
    zodiacSegments.onChange(function(value){
        zodiac.segmentsMesh.visible = value; 
    });
    // zodiacSigns.onChange(function(value){
    //     scene.getObjectByName('aries').visible = value;
        // signs.taurus.visible = value; 
        // signs.gemini.visible = value; 
        // signs.cancer.visible = value; 
        // signs.leo.visible = value; 
        // signs.virgo.visible = value; 
        // signs.libra.visible = value; 
        // signs.scorpio.visible = value; 
        // signs.sagittarius.visible = value; 
        // signs.capricorn.visible = value; 
        // signs.aquarius.visible = value; 
        // signs.pisces.visible = value; 
    // });
}