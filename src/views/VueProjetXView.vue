<script setup>
import MenuProjet from '@/components/MenuProjet.vue'
import { onMounted, ref } from 'vue';

const isLoaded = ref(false);
const animatedSteps = ref([]);

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
            { name: 'Node.js', percent: 50, image: '/picture/technical/nodeJsIncone.png' },
            { name: 'Express', percent: 50, image: '/picture/technical/ExpressIcone.png' }
        ]
    },
    {
        category: 'Base de données',
        icon: '🗄️',
        color: '#336791',
        skills: [
            { name: 'MySQL', percent: 75, image: '/picture/technical/MySQLIcone.png' }
        ]
    }
]);

// Technologies et leurs couleurs
const technologies = ref([
    {
        name: 'Docker',
        icon: '🐳',
        color: '#2496ED',
        descriptionKey: 'docker_technologies.docker.description'
    },
    {
        name: 'Docker Compose',
        icon: '🔧',
        color: '#326CE5',
        descriptionKey: 'docker_technologies.docker_compose.description'
    },
    {
        name: 'Nginx',
        icon: '🌐',
        color: '#009639',
        descriptionKey: 'docker_technologies.nginx.description'
    },
    {
        name: 'Database',
        icon: '🗄️',
        color: '#336791',
        descriptionKey: 'docker_technologies.database.description'
    },
    {
        name: 'CI_CD',
        icon: '🚀',
        color: '#FF6B35',
        descriptionKey: 'docker_technologies.ci_cd.description'
    }
]);

const dockerSteps = ref([
    {
        number: 1,
        titleKey: 'docker_steps.configuration',
        icon: '⚙️',
        color: '#2496ED'
    },
    {
        number: 2,
        titleKey: 'docker_steps.containerization',
        icon: '📦',
        color: '#326CE5'
    },
    {
        number: 3,
        titleKey: 'docker_steps.orchestration',
        icon: '🎼',
        color: '#009639'
    },
    {
        number: 4,
        titleKey: 'docker_steps.deployment',
        icon: '🚀',
        color: '#FF6B35'
    }
]);

const challenges = ref([
    { icon: '💾', title: 'docker_challenge_volumes_title', color: '#8B5CF6' },
    { icon: '⚡', title: 'docker_challenge_optimization_title', color: '#F59E0B' }
]);

const animateStep = (index) => {
    setTimeout(() => {
        animatedSteps.value.push(index);
    }, index * 300);
};

