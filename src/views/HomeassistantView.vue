<script setup>
import MenuProjet from "@/components/MenuProjet.vue";
import { onMounted, ref, nextTick } from "vue";

// Importation des images techniques
import cShatpIcon from "/picture/technical/CShapeIcone.png";
import blazorIcone from "/picture/technical/blazorIcone.webp";
import aspIcone from "/picture/technical/ASPIcone.png";
import entityFrameworkCoreIcon from "/picture/technical/EntityFrameworkCore.png";
import moqIcon from "/picture/technical/moq.png";
import flaskIcon from "/picture/technical/flaskIcone.png";
import pythonIcon from "/picture/technical/pythonIcone.png";
import tensorFlowIcone from "/picture/technical/TensorFlowIcone.png";
import raspberryOsIcone from "/picture/technical/RaspberryOsIcone.png";
import dockerIcone from "/picture/technical/dockerIcone.png";
import grafanaIcone from "/picture/technical/GrafanaIcone.png";
import influxdbIcone from "/picture/technical/InfluxdbIcone.png";
import mysqlIcon from "/picture/technical/MySQLIcone.png";

const showDetails = ref(false);
const isLoaded = ref(false);
const skillsAnimated = ref(false);

// Données du projet
const projectStats = ref([
  { number: "10+", labelKey: "iot_stats_sensors", icon: "📊" },
  { number: "2", labelKey: "iot_stats_sites", icon: "🏢" },
]);

const sensors = ref([
  { name: "CO2", icon: "🌫️", descriptionKey: "iot_sensor_co2_desc", color: "#FF6B6B" },
  {
    name: "Température",
    icon: "🌡️",
    descriptionKey: "iot_sensor_temperature_desc",
    color: "#4ECDC4",
  },
  {
    name: "Luminosité",
    icon: "💡",
    descriptionKey: "iot_sensor_light_desc",
    color: "#FFE66D",
  },
  {
    name: "Humidité",
    icon: "💧",
    descriptionKey: "iot_sensor_humidity_desc",
    color: "#4DABF7",
  },
  {
    name: "Bruit",
    icon: "🔊",
    descriptionKey: "iot_sensor_noise_desc",
    color: "#9775FA",
  },
  {
    name: "Vibrations",
    icon: "📳",
    descriptionKey: "iot_sensor_vibration_desc",
    color: "#FF8787",
  },
  {
    name: "Mouvement",
    icon: "🚶",
    descriptionKey: "iot_sensor_movement_desc",
    color: "#51CF66",
  },
  { name: "UV", icon: "☀️", descriptionKey: "iot_sensor_uv_desc", color: "#FFA502" },
  { name: "COV", icon: "💨", descriptionKey: "iot_sensor_cov_desc", color: "#A29BFE" },
  { name: "PM 2.5", icon: "🫧", descriptionKey: "iot_sensor_pm25_desc", color: "#FD79A8" },
]);

const features = ref([
  {
    icon: "📡",
    titleKey: "iot_feature_data_collection_title",
    descriptionKey: "iot_feature_data_collection_desc",
    color: "#4ECDC4",
  },
  {
    icon: "🚨",
    titleKey: "iot_feature_alert_system_title",
    descriptionKey: "iot_feature_alert_system_desc",
    color: "#FF6B6B",
  },
  {
    icon: "📊",
    titleKey: "iot_feature_visualization_title",
    descriptionKey: "iot_feature_visualization_desc",
    color: "#4DABF7",
  },
  {
    icon: "🤖",
    titleKey: "iot_feature_ai_title",
    descriptionKey: "iot_feature_ai_desc",
    color: "#9775FA",
  },
]);

