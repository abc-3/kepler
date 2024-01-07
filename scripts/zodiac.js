function ZodiacSettings(color) {
    this.color = color
    this.ringShow = false;
    this.segmentsShow = false;
    this.innerRadius = 200;
    this.outerRadius = 225;
};

function ZodiacRing(color, opacity=1){
    this.settings = new ZodiacSettings(color)
    this.ringShow = this.settings.ringShow;
    this.segmentsShow = this.settings.segmentsShow;
    this.ring = new THREE.RingGeometry( 
        this.settings.innerRadius, this.settings.outerRadius, 12 );
    this.ringSurface = new THREE.MeshNormalMaterial({wireframe: true});
    this.ringMesh = new THREE.Mesh(this.ring, this.ringSurface);
    this.ringMesh.material.side = THREE.DoubleSide;
    this.ringEdgesGeometry = new THREE.EdgesGeometry( this.ring );
    this.ringEdges = new THREE.LineSegments( this.ringEdgesGeometry, 
        new THREE.LineBasicMaterial( { color: this.settings.color, linewidth: 2 } ) ); 
    this.ringMesh.add( this.ringEdges );
    this.ringMesh.visible = this.settings.ringShow;
    this.segments = new THREE.RingGeometry(  this.settings.outerRadius, 0, 12 );
    this.segmentsMaterial = new THREE.MeshNormalMaterial({wireframe: true});
    this.segmentsMesh = new THREE.Mesh(this.segments, this.segmentsMaterial);
    this.segmentsMesh.visible = this.settings.segmentsShow;
}
function deg_to_rad(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}

