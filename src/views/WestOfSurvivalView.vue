<script setup>
import MenuProjet from "@/components/MenuProjet.vue";
import { ref, onMounted, nextTick } from "vue";

const showContent = ref(false);
const isLoaded = ref(false);
const gameFeatures = ref([]);

// Technologies et leurs données
const techStack = ref([
  {
    category: "Dévelopement du jeu",
    icon: "🎨",
    color: "#FFA500",
    skills: [
      {
        name: "C#",
        percent: 95,
        image: "/picture/technical/CShapeIcone.png",
      },
      {
        name: "Monogame",
        percent: 85,
        image: "/picture/technical/Monogame.png",
      },
    ],
  },
]);

// Animation des compétences
const animateSkills = () => {
  const circles = document.querySelectorAll(".progress-circle");
  circles.forEach((circle, index) => {
    setTimeout(() => {
      const percent = circle.dataset.percent;
      const progressBar = circle.querySelector(".progress-bar");
      if (progressBar) {
        progressBar.style.width = `${percent}%`;
      }
    }, index * 300);
  });
};

function toggleContent() {
  showContent.value = !showContent.value;
  if (showContent.value) {
    nextTick(() => {
      const detailsSection = document.querySelector(".details-section");
      detailsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }
}

onMounted(() => {
  setTimeout(() => {
    isLoaded.value = true;
    animateSkills();
  }, 300);

  // Données des fonctionnalités du jeu
  gameFeatures.value = [
    {
      icon: "🎯",
      titleKey: "west_features.immersive_gameplay.title",
      descriptionKey: "west_features.immersive_gameplay.description",
    },
    {
      icon: "🗺️",
      titleKey: "west_features.open_world.title",
      descriptionKey: "west_features.open_world.description",
    },
    {
      icon: "⚔️",
      titleKey: "west_features.dynamic_combat.title",
      descriptionKey: "west_features.dynamic_combat.description",
    },
  ];
});
</script>

<template>
  <div class="page-wrapper">
    <MenuProjet />

    <!-- Hero Section -->
    <div class="hero-section" :class="{ loaded: isLoaded }">
      <div class="hero-background">
        <div class="western-pattern"></div>
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="game-badge">
          <span class="badge-icon">🎮</span>
          <span>{{ $t("west_project_tag") }}</span>
        </div>

        <h1 class="hero-title">{{ $t("west_project_title") }}</h1>

        <div class="hero-subtitle">
          {{ $t("west_project_subtitle") }}
        </div>

        <div class="hero-actions">
          <a
            href="https://github.com/Shiro1234orihS/West-of-Survival"
            target="_blank"
            class="github-button"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
              />
            </svg>
            <span>{{ $t("source_code") }}</span>
          </a>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- Game Features -->
      <section class="features-section fade-in" :class="{ visible: isLoaded }">
        <div class="section-header">
          <h2 class="section-title">{{ $t("west_features_tilte") }}</h2>
          <p class="section-subtitle">{{ $t("west_features_subtilte") }}</p>
        </div>

        <div class="features-grid">
          <div
            v-for="(feature, index) in gameFeatures"
            :key="index"
            class="feature-card"
            :style="{ '--delay': `${index * 0.1}s` }"
          >
            <div class="feature-icon">{{ feature.icon }}</div>
            <h3 class="feature-title">{{ $t(feature.titleKey) }}</h3>
            <p class="feature-description">{{ $t(feature.descriptionKey) }}</p>
          </div>
        </div>
      </section>

      <!-- Project Description -->
      <section class="description-section fade-in" :class="{ visible: isLoaded }">
        <div class="content-card">
          <div class="card-header">
            <h2 class="card-title">{{ $t("west_project_objective") }}</h2>
            <div class="card-icon">🎯</div>
          </div>

          <div class="card-content">
            <p class="description-text" v-html="$t('west_project_description')"></p>

            <button @click="toggleContent" class="toggle-button">
              <span class="button-text">
                {{ showContent ? $t("west_hide_details") : $t("west_toggle_details") }}
              </span>
              <div class="button-icon" :class="{ rotated: showContent }">
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

      <!-- Details Section -->
      <Transition name="slide-fade">
        <section v-if="showContent" class="details-section">
          <div class="details-grid">
            <!-- Technologies utilisées -->
            <div class="detail-card">
              <div class="detail-header">
                <h3 class="detail-title">{{ $t("west_main_software") }}</h3>
                <div class="detail-icon">🛠️</div>
              </div>

              <div class="technology-list">
                <div class="tech-item">
                  <div class="tech-icon">🎨</div>
                  <div class="tech-info">
                    <h4>{{ $t("west_tiled") }}</h4>
                    <p>{{ $t("west_tiled_description") }}</p>
                  </div>
                </div>

                <div class="tech-item">
                  <div class="tech-icon">🎮</div>
                  <div class="tech-info">
                    <h4>{{ $t("west_monogame") }}</h4>
                    <p>{{ $t("west_monogame_description") }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Défis et Solutions -->
            <div class="detail-card">
              <div class="detail-header">
                <h3 class="detail-title">{{ $t("west_challenges") }}</h3>
                <div class="detail-icon">⚡</div>
              </div>
              <p class="detail-content">{{ $t("west_challenges_description") }}</p>
            </div>

            <!-- Mon Rôle -->
            <div class="detail-card">
              <div class="detail-header">
                <h3 class="detail-title">{{ $t("west_role") }}</h3>
                <div class="detail-icon">👨‍💻</div>
              </div>
              <p class="detail-content">{{ $t("west_role_description") }}</p>
            </div>

            <!-- Résultats -->
            <div class="detail-card highlight">
              <div class="detail-header">
                <h3 class="detail-title">{{ $t("west_results") }}</h3>
                <div class="detail-icon">🎉</div>
              </div>
              <p class="detail-content">{{ $t("west_results_description") }}</p>
            </div>
          </div>
        </section>
      </Transition>

      <!-- Technical Skills -->
      <section class="features-section fade-in" :class="{ visible: isLoaded }">
        <div class="section-header">
          <h2 class="section-title">{{ $t("vue_technical_skills") }}</h2>
          <p class="section-subtitle">Technologies et frameworks utilisés</p>
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
              <h3 class="category-title">{{ category.category }}</h3>
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
                  <div class="skill-level">
                    <div class="level-bar">
                      <div
                        class="level-fill"
                        :style="{
                          width: skill.percent + '%',
                          backgroundColor: category.color,
                        }"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Availability Section -->
      <section class="availability-section fade-in" :class="{ visible: isLoaded }">
        <div class="content-card highlight-card">
          <div class="card-header">
            <h2 class="card-title">{{ $t("west_availability") }}</h2>
            <div class="card-icon">🚀</div>
          </div>

          <div class="card-content">
            <p class="availability-text">
              {{ $t("west_availability_text") }}
              <a
                href="https://ricardonunesemilio.fr/jeux_web/phaser/west_of_survival/"
                target="_blank"
                class="inline-link"
              >
                {{ $t("west_available") }}
              </a>
            </p>

            <p class="availability-text">
              {{ $t("west_github_source") }}
              <a
                href="https://github.com/Shiro1234orihS/West-of-Survival"
                target="_blank"
                class="inline-link"
              >
                GitHub
              </a>
            </p>

            <div class="action-buttons">
              <a
                href="https://ricardonunesemilio.fr/jeux_web/phaser/west_of_survival/"
                target="_blank"
                class="action-btn primary"
              >
                <span class="btn-icon">🎮</span>
                <span>{{ $t("west_action") }}</span>
              </a>

              <a
                href="https://github.com/Shiro1234orihS/West-of-Survival"
                target="_blank"
                class="action-btn secondary"
              >
                <span class="btn-icon">📖</span>
                <span class="color">{{ $t("west_view") }}</span>
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
  --western-primary: #8b4513;
  --western-secondary: #d2691e;
  --western-accent: #cd853f;
  --western-gold: #daa520;
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

  --monogame-primary: #e73c00;
  /* Rouge-orange principal de MonoGame */
  --monogame-secondary: #ff6a00;
  /* Orange secondaire */
  --monogame-accent: #ff4500;
  /* Orange vif d'accent */
  --monogame-dark: #b8300a;
  /* Rouge foncé */
  --monogame-light: #ff8c42;
  /* Orange clair pour le mode sombre */
  --western-primary: #8b4513;
  --western-secondary: #d2691e;
  --western-accent: #cd853f;
  --western-gold: #daa520;
}

.dark-mode {
  --western-primary: #a0522d;
  --western-secondary: #f4a460;
  --background: #0f172a;
  --surface: #1e293b;
  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --border: #334155;
  --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);

  --monogame-primary-dark: #c73400;
  /* Version plus sombre du primary */
  --monogame-secondary-dark: #e55a00;
  /* Version plus sombre du secondary */
  --monogame-accent-dark: #e03e00;
  /* Version plus sombre de l'accent */
  --monogame-bg-dark: #1a0a06;
  /* Fond très sombre avec teinte MonoGame */
  --monogame-surface-dark: #2d1510;
  /* Surface sombre avec teinte MonoGame */
}