// Technologies et leurs données
const techStack = ref([
  {
    categoryKey: "iot_tech_frontend",
    icon: "🎨",
    color: "#512BD4",
    skills: [
      { name: "Blazor", percent: 90, image: blazorIcone },
      { name: "C#", percent: 85, image: cShatpIcon },
    ],
  },
  {
    categoryKey: "iot_tech_backend",
    icon: "⚙️",
    color: "#512BD4",
    skills: [
      { name: "ASP.NET Core", percent: 80, image: aspIcone },
      { name: "Entity Framework", percent: 75, image: entityFrameworkCoreIcon },
      { name: "Moq", percent: 75, image: moqIcon },
    ],
  },
  {
    categoryKey: "iot_tech_raspberry",
    icon: "🔧",
    color: "#306998",
    skills: [
      { name: "Python", percent: 85, image: pythonIcon },
      { name: "Flask", percent: 80, image: flaskIcon },
      { name: "TensorFlow", percent: 75, image: tensorFlowIcone },
    ],
  },
  {
    categoryKey: "iot_tech_system",
    icon: "💻",
    color: "#2496ED",
    skills: [
      { name: "Raspberry OS", percent: 85, image: raspberryOsIcone },
      { name: "Docker", percent: 80, image: dockerIcone },
    ],
  },
  {
    categoryKey: "iot_tech_data",
    icon: "📊",
    color: "#FF6600",
    skills: [
      { name: "Grafana", percent: 85, image: grafanaIcone },
      { name: "InfluxDB", percent: 80, image: influxdbIcone },
      { name: "MySQL", percent: 75, image: mysqlIcon },
    ],
  },
]);

const phases = ref([
  {
    version: "V1",
    titleKey: "iot_phase_v1_title",
    icon: "🚀",
    color: "#4ECDC4",
    featuresKeys: [
      "iot_phase_v1_feature_1",
      "iot_phase_v1_feature_2",
      "iot_phase_v1_feature_3",
      "iot_phase_v1_feature_4",
      "iot_phase_v1_feature_5",
      "iot_phase_v1_feature_6",
    ],
  },
  {
    version: "V2",
    titleKey: "iot_phase_v2_title",
    icon: "⚡",
    color: "#9775FA",
    featuresKeys: [
      "iot_phase_v2_feature_1",
      "iot_phase_v2_feature_2",
      "iot_phase_v2_feature_3",
      "iot_phase_v2_feature_4",
      "iot_phase_v2_feature_5",
    ],
  },
]);

const architectureComponents = ref([
  {
    titleKey: "iot_hardware_title",
    icon: "🔧",
    itemsKeys: [
      "iot_hardware_item_1",
      "iot_hardware_item_2",
      "iot_hardware_item_3",
      "iot_hardware_item_4",
    ],
  },
  {
    titleKey: "iot_software_title",
    icon: "💻",
    itemsKeys: [
      "iot_software_item_1",
      "iot_software_item_2",
      "iot_software_item_3",
      "iot_software_item_4",
    ],
  },
  {
    titleKey: "iot_infrastructure_title",
    icon: "☁️",
    itemsKeys: [
      "iot_infrastructure_item_1",
      "iot_infrastructure_item_2",
      "iot_infrastructure_item_3",
      "iot_infrastructure_item_4",
    ],
  },
]);

const githubRepos = ref([
  {
    titleKey: "iot_github_front_title",
    descriptionKey: "iot_github_front_desc",
    url: "https://github.com/KevinGr19-Univ/SAE501_BlazorClient",
  },
  {
    titleKey: "iot_github_api_title",
    descriptionKey: "iot_github_api_desc",
    url: "https://github.com/AlixLejeune/SAE501_Blazor_API",
  },
  {
    titleKey: "iot_github_raspi_title",
    descriptionKey: "iot_github_raspi_desc",
    url: "https://github.com/MKBpapin0n0/SAE501_InfluxDb",
  },
  {
    titleKey: "iot_github_docker_title",
    descriptionKey: "iot_github_docker_desc",
    url: "https://github.com/Shiro1234orihS/SAE501_Docker",
  },
]);

function toggleDetails() {
  showDetails.value = !showDetails.value;
  if (showDetails.value) {
    nextTick(() => {
      animateSkills();
    });
  }
}

const animateSkills = () => {
  if (skillsAnimated.value) return;

  const circles = document.querySelectorAll(".progress-circle");
  circles.forEach((circle, index) => {
    setTimeout(() => {
      const percent = circle.dataset.percent;
      const progressRing = circle.querySelector(".progress-ring");
      if (progressRing) {
        const radius = progressRing.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percent / 100) * circumference;

        progressRing.style.strokeDasharray = circumference;
        progressRing.style.strokeDashoffset = circumference;
        progressRing.style.transition =
          "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)";

        requestAnimationFrame(() => {
          progressRing.style.strokeDashoffset = offset;
        });
      }
    }, index * 200);
  });
  skillsAnimated.value = true;
};

