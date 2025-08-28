<script setup>
import MenuProjet from "@/components/MenuProjet.vue";
import { onMounted, ref, nextTick } from "vue";

const showCompetences = ref(false);
const isLoaded = ref(false);
const skillsAnimated = ref(false);

const technologies = ref([
  {
    name: "Angular",
    category: "Frontend",
    level: 85,
    icon: "🅰️",
    color: "#DD0031",
    image: "./../../public/picture/technical/angularIcone.png",
    description: "Framework TypeScript pour interfaces dynamiques",
  },
  {
    name: "API Finance",
    category: "Backend",
    level: 80,
    icon: "📈",
    color: "#10B981",
    description: "Intégration d'APIs financières temps réel",
  },
]);

const features = ref([
  {
    icon: "📊",
    title: "Analyse en Temps Réel",
    description: "Données financières actualisées instantanément",
  },
  {
    icon: "📈",
    title: "Visualisations Avancées",
    description: "Graphiques interactifs et tableaux de bord",
  },
  {
    icon: "🔍",
    title: "Recherche Intelligente",
    description: "Filtrage et recherche multi-critères",
  },
  {
    icon: "📱",
    title: "Interface Responsive",
    description: "Optimisée pour tous les appareils",
  },
]);

function toggleCompetences() {
  showCompetences.value = !showCompetences.value;
  if (showCompetences.value) {
    nextTick(() => {
      animateSkills();
      const detailsSection = document.querySelector(".details-section");
      detailsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

const animateSkills = () => {
  if (skillsAnimated.value) return;

  const circles = document.querySelectorAll(".progress-circle");
  circles.forEach((circle, index) => {
    setTimeout(() => {
      const percent = circle.dataset.percent;
      const progress = circle.querySelector(".progress-ring");
      if (progress) {
        const radius = progress.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percent / 100) * circumference;

        progress.style.strokeDasharray = circumference;
        progress.style.strokeDashoffset = circumference;
        progress.style.transition = "stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)";

        requestAnimationFrame(() => {
          progress.style.strokeDashoffset = offset;
        });
      }
    }, index * 300);
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

  // Observer les éléments à animer
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
        <div class="financial-pattern"></div>
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="project-badge">
          <span class="badge-icon">📊</span>
          <span>{{ $t("earning_project_tag") }}</span>
        </div>

        <h1 class="hero-title" v-html="$t('earning_project_title')"></h1>

        <div class="hero-subtitle">
          {{ $t("earning_hero_subtitle") }}
        </div>
      </div>

      <div class="hero-visual">
        <div class="financial-dashboard">
          <div class="dashboard-screen">
            <div class="chart-area">
              <div class="chart-line chart-1"></div>
              <div class="chart-line chart-2"></div>
              <div class="chart-line chart-3"></div>
            </div>
            <div class="bull-icon">📈</div>
            <div class="data-points">
              <div class="data-point point-1"></div>
              <div class="data-point point-2"></div>
              <div class="data-point point-3"></div>
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
            <h2 class="card-title" v-html="$t('earning_project_presentation')"></h2>
            <div class="card-icon">💼</div>
          </div>

          <div class="card-content">
            <div class="description-section">
              <p
                class="project-description"
                v-html="$t('earning_project_description')"
              ></p>
              <div class="goal-highlight">
                <div class="goal-icon">🎯</div>
                <div class="goal-content">
                  <h3>{{ $t("earning_goal_title") }}</h3>
                  <p v-html="$t('earning_project_goal')"></p>
                </div>
              </div>
            </div>

            <div class="features-preview">
              <h3 class="features-title">{{ $t("earning_features_main_title") }}</h3>
              <div class="features-grid">
                <div
                  v-for="(feature, index) in features"
                  :key="index"
                  class="feature-card"
                  :style="{ '--delay': `${index * 0.1}s` }"
                >
                  <div class="feature-icon">{{ feature.icon }}</div>
                  <h4 class="feature-title">{{ feature.title }}</h4>
                  <p class="feature-description">{{ feature.description }}</p>
                </div>
              </div>
            </div>

            <button @click="toggleCompetences" class="toggle-button">
              <span class="button-text">
                {{ showCompetences ? $t("hide_details") : $t("toggle_details") }}
              </span>
              <div class="button-icon" :class="{ rotated: showCompetences }">
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

      <!-- Technologies Section -->
      <section class="technologies-section fade-in">
        <div class="section-header">
          <h2 class="section-title" v-html="$t('earning_technologies_used')"></h2>
          <p class="section-subtitle">{{ $t("earning_tech_stack_subtitle") }}</p>
        </div>

        <div class="tech-showcase">
          <div class="tech-category">
            <h3 class="category-title">{{ $t("earning_tech_frontend_title") }}</h3>
            <div class="tech-description" v-html="$t('earning_tech_frontend')"></div>
          </div>

          <div class="tech-category">
            <h3 class="category-title">{{ $t("earning_tech_api_title") }}</h3>
            <div class="tech-description" v-html="$t('earning_tech_api')"></div>
          </div>
        </div>
      </section>

      <!-- Details Section -->
      <Transition name="slide-fade">
        <section v-if="showCompetences" class="details-section">
          <div class="details-grid">
            <!-- Fonctionnalités développées -->
            <div class="detail-card">
              <div class="detail-header">
                <h3 class="detail-title" v-html="$t('earning_developed_features')"></h3>
                <div class="detail-icon">🚀</div>
              </div>

              <div class="features-list">
                <div class="feature-item">
                  <div class="feature-bullet feature-1"></div>
                  <span v-html="$t('earning_feature_1')"></span>
                </div>
                <div class="feature-item">
                  <div class="feature-bullet feature-2"></div>
                  <span v-html="$t('earning_feature_2')"></span>
                </div>
              </div>
            </div>

            <!-- Défis et Solutions -->
            <div class="detail-card">
              <div class="detail-header">
                <h3 class="detail-title" v-html="$t('earning_challenges_solutions')"></h3>
                <div class="detail-icon">⚡</div>
              </div>

              <div class="challenges-list">
                <div class="challenge-item">
                  <div class="challenge-icon">📊</div>
                  <p v-html="$t('earning_challenge_1')"></p>
                </div>
                <div class="challenge-item">
                  <div class="challenge-icon">⚡</div>
                  <p v-html="$t('earning_challenge_2')"></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Transition>

      <!-- Skills Section -->
      <section class="skills-section fade-in">
        <div class="section-header">
          <h2 class="section-title" v-html="$t('earning_technical_skills')"></h2>
          <p class="section-subtitle">{{ $t("earning_skills_subtitle") }}</p>
        </div>

        <div class="skills-container">
          <div
            v-for="(tech, index) in technologies"
            :key="index"
            class="skill-category"
            :style="{ '--tech-color': tech.color, '--delay': `${index * 0.2}s` }"
          >
            <div class="category-header">
              <div class="category-icon">{{ tech.icon }}</div>
              <h3 class="category-title">{{ tech.category }}</h3>
            </div>

            <div class="skill-card">
              <div class="skill-visual">
                <div class="progress-circle" :data-percent="tech.level">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" class="progress-bg"></circle>
                    <circle cx="50" cy="50" r="45" class="progress-ring"></circle>
                  </svg>
                  <div class="skill-icon" v-if="tech.image">
                    <img :src="tech.image" :alt="tech.name" />
                  </div>
                  <div class="skill-percentage">{{ tech.level }}%</div>
                </div>
              </div>

              <div class="skill-info">
                <h4 class="skill-name">{{ tech.name }}</h4>
                <p class="skill-description">{{ tech.description }}</p>
                <div class="skill-level">
                  <div class="level-bar">
                    <div
                      class="level-fill"
                      :style="{ width: tech.level + '%', backgroundColor: tech.color }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Results Section -->
      <section class="results-section fade-in">
        <div class="content-card highlight-card">
          <div class="card-header">
            <h2 class="card-title" v-html="$t('earning_project_review')"></h2>
            <div class="card-icon">🎉</div>
          </div>

          <div class="card-content">
            <div class="results-showcase">
              <div class="result-visual">
                <div class="success-icon">✅</div>
                <h3>{{ $t("earning_project_success") }}</h3>
              </div>

              <div class="result-content">
                <p class="result-description" v-html="$t('earning_result_1')"></p>

                <div class="impact-metrics">
                  <div class="impact-item">
                    <div class="impact-icon">📈</div>
                    <span>{{ $t("earning_impact_modern") }}</span>
                  </div>
                  <div class="impact-item">
                    <div class="impact-icon">⚡</div>
                    <span>{{ $t("earning_impact_performance") }}</span>
                  </div>
                  <div class="impact-item">
                    <div class="impact-icon">🎯</div>
                    <span>{{ $t("earning_impact_realtime") }}</span>
                  </div>
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
     --primary: #3b82f6;
  --finance-primary: #10b981;
  --finance-secondary: #059669;
  --finance-accent: #f59e0b;
  --finance-danger: #ef4444;
  --angular-primary: #dd0031;
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
   --primary-dark: #1d4ed8;
}

.dark-mode {
     --primary: #3b82f6;
      --primary-dark: #3b82f6;
  --finance-primary: #34d399;
  --finance-secondary: #10b981;
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
  min-height: 75vh;
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
    var(--finance-primary) 0%,
    var(--finance-secondary) 100%
  );
}

.financial-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
      circle at 25% 25%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
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
  color: white;
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

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.metric-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.metric-value {
  font-size: 1.75rem;
  font-weight: 800;
  color: white;
  line-height: 1;
}

.metric-label {
  font-size: 0.875rem;
  opacity: 0.8;
  margin-top: 0.25rem;
}

.hero-visual {
  flex: 0 0 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
}

.financial-dashboard {
  position: relative;
  width: 250px;
  height: 250px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: var(--radius);
  border: 2px solid rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-15px);
  }
}

.dashboard-screen {
  position: relative;
  width: 200px;
  height: 150px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
}

.chart-area {
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  height: 80px;
}

.chart-line {
  position: absolute;
  bottom: 0;
  width: 3px;
  background: var(--finance-accent);
  border-radius: 2px;
  animation: chartGrow 2s ease-in-out infinite;
}

.chart-1 {
  left: 20px;
  height: 60%;
  animation-delay: 0s;
}

.chart-2 {
  left: 50%;
  height: 80%;
  animation-delay: 0.5s;
}

.chart-3 {
  right: 20px;
  height: 40%;
  animation-delay: 1s;
}

@keyframes chartGrow {
  0%,
  100% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(1.2);
  }
}

.data-points {
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
}

.data-point {
  width: 8px;
  height: 8px;
  background: var(--finance-primary);
  border-radius: 50%;
  animation: pulse 2s ease-in-out infinite;
}

.point-1 {
  animation-delay: 0s;
}

.point-2 {
  animation-delay: 0.7s;
}

.point-3 {
  animation-delay: 1.4s;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(1.5);
  }
}

