<script setup>
import MenuProjet from '@/components/MenuProjet.vue'
import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import { onMounted } from 'vue';

onMounted(() => {
    const circles = document.querySelectorAll('.progress-circle');

    circles.forEach(circle => {
        const percent = circle.dataset.percent;
        const progress = circle.querySelector('.progress');
        const radius = progress.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percent / 100) * circumference;

        progress.style.strokeDashoffset = offset;
    });

    // Création de la scène principale
    const scene = new THREE.Scene();

    // Configuration de la caméra
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5; // Position rapprochée de la caméra

    // Variables globales pour l'objet chargé et les contrôles
    let object;
    let controls;
    let objToRender = 'models';
    let mouseX = 0, mouseY = 0; // Variables pour stocker la position de la souris

    // Chargement du modèle GLTF
    const loader = new GLTFLoader();
    loader.load(
        './../../public/picture/MiniProjet/models/scene.gltf',
        function (gltf) {
            object = gltf.scene;
            scene.add(object); // Ajout de l'objet à la scène
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded'); // Affichage du pourcentage de chargement
        },
        function (error) {
            console.error(error); // Affichage des erreurs de chargement
        }
    );

    // Configuration du renderer
    const container = document.getElementById("container3D");
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight); // Utilise la taille du conteneur
    container.appendChild(renderer.domElement);

    // Ajout de lumières à la scène
    const ambientLight = new THREE.AmbientLight(0x333333, 1);
    scene.add(ambientLight);

    const lights = [];
    const lightPositions = [
        [500, 500, 500],
        [-500, -500, 500],
        [-500, 500, -500],
        [500, -500, -500]
    ];

    lightPositions.forEach(pos => {
        const light = new THREE.PointLight(0xffffff, 1);
        light.position.set(...pos);
        lights.push(light);
        scene.add(light);
    });

    // Configuration des contrôles de la caméra
    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // Activer le lissage des mouvements
    controls.dampingFactor = 0.25; // Facteur de lissage
    controls.enableZoom = true; // Activer le zoom

    // Fonction d'animation
    function animate() {
        requestAnimationFrame(animate);

        // Mettre à jour les contrôles à chaque frame
        controls.update();

        // Rendu de la scène
        renderer.render(scene, camera);
    }

    // Ajouter un écouteur d'événement pour redimensionner la fenêtre
    window.addEventListener("resize", function () {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    // Ajouter un écouteur d'événement pour capturer la position de la souris
    document.onmousemove = (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }

    // Lancer l'animation
    animate();

    function showCompetences(divId, display) {
        let div = document.getElementById(divId);
        if (div.style.display == 'none') {
            div.style.display = display;
        }
        else {
            div.style.display = 'none'
        }
    }
});
</script>