onMounted(() => {
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

  document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
  });

  setTimeout(() => {
    isLoaded.value = true;
  }, 300);
});
</script>

<template>
  <div class="page-wrapper">
    <MenuProjet />

    <!-- Hero Section -->
    <div class="hero-section" :class="{ loaded: isLoaded }">
      <div class="hero-background">
        <div class="iot-pattern"></div>
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="project-badge">
          <span class="badge-icon">🏢</span>
          <span>{{ $t("iot_project_tag") }}</span>
        </div>

        <h1 class="hero-title">{{ $t("iot_hero_title") }}</h1>

        <div class="hero-subtitle">
          {{ $t("iot_hero_subtitle") }}
        </div>

        <div class="hero-stats">
          <div v-for="stat in projectStats" :key="stat.labelKey" class="stat-item">
            <div class="stat-icon">{{ stat.icon }}</div>
            <div class="stat-number">{{ stat.number }}</div>
            <div class="stat-label">{{ $t(stat.labelKey) }}</div>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="iot-network">
          <div class="central-hub">
            <div class="hub-icon">🖥️</div>
            <div class="hub-label">InfluxDB</div>
          </div>

          <div class="sensor-nodes">
            <div
              v-for="(sensor, index) in sensors.slice(0, 6)"
              :key="sensor.name"
              class="sensor-node"
              :style="{
                '--delay': `${index * 0.5}s`,
                '--color': sensor.color,
                '--angle': `${index * 60}deg`,
              }"
            >
              <div class="node-icon">{{ sensor.icon }}</div>
              <div class="connection-line"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- Project Overview -->
      <section class="overview-section fade-in">
        <div class="content-card">
          <div class="card-header">
            <h2 class="card-title">{{ $t("iot_overview_title") }}</h2>
            <div class="card-icon">📋</div>
          </div>

          <div class="card-content">
            <div class="description-grid">
              <div class="description-main">
                <h3 class="section-subtitle">
                  <span class="subtitle-icon">🎯</span>
                  {{ $t("iot_objectives_title") }}
                </h3>
                <ul class="objectives-list">
                  <li>
                    <strong>{{ $t("iot_objectives_analyze") }}</strong>
                  </li>
                  <li>
                    <strong>{{ $t("iot_objectives_actuate") }}</strong>
                  </li>
                  <li>
                    <strong>{{ $t("iot_objectives_develop") }}</strong>
                  </li>
                </ul>

                <div class="architecture-info">
                  <h4>{{ $t("iot_architecture_title") }}</h4>
                  <p>{{ $t("iot_architecture_desc") }}</p>
                </div>
              </div>

              <div class="project-highlights">
                <div class="highlight-card">
                  <div class="highlight-icon">🏢</div>
                  <h4>{{ $t("iot_highlight_multisite") }}</h4>
                  <p>{{ $t("iot_highlight_multisite_desc") }}</p>
                </div>

                <div class="highlight-card">
                  <div class="highlight-icon">⏱️</div>
                  <h4>{{ $t("iot_highlight_realtime") }}</h4>
                  <p>{{ $t("iot_highlight_realtime_desc") }}</p>
                </div>

                <div class="highlight-card">
                  <div class="highlight-icon">🔮</div>
                  <h4>{{ $t("iot_highlight_predictive") }}</h4>
                  <p>{{ $t("iot_highlight_predictive_desc") }}</p>
                </div>
              </div>
            </div>

            <button @click="toggleDetails" class="toggle-button">
              <span class="button-text">
                {{ showDetails ? $t("iot_toggle_hide") : $t("iot_toggle_show") }}
              </span>
              <div class="button-icon" :class="{ rotated: showDetails }">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </section>

      <!-- Technical Details -->
      <Transition name="slide-fade">
        <section v-if="showDetails" class="details-section">
          <div class="section-header">
            <h2 class="section-title">{{ $t("iot_tech_stack_title") }}</h2>
            <p class="section-subtitle">{{ $t("iot_tech_stack_subtitle") }}</p>
          </div>

          <div class="tech-stack-grid">
            <div
              v-for="(category, catIndex) in techStack"
              :key="catIndex"
              class="tech-category"
              :style="{
                '--category-color': category.color,
                '--delay': `${catIndex * 0.2}s`,
              }"
            >
              <div class="category-header">
                <div class="category-icon">{{ category.icon }}</div>
                <h3 class="category-title">{{ $t(category.categoryKey) }}</h3>
              </div>

              <div class="skills-grid">
                <div
                  v-for="(skill, skillIndex) in category.skills"
                  :key="skillIndex"
                  class="skill-card"
                >
                  <div class="skill-visual">
                    <div class="progress-circle" :data-percent="skill.percent">
                      <svg viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" class="progress-bg"></circle>
                        <circle cx="50" cy="50" r="45" class="progress-ring"></circle>
                      </svg>
                      <div class="skill-icon">
                        <img :src="skill.image" :alt="skill.name" />
                      </div>
                      <div class="skill-percentage">{{ skill.percent }}%</div>
                    </div>
                  </div>

                  <div class="skill-info">
                    <h4 class="skill-name">{{ skill.name }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Transition>

      <!-- Sensors Grid -->
      <section class="sensors-section fade-in">
        <div class="section-header">
          <h2 class="section-title">{{ $t("iot_sensors_title") }}</h2>
          <p class="section-subtitle">{{ $t("iot_sensors_subtitle") }}</p>
        </div>

        <div class="sensors-grid">
          <div
            v-for="(sensor, index) in sensors"
            :key="sensor.name"
            class="sensor-card"
            :style="{ '--sensor-color': sensor.color, '--delay': `${index * 0.1}s` }"
          >
            <div class="sensor-icon">{{ sensor.icon }}</div>
            <h3 class="sensor-name">{{ sensor.name }}</h3>
            <p class="sensor-description">{{ $t(sensor.descriptionKey) }}</p>
            <div class="sensor-border"></div>
          </div>
        </div>
      </section>

      <!-- Features Section -->
      <section class="features-section fade-in">
        <div class="section-header">
          <h2 class="section-title">{{ $t("iot_features_title") }}</h2>
          <p class="section-subtitle">{{ $t("iot_features_subtitle") }}</p>
        </div>

        <div class="features-grid">
          <div
            v-for="(feature, index) in features"
            :key="feature.titleKey"
            class="feature-card"
            :style="{ '--feature-color': feature.color, '--delay': `${index * 0.15}s` }"
          >
            <div class="feature-header">
              <div class="feature-icon">{{ feature.icon }}</div>
              <h3 class="feature-title">{{ $t(feature.titleKey) }}</h3>
            </div>

            <p class="feature-description">{{ $t(feature.descriptionKey) }}</p>
            <div class="feature-glow"></div>
          </div>
        </div>
      </section>

      <!-- Phases Section -->
      <section class="phases-section fade-in">
        <div class="section-header">
          <h2 class="section-title">{{ $t("iot_phases_title") }}</h2>
          <p class="section-subtitle">{{ $t("iot_phases_subtitle") }}</p>
        </div>

        <div class="phases-grid">
          <div
            v-for="phase in phases"
            :key="phase.version"
            class="phase-card"
            :style="{ '--phase-color': phase.color }"
          >
            <div class="phase-header">
              <div class="phase-badge">
                <span class="phase-icon">{{ phase.icon }}</span>
                <span class="phase-version">{{ phase.version }}</span>
              </div>
              <h3 class="phase-title">{{ $t(phase.titleKey) }}</h3>
            </div>

            <div class="phase-features">
              <div
                v-for="featureKey in phase.featuresKeys"
                :key="featureKey"
                class="phase-feature"
              >
                <div class="feature-bullet"></div>
                <span>{{ $t(featureKey) }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Architecture Section -->
      <section class="architecture-section fade-in">
        <div class="content-card">
          <div class="card-header">
            <h2 class="card-title">{{ $t("iot_architecture_system_title") }}</h2>
            <div class="card-icon">🏗️</div>
          </div>

          <div class="card-content">
            <div class="architecture-details">
              <div
                v-for="component in architectureComponents"
                :key="component.titleKey"
                class="arch-component"
              >
                <div class="component-header">
                  <h4>{{ component.icon }} {{ $t(component.titleKey) }}</h4>
                </div>
                <ul>
                  <li v-for="itemKey in component.itemsKeys" :key="itemKey">
                    {{ $t(itemKey) }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Source Code Section -->
      <section class="source-section fade-in">
        <div class="content-card highlight-card">
          <div class="card-header">
            <h2 class="card-title">{{ $t("source_code") }}</h2>
            <div class="card-icon">💻</div>
          </div>

          <div v-for="repo in githubRepos" :key="repo.titleKey" class="card-content">
            <div class="github-section">
              <div class="github-info">
                <div class="github-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                    />
                  </svg>
                </div>
                <div class="github-text">
                  <h4>{{ $t(repo.titleKey) }}</h4>
                  <p>{{ $t(repo.descriptionKey) }}</p>
                </div>
              </div>

              <a :href="repo.url" target="_blank" class="github-button">
                <span class="button-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
                <span>{{ $t("vue_view_code") }}</span>
              </a>
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
  --iot-primary: #4ecdc4;
  --iot-secondary: #45b7b8;
  --iot-accent: #96ceb4;
  --iot-warning: #ffeaa7;
  --iot-danger: #ff7675;
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
  --iot-primary: #5fb3f3;
  --iot-secondary: #4a90e2;
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
  max-width: 1200px;
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
  background: linear-gradient(135deg, var(--iot-primary) 0%, var(--iot-secondary) 100%);
}

.iot-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
      circle at 25% 25%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(circle at 75% 75%, rgba(78, 205, 196, 0.1) 0%, transparent 50%);
  background-size: 80px 80px;
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
  color: var(--text-primary);
  max-width: 600px;
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

.hero-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 400px;
}

.stat-item {
  text-align: center;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: var(--radius);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.stat-icon {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.stat-number {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  line-height: 1;
}

.stat-label {
  font-size: 0.75rem;
  opacity: 0.8;
  margin-top: 0.25rem;
}

.hero-visual {
  flex: 0 0 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}

.iot-network {
  position: relative;
  width: 300px;
  height: 300px;
}

.central-hub {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  color: var(--iot-primary);
  box-shadow: var(--shadow-lg);
  animation: pulse 2s ease-in-out infinite;
}

.hub-icon {
  font-size: 1.8rem;
  margin-bottom: 0.25rem;
}

.hub-label {
  font-size: 0.7rem;
}

.sensor-nodes {
  position: relative;
  width: 100%;
  height: 100%;
}

.sensor-node {
  position: absolute;
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: var(--color);
  box-shadow: var(--shadow);
  animation: nodeFloat 3s ease-in-out infinite;
  animation-delay: var(--delay);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(var(--angle)) translateX(120px)
    rotate(calc(-1 * var(--angle)));
}

.node-icon {
  font-size: 1.2rem;
}

.connection-line {
  position: absolute;
  width: 2px;
  height: 70px;
  background: linear-gradient(90deg, var(--color), transparent);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(var(--angle)) translateX(-35px);
  opacity: 0.6;
}

@keyframes pulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    transform: translate(-50%, -50%) scale(1.05);
  }
}

@keyframes nodeFloat {
  0%,
  100% {
    transform: translate(-50%, -50%) rotate(var(--angle)) translateX(120px)
      rotate(calc(-1 * var(--angle))) translateY(0px);
  }
  50% {
    transform: translate(-50%, -50%) rotate(var(--angle)) translateX(120px)
      rotate(calc(-1 * var(--angle))) translateY(-5px);
  }
}

/* Sections générales */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in.animate-in {
  opacity: 1;
  transform: translateY(0);
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
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
  background: linear-gradient(90deg, var(--iot-primary), var(--iot-secondary));
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  opacity: 0.8;
}

/* Content Cards */
.content-card {
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
  transition: var(--transition);
  overflow: hidden;
  margin: 3rem 0;
}

.content-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid var(--border);
}