.bull-icon {
  position: absolute;
  bottom: 25px;
  right: 25px;
  font-size: 3rem;
  animation: bounce 2s ease-in-out infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
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
  background: linear-gradient(90deg, var(--finance-primary), var(--finance-accent));
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

.description-section {
  margin-bottom: 2rem;
}

.project-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.goal-highlight {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  background: var(--background);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  border-left: 4px solid var(--finance-primary);
}

.goal-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.goal-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
}

.goal-content p {
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.6;
}

/* Features Preview */
.features-preview {
  margin-bottom: 2rem;
}

.features-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  text-align: center;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.feature-card {
  background: var(--background);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 1.5rem;
  text-align: center;
  transition: var(--transition);
  animation: slideInUp 0.6s ease-out forwards;
  animation-delay: var(--delay);
  opacity: 0;
  transform: translateY(20px);
}

.feature-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow);
  border-color: var(--finance-primary);
}

.feature-card .feature-icon {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.feature-card .feature-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
}

.feature-card .feature-description {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin: 0;
  line-height: 1.4;
}
.toggle-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: var(--text-primary);
  border: none;
  border-radius: 3rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--shadow);
}

.toggle-button:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

/* Toggle Button */
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

/* Technologies Section */
.technologies-section {
  margin: 4rem 0;
}