onMounted(() => {
    // Force l'affichage des steps après un court délai
    setTimeout(() => {
        dockerSteps.value.forEach((_, index) => {
            animateStep(index);
        });
    }, 500);

    // Observer pour les animations d'apparition
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');

                    // Animer les étapes Docker si pas déjà fait
                    if (entry.target.classList.contains('steps-container') && animatedSteps.value.length === 0) {
                        dockerSteps.value.forEach((_, index) => {
                            animateStep(index);
                        });
                    }
                }
            });
        },
        { threshold: 0.1 }
    );

    // Observer les éléments à animer avec un délai
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });
    }, 100);

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
                <div class="docker-pattern"></div>
                <div class="hero-overlay"></div>
            </div>

            <div class="hero-content">
                <div class="project-badge">
                    <span class="badge-icon">🐳</span>
                    <span>{{ $t('docker_tab_title') }}</span>
                </div>

                <h1 class="hero-title">{{ $t('docker_project_title') }}</h1>

                <div class="hero-subtitle">
                    {{ $t('docker_tech_tab_description') }}
                </div>

                <div class="hero-stats">
                    <div class="stat-item">
                        <div class="stat-number">5</div>
                        <div class="stat-label">{{ $t('docker_teh') }}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">4</div>
                        <div class="stat-label">{{ $t("docker_step") }}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">100%</div>
                        <div class="stat-label">{{ $t("docker_auto") }}</div>
                    </div>
                </div>
            </div>

            <div class="hero-visual">
                <div class="docker-animation">
                    <div class="container-box container-1">
                        <div class="container-content">App</div>
                    </div>
                    <div class="container-box container-2">
                        <div class="container-content">DB</div>
                    </div>
                    <div class="container-box container-3">
                        <div class="container-content">API</div>
                    </div>
                    <div class="docker-whale">🐳</div>
                </div>
            </div>
        </div>

        <div class="container">
            <!-- Project Overview -->
            <section class="overview-section fade-in">
                <div class="content-card">
                    <div class="card-header">
                        <h2 class="card-title">{{ $t('docker_project_presentation') }}</h2>
                        <div class="card-icon">📋</div>
                    </div>

                    <div class="card-content">
                        <div class="description-grid">
                            <div class="description-main">
                                <p class="project-description" v-html="$t('docker_project_description')"></p>
                                <div class="advantages-section">
                                    <h3 class="advantages-title">
                                        <span class="title-icon">✨</span>
                                        {{ $t('docker_beni') }}
                                    </h3>
                                    <p class="advantages-text" v-html="$t('docker_project_advantages')"></p>
                                </div>
                            </div>

                            <div class="project-visual">
                                <div class="visual-card">
                                    <div class="visual-icon">🎯</div>
                                    <h4>{{ $t('docker_obje') }}</h4>
                                    <p>{{ $t('docker_depl') }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Docker Steps -->
            <section class="steps-section fade-in">
                <div class="section-header">
                    <h2 class="section-title">{{ $t('docker_docker_steps') }}</h2>
                    <p class="section-subtitle">{{ $t('docker_step_title') }}</p>
                </div>

                <div class="steps-container">
                    <div class="steps-timeline">
                        <div v-for="(step, index) in dockerSteps" :key="index" class="step-item"
                            :class="{ 'animated': animatedSteps.includes(index) }"
                            :style="{ '--step-color': step.color, '--delay': `${index * 0.1}s` }">

                            <div class="step-number">
                                <span class="step-icon">{{ step.icon }}</span>
                                <span class="number">{{ step.number }}</span>
                            </div>

                            <div class="step-content">
                                <h3 class="step-title">{{ $t(step.titleKey) }}</h3>
                                <div class="step-description" v-html="$t(`docker_step_${step.number}`)"></div>
                            </div>

                            <div class="step-connector" v-if="index < dockerSteps.length - 1"></div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Technologies Used -->
            <section class="technologies-section fade-in">
                <div class="section-header">
                    <h2 class="section-title">{{ $t('docker_technologies_used') }}</h2>
                    <p class="section-subtitle">{{ $t('docker_technologies_used_sub_title') }}</p>
                </div>

                <div class="tech-grid">
                    <div v-for="(tech, index) in technologies" :key="tech.name" class="tech-card"
                        :style="{ '--tech-color': tech.color, '--delay': `${index * 0.1}s` }">

                        <div class="tech-header">
                            <div class="tech-icon">{{ tech.icon }}</div>
                            <h3 class="tech-name">{{ tech.name }}</h3>
                        </div>

                        <p class="tech-description">{{ $t(tech.descriptionKey) }}</p>

                        <div class="tech-details"
                            v-html="$t(`docker_tech_${tech.name.toLowerCase().replace(' ', '_')}`)"></div>

                        <div class="tech-border"></div>
                    </div>
                </div>
            </section>
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
            <!-- Challenges & Solutions -->
            <section class="challenges-section fade-in">
                <div class="section-header">
                    <h2 class="section-title">{{ $t('docker_challenges_solutions') }}</h2>
                    <p class="section-subtitle">Défis rencontrés et solutions apportées</p>
                </div>

                <div class="challenges-grid">
                    <div v-for="(challenge, index) in challenges" :key="index" class="challenge-card"
                        :style="{ '--challenge-color': challenge.color }">

                        <div class="challenge-header">
                            <div class="challenge-icon">{{ challenge.icon }}</div>
                            <h3 class="challenge-title">{{ $t(challenge.title) }}</h3>
                        </div>

                        <div class="challenge-content">
                            <template v-if="index === 0">
                                <p v-html="$t('docker_challenge_volumes')"></p>
                            </template>
                            <template v-else>
                                <p v-html="$t('docker_challenge_optimization')"></p>
                            </template>
                        </div>

                        <div class="challenge-glow"></div>
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
    --docker-primary: #2496ED;
    --docker-secondary: #326CE5;
    --docker-accent: #009639;
    --docker-warning: #FF6B35;
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
    --docker-primary: #5FB3F3;
    --docker-secondary: #4A90E2;
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
    background: linear-gradient(135deg, var(--docker-primary) 0%, var(--docker-secondary) 100%);
}

.docker-pattern {
    position: absolute;
    inset: 0;
    background-image:
        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(36, 150, 237, 0.1) 0%, transparent 50%);
    background-size: 60px 60px;
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
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
}

.stat-item {
    text-align: center;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: var(--radius);
    border: 1px solid rgba(255, 255, 255, 0.2);
    min-width: 100px;
}