.card-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.card-icon {
  font-size: 2rem;
  opacity: 0.7;
}

.card-content {
  padding: 2rem;
}

.description-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  align-items: start;
  margin-bottom: 2rem;
}

.section-subtitle {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.subtitle-icon {
  font-size: 1.3rem;
}

.objectives-list {
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
}

.objectives-list li {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding: 1rem;
  background: var(--background);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  line-height: 1.6;
}

.objectives-list li::before {
  content: "✓";
  background: var(--iot-primary);
  color: var(--text-primary);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  flex-shrink: 0;
  margin-top: 0.1rem;
}

.architecture-info {
  background: var(--background);
  padding: 1.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.architecture-info h4 {
  color: var(--iot-primary);
  margin: 0 0 0.5rem 0;
  font-size: 1.125rem;
}

.architecture-info p {
  margin: 0;
  line-height: 1.6;
  color: var(--text-secondary);
}

.project-highlights {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.highlight-card {
  background: var(--background);
  padding: 1.5rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  text-align: center;
  transition: var(--transition);
}

.highlight-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
  border-color: var(--iot-primary);
}

.highlight-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.highlight-card h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
}

.highlight-card p {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.875rem;
}

/* Toggle Button */
.toggle-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--iot-primary), var(--iot-secondary));
  color: var(--text-primary);
  border: none;
  border-radius: 3rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--shadow);
  margin-top: 2rem;
}