.tech-showcase {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.tech-category {
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 2rem;
  box-shadow: var(--shadow);
  transition: var(--transition);
}

.tech-category:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.tech-category .category-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--finance-primary);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tech-category .category-title::before {
  content: "";
  width: 4px;
  height: 1.5rem;
  background: var(--finance-primary);
  border-radius: 2px;
}

.tech-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Details Section */
.details-section {
  margin: 3rem 0;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.detail-card {
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 2rem;
  transition: var(--transition);
  box-shadow: var(--shadow);
}

.detail-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.detail-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.detail-icon {
  font-size: 1.5rem;
  opacity: 0.7;
}

/* Features List */
.features-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: var(--background);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.feature-item:hover {
  transform: translateX(5px);
  border-color: var(--finance-primary);
}

.feature-bullet {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.feature-bullet.feature-1 {
  background: var(--finance-primary);
}

.feature-bullet.feature-2 {
  background: var(--finance-accent);
}

/* Challenges List */
.challenges-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.challenge-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.challenge-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.challenge-item p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Skills Section */
.skills-section {
  margin: 4rem 0;
}

.skills-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.skill-category {
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

.skill-category:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
  border-color: var(--tech-color);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--tech-color);
}

.category-icon {
  font-size: 2rem;
  color: var(--tech-color);
}

.skill-category .category-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.skill-card {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.skill-visual {
  flex-shrink: 0;
}

.progress-circle {
  position: relative;
  width: 120px;
  height: 120px;
}

.progress-circle svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg);
}

.progress-bg {
  fill: none;
  stroke: var(--border);
  stroke-width: 8;
}

.progress-ring {
  fill: none;
  stroke: var(--tech-color);
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 283;
}

.skill-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-icon img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 8px;
}

.skill-percentage {
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--tech-color);
  background: var(--background);
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
  border: 1px solid var(--border);
}