.color {
  color: var(--text-primary);
}

.button-icon svg {
  stroke: var(--text-primary);
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
  justify-content: center;
  overflow: hidden;
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
    var(--monogame-primary) 0%,
    var(--monogame-secondary) 100%
  );
}

.western-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
      circle at 25% 25%,
      rgba(231, 60, 0, 0.2) 0%,
      transparent 50%
    ),
    radial-gradient(circle at 75% 75%, rgba(255, 106, 0, 0.2) 0%, transparent 50%);
  background-size: 100px 100px;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    45deg,
    rgba(231, 60, 0, 0.3) 0%,
    rgba(255, 69, 0, 0.25) 35%,
    rgba(255, 106, 0, 0.2) 70%,
    rgba(184, 48, 10, 0.3) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: var(--text-primary);
  max-width: 800px;
  padding: 2rem;
}

.game-badge {
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

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.github-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  border-radius: 3rem;
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition);
  box-shadow: var(--shadow-lg);
}

.play-icon {
  font-size: 1.2rem;
}

.github-button {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-primary);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.github-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.github-button svg {
  width: 1.25rem;
  height: 1.25rem;
}

/* Sections générales */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in.visible {
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
  background: linear-gradient(90deg, var(--western-primary), var(--western-gold));
  border-radius: 2px;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
  opacity: 0.8;
}