.toggle-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.button-icon {
  width: 1.5rem;
  height: 1.5rem;
  transition: transform 0.3s ease;
}

.button-icon.rotated {
  transform: rotate(180deg);
}

.button-icon svg {
  width: 100%;
  height: 100%;
}

/* Sensors Section */
.sensors-section {
  margin: 4rem 0;
}

.sensors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
}

.sensor-card {
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 2rem 1.5rem;
  text-align: center;
  transition: var(--transition);
  box-shadow: var(--shadow);
  position: relative;
  overflow: hidden;
  animation: slideInUp 0.6s ease-out forwards;
  animation-delay: var(--delay);
  opacity: 0;
  transform: translateY(30px);
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.sensor-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
  border-color: var(--sensor-color);
}

.sensor-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: var(--sensor-color);
}

.sensor-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
}

.sensor-description {
  color: var(--text-secondary);
  margin: 0;
  font-size: 0.875rem;
}

.sensor-border {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--sensor-color);
  border-radius: var(--radius) var(--radius) 0 0;
}

/* Features Section */
.features-section {
  margin: 4rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  position: relative;
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
  overflow: hidden;
  animation: slideInUp 0.6s ease-out forwards;
  animation-delay: var(--delay);
  opacity: 0;
  transform: translateY(30px);
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
  border-color: var(--feature-color);
}