<template>
    <MenuProjet />
    <h1 class="degree-title">Mise en place de différents models 3D en Tree.js :</h1>
    <div class="projet-container">
        <div id="container3D"></div>
        <h2 class="degree-title">Utilisation d'animation en css : </h2>
        <div id="containerLogo">
            <div class="logo-containerbas">
                <svg class="loader" xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
                    <g class="githubiconcdash">
                        <path
                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </g>
                </svg>
                <svg class="loader" version="1.0" xmlns="http://www.w3.org/2000/svg" width="200" height="200"
                    viewBox="0 0 860.000000 257.000000" preserveAspectRatio="xMidYMid meet">
                    <g class="githubdash" transform="translate(0.000000,257.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path
                            d="M1056 2454 c-497 -90 -895 -488 -993 -994 -19 -100 -21 -321 -4 -421 73 -428 362 -792 754 -949 144 -57 157 -46 157 129 l0 128 -93 -5 c-174 -9 -264 41 -333 184 -34 68 -62 102 -143 172 -47 39 -35 56 36 50 70 -6 122 -42 183 -128 29 -40 65 -77 95 -95 42 -26 58 -30 119 -30 39 0 88 6 108 13 31 11 37 18 43 52 4 21 19 58 35 83 l28 44 -99 21 c-307 64 -452 250 -453 577 0 149 19 208 109 331 13 17 13 27 4 50 -17 44 -15 171 5 237 16 56 17 57 54 57 54 0 146 -33 231 -83 l73 -43 86 18 c118 25 326 25 445 0 l88 -18 64 38 c90 54 189 90 239 86 38 -3 41 -5 54 -48 17 -52 20 -213 5 -249 -8 -20 -3 -34 34 -88 53 -79 73 -143 80 -253 11 -184 -47 -363 -152 -465 -84 -82 -194 -130 -368 -160 -36 -6 -38 -8 -23 -24 8 -9 25 -39 38 -66 21 -46 23 -68 28 -288 5 -255 6 -256 58 -257 37 0 174 57 260 109 485 291 711 849 566 1393 -56 209 -158 383 -318 544 -189 189 -407 304 -660 349 -110 19 -332 18 -440 -1z" />
                        <path
                            d="M3385 2015 c-282 -62 -422 -254 -457 -625 -20 -223 12 -446 85 -585 46 -87 136 -174 227 -218 111 -54 211 -70 389 -64 156 5 206 16 324 69 l67 31 0 378 0 379 -255 0 -255 0 0 -135 0 -135 100 0 100 0 0 -144 0 -143 -31 -7 c-57 -11 -174 -6 -227 9 -98 30 -158 105 -193 245 -18 71 -20 104 -17 229 5 159 23 233 75 312 29 45 99 94 157 112 64 19 258 15 349 -7 42 -11 80 -17 82 -14 3 3 18 59 34 124 20 81 26 123 19 131 -14 18 -123 51 -203 63 -97 13 -298 11 -370 -5z" />
                        <path
                            d="M5405 1968 c-3 -7 -4 -330 -3 -718 l3 -705 139 -3 c93 -2 143 1 152 9 11 9 14 68 14 310 l0 299 205 0 205 0 0 -304 c0 -268 2 -305 16 -310 23 -9 267 -7 282 2 10 7 12 157 10 718 l-3 709 -150 0 -150 0 -3 -267 -2 -268 -205 0 -205 0 0 258 c0 187 -3 261 -12 270 -17 17 -287 17 -293 0z" />
                        <path
                            d="M7602 1968 c-17 -17 -18 -1398 0 -1416 13 -13 185 -17 205 -4 6 4 15 20 18 35 4 15 10 26 14 25 144 -76 208 -92 341 -86 70 4 107 11 141 27 140 67 201 216 202 501 1 266 -60 404 -208 472 -43 20 -66 23 -165 23 -115 -1 -117 -1 -232 -50 -16 -6 -18 10 -20 236 l-3 244 -140 3 c-101 2 -144 -1 -153 -10z m543 -692 c15 -10 37 -39 48 -64 19 -41 22 -64 22 -187 -1 -160 -13 -202 -67 -235 -44 -26 -121 -26 -193 1 l-55 20 0 223 0 223 43 16 c23 9 51 18 62 21 37 9 114 -1 140 -18z" />
                        <path
                            d="M4295 1940 c-77 -17 -126 -74 -133 -153 -10 -138 134 -231 253 -164 92 52 114 188 42 265 -41 44 -106 65 -162 52z" />
                        <path
                            d="M4740 1657 l0 -143 -77 -19 -78 -20 -3 -99 c-2 -73 1 -102 10 -108 7 -4 43 -8 80 -8 l66 0 4 -259 3 -258 35 -69 c30 -58 44 -74 89 -101 29 -17 75 -37 103 -42 62 -14 178 -12 243 3 l50 11 3 113 3 112 -66 0 c-74 0 -128 18 -144 48 -7 13 -11 100 -11 231 l0 211 99 0 c72 0 102 4 110 14 8 9 11 52 9 127 l-3 114 -107 3 -107 3 -3 137 -3 137 -152 3 -153 3 0 -144z" />
                        <path
                            d="M4177 1513 c-9 -8 -9 -926 -1 -947 5 -14 28 -16 155 -16 l149 0 0 485 0 485 -148 0 c-82 0 -152 -3 -155 -7z" />
                        <path
                            d="M6562 1128 c3 -386 3 -394 26 -443 52 -112 129 -155 291 -163 121 -6 186 6 287 53 l71 32 9 -31 c9 -31 9 -31 89 -34 44 -2 90 0 103 3 l22 5 -2 483 -3 482 -150 0 -150 0 -3 -352 -2 -352 -56 -20 c-91 -35 -187 -23 -210 26 -5 10 -11 171 -14 358 l-5 340 -153 3 -153 3 3 -393z" />
                        <path d="M485 700 c4 -6 11 -8 16 -5 14 9 11 15 -7 15 -8 0 -12 -5 -9 -10z" />
                        <path d="M536 655 c4 -8 10 -15 15 -15 5 0 9 7 9 15 0 8 -7 15 -15 15 -9 0 -12 -6 -9 -15z" />
                        <path
                            d="M582 594 c2 -11 11 -20 22 -22 13 -3 17 1 14 14 -2 11 -11 20 -22 22 -13 3 -17 -1 -14 -14z" />
                        <path d="M640 521 c0 -15 6 -21 21 -21 14 0 19 5 17 17 -5 26 -38 29 -38 4z" />
                        <path d="M725 481 c-9 -16 3 -31 26 -31 14 0 19 6 17 17 -4 20 -33 29 -43 14z" />
                        <path d="M917 474 c-4 -4 -7 -11 -7 -16 0 -13 50 -6 53 7 2 12 -36 19 -46 9z" />
                        <path d="M820 456 c0 -16 19 -25 38 -19 22 8 13 33 -13 33 -15 0 -25 -6 -25 -14z" />
                    </g>
                </svg>
            </div>
            <div class="logo-containerbas">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="loader">
                    <g class="dash">
                        <path style="--sped: 4s;"
                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 1200.000000 313.000000"
                    preserveAspectRatio="xMidYMid meet" class="loader">
                    <g class="linkdash" transform="translate(0.000000,313.000000) scale(0.100000,-0.100000)"
                        fill="#000000" stroke="none">
                        <path style="--sped: 4s;"
                            d="M9100 3027 c-19 -6 -55 -32 -81 -57 -39 -37 -49 -55 -58 -100 -8 -40 -11 -418 -9 -1345 l3 -1290 22 -42 c27 -49 63 -79 112 -93 24 -8 452 -10 1332 -8 l1295 3 59 30 c40 20 69 45 90 73 l30 44 3 1311 c3 1465 8 1362 -68 1431 -21 19 -56 39 -77 45 -54 15 -2605 13 -2653 -2z m584 -372 c49 -21 113 -80 139 -129 16 -31 22 -59 22 -116 0 -65 -4 -82 -29 -128 -72 -130 -228 -175 -359 -104 -189 102 -179 375 17 472 50 25 157 27 210 5z m1456 -741 c83 -22 156 -62 204 -114 53 -56 78 -103 108 -201 21 -72 22 -91 26 -581 l3 -508 -210 0 -210 0 -3 407 c-5 452 -7 470 -71 555 -107 142 -357 108 -441 -59 -40 -80 -46 -144 -46 -530 l0 -373 -215 0 -215 0 0 705 0 705 205 0 205 0 0 -97 0 -98 30 37 c61 74 185 139 315 164 81 15 229 10 315 -12z m-1340 -699 l0 -705 -215 0 -215 0 0 705 0 705 215 0 215 0 0 -705z" />
                        <path style="--sped: 4s;"
                            d="M1790 2651 c-115 -37 -184 -128 -184 -241 0 -172 158 -288 326 -238 51 15 126 82 149 133 21 46 24 129 7 186 -15 51 -70 114 -121 140 -44 23 -137 33 -177 20z" />
                        <path style="--sped: 4s;"
                            d="M100 1565 l0 -1055 630 0 630 0 0 210 0 210 -420 0 -420 0 -2 843 -3 842 -207 3 -208 2 0 -1055z" />
                        <path style="--sped: 4s;"
                            d="M4035 2608 c-3 -7 -4 -481 -3 -1053 l3 -1040 208 -3 207 -2 0 350 c0 193 4 349 8 346 4 -2 122 -160 262 -350 l255 -345 243 -1 c133 0 242 3 242 6 0 3 -131 175 -291 381 -160 206 -288 380 -286 388 3 7 125 148 271 313 146 166 266 304 266 307 0 3 -108 5 -239 5 l-239 0 -237 -272 c-131 -150 -241 -274 -246 -276 -5 -2 -9 269 -9 627 l0 631 -205 0 c-155 0 -207 -3 -210 -12z" />
                        <path style="--sped: 4s;"
                            d="M8110 2184 l0 -436 -52 46 c-102 89 -244 136 -411 136 -288 0 -533 -182 -625 -467 -66 -203 -41 -473 61 -653 49 -87 168 -200 257 -243 107 -52 175 -67 308 -67 186 0 322 42 435 133 l57 47 0 -85 0 -85 195 0 195 0 0 1055 0 1055 -210 0 -210 0 0 -436z m-218 -584 c53 -15 127 -69 164 -117 105 -138 110 -369 11 -515 -77 -114 -184 -164 -336 -156 -151 7 -252 74 -314 206 -31 64 -32 72 -32 197 0 120 2 134 27 187 52 112 120 172 228 203 60 16 188 14 252 -5z" />
                        <path style="--sped: 4s;"
                            d="M3063 1915 c-100 -22 -190 -71 -260 -141 l-63 -62 0 99 0 99 -195 0 -195 0 0 -700 0 -700 205 0 205 0 0 338 c0 185 5 370 10 410 18 137 83 238 180 281 113 49 216 36 290 -38 83 -83 84 -85 88 -568 l3 -423 210 0 211 0 -4 483 c-4 458 -6 486 -26 562 -12 44 -34 105 -49 135 -32 65 -112 149 -172 180 -110 56 -299 75 -438 45z" />
                        <path style="--sped: 4s;"
                            d="M6007 1920 c-288 -52 -472 -211 -544 -470 -26 -97 -23 -336 5 -443 33 -122 95 -231 177 -313 79 -80 145 -120 260 -161 77 -27 87 -28 270 -27 164 0 201 3 269 22 137 38 275 117 330 189 16 22 14 23 -108 123 -69 55 -127 100 -129 100 -2 0 -25 -20 -52 -45 -153 -143 -403 -163 -539 -44 -48 43 -100 137 -112 201 l-6 38 503 2 504 3 -2 135 c-1 100 -7 155 -22 214 -60 229 -201 386 -405 452 -68 22 -103 27 -216 30 -74 1 -157 -1 -183 -6z m265 -292 c26 -11 65 -39 86 -62 42 -45 82 -137 82 -187 l0 -29 -302 2 -303 3 3 30 c5 44 44 125 80 166 61 69 179 113 272 101 19 -3 56 -14 82 -24z" />
                        <path style="--sped: 4s;"
                            d="M1650 1210 l0 -700 205 0 205 0 0 700 0 700 -205 0 -205 0 0 -700z" />
                    </g>
                </svg>
            </div>
            <div class="logo-containerbas">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="200" height="200"
                    viewBox="0 0 2499.899999999999 2500" class="loader">
                    <g class="instadashicone">
                        <defs>
                            <radialGradient id="a" cx="332.14" cy="2511.81" r="3263.54" gradientUnits="userSpaceOnUse">
                                <stop offset=".09" stop-color="#fa8f21" />
                                <stop offset=".78" stop-color="#d82d7e" />
                            </radialGradient>
                            <radialGradient id="b" cx="1516.14" cy="2623.81" r="2572.12" gradientUnits="userSpaceOnUse">
                                <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0" />
                                <stop offset="1" stop-color="#8c3aaa" />
                            </radialGradient>
                        </defs>
                        <path style="--sped: 4s;"
                            d="M833.4 1250c0-230.11 186.49-416.7 416.6-416.7s416.7 186.59 416.7 416.7-186.59 416.7-416.7 416.7-416.6-186.59-416.6-416.7m-225.26 0c0 354.5 287.36 641.86 641.86 641.86s641.86-287.36 641.86-641.86S1604.5 608.14 1250 608.14 608.14 895.5 608.14 1250m1159.13-667.31a150 150 0 1 0 150.06-149.94h-.06a150.07 150.07 0 0 0-150 149.94M745 2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28 7.27-505.15c5.55-121.87 26-188 43-232.13 22.72-58.36 49.78-100 93.5-143.78s85.32-70.88 143.78-93.5c44-17.16 110.26-37.46 232.13-43 131.76-6.06 171.34-7.27 505-7.27s373.28 1.31 505.15 7.27c121.87 5.55 188 26 232.13 43 58.36 22.62 100 49.78 143.78 93.5s70.78 85.42 93.5 143.78c17.16 44 37.46 110.26 43 232.13 6.06 131.87 7.27 171.34 7.27 505.15s-1.21 373.28-7.27 505.15c-5.55 121.87-25.95 188.11-43 232.13-22.72 58.36-49.78 100-93.5 143.68s-85.42 70.78-143.78 93.5c-44 17.16-110.26 37.46-232.13 43-131.76 6.06-171.34 7.27-505.15 7.27s-373.28-1.21-505-7.27M734.65 7.57c-133.07 6.06-224 27.16-303.41 58.06C349 97.54 279.38 140.35 209.81 209.81S97.54 349 65.63 431.24c-30.9 79.46-52 170.34-58.06 303.41C1.41 867.93 0 910.54 0 1250s1.41 382.07 7.57 515.35c6.06 133.08 27.16 223.95 58.06 303.41 31.91 82.19 74.62 152 144.18 221.43S349 2402.37 431.24 2434.37c79.56 30.9 170.34 52 303.41 58.06C868 2498.49 910.54 2500 1250 2500s382.07-1.41 515.35-7.57c133.08-6.06 223.95-27.16 303.41-58.06 82.19-32 151.86-74.72 221.43-144.18s112.18-139.24 144.18-221.43c30.9-79.46 52.1-170.34 58.06-303.41 6.06-133.38 7.47-175.89 7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95 97.54 2068.86 65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17 1.51 1589.56 0 1250.1 0S868 1.41 734.65 7.57"
                            fill="url(#a)" />
                        <path
                            d="M833.4 1250c0-230.11 186.49-416.7 416.6-416.7s416.7 186.59 416.7 416.7-186.59 416.7-416.7 416.7-416.6-186.59-416.6-416.7m-225.26 0c0 354.5 287.36 641.86 641.86 641.86s641.86-287.36 641.86-641.86S1604.5 608.14 1250 608.14 608.14 895.5 608.14 1250m1159.13-667.31a150 150 0 1 0 150.06-149.94h-.06a150.07 150.07 0 0 0-150 149.94M745 2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28 7.27-505.15c5.55-121.87 26-188 43-232.13 22.72-58.36 49.78-100 93.5-143.78s85.32-70.88 143.78-93.5c44-17.16 110.26-37.46 232.13-43 131.76-6.06 171.34-7.27 505-7.27s373.28 1.31 505.15 7.27c121.87 5.55 188 26 232.13 43 58.36 22.62 100 49.78 143.78 93.5s70.78 85.42 93.5 143.78c17.16 44 37.46 110.26 43 232.13 6.06 131.87 7.27 171.34 7.27 505.15s-1.21 373.28-7.27 505.15c-5.55 121.87-25.95 188.11-43 232.13-22.72 58.36-49.78 100-93.5 143.68s-85.42 70.78-143.78 93.5c-44 17.16-110.26 37.46-232.13 43-131.76 6.06-171.34 7.27-505.15 7.27s-373.28-1.21-505-7.27M734.65 7.57c-133.07 6.06-224 27.16-303.41 58.06C349 97.54 279.38 140.35 209.81 209.81S97.54 349 65.63 431.24c-30.9 79.46-52 170.34-58.06 303.41C1.41 867.93 0 910.54 0 1250s1.41 382.07 7.57 515.35c6.06 133.08 27.16 223.95 58.06 303.41 31.91 82.19 74.62 152 144.18 221.43S349 2402.37 431.24 2434.37c79.56 30.9 170.34 52 303.41 58.06C868 2498.49 910.54 2500 1250 2500s382.07-1.41 515.35-7.57c133.08-6.06 223.95-27.16 303.41-58.06 82.19-32 151.86-74.72 221.43-144.18s112.18-139.24 144.18-221.43c30.9-79.46 52.1-170.34 58.06-303.41 6.06-133.38 7.47-175.89 7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95 97.54 2068.86 65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17 1.51 1589.56 0 1250.1 0S868 1.41 734.65 7.57"
                            fill="url(#b)" />
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 594.094 168.536"
                    class="loader">
                    <g fill="#none" class="instadash">
                        <path style="--sped: 4s;"
                            d="M30.577.586C18.417 5.68 5.049 20.053.827 38.108c-5.347 22.869 16.904 32.54 18.729 29.374 2.148-3.727-3.987-4.987-5.25-16.853-1.632-15.326 5.493-32.451 14.461-39.965 1.667-1.396 1.587.547 1.587 4.141 0 6.428-.355 64.122-.355 76.164 0 16.293-.673 21.438-1.882 26.521-1.225 5.152-3.193 8.633-1.702 9.975 1.667 1.5 8.783-2.068 12.903-7.818 4.94-6.896 6.669-15.178 6.98-24.172.375-10.842.359-28.046.375-37.859.015-9 .151-35.354-.158-51.197C46.44 2.533 35.663-1.544 30.577.586zM591.424 86.18c-1.764 0-2.568 1.818-3.234 4.879-2.311 10.643-4.738 13.045-7.869 13.045-3.498 0-6.642-5.27-7.449-15.818-.635-8.294-.533-23.565.279-38.754.166-3.121-.695-6.209-9.066-9.25-3.602-1.309-8.838-3.234-11.445 3.059-7.365 17.779-10.248 31.895-10.926 37.627-.035.297-.398.357-.463-.336-.432-4.592-1.398-12.938-1.518-30.471-.023-3.421-.748-6.333-4.524-8.717-2.45-1.548-9.89-4.283-12.569-1.028-2.32 2.662-5.009 9.826-7.802 18.318-2.27 6.901-3.851 11.57-3.851 11.57s.029-18.623.057-25.687c.012-2.665-1.816-3.554-2.367-3.714-2.48-.72-7.369-1.923-9.443-1.923-2.561 0-3.188 1.431-3.188 3.516 0 .273-.404 24.519-.404 41.473 0 .736.001 1.54.004 2.394-1.416 7.792-6.008 18.37-11.002 18.37-5 0-7.358-4.422-7.358-24.634 0-11.79.354-16.918.527-25.445.102-4.912.297-8.685.285-9.54-.037-2.625-4.576-3.948-6.688-4.438-2.122-.492-3.966-.684-5.406-.602-2.038.115-3.479 1.452-3.479 3.291 0 .986.011 2.86.011 2.86-2.625-4.125-6.848-6.996-9.656-7.828-7.566-2.246-15.461-.255-21.416 8.077-4.733 6.621-7.586 14.121-8.709 24.895-.821 7.876-.553 15.864.906 22.619-1.763 7.622-5.036 10.745-8.62 10.745-5.203 0-8.975-8.492-8.537-23.18.289-9.661 2.222-16.44 4.335-26.248.901-4.182.169-6.37-1.667-8.468-1.684-1.925-5.271-2.907-10.43-1.698-3.674.861-8.928 1.789-13.733 2.501 0 0 .29-1.157.528-3.197 1.25-10.698-10.375-9.83-14.084-6.413-2.214 2.04-3.721 4.446-4.293 8.772-.907 6.864 4.691 10.103 4.691 10.103-1.837 8.41-6.34 19.394-10.988 27.336-2.49 4.255-4.396 7.408-6.854 10.76a937.569 937.569 0 0 1-.02-3.738c-.057-17.679.179-31.593.282-36.608.102-4.912.299-8.584.287-9.439-.027-1.92-1.148-2.646-3.48-3.563-2.062-.812-4.5-1.374-7.029-1.57-3.191-.248-5.115 1.444-5.064 3.446.01.378.01 2.699.01 2.699-2.625-4.125-6.848-6.996-9.656-7.828-7.566-2.246-15.461-.255-21.416 8.077-4.732 6.621-7.831 15.912-8.709 24.812-.818 8.295-.667 15.344.448 21.282-1.203 5.946-4.662 12.164-8.573 12.164-5 0-7.845-4.422-7.845-24.634 0-11.79.354-16.917.527-25.445.102-4.912.297-8.685.285-9.54-.037-2.625-4.576-3.948-6.688-4.438-2.21-.512-4.118-.699-5.583-.591-1.934.144-3.292 1.874-3.292 3.165v2.976c-2.625-4.125-6.848-6.996-9.656-7.828-7.566-2.246-15.417-.223-21.416 8.077-3.912 5.412-7.079 11.412-8.709 24.694-.471 3.838-.679 7.433-.652 10.792-1.56 9.54-8.449 20.535-14.086 20.535-3.298 0-6.439-6.396-6.439-20.029 0-18.16 1.125-44.015 1.314-46.507 0 0 7.121-.121 8.5-.137 3.553-.039 6.77.045 11.5-.197 2.373-.121 4.659-8.637 2.21-9.691-1.109-.477-8.955-.895-12.064-.961-2.615-.059-9.896-.598-9.896-.598s.653-17.162.806-18.975c.129-1.512-1.826-2.289-2.947-2.762-2.727-1.152-5.165-1.705-8.056-2.301-3.994-.824-5.807-.018-6.16 3.354-.533 5.115-.809 20.101-.809 20.101-2.932 0-12.943-.573-15.875-.573-2.725 0-5.664 11.715-1.898 11.859 4.333.168 11.884.313 16.89.464 0 0-.223 26.282-.223 34.396 0 .863.003 1.694.009 2.501-2.755 14.36-12.46 22.117-12.46 22.117 2.084-9.5-2.173-16.634-9.84-22.673-2.826-2.226-8.402-6.438-14.642-11.055 0 0 3.614-3.562 6.819-10.729 2.271-5.076 2.369-10.885-3.206-12.166-9.209-2.117-16.804 4.646-19.069 11.867-1.755 5.595-.819 9.745 2.619 14.058.251.315.523.636.804.96-2.079 4.007-4.935 9.402-7.354 13.586-6.715 11.616-11.786 20.804-15.62 20.804-3.064 0-3.022-9.328-3.022-18.062 0-7.529.556-18.849 1-30.569.147-3.876-1.792-6.084-5.041-8.084-1.974-1.215-6.187-3.604-8.626-3.604-3.652 0-14.189.497-24.145 29.296-1.255 3.63-3.72 10.244-3.72 10.244l.212-34.632c0-.812-.433-1.598-1.423-2.135-1.678-.91-6.159-2.773-10.143-2.773-1.898 0-2.846.883-2.846 2.643l-.348 54.183c0 4.117.107 8.92.515 11.02.405 2.104 1.062 3.814 1.876 4.832.812 1.016 1.752 1.791 3.302 2.111 1.442.297 9.339 1.311 9.75-1.707.492-3.617.51-7.529 4.657-22.119 6.456-22.715 14.873-33.798 18.831-37.734.691-.688 1.481-.729 1.443.397-.168 4.979-.762 17.424-1.163 27.996-1.072 28.292 4.075 33.536 11.43 33.536 5.627 0 13.559-5.592 22.062-19.744 5.3-8.82 10.447-17.468 14.146-23.701 2.577 2.386 5.468 4.953 8.359 7.696 6.716 6.374 8.921 12.431 7.458 18.177-1.119 4.393-5.333 8.92-12.833 4.52-2.186-1.283-3.12-2.275-5.317-3.723-1.181-.777-2.983-1.01-4.064-.195-2.809 2.117-4.415 4.811-5.332 8.145-.892 3.244 2.357 4.959 5.725 6.459 2.9 1.291 9.133 2.461 13.108 2.594 15.487.518 27.895-7.478 36.531-28.104 1.547 17.813 8.126 27.893 19.559 27.893 7.643 0 15.306-9.879 18.657-19.598.962 3.962 2.386 7.406 4.225 10.32 8.809 13.957 25.898 10.953 34.482-.898 2.653-3.662 3.058-4.979 3.058-4.979 1.252 11.191 10.264 15.102 15.424 15.102 5.779 0 11.746-2.732 15.928-12.147a28.761 28.761 0 0 0 1.609 2.923c8.809 13.957 25.898 10.953 34.482-.898.404-.557.756-1.061 1.062-1.514l.252 7.352-7.902 7.248c-13.247 12.141-23.311 21.35-24.051 32.074-.941 13.674 10.142 18.756 18.539 19.422 8.902.707 16.539-4.215 21.227-11.104 4.125-6.062 6.824-19.111 6.627-32-.079-5.161-.209-11.723-.312-18.757 4.65-5.4 9.89-12.226 14.713-20.214 5.258-8.707 10.892-20.398 13.776-29.497 0 0 4.895.042 10.119-.3 1.671-.109 2.15.231 1.842 1.457-.373 1.479-6.6 25.498-.917 41.498 3.89 10.953 12.659 14.477 17.858 14.477 6.086 0 11.907-4.596 15.027-11.421.376.761.77 1.497 1.198 2.177 8.809 13.957 25.838 10.936 34.482-.898 1.95-2.67 3.058-4.979 3.058-4.979 1.855 11.582 10.862 15.16 16.021 15.16 5.374 0 10.474-2.203 14.611-11.994.173 4.312.445 7.836.875 8.947.262.68 1.789 1.533 2.9 1.945 4.916 1.822 9.93.961 11.785.586 1.285-.26 2.287-1.291 2.424-3.953.359-6.99.139-18.734 2.258-27.463 3.557-14.648 6.875-20.331 8.449-23.143.881-1.576 1.875-1.836 1.911-.168.073 3.375.241 13.286 1.62 26.602 1.012 9.793 2.363 15.582 3.402 17.414 2.965 5.238 6.627 5.486 9.609 5.486 1.896 0 5.864-.523 5.509-3.857-.173-1.625.13-11.668 3.637-26.099 2.29-9.424 6.108-17.938 7.485-21.052.508-1.148.744-.243.736-.067-.29 6.49-.941 27.718 1.703 39.328 3.584 15.729 13.951 17.488 17.564 17.488 7.713 0 14.021-5.867 16.146-21.305.517-3.719-.241-6.588-2.512-6.588zm-323.089-9.544c-.442 8.17-2.036 15-4.594 19.961-4.628 8.979-13.785 11.826-17.822-1.148-2.911-9.355-1.92-22.112-.709-29.002 1.797-10.227 6.297-17.477 13.322-16.79 7.216.706 10.724 9.979 9.803 26.979zm70.501.118c-.412 7.715-2.412 15.465-4.594 19.844-4.504 9.041-13.92 11.867-17.822-1.148-2.668-8.893-2.029-20.402-.709-27.653 1.713-9.41 5.865-18.139 13.322-18.139 7.25-.001 10.825 7.953 9.803 27.096zm1.84 52.635c-.098 14.074-2.312 26.414-7.062 29.998-6.737 5.082-15.792 1.27-13.917-9 1.659-9.088 9.505-18.369 20.999-29.709-.001 0 .023 2.586-.02 8.711zm121.702-52.553c-.392 8.47-2.267 15.091-4.594 19.761-4.505 9.041-13.854 11.848-17.822-1.148-2.163-7.084-2.264-18.916-.709-28.802 1.583-10.07 6.003-17.677 13.322-16.99 7.219.677 10.598 9.979 9.803 27.179z" />
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>