function ZodiacSigns(scene, cameraPosition, zodiac){
    this.signsShow = false;
    var signs = [];
    var loader = new THREE.GLTFLoader();
    var basePath = '../../images/Zodiac_Signs_GLTF/';
    loader.load( basePath+'Aries.gltf', function ( model ) {
        model.name = 'aries';
        model.scene.traverse((o) => {
            if (o.isMesh) {
              o.material.emissive = new THREE.Color( 0xaf923b );
              o.rotation.z = deg_to_rad(305);
              o.rotation.x = deg_to_rad(25);
            }
        });
        model.scene.position.set(230, 50, 0);
        model.scene.lookAt( cameraPosition );
        model.scene.visible = false;
        signs.push(model);
    });
    scene.add(signs[0].scene);
    loader.load( basePath+'Taurus.gltf', function ( gltf ) {
        model = gltf.scene;
        model.traverse((o) => {
            if (o.isMesh) {
              o.material.emissive = new THREE.Color( 0xaf923b );
              o.rotation.z = deg_to_rad(305);
              o.rotation.x = deg_to_rad(10);
              o.rotation.y = deg_to_rad(-15);
            }
        });
        model.position.set(230, -55, 0);
        model.lookAt( cameraPosition );
        this.taurus = model;
    }, undefined, function ( error ) {
        console.error( error );
    } );
    this.taurus.visible = this.taurusShow;
    this.gemini = new THREE.Object3D();
    loader.load( basePath+'Gemini.gltf', function ( gltf ) {
        model = gltf.scene;
        model.traverse((o) => {
            if (o.isMesh) {
              o.material.emissive = new THREE.Color( 0xaf923b );
              o.rotation.z = deg_to_rad(315);
              o.rotation.x = deg_to_rad(15);
              o.rotation.y = deg_to_rad(-25);
            }
        });
        model.position.set(165, -170, 0);
        model.lookAt( cameraPosition );
        this.gemini = model;
    }, undefined, function ( error ) {
        console.error( error );
    } );
    this.gemini.visible = this.geminiShow;
    this.cancer = new THREE.Object3D();
    loader.load( basePath+'Cancer.gltf', function ( gltf ) {
        model = gltf.scene;
        model.traverse((o) => {
            if (o.isMesh) {
              o.material.emissive = new THREE.Color( 0xaf923b );
              o.rotation.z = deg_to_rad(160);
              o.rotation.x = deg_to_rad(30);
              o.rotation.y = deg_to_rad(5);
            }
        });
        model.position.set(60, -225, 15);
        model.lookAt( cameraPosition );
        this.cancer = model;
    }, undefined, function ( error ) {
        console.error( error );
    } );
    this.cancer.visible = this.cancerShow;
    this.leo = new THREE.Object3D();
    loader.load( basePath+'Leo.gltf', function ( gltf ) {
        model = gltf.scene;
        model.traverse((o) => {
            if (o.isMesh) {
              o.material.emissive = new THREE.Color( 0xaf923b );
              o.rotation.z = deg_to_rad(25);
              o.rotation.x = deg_to_rad(25);
              o.rotation.y = deg_to_rad(5);
            }
        });
        model.position.set(-60, -225, 0);
        model.lookAt( cameraPosition );
        this.leo = model;
    }, undefined, function ( error ) {
        console.error( error );
    } );
    this.leo.visible = this.leoShow;
    this.virgo = new THREE.Object3D();
    loader.load( basePath+'Virgo.gltf', function ( gltf ) {
        model = gltf.scene;
        model.traverse((o) => {
            if (o.isMesh) {
              o.material.emissive = new THREE.Color( 0xaf923b );
              o.rotation.z = deg_to_rad(55);
              o.rotation.x = deg_to_rad(0);
              o.rotation.y = deg_to_rad(25);
            }
        });
        model.position.set(-170, -160, 0);
        model.lookAt( cameraPosition );
        this.virgo = model;
    }, undefined, function ( error ) {
        console.error( error );
    } );
    this.virgo.visible = this.virgoShow;
    this.libra = new THREE.Object3D();
    loader.load( basePath+'Libra.gltf', function ( gltf ) {
        model = gltf.scene;
        model.traverse((o) => {
            if (o.isMesh) {
              o.material.emissive = new THREE.Color( 0xaf923b );
              o.rotation.z = deg_to_rad(55);
              o.rotation.x = deg_to_rad(20);
              o.rotation.y = deg_to_rad(5);
            }
        });
        model.position.set(-230, -60, 0);
        model.lookAt( cameraPosition );
        this.libra = model;
    }, undefined, function ( error ) {
        console.error( error );
    } );
    this.libra.visible = this.libraShow;
    this.scorpio = new THREE.Object3D();
    loader.load( basePath+'Scorpio.gltf', function ( gltf ) {
        model = gltf.scene;
        model.traverse((o) => {
            if (o.isMesh) {
              o.material.emissive = new THREE.Color( 0xaf923b );
              o.rotation.z = deg_to_rad(55);
              o.rotation.x = deg_to_rad(30);
            }
        });
        model.position.set(-230, 60, 0);
        model.lookAt( cameraPosition );
        this.scorpio = model;
    }, undefined, function ( error ) {
        console.error( error );
    } );
    this.scorpio.visible = this.scorpioShow;
    this.sagittarius = new THREE.Object3D();
    loader.load( basePath+'Sagittarius.gltf', function ( gltf ) {
        model = gltf.scene;
        model.traverse((o) => {
            if (o.isMesh) {
              o.material.emissive = new THREE.Color( 0xaf923b );
              o.rotation.z = deg_to_rad(45);
              o.rotation.x = deg_to_rad(20);
            }
        });
        model.position.set(-165, 170, 0);
        model.lookAt( cameraPosition );
        this.sagittarius = model;
    }, undefined, function ( error ) {
        console.error( error );
    } );
    this.sagittarius.visible = this.sagittariusShow;
    this.capricorn = new THREE.Object3D();
    loader.load( basePath+'Capricorn.gltf', function ( gltf ) {
        model = gltf.scene;
        model.traverse((o) => {
            if (o.isMesh) {
              o.material.emissive = new THREE.Color( 0xaf923b );
              o.rotation.z = deg_to_rad(280);
              o.rotation.x = deg_to_rad(15);
              o.rotation.y = deg_to_rad(5);
            }
        });
        model.position.set(-65, 225, 5);
        model.lookAt( cameraPosition );
        this.capricorn = model;
    }, undefined, function ( error ) {
        console.error( error );
    } );
    this.capricorn.visible = this.capricornShow;
    this.aquarius = new THREE.Object3D();
    loader.load( basePath+'Aquarius.gltf', function ( gltf ) {
        model = gltf.scene;
        model.traverse((o) => {
            if (o.isMesh) {
              o.material.emissive = new THREE.Color( 0xaf923b );
              o.rotation.z = deg_to_rad(330);
              o.rotation.x = deg_to_rad(10);
              o.rotation.y = deg_to_rad(-5);
            }
        });
        model.position.set(72, 224, 0);
        model.lookAt( cameraPosition );
        this.aquarius = model;
    }, undefined, function ( error ) {
        console.error( error );
    } );
    this.aquarius.visible = this.aquariusShow;
    this.pisces = new THREE.Object3D();
    loader.load( basePath+'Pisces.gltf', function ( gltf ) {
        model = gltf.scene;
        model.traverse((o) => {
            if (o.isMesh) {
              o.material.emissive = new THREE.Color( 0xaf923b );
              o.rotation.z = deg_to_rad(305);
              o.rotation.x = deg_to_rad(20);
            }
        });
        model.position.set(174, 158, 0);
        model.lookAt( cameraPosition );
        this.pisces = model;
    }, undefined, function ( error ) {
        console.error( error );
    } );
    this.pisces.visible = this.piscesShow;
}
//235.3720459188
//12.264773727892

// 1: 174.18584287043  158.30127018922
// 2: 71.698729810781  224.18584287042	
// 3: 