.feature-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.feature-icon {
  font-size: 2.5rem;
  color: var(--feature-color);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.feature-glow {
  position: absolute;
  inset: -2px;
  background: linear-gradient(135deg, var(--feature-color), transparent);
  border-radius: var(--radius);
  opacity: 0;
  filter: blur(8px);
  transition: var(--transition);
  z-index: -1;
}

.feature-card:hover .feature-glow {
  opacity: 0.2;
}

/* Phases Section */
.phases-section {
  margin: 4rem 0;
}

.phases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.phase-card {
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
  border-left: 4px solid var(--phase-color);
}

.phase-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.phase-header {
  margin-bottom: 2rem;
}

.phase-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: var(--phase-color);
  color: var(--text-primary);
  border-radius: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.phase-icon {
  font-size: 1.2rem;
}

.phase-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.phase-features {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.phase-feature {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem;
  background: var(--background);
  border-radius: 0.5rem;
  border: 1px solid var(--border);
  transition: var(--transition);
}

.phase-feature:hover {
  transform: translateX(3px);
  border-color: var(--phase-color);
}

.feature-bullet {
  width: 8px;
  height: 8px;
  background: var(--phase-color);
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 0.5rem;
}

/* Tech Stack Section */
.tech-stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.tech-category {
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 2rem;
  box-shadow: var(--shadow-lg);
  transition: var(--transition);
  animation: slideInUp 0.6s ease-out forwards;
  animation-delay: var(--delay);
  opacity: 0;
  transform: translateY(30px);
}

.tech-category:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
  border-color: var(--category-color);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--category-color);
}

.category-icon {
  font-size: 2rem;
  color: var(--category-color);
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.skills-grid {
  display: grid;
  gap: 1.5rem;
}

.skill-card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--background);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.skill-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
  border-color: var(--category-color);
}

