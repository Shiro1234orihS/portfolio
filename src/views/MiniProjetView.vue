<script setup>
import MenuProjet from "@/components/MenuProjet.vue";
import * as THREE from "https://esm.sh/three@0.129.0";
import { OrbitControls } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import { GLTFLoader } from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";
import { onMounted, ref } from "vue";

const isLoaded = ref(false);
const is3DLoaded = ref(false);
const currentSection = ref("3d");

// Données des projets
const projectCategories = ref([
  {
    id: "3d",
    title: "Modélisation 3D",
    icon: "🎮",
    description: "Expérimentation avec Three.js et modèles GLTF",
    color: "#8B5CF6",
  },
  {
    id: "css",
    title: "Animations CSS",
    icon: "🎨",
    description: "Logos animés avec SVG et CSS avancé",
    color: "#06B6D4",
  },
]);

const socialLogos = ref([
  {
    name: "GitHub",
    color: "#2ff63c",
    category: "Development",
    description: "Plateforme de développement collaboratif",
  },
  {
    name: "LinkedIn",
    color: "#2AF",
    category: "Professional",
    description: "Réseau professionnel et opportunités",
  },
  {
    name: "Instagram",
    color: "#E1306C",
    category: "Social",
    description: "Partage de contenu visuel",
  },
]);

const techniques = ref([
  { name: "Three.js", icon: "🌐", description: "Rendu 3D dans le navigateur" },
  { name: "GLTF Loading", icon: "📦", description: "Chargement de modèles 3D" },
  { name: "SVG Animation", icon: "🎨", description: "Animations vectorielles fluides" },
  { name: "CSS Keyframes", icon: "⚡", description: "Animations CSS performantes" },
]);

let scene, camera, renderer, object, controls;

onMounted(() => {
  onMounted(() => {
    // Animation d'apparition progressive
    setTimeout(() => {
      isLoaded.value = true;
    }, 300);

    // Initialisation de la scène 3D
    init3DScene();

    // Initialisation des cercles de progression
    initProgressCircles();

    // 🔥 AJOUTEZ CETTE PARTIE :
    // Observer pour les animations d'apparition
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observer les éléments à animer
    document.querySelectorAll(".fade-in").forEach((el) => {
      observer.observe(el);
    });
  });
});

const init3DScene = () => {
  // Création de la scène principale
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x0a0a0a);

  // Configuration de la caméra
  const container = document.getElementById("container3D");
  if (!container) return;

  camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(0, 2, 5);

  // Configuration du renderer
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  container.appendChild(renderer.domElement);

  // Chargement du modèle GLTF avec gestion d'erreur améliorée
  const loader = new GLTFLoader();
  const loadingProgress = document.getElementById("loading-progress");

  loader.load(
    "/picture/MiniProjet/models/scene.gltf",
    function (gltf) {
      object = gltf.scene;
      object.scale.set(0.5, 0.5, 0.5);
      object.position.y = -1;

      // Activer les ombres pour tous les objets
      object.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
          if (child.material) {
            child.material.envMapIntensity = 0.8;
          }
        }
      });

      scene.add(object);
      is3DLoaded.value = true;
      if (loadingProgress) loadingProgress.style.display = "none";
    },
    function (xhr) {
      if (loadingProgress && xhr.lengthComputable) {
        const percentComplete = (xhr.loaded / xhr.total) * 100;
        loadingProgress.style.width = percentComplete + "%";
      }
    },
    function (error) {
      console.error("Erreur de chargement du modèle 3D:", error);
      if (loadingProgress) {
        loadingProgress.parentElement.innerHTML =
          '<p style="color: #ef4444;">Erreur de chargement du modèle 3D</p>';
      }
    }
  );

  // Système d'éclairage amélioré
  setupLighting();

  // Configuration des contrôles
  setupControls();

  // Démarrer l'animation
  animate();

  // Gestion du redimensionnement
  window.addEventListener("resize", onWindowResize);
};

const setupLighting = () => {
  // Lumière ambiante douce
  const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
  scene.add(ambientLight);

  // Lumière directionnelle principale
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
  directionalLight.position.set(10, 10, 5);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 500;
  scene.add(directionalLight);

  // Lumières d'appoint colorées
  const lights = [
    { color: 0x8b5cf6, position: [15, 0, 15], intensity: 0.8 },
    { color: 0x06b6d4, position: [-15, 0, -15], intensity: 0.8 },
    { color: 0xf59e0b, position: [0, 15, 0], intensity: 0.6 },
  ];

  lights.forEach(({ color, position, intensity }) => {
    const light = new THREE.PointLight(color, intensity, 100);
    light.position.set(...position);
    scene.add(light);
  });
};

