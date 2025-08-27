<script setup>
import MenuProjet from '@/components/MenuProjet.vue'
import { ref, onMounted, nextTick } from 'vue';

const showContent = ref(false);
const isLoaded = ref(false);
const skillsAnimated = ref(false);

// Données du projet Laravel
const projectStats = ref([
  { labelKey: 'laravel_stats_users', value: '1000+', icon: '👥' },
  { labelKey: 'laravel_stats_motorcycles', value: '500+', icon: '🏍️' },
  { labelKey: 'laravel_stats_equipment', value: '2000+', icon: '🛠️' },
  { labelKey: 'laravel_stats_performance', value: '95%', icon: '⚡' }
]);

const features = ref([
  {
    icon: '👥',
    titleKey: 'laravel_feature_users_title',
    descriptionKey: 'laravel_feature_users_description',
    color: '#3B82F6'
  },
  {
    icon: '🏍️',
    titleKey: 'laravel_feature_catalog_title',
    descriptionKey: 'laravel_feature_catalog_description',
    color: '#EF4444'
  },
  {
    icon: '🛠️',
    titleKey: 'laravel_feature_equipment_title',
    descriptionKey: 'laravel_feature_equipment_description',
    color: '#10B981'
  },
  {
    icon: '👨‍💼',
    titleKey: 'laravel_feature_admin_title',
    descriptionKey: 'laravel_feature_admin_description',
    color: '#8B5CF6'
  },
  {
    icon: '📊',
    titleKey: 'laravel_feature_powerbi_title',
    descriptionKey: 'laravel_feature_powerbi_description',
    color: '#F59E0B'
  }
]);

const challenges = ref([
  {
    titleKey: 'laravel_challenge_performance_title',
    icon: '⚡',
    color: '#EF4444',
    descriptionKey: 'laravel_challenge_performance_description'
  },
  {
    titleKey: 'laravel_challenge_powerbi_title',
    icon: '📊',
    color: '#F59E0B',
    descriptionKey: 'laravel_challenge_powerbi_description'
  }
]);
const techStack = ref([
  {
    category: 'Frontend',
    icon: '🎨',
    color: '#4FC08D',
    skills: [
      { name: 'Laravel', percent: 80, image: './../../public/picture/technical/laravelIcone.png' }
    ]
  },
  {
    category: 'Backend et API',
    icon: '⚙️',
    color: '#512BD4',
    skills: [
      { name: 'Laravel', percent: 80, image: './../../public/picture/technical/laravelIcone.png' }
    ]
  },
  {
    category: 'Base de données',
    icon: '🗄️',
    color: '#336791',
    skills: [
      { name: 'Postgresql', percent: 75, image: './../../public/picture/technical/PostgresqlIcone.png' }
    ]
  }
]);