.skill-visual {
  flex-shrink: 0;
}

.progress-circle {
  position: relative;
  width: 80px;
  height: 80px;
}

.progress-circle svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.progress-bg {
  fill: none;
  stroke: var(--border);
  stroke-width: 6;
}

.progress-ring {
  fill: none;
  stroke: var(--category-color);
  stroke-width: 6;
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 283;
}

.skill-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 6px;
}

.skill-percentage {
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--category-color);
  background: var(--background);
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
}

.skill-info {
  flex: 1;
}

.skill-name {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

/* Architecture Section */
.architecture-section {
  margin: 4rem 0;
}

.architecture-details {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.arch-component {
  background: var(--background);
  padding: 2rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.arch-component:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
}

.component-header {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid var(--iot-primary);
}

.component-header h4 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.arch-component ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.arch-component li {
  padding: 0.5rem 0;
  color: var(--text-secondary);
  border-bottom: 1px solid var(--border);
  line-height: 1.5;
}

.arch-component li:last-child {
  border-bottom: none;
}

.arch-component li::before {
  content: "▶";
  color: var(--iot-primary);
  font-size: 0.75rem;
  margin-right: 0.75rem;
}

/* Transitions */
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s ease-in;
}

.slide-fade-enter-from {
  transform: translateY(-30px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
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

  .description-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .hero-stats {
    grid-template-columns: repeat(4, 1fr);
    max-width: none;
  }

  .sensors-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .phases-grid,
  .tech-stack-grid {
    grid-template-columns: 1fr;
  }

  .architecture-details {
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

  .hero-stats {
    grid-template-columns: repeat(2, 1fr);
  }

  .iot-network {
    width: 250px;
    height: 250px;
  }

  .central-hub {
    width: 60px;
    height: 60px;
  }

  .sensor-node {
    width: 40px;
    height: 40px;
    font-size: 1rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .sensors-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .card-header {
    padding: 1.5rem 1.5rem 1rem;
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .card-content {
    padding: 1.5rem;
  }

  .skill-card {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .progress-circle {
    width: 100px;
    height: 100px;
  }

  .skill-icon {
    width: 50px;
    height: 50px;
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

  .sensors-grid {
    grid-template-columns: 1fr;
  }

  .hero-stats {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }

  .card-header {
    padding: 1rem;
  }

  .card-content {
    padding: 1rem;
  }

  .phase-card {
    padding: 1.5rem;
  }

  .tech-category {
    padding: 1.5rem;
  }

  .toggle-button {
    width: 100%;
    justify-content: center;
  }

  .iot-network {
    width: 200px;
    height: 200px;
  }

  .central-hub {
    width: 50px;
    height: 50px;
  }

  .hub-icon {
    font-size: 1.2rem;
  }

  .hub-label {
    font-size: 0.6rem;
  }

  .sensor-node {
    width: 35px;
    height: 35px;
    font-size: 0.9rem;
  }
}

/* États de focus pour l'accessibilité */
.toggle-button:focus-visible {
  outline: 2px solid var(--iot-primary);
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

  .sensor-card,
  .feature-card,
  .tech-category {
    opacity: 1;
    transform: none;
  }
}

/* Améliorations pour le mode sombre */
.dark-mode .hero-background {
  background: linear-gradient(135deg, #1a4d4a 0%, #0f3a3a 100%);
}

.dark-mode .iot-pattern {
  background-image: radial-gradient(
      circle at 25% 25%,
      rgba(78, 205, 196, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(circle at 75% 75%, rgba(69, 183, 184, 0.1) 0%, transparent 50%);
}

.dark-mode .project-badge,
.dark-mode .stat-item {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .central-hub,
.dark-mode .sensor-node {
  background: rgba(255, 255, 255, 0.9);
  color: var(--iot-primary);
}

/* Scrollbar personnalisé */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--surface);
}

::-webkit-scrollbar-thumb {
  background: var(--iot-primary);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--iot-secondary);
}

/* Effets supplémentaires */
.sensor-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--sensor-color), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: -1;
}

.sensor-card:hover::before {
  opacity: 0.03;
}

.phase-card:hover::before {
  width: 8px;
}
</style>