.stat-number {
    font-size: 2rem;
    font-weight: 800;
    color: var(--text-primary);
    line-height: 1;
}

.stat-label {
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

.docker-animation {
    position: relative;
    width: 250px;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container-box {
    position: absolute;
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: var(--docker-primary);
    box-shadow: var(--shadow-lg);
    animation: containerFloat 3s ease-in-out infinite;
}

.container-1 {
    top: 20px;
    left: 50px;
    animation-delay: 0s;
}

.container-2 {
    top: 80px;
    right: 30px;
    animation-delay: 1s;
}

.container-3 {
    bottom: 40px;
    left: 30px;
    animation-delay: 2s;
}

.docker-whale {
    font-size: 4rem;
    animation: whaleFloat 4s ease-in-out infinite;
}

@keyframes containerFloat {

    0%,
    100% {
        transform: translateY(0px) rotate(0deg);
    }

    50% {
        transform: translateY(-10px) rotate(5deg);
    }
}

@keyframes whaleFloat {

    0%,
    100% {
        transform: scale(1) rotate(0deg);
    }

    50% {
        transform: scale(1.1) rotate(-5deg);
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
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, var(--docker-primary), var(--docker-secondary));
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
    gap: 2rem;
    align-items: start;
}

.project-description {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 2rem;
}

.advantages-section {
    background: var(--background);
    padding: 1.5rem;
    border-radius: var(--radius);
    border: 1px solid var(--border);
}

.advantages-title {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 1rem 0;
}

.title-icon {
    font-size: 1.2rem;
}

.advantages-text {
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
}

.project-visual {
    display: flex;
    justify-content: center;
}

.visual-card {
    background: var(--background);
    padding: 2rem;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    text-align: center;
    width: 100%;
    transition: var(--transition);
}

.visual-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.visual-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.visual-card h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 0.5rem 0;
}

.visual-card p {
    color: var(--text-secondary);
    margin: 0;
}

/* Steps Section */
.steps-section {
    margin: 4rem 0;
}

.steps-container {
    display: flex;
    justify-content: center;
}

.steps-timeline {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 800px;
    width: 100%;
}

.step-item {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem;
    background: var(--surface);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    box-shadow: var(--shadow);
    transition: var(--transition);
    opacity: 0;
    transform: translateX(-30px);
}

.step-item.animated {
    opacity: 1;
    transform: translateX(0);
    animation: slideInLeft 0.6s ease-out forwards;
    animation-delay: var(--delay);
}

@keyframes slideInLeft {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.step-item:hover {
    transform: translateX(5px);
    box-shadow: var(--shadow-lg);
    border-color: var(--step-color);
}

.step-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: var(--step-color);
    color: white;
    border-radius: 50%;
    font-weight: 800;
    font-size: 1.5rem;
    flex-shrink: 0;
    position: relative;
    box-shadow: var(--shadow-lg);
}

.step-icon {
    position: absolute;
    top: -8px;
    right: -8px;
    font-size: 1.2rem;
    background: white;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow);
}

.step-content {
    flex: 1;
}

.step-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 1rem 0;
}

.step-description {
    color: var(--text-secondary);
    line-height: 1.6;
}

.step-connector {
    position: absolute;
    left: 58px;
    bottom: -2rem;
    width: 4px;
    height: 2rem;
    background: linear-gradient(180deg, var(--step-color), var(--border));
    border-radius: 2px;
}

/* Technologies Section */
.technologies-section {
    margin: 4rem 0;
}

.tech-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.tech-card {
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

@keyframes slideInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.tech-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
    border-color: var(--tech-color);
}

.tech-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.tech-icon {
    font-size: 2.5rem;
    color: var(--tech-color);
}

.tech-name {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
}

.tech-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1.5rem;
    font-style: italic;
}

.tech-details {
    color: var(--text-primary);
    line-height: 1.6;
}

.tech-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--tech-color), transparent);
    border-radius: var(--radius) var(--radius) 0 0;
}

/* Challenges Section */
.challenges-section {
    margin: 4rem 0;
}

.challenges-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
}

.challenge-card {
    position: relative;
    background: var(--surface);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    padding: 2rem;
    box-shadow: var(--shadow);
    transition: var(--transition);
    overflow: hidden;
}

.challenge-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
    border-color: var(--challenge-color);
}

.challenge-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--challenge-color);
}

.challenge-icon {
    font-size: 2.5rem;
    color: var(--challenge-color);
}

.challenge-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
}

.challenge-content {
    color: var(--text-secondary);
    line-height: 1.7;
}

