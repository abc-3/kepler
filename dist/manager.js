function SceneManager(canvas){

    const clock = new THREE.Clock();
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }

    const scene = buildScene();
    const camera = buildCamera(screenDimensions);
    const renderer = buildRender(screenDimensions);
    const controls = initCamControls(camera);
    const sceneSubjects = createSceneSubjects(scene);

    function buildRender({ width, height }) {
        const renderer = new THREE.WebGLRenderer(
            { canvas: canvas, antialias: true, alpha: true }); 
        const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);
        return renderer;
    }

    // init the scene
    function buildScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#000");
        return scene;
    }

    function buildCamera({ width, height }) {
        const aspectRatio = width / height;
        const fieldOfView = 50;
        const nearPlane = 1;
        const farPlane = 2000; 
        const camera = new THREE.PerspectiveCamera( 
            fieldOfView, aspectRatio, nearPlane, farPlane );
        camera.position.z = 150;
        camera.position.x = 0;
        camera.position.y = -500;
        return camera
    }

    function initCamControls(camera) {
        const controls = new THREE.trackball(camera, renderer.domElement);
        controls.minDistance = 5;
        controls.maxDistance = 1200;
        controls.rotateSpeed = 2;
        controls.zoomSpeed = 1.2;
        return controls
    }

    function createSceneSubjects(scene) {
        const sceneSubjects = [
            new SolarSystem(scene, camera.position)
        ];
        return sceneSubjects;
    }

    this.update = function() {
        // const elapsedTime = clock.getElapsedTime();
        // for(let i=0; i<sceneSubjects.length; i++)
        //     sceneSubjects[i].update();  
        controls.update();
        renderer.render(scene, camera);
    }
    
    // update camera and renderer to fit the window size
    this.onWindowResize = function() {
        const { width, height } = canvas;
        screenDimensions.width = width;
        screenDimensions.height = height;
        camera.aspect = width / height;
        camera.fov = 45/((camera.aspect+1)/2);
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

}