function toggleContent() {
  showContent.value = !showContent.value;
  if (showContent.value) {
    nextTick(() => {
      const detailsSection = document.querySelector('.details-section');
      detailsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

const animateSkills = () => {
  if (skillsAnimated.value) return;

  const circles = document.querySelectorAll('.progress-circle');
  circles.forEach((circle, index) => {
    setTimeout(() => {
      const percent = circle.dataset.percent;
      const progress = circle.querySelector('.progress-ring');
      if (progress) {
        const radius = progress.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percent / 100) * circumference;

        progress.style.strokeDasharray = circumference;
        progress.style.strokeDashoffset = circumference;
        progress.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)';

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
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');

          // Animer les compétences quand elles apparaissent
          if (entry.target.classList.contains('skills-section')) {
            animateSkills();
          }
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observer les éléments à animer
  document.querySelectorAll('.fade-in').forEach(el => {
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
    <div class="hero-section" :class="{ 'loaded': isLoaded }">
      <div class="hero-background">
        <div class="bmw-pattern"></div>
        <div class="hero-overlay"></div>
      </div>

      <div class="hero-content">
        <div class="project-badge">
          <span class="badge-icon">🏍️</span>
          <span>{{ $t('laravel_tag_projet') }}</span>
        </div>

        <h1 class="hero-title">{{ $t('laravel_project_title') }}</h1>

        <div class="hero-subtitle">
          {{ $t('laravel_projet_tag_desc') }}
        </div>

        <div class="hero-cta">
          <a href="http://ricardonunesemilio.fr:8008/" target="_blank" rel="noopener noreferrer" class="demo-button">
            <span class="button-icon">🚀</span>
            <span>{{ $t('languages_view_online') }}</span>
          </a>
        </div>

        <div class="stats-grid">
          <div v-for="(stat, index) in projectStats" :key="index" class="stat-card"
            :style="{ '--delay': `${index * 0.1}s` }">
            <div class="stat-icon">{{ stat.icon }}</div>
            <div class="stat-value">{{ stat.value }}</div>
            <div class="stat-label">{{ $t(stat.labelKey) }}</div>
          </div>
        </div>
      </div>

      <div class="hero-visual">
        <div class="bmw-showcase">
          <div class="laptop-frame">
            <div class="laptop-screen">
              <div class="browser-bar">
                <div class="browser-dots">
                  <span class="dot red"></span>
                  <span class="dot yellow"></span>
                  <span class="dot green"></span>
                </div>
              </div>
              <div class="website-preview">
                <div class="preview-header">
                  <div class="bmw-logo">BMW</div>
                  <div class="nav-items">
                    <span class="nav-item"></span>
                    <span class="nav-item"></span>
                    <span class="nav-item"></span>
                  </div>
                </div>
                <div class="preview-content">
                  <div class="content-block large"></div>
                  <div class="content-block medium"></div>
                  <div class="content-block small"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="moto-icon">🏍️</div>
        </div>
      </div>
    </div>

    <div class="container">
      <!-- Project Overview -->
      <section class="overview-section fade-in">
        <div class="content-card">
          <div class="card-header">
            <h2 class="card-title">{{ $t('laravel_project_presentation') }}</h2>
            <div class="card-icon">🎯</div>
          </div>

          <div class="card-content">
            <p class="project-description">{{ $t('laravel_project_description') }}</p>

            <div class="features-preview">
              <h3 class="features-title">{{ $t('laravel_feature_title') }}</h3>
              <div class="features-grid">
                <div v-for="(feature, index) in features" :key="index" class="feature-card"
                  :style="{ '--feature-color': feature.color }">
                  <div class="feature-icon">{{ feature.icon }}</div>
                  <h3 class="feature-title">{{ $t(feature.titleKey) }}</h3>
                  <p class="feature-description">{{ $t(feature.descriptionKey) }}</p>
                </div>
              </div>
            </div>

            <button @click="toggleContent" class="toggle-button">
              <span class="button-text">
                {{ showContent ? $t('hide_details') : $t('toggle_details') }}
              </span>
              <div class="button-icon" :class="{ 'rotated': showContent }">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
            <!-- Fonctionnalités détaillées -->
            <div class="detail-card">
              <div class="detail-header">
                <h3 class="detail-title">{{ $t('laravel_project_features') }}</h3>
                <div class="detail-icon">🚀</div>
              </div>

              <div class="features-list">
                <div class="feature-item">
                  <div class="feature-bullet users"></div>
                  <span v-html="$t('laravel_feature_users')"></span>
                </div>
                <div class="feature-item">
                  <div class="feature-bullet motos"></div>
                  <span v-html="$t('laravel_feature_catalog_motos')"></span>
                </div>
                <div class="feature-item">
                  <div class="feature-bullet equipment"></div>
                  <span v-html="$t('laravel_feature_catalog_equipements')"></span>
                </div>
                <div class="feature-item">
                  <div class="feature-bullet admin"></div>
                  <span v-html="$t('laravel_feature_admin')"></span>
                </div>
                <div class="feature-item">
                  <div class="feature-bullet powerbi"></div>
                  <span v-html="$t('laravel_feature_powerbi')"></span>
                </div>
              </div>
            </div>

            <!-- Défis et Solutions -->
            <div class="detail-card">
              <div class="detail-header">
                <h3 class="detail-title">{{ $t('laravel_challenges') }}</h3>
                <div class="detail-icon">⚡</div>
              </div>

              <div class="challenges-list">
                <div v-for="(challenge, index) in challenges" :key="index" class="challenge-item"
                  :style="{ '--challenge-color': challenge.color }">
                  <div class="challenge-icon">{{ challenge.icon }}</div>
                  <div class="challenge-content">
                    <h4 class="challenge-title">{{ $t(challenge.titleKey) }}</h4>
                    <p class="challenge-description">{{ $t(challenge.descriptionKey) }}</p>
                    <template v-if="index === 0">
                      <p v-html="$t('laravel_challenge_performance')"></p>
                    </template>
                    <template v-else>
                      <p v-html="$t('laravel_challenge_powerbi')"></p>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Transition>

      <!-- Technical Skills -->
      <section class="skills-section fade-in">
        <div class="section-header">
          <h2 class="section-title">{{ $t('vue_technical_skills') }}</h2>
          <p class="section-subtitle">{{ $t('vue_technical_skills_subtitle') }}</p>
        </div>

        <div class="tech-stack-grid">
          <div v-for="(category, catIndex) in techStack" :key="catIndex" class="tech-category"
            :style="{ '--category-color': category.color, '--delay': `${catIndex * 0.2}s` }">

            <div class="category-header">
              <div class="category-icon">{{ category.icon }}</div>
              <h3 class="category-title">{{ category.category }}</h3>
            </div>

            <div class="skills-grid">
              <div v-for="(skill, skillIndex) in category.skills" :key="skillIndex" class="skill-card">

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
                      <div class="level-fill" :style="{ width: skill.percent + '%', backgroundColor: category.color }">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Demo Section -->
      <section class="demo-section fade-in">
        <div class="content-card highlight-card">
          <div class="card-header">
            <h2 class="card-title">{{ $t('laravel_available_link') }}</h2>
            <div class="card-icon">🌐</div>
          </div>

          <div class="card-content">
            <div class="demo-showcase">
              <div class="demo-info">
                <div class="demo-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.71" />
                  </svg>
                </div>
                <div class="demo-text">
                  <h3>{{ $t('laravel_demo_online_title') }}</h3>
                  <p>{{ $t('laravel_demo_online_description') }}</p>
                </div>
              </div>

              <a href="http://ricardonunesemilio.fr:8008/" target="_blank" rel="noopener noreferrer"
                class="demo-link-button">
                <span class="button-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
                <span>Voir en ligne</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Conclusion Section -->
      <section class="conclusion-section fade-in">
        <div class="content-card">
          <div class="card-header">
            <h2 class="card-title">{{ $t('laravel_project_conclusion') }}</h2>
            <div class="card-icon">🎉</div>
          </div>

          <div class="card-content">
            <div class="conclusion-grid">
              <div class="conclusion-item">
                <div class="conclusion-icon">🔧</div>
                <div class="conclusion-content">
                  <h4>{{ $t('laravel_conclusion_flexibility_title') }}</h4>
                  <p v-html="$t('laravel_conclusion_flexibility')"></p>
                </div>
              </div>

              <div class="conclusion-item">
                <div class="conclusion-icon">👥</div>
                <div class="conclusion-content">
                  <h4>{{ $t('laravel_conclusion_user_experience_title') }}</h4>
                  <p v-html="$t('laravel_conclusion_user_experience')"></p>
                </div>
              </div>

              <div class="conclusion-item">
                <div class="conclusion-icon">📚</div>
                <div class="conclusion-content">
                  <h4>{{ $t('laravel_conclusion_learnings_title') }}</h4>
                  <p v-html="$t('laravel_conclusion_learnings')"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Source Code Section -->
      <section class="source-section fade-in">
        <div class="content-card highlight-card">
          <div class="card-header">
            <h2 class="card-title">{{ $t('source_code') }}</h2>
            <div class="card-icon">💻</div>
          </div>

          <div class="card-content">
            <div class="github-section">
              <div class="github-info">
                <div class="github-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path
                      d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <div class="github-text">
                  <h4>{{ $t('vue_git_repo') }}</h4>
                  <p>{{ $t('vue_git_info') }}</p>
                </div>
              </div>

              <a href="https://github.com/phtuongvy/virtualisation_X" target="_blank" class="github-button">
                <span class="button-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </span>
                <span>{{ $t('vue_view_code') }}</span>
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
  --laravel-primary: #FF2D20;
  --laravel-secondary: #E53E3E;
  --bmw-blue: #0066CC;
  --bmw-gray: #666666;
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
  --laravel-primary: #FF4F3D;
  --laravel-secondary: #FF6B5A;
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
  background: linear-gradient(135deg, var(--laravel-primary) 0%, var(--laravel-secondary) 100%);
}

.bmw-pattern {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 75% 75%, rgba(0, 102, 204, 0.1) 0%, transparent 50%);
  background-size: 100px 100px;
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
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-cta {
  margin-bottom: 2.5rem;
}

.demo-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  text-decoration: none;
  border-radius: 3rem;
  font-weight: 600;
  transition: var(--transition);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
}

.demo-button:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.demo-button .button-icon {
  font-size: 1.2rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: var(--radius);
  padding: 1.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: slideInUp 0.6s ease-out forwards;
  animation-delay: var(--delay);
  opacity: 0;
  transform: translateY(20px);
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.stat-icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 1.75rem;
  font-weight: 800;
  color: white;
  line-height: 1;
}

.stat-label {
  font-size: 0.875rem;
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

.bmw-showcase {
  position: relative;
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

.laptop-frame {
  width: 300px;
  height: 200px;
  background: #2d3748;
  border-radius: 12px 12px 0 0;
  padding: 8px 8px 0;
  box-shadow: var(--shadow-xl);
}

.laptop-screen {
  width: 100%;
  height: 100%;
  background: white;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
}

.browser-bar {
  height: 24px;
  background: #f7fafc;
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-bottom: 1px solid #e2e8f0;
}

.browser-dots {
  display: flex;
  gap: 6px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

.dot.red {
  background: #ef4444;
}

.dot.yellow {
  background: #f59e0b;
}

.dot.green {
  background: #10b981;
}

.website-preview {
  height: calc(100% - 24px);
  background: #f8fafc;
}

.preview-header {
  height: 40px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid #e2e8f0;
}

.bmw-logo {
  font-weight: 800;
  color: var(--bmw-blue);
  font-size: 1.125rem;
}

.nav-items {
  display: flex;
  gap: 8px;
}

.nav-item {
  width: 40px;
  height: 6px;
  background: #cbd5e0;
  border-radius: 3px;
}

.preview-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.content-block {
  background: #e2e8f0;
  border-radius: 4px;
  animation: contentPulse 2s ease-in-out infinite;
}

.content-block.large {
  height: 40px;
  animation-delay: 0s;
}

.content-block.medium {
  height: 24px;
  width: 70%;
  animation-delay: 0.5s;
}

.content-block.small {
  height: 16px;
  width: 50%;
  animation-delay: 1s;
}

@keyframes contentPulse {

  0%,
  100% {
    opacity: 0.6;
  }

  50% {
    opacity: 1;
  }
}

.moto-icon {
  position: absolute;
  bottom: -20px;
  right: -20px;
  font-size: 3rem;
  animation: motoRide 4s ease-in-out infinite;
}

@keyframes motoRide {

  0%,
  100% {
    transform: translateX(0px) rotate(0deg);
  }

  50% {
    transform: translateX(10px) rotate(5deg);
  }
}

/* Ajoutez ces styles à la fin de votre section <style scoped> */

/* Sections générales */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Section Overview */
.overview-section {
  margin: 6rem 0;
}

.content-card {
  background: var(--background);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  overflow: hidden;
}

.highlight-card {
  border: 2px solid var(--laravel-primary);
  box-shadow: var(--shadow-lg);
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
}

.card-title {
  font-size: 1.875rem;
  font-weight: 700;
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

.project-description {
  font-size: 1.125rem;
  line-height: 1.7;
  color: var(--text-secondary);
  margin-bottom: 2rem;
}

.features-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.feature-card {
  position: relative;
  background: var(--surface);
  border-radius: var(--radius);
  padding: 1.5rem;
  text-align: center;
  transition: var(--transition);
  border: 1px solid var(--border);
  animation: slideInUp 0.6s ease-out forwards;
  animation-delay: var(--delay);
  opacity: 0;
  transform: translateY(20px);
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: var(--feature-color);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.feature-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.feature-description {
  font-size: 0.875rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.feature-border {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--feature-color);
  opacity: 0;
  transition: var(--transition);
}

.feature-card:hover .feature-border {
  opacity: 1;
}

.toggle-button {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, var(--vue-primary), var(--vue-secondary));
  color: white;
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
  transition: transform 0.3s ease;
}

.button-icon.rotated {
  transform: rotate(180deg);
}

.button-icon svg {
  width: 1.25rem;
  height: 1.25rem;
}

/* Section Details */
.details-section {
  margin: 4rem 0;
}

.details-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.detail-card {
  background: var(--background);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  overflow: hidden;
}

.detail-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 2rem;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
}

.detail-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.detail-icon {
  font-size: 1.5rem;
  opacity: 0.7;
}

.features-list {
  padding: 2rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 0;
  border-bottom: 1px solid var(--border);
}

.feature-item:last-child {
  border-bottom: none;
}

.feature-bullet {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-top: 0.25rem;
  flex-shrink: 0;
}

.feature-bullet.users {
  background: #3B82F6;
}

.feature-bullet.motos {
  background: #EF4444;
}

.feature-bullet.equipment {
  background: #10B981;
}

.feature-bullet.admin {
  background: #8B5CF6;
}

.feature-bullet.powerbi {
  background: #F59E0B;
}

.challenges-list {
  padding: 2rem;
}

.challenge-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--border);
}

.challenge-item:last-child {
  border-bottom: none;
}

.challenge-icon {
  font-size: 2rem;
  color: var(--challenge-color);
  flex-shrink: 0;
}

.challenge-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.challenge-description {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Section Technologies */
.skills-section {
  margin: 6rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--text-secondary);
}

.tech-container {
  max-width: 600px;
  margin: 0 auto;
}

.tech-card {
  background: var(--background);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  padding: 2rem;
  transition: var(--transition);
}

.tech-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  border-color: var(--tech-color);
}

.tech-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.tech-icon {
  font-size: 2rem;
}

.tech-name {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin: 0;
}

.tech-category {
  color: var(--text-secondary);
  font-size: 0.875rem;
  margin: 0;
}

.tech-content {
  display: grid;
  grid-template-columns: 150px 1fr;
  gap: 2rem;
  align-items: center;
}

.skill-visual {
  position: relative;
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
  stroke-width: 3;
}

.progress-ring {
  fill: none;
  stroke: var(--tech-color);
  stroke-width: 3;
  stroke-linecap: round;
}

.skill-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow);
}

.skill-icon img {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.skill-percentage {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--tech-color);
}

.tech-description p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.level-bar {
  width: 100%;
  height: 6px;
  background: var(--border);
  border-radius: 3px;
  overflow: hidden;
}

.level-fill {
  height: 100%;
  border-radius: 3px;
  transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Section Demo */
.demo-section {
  margin: 6rem 0;
}

.demo-showcase {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 2rem;
  align-items: center;
}

.demo-info {
  display: flex;
  gap: 1.5rem;
}

.demo-icon {
  width: 60px;
  height: 60px;
  background: var(--laravel-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.demo-icon svg {
  width: 24px;
  height: 24px;
}

.demo-text h3 {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.demo-text p {
  color: var(--text-secondary);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.demo-features {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.demo-feature {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  color: var(--text-secondary);
}

.feature-dot {
  width: 6px;
  height: 6px;
  background: var(--laravel-primary);
  border-radius: 50%;
}

.demo-link-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: var(--laravel-primary);
  color: var(--tech-color);
  stroke: var(--tech-color);
  text-decoration: none;
  border-radius: 3rem;
  font-weight: 600;
  transition: var(--transition);
  white-space: nowrap;
}

.demo-link-button:hover {
  background: var(--laravel-secondary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}

.demo-link-button .button-icon svg {
  width: 1.25rem;
  height: 1.25rem;
}

/* Section Conclusion */
.conclusion-section {
  margin: 6rem 0;
}

.conclusion-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.conclusion-item {
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--surface);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.conclusion-item:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.conclusion-icon {
  font-size: 2.5rem;
  flex-shrink: 0;
}

.conclusion-content h4 {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.conclusion-content p {
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Animations de transition */
.slide-fade-enter-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-fade-enter-from {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

/* Responsive Design */
@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1rem;
  }

  .hero-visual {
    flex: none;
    margin-top: 2rem;
  }

  .laptop-frame {
    width: 250px;
    height: 166px;
  }

  .stats-grid {
    grid-template-columns: 1fr;
    max-width: 300px;
    margin: 0 auto;
  }

  .details-grid {
    grid-template-columns: 1fr;
  }

  .tech-content {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem;
  }

  .demo-showcase {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .conclusion-grid {
    grid-template-columns: 1fr;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