/* Features Section */
.features-section {
  margin: 4rem 0;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: var(--surface);
  padding: 2rem;
  border-radius: var(--radius);
  border: 1px solid var(--border);
  text-align: center;
  transition: var(--transition);
  box-shadow: var(--shadow);
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

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-xl);
  border-color: var(--western-primary);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Content Cards */
.content-card {
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: var(--shadow-lg);
  transition: var(--transition);
  overflow: hidden;
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

.description-text {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

/* Toggle Button */
.toggle-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--western-primary), var(--western-secondary));
  color: var(--text-primary);
  border: none;
  border-radius: 3rem;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--shadow);
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

/* Details Section */
.details-section {
  margin: 3rem 0;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.detail-card.highlight {
  grid-column: 1 / -1;
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

.detail-card.highlight {
  background: linear-gradient(135deg, var(--western-gold), #ffd700);
  color: var(--text-primary);
  border-color: var(--western-accent);
}

.detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
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

.detail-content {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Technology List */
.technology-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.tech-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.tech-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.tech-info h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0 0 0.5rem 0;
}

.tech-info p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Skills Section */
.skills-section {
  margin: 4rem 0;
}

.skills-container {
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  padding: 2rem;
  box-shadow: var(--shadow-lg);
}

.skill-category {
  text-align: center;
}

.category-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--western-primary);
  margin-bottom: 2rem;
}

.skill-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  max-width: 600px;
  margin: 0 auto;
}