.skill-info {
  flex: 1;
}

.skill-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.75rem 0;
}

.skill-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.skill-level {
  width: 100%;
}

.level-bar {
  width: 100%;
  height: 8px;
  background: var(--border);
  border-radius: 4px;
  overflow: hidden;
}

.level-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
  width: 0%;
}

/* Results Section */
.results-section {
  margin: 4rem 0;
}

.highlight-card {
  background: linear-gradient(135deg, var(--surface), var(--background));
  border: 2px solid var(--finance-primary);
}

.results-showcase {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem;
  background: var(--background);
  border-radius: var(--radius);
  border: 1px solid var(--border);
}

.result-visual {
  text-align: center;
  flex-shrink: 0;
}

.success-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.result-visual h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--finance-primary);
  margin: 0;
}

.result-content {
  flex: 1;
}

.result-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.impact-metrics {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.impact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem;
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.impact-item:hover {
  transform: translateX(5px);
  border-color: var(--finance-primary);
}

.impact-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
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

  .features-grid {
    grid-template-columns: 1fr;
  }

  .tech-showcase {
    grid-template-columns: 1fr;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }

  .skills-container {
    grid-template-columns: 1fr;
  }

  .skill-card {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .results-showcase {
    flex-direction: column;
    text-align: center;
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

  .financial-dashboard {
    width: 200px;
    height: 200px;
  }

  .dashboard-screen {
    width: 160px;
    height: 120px;
  }

  .section-title {
    font-size: 2rem;
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

  .detail-card {
    padding: 1.5rem;
  }

  .skill-category {
    padding: 1.5rem;
  }

  .toggle-button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .detail-header {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .challenge-item,
  .feature-item {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }

  .goal-highlight {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
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

  .card-header {
    padding: 1rem;
  }

  .card-content {
    padding: 1rem;
  }

  .detail-card {
    padding: 1rem;
  }

  .skill-category {
    padding: 1rem;
  }

  .progress-circle {
    width: 100px;
    height: 100px;
  }

  .skill-icon {
    width: 50px;
    height: 50px;
  }

  .financial-dashboard {
    width: 150px;
    height: 150px;
  }

  .dashboard-screen {
    width: 120px;
    height: 90px;
  }

  .bull-icon {
    font-size: 2rem;
    bottom: -15px;
    right: -15px;
  }

  .results-showcase {
    padding: 1rem;
  }

  .impact-metrics {
    gap: 0.75rem;
  }
}

/* États de focus pour l'accessibilité */
.toggle-button:focus-visible {
  outline: 2px solid var(--finance-primary);
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

  .metric-card,
  .feature-card,
  .skill-category {
    opacity: 1;
    transform: none;
  }
}

/* Améliorations pour le mode sombre */
.dark-mode .hero-background {
  background: linear-gradient(135deg, #0d5d3a 0%, #064e3b 100%);
}

.dark-mode .financial-pattern {
  background-image: radial-gradient(
      circle at 25% 25%,
      rgba(52, 211, 153, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(circle at 75% 75%, rgba(16, 185, 129, 0.1) 0%, transparent 50%);
}

.dark-mode .project-badge,
.dark-mode .metric-card {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .highlight-card {
  background: linear-gradient(135deg, var(--surface), rgba(52, 211, 153, 0.05));
  border-color: var(--finance-primary);
}

/* Scrollbar personnalisé */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--surface);
}

::-webkit-scrollbar-thumb {
  background: var(--finance-primary);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--finance-secondary);
}

/* Effets supplémentaires */
.tech-category::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--finance-primary), var(--finance-accent));
  border-radius: var(--radius) var(--radius) 0 0;
}

.skill-category::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--tech-color), transparent);
  border-radius: var(--radius) var(--radius) 0 0;
}

.tech-category,
.skill-category {
  position: relative;
}

/* Animation financière pour le hero */
.hero-section::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      2px 2px at 40px 60px,
      rgba(16, 185, 129, 0.3),
      transparent
    ),
    radial-gradient(2px 2px at 90px 40px, rgba(245, 158, 11, 0.2), transparent),
    radial-gradient(1px 1px at 160px 90px, rgba(34, 197, 94, 0.3), transparent);
  background-repeat: repeat;
  background-size: 250px 200px;
  animation: financialFlow 12s ease-in-out infinite;
  pointer-events: none;
  opacity: 0.4;
}

@keyframes financialFlow {
  0%,
  100% {
    transform: translateX(0px) translateY(0px);
  }

  33% {
    transform: translateX(20px) translateY(-10px);
  }

  66% {
    transform: translateX(-10px) translateY(20px);
  }
}

-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  width: 100%;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--finance-primary), var(--finance-secondary));
  color: white;
  border: none;
  border-radius: 3rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--shadow);
}
</style>