.challenge-content p {
    margin: 0;
}

.challenge-glow {
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, var(--challenge-color), transparent);
    border-radius: var(--radius);
    opacity: 0;
    filter: blur(8px);
    transition: var(--transition);
    z-index: -1;
}

.challenge-card:hover .challenge-glow {
    opacity: 0.3;
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
        gap: 1.5rem;
    }

    .hero-stats {
        justify-content: center;
    }

    .tech-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .challenges-grid {
        grid-template-columns: 1fr;
    }

    .github-showcase {
        flex-direction: column;
        text-align: center;
    }

    .steps-timeline {
        max-width: 600px;
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
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    .stat-item {
        width: 200px;
    }

    .docker-animation {
        width: 200px;
        height: 200px;
    }

    .container-box {
        width: 50px;
        height: 50px;
        font-size: 0.875rem;
    }

    .docker-whale {
        font-size: 3rem;
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

    .tech-grid {
        grid-template-columns: 1fr;
    }

    .step-item {
        flex-direction: column;
        text-align: center;
        gap: 1.5rem;
    }

    .step-connector {
        display: none;
    }

    .challenge-header {
        flex-direction: column;
        text-align: center;
        gap: 0.75rem;
    }

    .github-info {
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

    .step-item {
        padding: 1.5rem;
    }

    .step-number {
        width: 60px;
        height: 60px;
        font-size: 1.25rem;
    }

    .step-icon {
        width: 24px;
        height: 24px;
        font-size: 1rem;
        top: -6px;
        right: -6px;
    }

    .tech-card {
        padding: 1.5rem;
    }

    .challenge-card {
        padding: 1.5rem;
    }

    .github-showcase {
        padding: 1rem;
    }

    .docker-animation {
        width: 150px;
        height: 150px;
    }

    .container-box {
        width: 40px;
        height: 40px;
        font-size: 0.75rem;
    }

    .docker-whale {
        font-size: 2.5rem;
    }

    .repo-stats {
        justify-content: center;
    }

    .github-button {
        width: 100%;
        justify-content: center;
    }
}

/* États de focus pour l'accessibilité */
.github-button:focus-visible {
    outline: 2px solid var(--docker-primary);
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

    .step-item,
    .tech-card {
        opacity: 1;
        transform: none;
    }
}

/* Améliorations pour le mode sombre */
.dark-mode .hero-background {
    background: linear-gradient(135deg, #1a4d6b 0%, #0f2d4a 100%);
}

.dark-mode .docker-pattern {
    background-image:
        radial-gradient(circle at 25% 25%, rgba(95, 179, 243, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(74, 144, 226, 0.1) 0%, transparent 50%);
}

.dark-mode .project-badge,
.dark-mode .stat-item {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .container-box {
    background: rgba(255, 255, 255, 0.9);
    color: var(--docker-primary);
}

.dark-mode .highlight-card {
    background: linear-gradient(135deg, var(--surface), rgba(95, 179, 243, 0.05));
    border-color: var(--docker-primary);
}

.dark-mode .repo-icon {
    background: var(--docker-primary);
}

.dark-mode .github-button {
    background: var(--docker-primary);
}

.dark-mode .github-button:hover {
    background: var(--docker-secondary);
}

/* Scrollbar personnalisé */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--surface);
}

::-webkit-scrollbar-thumb {
    background: var(--docker-primary);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--docker-secondary);
}

/* Animations supplémentaires */
@keyframes pulse {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.7;
    }
}

.docker-whale {
    animation: whaleFloat 4s ease-in-out infinite, pulse 2s ease-in-out infinite;
}

/* Effets de particules Docker */
.hero-section::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image:
        radial-gradient(2px 2px at 30px 50px, rgba(36, 150, 237, 0.3), transparent),
        radial-gradient(2px 2px at 80px 30px, rgba(50, 108, 229, 0.2), transparent),
        radial-gradient(1px 1px at 120px 80px, rgba(0, 150, 57, 0.3), transparent);
    background-repeat: repeat;
    background-size: 200px 150px;
    animation: containerFloat 10s ease-in-out infinite;
    pointer-events: none;
    opacity: 0.6;
}

/* Amélioration des effets hover */
.tech-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, var(--tech-color), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
}

.tech-card:hover::before {
    opacity: 0.05;
}

.step-item::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: var(--step-color);
    border-radius: 0 var(--radius) var(--radius) 0;
    transform: scaleY(0);
    transition: transform 0.3s ease;
}

.step-item:hover::before {
    transform: scaleY(1);
}
</style>