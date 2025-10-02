<script setup>
import MenuProjet from '@/components/MenuProjet.vue'
import { onMounted, ref, nextTick } from 'vue';

const showCompetences = ref(false);
const isLoaded = ref(false);
const skillsAnimated = ref(false);

// Technologies et leurs données
const techStack = ref([
    {
        category: 'Frontend',
        icon: '🎨',
        color: '#4FC08D',
        skills: [
            { name: 'Vue.js', percent: 90, image: '/picture/technical/vueIcone.png' },
            { name: 'Pinia', percent: 85, image: '/picture/technical/Pinialogo.png' }
        ]
    },
    {
        category: 'Backend et API',
        icon: '⚙️',
        color: '#512BD4',
        skills: [
            { name: 'ASP.NET Core', percent: 80, image: '/picture/technical/ASPIcone.png' },
            { name: 'Entity Framework', percent: 75, image: '/picture/technical/EntityFrameworkCore.png' }
        ]
    },
    {
        category: 'Base de données',
        icon: '🗄️',
        color: '#336791',
        skills: [
            { name: 'PostgreSQL', percent: 75, image: '/picture/technical/PostgresqlIcone.png' }
        ]
    }
]);

const projectFeatures = ref([
    {
        icon: '🚀',
        titleKey: 'vue_project_features.automated_deployment.title',
        descriptionKey: 'vue_project_features.automated_deployment.description'
    },
    {
        icon: '🔒',
        titleKey: 'vue_project_features.enhanced_security.title',
        descriptionKey: 'vue_project_features.enhanced_security.description'
    },
    {
        icon: '⚡',
        titleKey: 'vue_project_features.optimized_performance.title',
        descriptionKey: 'vue_project_features.optimized_performance.description'
    }
]);

function toggleCompetences() {
    showCompetences.value = !showCompetences.value;
    if (showCompetences.value) {
        nextTick(() => {
            animateSkills();
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
        }, index * 200);
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
                <div class="vue-pattern"></div>
                <div class="hero-overlay"></div>
            </div>

            <div class="hero-content">
                <div class="project-badge">
                    <span class="badge-icon">🎯</span>
                    <span>{{ $t('vue_project_tag') }}</span>
                </div>

                <h1 class="hero-title">{{ $t('vue_project_title') }}</h1>

                <div class="hero-subtitle">
                    {{ $t('vue_project_tag_obj') }}
                </div>

                <div class="tech-badges">
                    <span class="tech-badge vue">Vue.js</span>
                    <span class="tech-badge asp">.NET</span>
                    <span class="tech-badge postgres">PostgreSQL</span>
                </div>
            </div>

            <div class="hero-visual">
                <div class="project-icon">
                    <div class="vue-logo">
                        <div class="logo-triangle triangle-1"></div>
                        <div class="logo-triangle triangle-2"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <!-- Project Overview -->
            <section class="overview-section fade-in">
                <div class="content-card">
                    <div class="card-header">
                        <h2 class="card-title">{{ $t('vue_overview_title') }}</h2>
                        <div class="card-icon">📋</div>
                    </div>

                    <div class="card-content">
                        <p class="project-description" v-html="$t('vue_project_description')"></p>

                        <div class="features-preview">
                            <div v-for="(feature, index) in projectFeatures" :key="index" class="feature-pill"
                                :style="{ '--delay': `${index * 0.1}s` }">
                                <span class="feature-icon">{{ feature.icon }}</span>
                                <span class="feature-text">{{ $t(feature.titleKey) }}</span>
                            </div>
                        </div>

                        <button @click="toggleCompetences" class="toggle-button">
                            <span class="button-text">
                                {{ showCompetences ? $t('hide_details') : $t('toggle_details') }}
                            </span>
                            <div class="button-icon" :class="{ 'rotated': showCompetences }">
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
                <section v-if="showCompetences" class="details-section">
                    <div class="details-grid">
                        <!-- Fonctionnalités développées -->
                        <div class="detail-card">
                            <div class="detail-header">
                                <h3 class="detail-title">{{ $t('vue_developed_features') }}</h3>
                                <div class="detail-icon">🚀</div>
                            </div>

                            <div class="features-list">
                                <div class="feature-item">
                                    <div class="feature-bullet deployment"></div>
                                    <span v-html="$t('vue_feature_deployment')"></span>
                                </div>
                                <div class="feature-item">
                                    <div class="feature-bullet security"></div>
                                    <span v-html="$t('vue_feature_security')"></span>
                                </div>
                            </div>
                        </div>

                        <!-- Défis et Solutions -->
                        <div class="detail-card">
                            <div class="detail-header">
                                <h3 class="detail-title">{{ $t('vue_challenges_solutions') }}</h3>
                                <div class="detail-icon">⚡</div>
                            </div>

                            <div class="challenges-list">
                                <div class="challenge-item">
                                    <div class="challenge-icon">📦</div>
                                    <p v-html="$t('vue_challenge_dependencies')"></p>
                                </div>
                                <div class="challenge-item">
                                    <div class="challenge-icon">📈</div>
                                    <p v-html="$t('vue_challenge_scalability')"></p>
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
                                            <div class="level-fill"
                                                :style="{ width: skill.percent + '%', backgroundColor: category.color }">
                                            </div>
                                        </div>
                                    </div>
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

                            <a href="https://github.com/phtuongvy/virtualisation_X" target="_blank"
                                class="github-button">
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
    --vue-primary: #4FC08D;
    --vue-secondary: #42b883;
    --vue-dark: #2c3e50;
    --asp-primary: #512BD4;
    --postgres-primary: #336791;
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
    --vue-primary: #4FC08D;
    --vue-secondary: #42b883;
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
    min-height: 70vh;
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
    background: linear-gradient(135deg, var(--vue-primary) 0%, var(--vue-secondary) 100%);
}

.vue-pattern {
    position: absolute;
    inset: 0;
    background-image:
        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(66, 184, 131, 0.1) 0%, transparent 50%);
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
    margin-bottom: 2rem;
    line-height: 1.6;
}