<style scoped>
#containerLogo {
    position: relative;
    display: flex;
    align-items: center;

}

#container3D {
    width: 100vh;
    height: 50vh;
    /* La hauteur de la fenêtre */
    overflow: hidden;
    /* Évite les débordements */
}

.logo-containerbas {
    margin: 0 5% 0 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.logo-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.loader {
    display: block;
    width: 12em;
    height: 12em;
    overflow: visible;
}

.loader .dash path {
    stroke: #2AF;
    stroke-width: 1px;
    stroke-linecap: round;
    animation: dashArray var(--sped, 2s) ease-in-out infinite,
        dashOffset var(--sped, 2s) linear infinite;
}

svg {
    margin: 1%;
}

/*//////////////////////////////////////////////
              Parametre pour Linke
  /////////////////////////////////////////////*/
.loader .linkdash path {
    stroke: #2AF;
    stroke-width: 100px;
    stroke-linecap: round;
    animation: dashArray var(--sped, 2s) ease-in-out infinite,
        dashOffset var(--sped, 2s) linear infinite;
}

/*//////////////////////////////////////////////
              Parametre pour INSTA
  /////////////////////////////////////////////*/

.loader .instadash path {
    stroke: #E1306C;
    stroke-width: 3px;
    stroke-linecap: round;
    animation: dashArray var(--sped, 2s) ease-in-out infinite,
        dashOffset var(--sped, 2s) linear infinite;
}

.loader .instadashicone path {
    stroke: #E1306C;
    stroke-width: 40;
    stroke-linecap: round;
    animation: dashArray1 var(--sped, 1s) ease-in-out infinite,
        dashArray1 var(--sped, 1s) linear infinite;
}

/*//////////////////////////////////////////////
              Parametre pour GITHUB
  /////////////////////////////////////////////*/

.loader .githubdash path {
    stroke: #2ff63c;
    stroke-width: 40px;
    stroke-linecap: round;
    animation: dashArray var(--sped, 2s) ease-in-out infinite,
        dashOffset var(--sped, 2s) linear infinite;
}

.loader .githubiconcdash path {
    stroke: #2ff63c;
    stroke-width: 1px;
    stroke-linecap: round;
    animation: dashArray var(--sped, 2s) ease-in-out infinite,
        dashOffset var(--sped, 2s) linear infinite;
}

@keyframes dashArray1 {

    50% {
        stroke-dasharray: 0 359 1 0;
    }

    100% {
        stroke-dasharray: 359 1 0 0;
    }
}

@keyframes dashArray {
    0% {
        stroke-dasharray: 0 1 359 0;
    }

    50% {
        stroke-dasharray: 0 359 1 0;
    }

    100% {
        stroke-dasharray: 359 1 0 0;
    }
}
</style>