.skill-info {
  flex: 1;
}

.skill-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.skill-name {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
}

.skill-percentage {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--western-primary);
}

.progress-container {
  position: relative;
  height: 8px;
  background: var(--border);
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--western-primary), var(--western-gold));
  border-radius: 4px;
  width: 0%;
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-icon-container {
  flex-shrink: 0;
}

.skill-icon {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 0.5rem;
  box-shadow: var(--shadow);
}

/* Availability Section */
.availability-section {
  margin: 4rem 0;
}

.highlight-card {
  background: linear-gradient(135deg, var(--surface), var(--background));
  border: 2px solid var(--western-primary);
}

.availability-text {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.inline-link {
  color: var(--western-primary);
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px solid transparent;
  transition: var(--transition);
}

.inline-link:hover {
  border-bottom-color: var(--western-primary);
}

.action-buttons {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.5rem;
  border-radius: var(--radius);
  text-decoration: none;
  font-weight: 600;
  transition: var(--transition);
  box-shadow: var(--shadow);
}

.action-btn.primary {
  background: var(--western-primary);
  color: var(--text-primary);
}

.action-btn.primary:hover {
  background: var(--western-secondary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.action-btn.secondary {
  background: var(--background);
  color: var(--text-primary);
  border: 1px solid var(--border);
}

.action-btn.secondary:hover {
  background: var(--surface);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.btn-icon {
  font-size: 1.2rem;
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
  .hero-content {
    padding: 1.5rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .container {
    padding: 0 1rem;
  }

  .features-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }

  .skill-item {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }

  .card-header {
    padding: 1.5rem 1.5rem 1rem;
  }

  .card-content {
    padding: 1.5rem;
  }

  .detail-card {
    padding: 1.5rem;
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

  .hero-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .github-button {
    justify-content: center;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }

  .feature-card {
    padding: 1.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .card-title {
    font-size: 1.5rem;
  }

  .toggle-button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  .action-buttons {
    flex-direction: column;
  }

  .tech-item {
    flex-direction: column;
    text-align: center;
    gap: 0.75rem;
  }

  .skill-icon {
    width: 60px;
    height: 60px;
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
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .card-content {
    padding: 1rem;
  }

  .detail-card {
    padding: 1rem;
  }

  .detail-header {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .feature-card {
    padding: 1rem;
  }

  .feature-icon {
    font-size: 2rem;
  }

  .toggle-button {
    width: 100%;
    justify-content: center;
  }

  .action-btn {
    justify-content: center;
  }

  .game-badge {
    font-size: 0.75rem;
    padding: 0.375rem 0.75rem;
  }
}

/* Amélioration des effets de parallaxe */
@media (prefers-reduced-motion: no-preference) {
  .hero-section {
    background-attachment: fixed;
  }
}

/* États de focus pour l'accessibilité */
.toggle-button:focus-visible,
.github-button:focus-visible,
.action-btn:focus-visible,
.inline-link:focus-visible {
  outline: 2px solid var(--western-primary);
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

  .feature-card {
    opacity: 1;
    transform: none;
  }
}

/* Améliorations pour le mode sombre */
.dark-mode .hero-background {
  background: linear-gradient(
    135deg,
    var(--monogame-dark) 0%,
    var(--monogame-primary) 100%
  );
}

.dark-mode .western-pattern {
  background-image: radial-gradient(
      circle at 25% 25%,
      rgba(231, 60, 0, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(circle at 75% 75%, rgba(255, 106, 0, 0.15) 0%, transparent 50%);
}

.dark-mode .game-badge {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .hero-overlay {
  background: linear-gradient(
    45deg,
    rgba(184, 48, 10, 0.4) 0%,
    rgba(231, 60, 0, 0.3) 35%,
    rgba(255, 69, 0, 0.25) 70%,
    rgba(139, 35, 8, 0.4) 100%
  );
}

/* Variante alternative avec effet de dégradé plus subtil */
.hero-overlay-subtle {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at top, rgba(231, 60, 0, 0.2) 0%, transparent 70%),
    radial-gradient(ellipse at bottom, rgba(255, 106, 0, 0.15) 0%, transparent 70%),
    linear-gradient(
      45deg,
      rgba(231, 60, 0, 0.1) 0%,
      rgba(255, 69, 0, 0.05) 50%,
      rgba(184, 48, 10, 0.1) 100%
    );
}

.dark-mode .detail-card.highlight {
  background: linear-gradient(135deg, var(--western-secondary), var(--western-accent));
}

.dark-mode .highlight-card {
  background: linear-gradient(135deg, var(--surface), rgba(160, 82, 45, 0.05));
  border-color: var(--western-secondary);
}

/* Animation personnalisée pour les particules western */
@keyframes dustParticle {
  0% {
    opacity: 0;
    transform: translateY(20px) rotate(0deg);
  }

  50% {
    opacity: 0.6;
    transform: translateY(-10px) rotate(180deg);
  }

  100% {
    opacity: 0;
    transform: translateY(-40px) rotate(360deg);
  }
}

.hero-section::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(
      2px 2px at 20px 30px,
      rgba(231, 60, 0, 0.3),
      transparent
    ),
    radial-gradient(2px 2px at 40px 70px, rgba(255, 106, 0, 0.2), transparent),
    radial-gradient(1px 1px at 90px 40px, rgba(255, 69, 0, 0.25), transparent);
  background-repeat: repeat;
  background-size: 150px 100px;
  animation: dustParticle 8s ease-in-out infinite;
  pointer-events: none;
}

/* Scrollbar personnalisé pour la cohérence thématique */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--surface);
}

::-webkit-scrollbar-thumb {
  background: var(--western-primary);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--western-secondary);
}

/* Amélioration des tooltips et interactions */
.feature-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--western-primary), var(--western-gold));
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.feature-card:hover::before {
  transform: scaleX(1);
}

.detail-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 4px;
  background: linear-gradient(180deg, var(--western-primary), var(--western-gold));
  transform: scaleY(0);
  transition: transform 0.3s ease;
}

.detail-card:hover::before {
  transform: scaleY(1);
}

/* Animation d'apparition pour les sections */
.description-section {
  animation-delay: 0.2s;
}

.skills-section {
  animation-delay: 0.4s;
}

.availability-section {
  animation-delay: 0.6s;
}

/* Affiche des technologie  */
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
  margin: 0 0 0.75rem 0;
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

/* Source Section */
.source-section {
  margin: 4rem 0;
}

.highlight-card {
  background: linear-gradient(135deg, var(--surface), var(--background));
  border: 2px solid var(--vue-primary);
}

.source-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
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

/* Animation des particules avec couleurs MonoGame */
@keyframes monogameParticles {
  0% {
    opacity: 0;
    transform: translateY(20px) rotate(0deg);
  }

  50% {
    opacity: 0.8;
    transform: translateY(-10px) rotate(180deg);
  }

  100% {
    opacity: 0;
    transform: translateY(-40px) rotate(360deg);
  }
}

/* Effet de lueur MonoGame */
.hero-section::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
    circle at center,
    rgba(231, 60, 0, 0.1) 0%,
    rgba(255, 106, 0, 0.05) 40%,
    transparent 70%
  );
  animation: monogameGlow 4s ease-in-out infinite alternate;
}

@keyframes monogameGlow {
  0% {
    opacity: 0.3;
    transform: scale(1);
  }

  100% {
    opacity: 0.6;
    transform: scale(1.02);
  }
}
</style>