.tech-badges {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.tech-badge {
    padding: 0.5rem 1rem;
    border-radius: 1.5rem;
    font-size: 0.875rem;
    font-weight: 600;
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
}

.tech-badge.vue {
    background: rgba(79, 192, 141, 0.2);
}

.tech-badge.asp {
    background: rgba(81, 43, 212, 0.2);
}

.tech-badge.postgres {
    background: rgba(51, 103, 145, 0.2);
}

.hero-visual {
    flex: 0 0 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
}

.project-icon {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.2);
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

.vue-logo {
    position: relative;
    width: 80px;
    height: 80px;
}

.logo-triangle {
    position: absolute;
    border-style: solid;
}

.triangle-1 {
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    border-bottom: 50px solid #42b883;
}

.triangle-2 {
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 30px solid #35495e;
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
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--vue-primary), var(--vue-secondary));
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

.project-description {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 2rem;
}

/* Features Preview */
.features-preview {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.feature-pill {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    background: var(--background);
    border: 1px solid var(--border);
    border-radius: 2rem;
    font-size: 0.875rem;
    transition: var(--transition);
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

.feature-pill:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
    border-color: var(--vue-primary);
}

.feature-icon {
    font-size: 1rem;
}

.feature-text {
    font-weight: 500;
    color: var(--text-primary);
}

/* Toggle Button */
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
    border-color: var(--vue-primary);
}

.feature-bullet {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;
    margin-top: 0.25rem;
}

.feature-bullet.deployment {
    background: #10b981;
}

.feature-bullet.security {
    background: #f59e0b;
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
    padding-bottom: 1%;
}

.highlight-card {
    background: linear-gradient(135deg, var(--surface), var(--background));
    border: 2px solid var(--vue-primary);
}



.github-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 1.5rem;
    background: var(--background);
    border-radius: var(--radius);
    border: 1px solid var(--border);
}

.github-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
}

.github-icon {
    width: 3rem;
    height: 3rem;
    background: var(--text-primary);
    color: var(--background);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.github-icon svg {
    width: 1.5rem;
    height: 1.5rem;
}

.github-text h4 {
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 0.25rem 0;
}

.github-text p {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin: 0;
}

.github-button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 1.5rem;
    background: var(--text-primary);
    color: var(--background);
    text-decoration: none;
    border-radius: var(--radius);
    font-weight: 600;
    transition: var(--transition);
    box-shadow: var(--shadow);
}