const setupControls = () => {
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.enableZoom = true;
  controls.enablePan = false;
  controls.maxPolarAngle = Math.PI / 1.5;
  controls.minDistance = 3;
  controls.maxDistance = 10;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.5;
};

const animate = () => {
  requestAnimationFrame(animate);

  if (controls) {
    controls.update();
  }

  if (object) {
    // Animation subtile de l'objet
    object.rotation.y += 0.005;
    object.position.y = Math.sin(Date.now() * 0.001) * 0.1 - 1;
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera);
  }
};

const onWindowResize = () => {
  const container = document.getElementById("container3D");
  if (!container || !camera || !renderer) return;

  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
};

const initProgressCircles = () => {
  const circles = document.querySelectorAll(".progress-circle");
  circles.forEach((circle) => {
    const percent = circle.dataset.percent;
    const progress = circle.querySelector(".progress");
    if (progress && progress.r) {
      const radius = progress.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      const offset = circumference - (percent / 100) * circumference;
      progress.style.strokeDashoffset = offset;
    }
  });
};

const switchSection = (sectionId) => {
  currentSection.value = sectionId;

  // Scroll vers la section correspondante
  const element = document.getElementById(`section-${sectionId}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const toggleAutoRotate = () => {
  if (controls) {
    controls.autoRotate = !controls.autoRotate;
  }
};
</script>

<template>
  <div class="page-wrapper">
    <MenuProjet />

    <!-- Hero Section -->
    <div class="hero-section" :class="{ loaded: isLoaded }">
      <div class="hero-background">
        <div class="creative-pattern"></div>
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="project-badge">
          <span class="badge-icon">🎨</span>
          <span>Projets Créatifs</span>
        </div>

        <h1 class="hero-title">{{ $t("mini_projet_title") }}</h1>

        <div class="hero-subtitle">
          Collection d'expérimentations en 3D et animations CSS
        </div>

        <div class="categories-nav">
          <button
            v-for="category in projectCategories"
            :key="category.id"
            @click="switchSection(category.id)"
            class="category-btn"
            :class="{ active: currentSection === category.id }"
            :style="{ '--category-color': category.color }"
          >
            <span class="category-icon">{{ category.icon }}</span>
            <span>{{ category.title }}</span>
          </button>
        </div>
      </div>

      <div class="hero-visual">
        <div class="techniques-showcase">
          <div
            v-for="(technique, index) in techniques"
            :key="index"
            class="technique-pill"
            :style="{ '--delay': `${index * 0.2}s` }"
          >
            <span class="technique-icon">{{ technique.icon }}</span>
            <div class="technique-info">
              <div class="technique-name">{{ technique.name }}</div>
              <div class="technique-desc">{{ technique.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- Section 3D -->
      <section id="section-3d" class="project-section fade-in">
        <div class="section-header">
          <h2 class="section-title">{{ $t("mini_3d_title") }}</h2>
          <p class="section-subtitle">Expérimentation avec Three.js et modèles GLTF</p>
        </div>

        <div class="threejs-container">
          <div class="viewer-card">
            <div class="viewer-header">
              <div class="viewer-title">
                <span class="viewer-icon">🎮</span>
                <span>Visualiseur 3D Interactif</span>
              </div>
              <div class="viewer-controls">
                <button
                  @click="toggleAutoRotate"
                  class="control-btn"
                  title="Toggle Auto-rotate"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                  </svg>
                </button>
              </div>
            </div>

            <div class="viewer-content">
              <div id="container3D" class="threejs-viewport">
                <div class="loading-overlay" v-if="!is3DLoaded">
                  <div class="loading-spinner"></div>
                  <div class="loading-text">Chargement du modèle 3D...</div>
                  <div class="loading-bar">
                    <div id="loading-progress" class="loading-progress"></div>
                  </div>
                </div>
              </div>

              <div class="viewer-info">
                <div class="info-item">
                  <span class="info-label">Engine:</span>
                  <span class="info-value">Three.js</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Format:</span>
                  <span class="info-value">GLTF</span>
                </div>
                <div class="info-item">
                  <span class="info-label">Contrôles:</span>
                  <span class="info-value">Orbit + Auto-rotate</span>
                </div>
              </div>
            </div>

            <div class="viewer-footer">
              <div class="feature-tags">
                <span class="feature-tag">🌟 Éclairage dynamique</span>
                <span class="feature-tag">🎯 Contrôles intuitifs</span>
                <span class="feature-tag">📱 Responsive</span>
              </div>
            </div>
          </div>

          <div class="tech-specs">
            <h3 class="specs-title">Spécifications Techniques</h3>
            <div class="specs-grid">
              <div class="spec-item">
                <div class="spec-icon">🎮</div>
                <div class="spec-content">
                  <h4>Three.js Engine</h4>
                  <p>Rendu WebGL haute performance avec support des ombres</p>
                </div>
              </div>
              <div class="spec-item">
                <div class="spec-icon">📦</div>
                <div class="spec-content">
                  <h4>GLTF Loader</h4>
                  <p>Chargement optimisé de modèles 3D avec gestion d'erreurs</p>
                </div>
              </div>
              <div class="spec-item">
                <div class="spec-icon">🎛️</div>
                <div class="spec-content">
                  <h4>Orbit Controls</h4>
                  <p>Interaction fluide avec damping et rotation automatique</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section CSS Animations -->
      <section id="section-css" class="project-section fade-in">
        <div class="section-header">
          <h2 class="section-title">{{ $t("mini_css_title") }}</h2>
          <p class="section-subtitle">
            Animations SVG et CSS avancées pour logos sociaux
          </p>
        </div>

        <div class="animations-container">
          <div class="animations-showcase">
            <div class="showcase-header">
              <h3 class="showcase-title">Logos Animés</h3>
              <p class="showcase-description">
                Animations fluides créées avec SVG et CSS keyframes
              </p>
            </div>

            <div id="containerLogo" class="logos-grid">
              <div class="logo-section">
                <div class="logo-header">
                  <h4>Development</h4>
                </div>
                <div class="logo-containerbas">
                  <svg
                    class="loader github-loader"
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                  >
                    <g class="githubiconcdash">
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </g>
                  </svg>
                  <div class="logo-info">
                    <h5>GitHub</h5>
                    <p>Développement collaboratif</p>
                  </div>
                </div>
              </div>

              <div class="logo-section">
                <div class="logo-header">
                  <h4>Professional</h4>
                </div>
                <div class="logo-containerbas">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="120"
                    height="120"
                    viewBox="0 0 24 24"
                    class="loader linkedin-loader"
                  >
                    <g class="dash">
                      <path
                        style="--sped: 4s"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                      />
                    </g>
                  </svg>
                  <div class="logo-info">
                    <h5>LinkedIn</h5>
                    <p>Réseau professionnel</p>
                  </div>
                </div>
              </div>

              <div class="logo-section">
                <div class="logo-header">
                  <h4>Social</h4>
                </div>
                <div class="logo-containerbas">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="120"
                    height="120"
                    viewBox="0 0 2499.899999999999 2500"
                    class="loader instagram-loader"
                  >
                    <g class="instadashicone">
                      <defs>
                        <radialGradient
                          id="a"
                          cx="332.14"
                          cy="2511.81"
                          r="3263.54"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".09" stop-color="#fa8f21" />
                          <stop offset=".78" stop-color="#d82d7e" />
                        </radialGradient>
                        <radialGradient
                          id="b"
                          cx="1516.14"
                          cy="2623.81"
                          r="2572.12"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0" />
                          <stop offset="1" stop-color="#8c3aaa" />
                        </radialGradient>
                      </defs>
                      <path
                        style="--sped: 4s"
                        d="M833.4 1250c0-230.11 186.49-416.7 416.6-416.7s416.7 186.59 416.7 416.7-186.59 416.7-416.7 416.7-416.6-186.59-416.6-416.7m-225.26 0c0 354.5 287.36 641.86 641.86 641.86s641.86-287.36 641.86-641.86S1604.5 608.14 1250 608.14 608.14 895.5 608.14 1250m1159.13-667.31a150 150 0 1 0 150.06-149.94h-.06a150.07 150.07 0 0 0-150 149.94M745 2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28 7.27-505.15c5.55-121.87 26-188 43-232.13 22.72-58.36 49.78-100 93.5-143.78s85.32-70.88 143.78-93.5c44-17.16 110.26-37.46 232.13-43 131.76-6.06 171.34-7.27 505-7.27s373.28 1.31 505.15 7.27c121.87 5.55 188 26 232.13 43 58.36 22.62 100 49.78 143.78 93.5s70.78 85.42 93.5 143.78c17.16 44 37.46 110.26 43 232.13 6.06 131.87 7.27 171.34 7.27 505.15s-1.21 373.28-7.27 505.15c-5.55 121.87-25.95 188.11-43 232.13-22.72 58.36-49.78 100-93.5 143.68s-85.42 70.78-143.78 93.5c-44 17.16-110.26 37.46-232.13 43-131.76 6.06-171.34 7.27-505.15 7.27s-373.28-1.21-505-7.27M734.65 7.57c-133.07 6.06-224 27.16-303.41 58.06C349 97.54 279.38 140.35 209.81 209.81S97.54 349 65.63 431.24c-30.9 79.46-52 170.34-58.06 303.41C1.41 867.93 0 910.54 0 1250s1.41 382.07 7.57 515.35c6.06 133.08 27.16 223.95 58.06 303.41 31.91 82.19 74.62 152 144.18 221.43S349 2402.37 431.24 2434.37c79.56 30.9 170.34 52 303.41 58.06C868 2498.49 910.54 2500 1250 2500s382.07-1.41 515.35-7.57c133.08-6.06 223.95-27.16 303.41-58.06 82.19-32 151.86-74.72 221.43-144.18s112.18-139.24 144.18-221.43c30.9-79.46 52.1-170.34 58.06-303.41 6.06-133.38 7.47-175.89 7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95 97.54 2068.86 65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17 1.51 1589.56 0 1250.1 0S868 1.41 734.65 7.57"
                        fill="url(#a)"
                      />
                    </g>
                  </svg>
                  <div class="logo-info">
                    <h5>Instagram</h5>
                    <p>Contenu visuel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="animation-details">
            <h3 class="details-title">Techniques d'Animation</h3>
            <div class="techniques-grid">
              <div class="technique-card">
                <div class="technique-icon-large">🎨</div>
                <h4>SVG Path Animation</h4>
                <p>
                  Utilisation de stroke-dasharray et stroke-dashoffset pour créer des
                  effets de traçage
                </p>
                <div class="code-snippet">
                  <code>stroke-dasharray: 0 1 359 0;</code>
                </div>
              </div>

              <div class="technique-card">
                <div class="technique-icon-large">⚡</div>
                <h4>CSS Keyframes</h4>
                <p>Animations fluides avec des courbes de Bézier personnalisées</p>
                <div class="code-snippet">
                  <code>animation: dashArray 2s ease-in-out infinite;</code>
                </div>
              </div>

              <div class="technique-card">
                <div class="technique-icon-large">🎯</div>
                <h4>Gradients Radiaux</h4>
                <p>Utilisation de dégradés SVG pour des effets visuels complexes</p>
                <div class="code-snippet">
                  <code>radialGradient cx="332.14" cy="2511.81"</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
/* Variables CSS */
:root {
  --creative-primary: #8b5cf6;
  --creative-secondary: #06b6d4;
  --creative-accent: #f59e0b;
  --github-color: #2ff63c;
  --linkedin-color: #2af;
  --instagram-color: #e1306c;
  --background: #ffffff;
  --surface: #f8fafc;
  --text-primary: #1e293b;
  --text-secondary: #64748b;
  --border: #e2e8f0;
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --radius: 0.75rem;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dark-mode {
  --creative-primary: #a78bfa;
  --creative-secondary: #22d3ee;
  --background: #0f172a;
  --surface: #1e293b;
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --border: #334155;
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
}

/* Layout principal */
.page-wrapper {
  min-height: 100vh;
  background: linear-gradient(135deg, var(--background) 0%, var(--surface) 100%);
  color: var(--text-primary);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Hero Section */
.hero-section {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 4rem 2rem;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.hero-section.loaded {
  opacity: 1;
  transform: translateY(0);
}

.hero-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    var(--creative-primary) 0%,
    var(--creative-secondary) 100%
  );
}

.creative-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
      circle at 25% 25%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%);
  background-size: 120px 120px;
  animation: patternMove 20s ease-in-out infinite;
}

@keyframes patternMove {
  0%,
  100% {
    transform: translateX(0) translateY(0);
  }

  50% {
    transform: translateX(20px) translateY(-20px);
  }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
}

.hero-content {
  flex: 1;
  position: relative;
  z-index: 2;
  color: white;
  max-width: 700px;
}

.project-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  font-size: 0.875rem;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.badge-icon {
  font-size: 1.2rem;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.categories-nav {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.category-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
  backdrop-filter: blur(10px);
  font-weight: 500;
}

.category-btn:hover,
.category-btn.active {
  background: rgba(255, 255, 255, 0.2);
  border-color: var(--category-color);
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.category-icon {
  font-size: 1.2rem;
}

.hero-visual {
  flex: 0 0 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}

.techniques-showcase {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }
}

.technique-pill {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: var(--radius);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: slideInRight 0.6s ease-out forwards;
  animation-delay: var(--delay);
  opacity: 0;
  transform: translateX(30px);
}

@keyframes slideInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.technique-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.technique-info {
  flex: 1;
}

.technique-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.technique-desc {
  font-size: 0.875rem;
  opacity: 0.8;
}

/* Sections */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.project-section {
  margin: 6rem 0;
  scroll-margin-top: 2rem;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  position: relative;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, var(--creative-primary), var(--creative-secondary));
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  opacity: 0.8;
}

/* Three.js Section */
.threejs-container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
}

.viewer-card {
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  transition: var(--transition);
}

.viewer-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

.viewer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  background: var(--background);
  border-bottom: 1px solid var(--border);
}

.viewer-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-weight: 600;
  color: var(--text-primary);
}

.viewer-icon {
  font-size: 1.2rem;
}

.viewer-controls {
  display: flex;
  gap: 0.5rem;
}

.control-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: none;
  border: 1px solid var(--border);
  border-radius: 0.375rem;
  color: var(--text-secondary);
  cursor: pointer;
  transition: var(--transition);
}

.control-btn:hover {
  background: var(--creative-primary);
  color: white;
  border-color: var(--creative-primary);
}

.control-btn svg {
  width: 1rem;
  height: 1rem;
}

.viewer-content {
  position: relative;
}

.threejs-viewport {
  position: relative;
  width: 100%;
  height: 400px;
  background: #0a0a0a;
  border-radius: 0 0 var(--radius) var(--radius);
  overflow: hidden;
}

.loading-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 10;
}

.loading-spinner {
  width: 3rem;
  height: 3rem;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid var(--creative-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin-bottom: 1rem;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-text {
  font-size: 1.125rem;
  margin-bottom: 1rem;
}

.loading-bar {
  width: 200px;
  height: 4px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
  overflow: hidden;
}

.loading-progress {
  height: 100%;
  background: var(--creative-primary);
  width: 0%;
  transition: width 0.3s ease;
}

.viewer-info {
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  background: rgba(139, 92, 246, 0.05);
  border-top: 1px solid var(--border);
}

.info-item {
  text-align: center;
}

.info-label {
  display: block;
  font-size: 0.75rem;
  color: var(--text-secondary);
  margin-bottom: 0.25rem;
}

.info-value {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 0.875rem;
}

.viewer-footer {
  padding: 1rem 1.5rem;
  background: var(--background);
  border-top: 1px solid var(--border);
}

.feature-tags {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.feature-tag {
  padding: 0.25rem 0.75rem;
  background: var(--creative-primary);
  color: white;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Tech Specs */
.tech-specs {
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 2rem;
  box-shadow: var(--shadow-lg);
}

.specs-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  text-align: center;
}

.specs-grid {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.spec-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--background);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.spec-item:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
  border-color: var(--creative-primary);
}

.spec-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.spec-content h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
}

.spec-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* CSS Animations Section */
.animations-container {
  display: grid;
  gap: 4rem;
}

.animations-showcase {
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 2rem;
  box-shadow: var(--shadow-lg);
}

.showcase-header {
  text-align: center;
  margin-bottom: 3rem;
}

.showcase-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.showcase-description {
  color: var(--text-secondary);
  font-size: 1.125rem;
  line-height: 1.6;
}

.logos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.logo-section {
  background: var(--background);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 1.5rem;
  text-align: center;
  transition: var(--transition);
}

.logo-section:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.logo-header {
  margin-bottom: 1rem;
}

.logo-header h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.logo-containerbas {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.loader {
  width: 120px;
  height: 120px;
  transition: var(--transition);
}

.loader:hover {
  transform: scale(1.1);
}

.logo-info h5 {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.25rem 0;
}

.logo-info p {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0;
}

/* Animation Styles */
.github-loader .githubiconcdash path {
  stroke: var(--github-color);
  stroke-width: 1px;
  stroke-linecap: round;
  animation: dashArray 3s ease-in-out infinite;
}

.linkedin-loader .dash path {
  stroke: var(--linkedin-color);
  stroke-width: 1px;
  stroke-linecap: round;
  animation: dashArray 4s ease-in-out infinite;
}

.instagram-loader .instadashicone path {
  stroke: var(--instagram-color);
  stroke-width: 40;
  stroke-linecap: round;
  animation: dashArray 4s ease-in-out infinite;
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

/* Animation Details */
.animation-details {
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 2rem;
  box-shadow: var(--shadow-lg);
}

.details-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2rem;
  text-align: center;
}

.techniques-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.technique-card {
  background: var(--background);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 2rem;
  text-align: center;
  transition: var(--transition);
}

.technique-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--creative-primary);
}

.technique-icon-large {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.technique-card h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 1rem 0;
}

.technique-card p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.code-snippet {
  background: #1e293b;
  border-radius: 0.375rem;
  padding: 1rem;
  font-family: "Monaco", "Menlo", monospace;
}

.code-snippet code {
  color: #22d3ee;
  font-size: 0.875rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }

  .hero-visual {
    flex: none;
  }

  .container {
    padding: 0 1rem;
  }

  .threejs-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .logos-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .techniques-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 60vh;
    padding: 2rem 1rem;
  }

  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1.125rem;
  }

  .categories-nav {
    flex-direction: column;
    align-items: center;
  }

  .category-btn {
    width: 100%;
    justify-content: center;
  }

  .techniques-showcase {
    gap: 0.75rem;
  }

  .technique-pill {
    padding: 0.75rem 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .threejs-viewport {
    height: 300px;
  }

  .viewer-info {
    flex-direction: column;
    gap: 1rem;
  }

  .logos-grid {
    grid-template-columns: 1fr;
  }

  .loader {
    width: 100px;
    height: 100px;
  }

  .specs-grid {
    gap: 1rem;
  }

  .spec-item {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    min-height: 50vh;
    padding: 1.5rem 0.75rem;
  }

  .hero-title {
    font-size: 1.75rem;
  }

  .container {
    padding: 0 0.75rem;
  }

  .viewer-card,
  .tech-specs,
  .animations-showcase,
  .animation-details {
    padding: 1rem;
  }

  .threejs-viewport {
    height: 250px;
  }

  .technique-card {
    padding: 1.5rem;
  }

  .feature-tags {
    justify-content: center;
  }

  .code-snippet {
    padding: 0.75rem;
  }

  .code-snippet code {
    font-size: 0.75rem;
  }
}

/* États de focus pour l'accessibilité */
.category-btn:focus-visible,
.control-btn:focus-visible {
  outline: 2px solid var(--creative-primary);
  outline-offset: 2px;
}

/* Réduction des animations pour les utilisateurs sensibles */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .hero-section {
    opacity: 1;
    transform: none;
  }

  .fade-in {
    opacity: 1;
    transform: none;
  }

  .technique-pill {
    opacity: 1;
    transform: none;
  }
}

/* Améliorations pour le mode sombre */
.dark-mode .hero-background {
  background: linear-gradient(135deg, #4c1d95 0%, #0e7490 100%);
}

.dark-mode .creative-pattern {
  background-image: radial-gradient(
      circle at 25% 25%,
      rgba(167, 139, 250, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(circle at 75% 75%, rgba(34, 211, 238, 0.1) 0%, transparent 50%);
}

.dark-mode .project-badge,
.dark-mode .category-btn,
.dark-mode .technique-pill {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .threejs-viewport {
  background: #020617;
}

.dark-mode .code-snippet {
  background: #0f172a;
}

/* Scrollbar personnalisé */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--surface);
}

::-webkit-scrollbar-thumb {
  background: var(--creative-primary);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--creative-secondary);
}

/* Container 3D spécifique */
#container3D {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#containerLogo {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fade-in {
  opacity: 1 !important;
  transform: none !important;
}
</style>