.github-button:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    background: var(--vue-primary);
}

.github-button .button-icon {
    width: 1.25rem;
    height: 1.25rem;
}

.github-button .button-icon svg {
    width: 100%;
    height: 100%;
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

    .section-title {
        font-size: 2rem;
    }

    .tech-stack-grid {
        grid-template-columns: 1fr;
    }

    .details-grid {
        grid-template-columns: 1fr;
    }

    .github-section {
        flex-direction: column;
        text-align: center;
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

    .tech-badges {
        justify-content: center;
    }

    .features-preview {
        justify-content: center;
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

    .toggle-button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
    }

    .section-title {
        font-size: 1.75rem;
    }

    .card-title {
        font-size: 1.5rem;
    }

    .detail-header {
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
    }

    .challenge-item {
        flex-direction: column;
        text-align: center;
        gap: 0.75rem;
    }

    .feature-item {
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

    .card-header {
        padding: 1rem;
    }

    .card-content {
        padding: 1rem;
    }

    .detail-card {
        padding: 1rem;
    }

    .tech-category {
        padding: 1.5rem;
    }

    .skill-card {
        padding: 1rem;
    }

    .github-section {
        padding: 1rem;
        gap: 1rem;
    }

    .toggle-button {
        width: 100%;
        justify-content: center;
    }

    .github-button {
        width: 100%;
        justify-content: center;
    }

    .progress-circle {
        width: 80px;
        height: 80px;
    }

    .skill-icon {
        width: 35px;
        height: 35px;
    }

    .project-icon {
        width: 150px;
        height: 150px;
    }

    .vue-logo {
        width: 60px;
        height: 60px;
    }

    .triangle-1 {
        border-left-width: 20px;
        border-right-width: 20px;
        border-bottom-width: 35px;
    }

    .triangle-2 {
        border-left-width: 15px;
        border-right-width: 15px;
        border-bottom-width: 20px;
        top: 15px;
    }
}

/* États de focus pour l'accessibilité */
.toggle-button:focus-visible,
.github-button:focus-visible {
    outline: 2px solid var(--vue-primary);
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

    .feature-pill,
    .tech-category {
        opacity: 1;
        transform: none;
    }
}

/* Améliorations pour le mode sombre */
.dark-mode .hero-background {
    background: linear-gradient(135deg, #2d5a3d 0%, #1e3a2e 100%);
}

.dark-mode .vue-pattern {
    background-image:
        radial-gradient(circle at 25% 25%, rgba(79, 192, 141, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(66, 184, 131, 0.1) 0%, transparent 50%);
}

.dark-mode .project-badge,
.dark-mode .tech-badge {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .highlight-card {
    background: linear-gradient(135deg, var(--surface), rgba(79, 192, 141, 0.05));
    border-color: var(--vue-secondary);
}

.dark-mode .github-icon {
    background: var(--vue-primary);
    color: var(--text-primary);
}

.dark-mode .github-button {
    background: var(--vue-primary);
    color: white;
}

.dark-mode .github-button:hover {
    background: var(--vue-secondary);
}

/* Scrollbar personnalisé */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--surface);
}

::-webkit-scrollbar-thumb {
    background: var(--vue-primary);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--vue-secondary);
}

/* Effets de bordure pour les cards */
.tech-category::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--category-color), transparent);
    border-radius: var(--radius) var(--radius) 0 0;
}

.skill-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 4px;
    background: var(--category-color);
    border-radius: var(--radius) 0 0 var(--radius);
    transform: scaleY(0);
    transition: transform 0.3s ease;
}

.skill-card:hover::before {
    transform: scaleY(1);
}

/* Animation de chargement pour les compétences */
.tech-category {
    position: relative;
}

.skill-card {
    position: relative;
}

/* Amélioration des transitions lors du toggle */
.details-section {
    overflow: hidden;
}

/* Animation des barres de niveau */
.level-fill {
    background: linear-gradient(90deg, var(--category-color), rgba(var(--category-color), 0.6));
}

/* Effet hover pour les feature pills */
.feature-pill::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--vue-primary);
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

.feature-pill:hover::before {
    transform: scaleX(1);
}

.feature-pill {
    position: relative;
    overflow: hidden;
}
</style>