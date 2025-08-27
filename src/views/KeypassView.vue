<script setup>
import MenuProjet from '@/components/MenuProjet.vue'
import { onMounted, ref, nextTick } from 'vue';

const showCompetences = ref(false);
const isVisible = ref(false);
const skillsAnimated = ref(false);
// Technologies et leurs données
const techStack = ref([
    {
        category: 'Frontend',
        icon: '🎨',
        color: '#4FC08D',
        skills: [
            { name: 'Vue.js', percent: 90, image: './../../public/picture/technical/vueIcone.png' },
            { name: 'Pinia', percent: 85, image: './../../public/picture/technical/Pinialogo.png' }
        ]
    },
    {
        category: 'Backend et API',
        icon: '⚙️',
        color: '#512BD4',
        skills: [
            { name: 'Node.js', percent: 50, image: './../../public/picture/technical/nodeJsIncone.png' },
            { name: 'Express', percent: 50, image: './../../public/picture/technical/ExpressIcone.png' }
        ]
    },
    {
        category: 'Base de données',
        icon: '🗄️',
        color: '#336791',
        skills: [
            { name: 'MySQL', percent: 75, image: './../../public/picture/technical/MySQLIcone.png' }
        ]
    }
]);


function toggleCompetences() {
    showCompetences.value = !showCompetences.value;
    if (showCompetences.value) {
        nextTick(() => {
            animateSkills();
        });
    }
}

function animateSkills() {
    if (skillsAnimated.value) return;

    const circles = document.querySelectorAll('.progress-circle');
    circles.forEach((circle, index) => {
        setTimeout(() => {
            const percent = circle.dataset.percent;
            const progress = circle.querySelector('.progress');
            const radius = progress.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percent / 100) * circumference;

            progress.style.strokeDasharray = circumference;
            progress.style.strokeDashoffset = circumference;
            progress.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)';

            requestAnimationFrame(() => {
                progress.style.strokeDashoffset = offset;
            });
        }, index * 200);
    });
    skillsAnimated.value = true;
}

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

    isVisible.value = true;
});
</script>

<template>
    <div class="page-wrapper">
        <MenuProjet />

        <!-- Hero Section -->
        <div class="hero-section fade-in">
            <div class="hero-content">
                <div class="hero-badge">
                    <span class="badge-icon">🔐</span>
                    <span>{{ $t('keypass_tag') }}</span>
                </div>
                <h1 class="hero-title" v-html="$t('keypass_project_title')"></h1>
                <div class="hero-subtitle">
                    Gestionnaire de mots de passe sécurisé et intuitif
                </div>
            </div>
            <div class="hero-visual">
                <div class="security-icon">
                    <div class="lock-animation">
                        <div class="lock-body"></div>
                        <div class="lock-shackle"></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container">
            <!-- Présentation Section -->
            <section class="project-section fade-in">
                <div class="section-header">
                    <h2 class="section-title" v-html="$t('keypass_project_presentation')"></h2>
                </div>

                <div class="content-card">
                    <p class="description" v-html="$t('keypass_project_description')"></p>

                    <div class="features-grid">
                        <div class="feature-card">
                            <div class="feature-icon">🛡️</div>
                            <div class="feature-content">
                                <span v-html="$t('keypass_project_feature_1')"></span>
                            </div>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">🔄</div>
                            <div class="feature-content">
                                <span v-html="$t('keypass_project_feature_2')"></span>
                            </div>
                        </div>
                        <div class="feature-card">
                            <div class="feature-icon">📱</div>
                            <div class="feature-content">
                                <span v-html="$t('keypass_project_feature_3')"></span>
                            </div>
                        </div>
                    </div>

                    <div class="security-highlight">
                        <div class="highlight-icon">🔒</div>
                        <p v-html="$t('project_security')"></p>
                    </div>
                </div>
            </section>

            <!-- Technologies Section -->
            <section class="project-section fade-in">
                <div class="section-header">
                    <h2 class="section-title" v-html="$t('keypass_technologies_used')"></h2>
                </div>

                <div class="content-card">
                    <div class="tech-stack">
                        <div class="tech-category">
                            <h3>Frontend</h3>
                            <span class="tech-item" v-html="$t('keypass_tech_frontend')"></span>
                        </div>
                        <div class="tech-category">
                            <h3>Backend</h3>
                            <span class="tech-item" v-html="$t('keypass_tech_backend')"></span>
                        </div>
                        <div class="tech-category">
                            <h3>Base de données</h3>
                            <span class="tech-item" v-html="$t('keypass_tech_database')"></span>
                        </div>
                        <div class="tech-category">
                            <h3>Sécurité</h3>
                            <span class="tech-item" v-html="$t('keypass_tech_security')"></span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Toggle Button -->
            <div class="toggle-section fade-in">
                <button class="toggle-button" @click="toggleCompetences">
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

            <!-- Détails Section -->
            <Transition name="slide-fade">
                <section v-if="showCompetences" class="details-section">
                    <div class="content-card">
                        <h2 class="section-title" v-html="$t('keypass_developed_features')"></h2>
                        <div class="features-list">
                            <div class="feature-item">
                                <div class="feature-bullet"></div>
                                <span v-html="$t('keypass_feature_1')"></span>
                            </div>
                            <div class="feature-item">
                                <div class="feature-bullet"></div>
                                <span v-html="$t('keypass_feature_2')"></span>
                            </div>
                            <div class="feature-item">
                                <div class="feature-bullet"></div>
                                <span v-html="$t('keypass_feature_3')"></span>
                            </div>
                            <div class="feature-item">
                                <div class="feature-bullet"></div>
                                <span v-html="$t('keypass_feature_4')"></span>
                            </div>
                        </div>

                        <h2 class="section-title" v-html="$t('keypass_challenges_solutions')"></h2>
                        <div class="challenges-grid">
                            <div class="challenge-card">
                                <div class="challenge-icon">⚡</div>
                                <p v-html="$t('keypass_challenge_1')"></p>
                            </div>
                            <div class="challenge-card">
                                <div class="challenge-icon">🔐</div>
                                <p v-html="$t('keypass_challenge_2')"></p>
                            </div>
                            <div class="challenge-card">
                                <div class="challenge-icon">🎯</div>
                                <p v-html="$t('keypass_challenge_3')"></p>
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

            <!-- Résultats Section -->
            <section class="results-section fade-in">
                <div class="section-header">
                    <h2 class="section-title" v-html="$t('keypass_project_review')"></h2>
                </div>

                <div class="content-card">
                    <div class="results-grid">
                        <div class="result-item">
                            <div class="result-icon">✅</div>
                            <p v-html="$t('keypass_result_1')"></p>
                        </div>
                        <div class="result-item">
                            <div class="result-icon">🚀</div>
                            <p v-html="$t('keypass_result_2')"></p>
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
    --primary-dark: #1d4ed8;
    --secondary: #f1f5f9;
    --accent: #06b6d4;
    --success: #10b981;
    --warning: #f59e0b;
    --danger: #ef4444;
    --background: #ffffff;
    --surface: #f8fafc;
    --text-primary: #1e293b;
    --text-secondary: #64748b;
    --border: #e2e8f0;
    --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --radius: 0.75rem;
    --spacing: 1.5rem;
}

.dark-mode {
    --primary: #60a5fa;
    --primary-dark: #3b82f6;
    --secondary: #1e293b;
    --accent: #06b6d4;
    --background: #0f172a;
    --surface: #1e293b;
    --text-primary: #f1f5f9;
    --text-secondary: #94a3b8;
    --border: #334155;
    --shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2);
}

* {
    box-sizing: border-box;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 60vh;
    padding: 4rem 2rem;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%);
    color: var(--text-primary);
    position: relative;
    overflow: hidden;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
    opacity: 0.3;
}

/* Version pour le mode sombre */
.dark-mode .hero-section::before {
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
}

.hero-content {
    flex: 1;
    position: relative;
    z-index: 2;
    max-width: 600px;
}

.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 2rem;
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.badge-icon {
    font-size: 1.2rem;
}

.hero-title {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, var(--text-primary), var(--text-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.hero-subtitle {
    font-size: 1.25rem;
    opacity: 0.9;
    margin-bottom: 2rem;
    line-height: 1.6;
}

.hero-visual {
    flex: 0 0 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 2;
}

.security-icon {
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--text-color);
    backdrop-filter: blur(20px);
    border-radius: 50%;
    animation: float 3s ease-in-out infinite;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-20px);
    }
}

.lock-animation {
    position: relative;
    width: 80px;
    height: 80px;
}

.lock-body {
    width: 60px;
    height: 40px;
    background: var(--sidebar-bg-color);
    border-radius: 8px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
}

.lock-shackle {
    width: 40px;
    height: 40px;
    border: 8px solid var(--sidebar-bg-color);
    border-bottom: none;
    border-radius: 20px 20px 0 0;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    animation: shake 2s ease-in-out infinite;
}

@keyframes shake {

    0%,
    100% {
        transform: translateX(-50%) rotate(0deg);
    }

    25% {
        transform: translateX(-50%) rotate(-2deg);
    }

    75% {
        transform: translateX(-50%) rotate(2deg);
    }
}

/* Sections */
.project-section {
    margin: 4rem 0;
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}

.project-section.animate-in {
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
    margin-bottom: 1rem;
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
    background: linear-gradient(90deg, var(--primary), var(--accent));
    border-radius: 2px;
}

/* Cards */
.content-card {
    background: var(--surface);
    padding: 2.5rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-lg);
    border: 1px solid var(--border);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.content-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.description {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 2rem;
}

/* Features Grid */
.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    margin-bottom: 2rem;
}

.feature-card {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
    background: var(--background);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    transition: all 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-2px);
    border-color: var(--primary);
    box-shadow: var(--shadow);
}

.feature-icon {
    font-size: 1.5rem;
    width: 3rem;
    height: 3rem;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.feature-content {
    flex: 1;
    color: var(--text-primary);
    line-height: 1.6;
}

/* Security Highlight */
.security-highlight {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: linear-gradient(135deg, var(--success), #065f46);
    color: var(--text-primary);
    border-radius: var(--radius);
    margin-top: 2rem;
}

.highlight-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
}

/* Tech Stack */
.tech-stack {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.tech-category {
    text-align: center;
    padding: 1.5rem;
    background: var(--background);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    transition: all 0.3s ease;
}

.tech-category:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.tech-category h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 0.5rem;
}

.tech-item {
    color: var(--text-secondary);
    line-height: 1.6;
}

/* Toggle Button */
.toggle-section {
    display: flex;
    justify-content: center;
    margin: 3rem 0;
}

.toggle-button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: white;
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

/* Details Section */
.details-section {
    margin: 2rem 0;
}

.features-list {
    display: grid;
    gap: 1rem;
    margin-bottom: 2rem;
}

.feature-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: var(--background);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    transition: all 0.3s ease;
}

.feature-item:hover {
    transform: translateX(5px);
    border-color: var(--primary);
}

.feature-bullet {
    width: 8px;
    height: 8px;
    background: var(--primary);
    border-radius: 50%;
    flex-shrink: 0;
}

.challenges-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
}

.challenge-card {
    padding: 1.5rem;
    background: var(--background);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    text-align: center;
    transition: all 0.3s ease;
}

.challenge-card:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
}

.challenge-icon {
    font-size: 2rem;
    margin-bottom: 1rem;
}

/* Skills Section */
.skills-section {
    margin: 4rem 0;
}

.skills-container {
    display: grid;
    gap: 3rem;
}

.skill-category {
    background: var(--surface);
    padding: 2rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    border: 1px solid var(--border);
}

.category-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--primary);
    margin-bottom: 1.5rem;
    text-align: center;
}

.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 2rem;
    justify-items: center;
}

.skill-item {
    text-align: center;
}

.progress-circle {
    position: relative;
    width: 120px;
    height: 120px;
    margin-bottom: 1rem;
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

.progress {
    fill: none;
    stroke: var(--primary);
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
    width: 50px;
    height: 50px;
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

.skill-name {
    font-size: 1rem;
    font-weight: 500;
    color: var(--text-primary);
}

/* Results Section */
.results-section {
    margin: 4rem 0;
}

.results-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.result-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 2rem;
    background: var(--background);
    border-radius: var(--radius);
    border: 1px solid var(--border);
    transition: all 0.3s ease;
}

.result-item:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow);
    border-color: var(--success);
}

.result-icon {
    font-size: 2rem;
    flex-shrink: 0;
}

.result-item p {
    color: var(--text-secondary);
    line-height: 1.6;
}

/* Animations */
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-in.animate-in {
    opacity: 1;
    transform: translateY(0);
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

    .features-grid {
        grid-template-columns: 1fr;
    }

    .tech-stack {
        grid-template-columns: repeat(2, 1fr);
    }

    .challenges-grid {
        grid-template-columns: 1fr;
    }

    .results-grid {
        grid-template-columns: 1fr;
    }

    .skills-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 1.5rem;
    }

    .progress-circle {
        width: 100px;
        height: 100px;
    }

    .skill-icon {
        width: 40px;
        height: 40px;
    }
}

@media (max-width: 768px) {
    .hero-section {
        padding: 2rem 1rem;
        min-height: 50vh;
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1.125rem;
    }

    .content-card {
        padding: 1.5rem;
    }

    .section-title {
        font-size: 1.75rem;
    }

    .tech-stack {
        grid-template-columns: 1fr;
    }

    .skills-grid {
        grid-template-columns: 1fr;
    }

    .feature-card {
        padding: 1rem;
    }

    .challenge-card {
        padding: 1rem;
    }

    .result-item {
        padding: 1.5rem;
    }

    .security-icon {
        width: 150px;
        height: 150px;
    }

    .lock-animation {
        width: 60px;
        height: 60px;
    }

    .lock-body {
        width: 45px;
        height: 30px;
    }

    .lock-shackle {
        width: 30px;
        height: 30px;
        border-width: 6px;
    }
}

@media (max-width: 480px) {
    .hero-section {
        padding: 1.5rem 1rem;
    }

    .hero-title {
        font-size: 2rem;
    }

    .container {
        padding: 0 0.75rem;
    }

    .content-card {
        padding: 1rem;
    }

    .toggle-button {
        padding: 0.75rem 1.5rem;
        font-size: 1rem;
    }

    .feature-card {
        flex-direction: column;
        text-align: center;
        gap: 0.75rem;
    }

    .security-highlight {
        flex-direction: column;
        text-align: center;
        gap: 0.75rem;
    }

    .result-item {
        flex-direction: column;
        text-align: center;
        gap: 0.75rem;
    }

    .progress-circle {
        width: 80px;
        height: 80px;
    }

    .skill-icon {
        width: 30px;
        height: 30px;
    }

    .skill-percentage {
        font-size: 0.75rem;
        margin-top: 20px;
    }
}

/* Accessibilité */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }

    .fade-in {
        opacity: 1;
        transform: none;
    }
}

/* Focus states pour l'accessibilité */
.toggle-button:focus {
    outline: 2px solid var(--primary);
    outline-offset: 2px;
}

/* Améliorations du contraste pour le mode sombre */
.dark-mode .skill-percentage {
    background: var(--surface);
    color: var(--text-primary);
}

.dark-mode .feature-card {
    background: var(--surface);
}

.dark-mode .tech-category {
    background: var(--surface);
}

.dark-mode .feature-item {
    background: var(--surface);
}

.dark-mode .challenge-card {
    background: var(--surface);
}

.dark-mode .result-item {
    background: var(--surface);
}

/* Scrollbar personnalisé */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--surface);
}

::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--primary-dark);
}

/* Animation de chargement pour les compétences */
@keyframes progressAnimation {
    from {
        stroke-dashoffset: 283;
    }

    to {
        stroke-dashoffset: var(--target-offset);
    }
}

.progress.animate {
    animation: progressAnimation 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

/* États de hover améliorés */
.skill-item:hover .progress-circle {
    transform: scale(1.05);
    transition: transform 0.3s ease;
}

.skill-item:hover .skill-name {
    color: var(--primary);
    transition: color 0.3s ease;
}

/* Gradient pour les bordures */
.gradient-border {
    position: relative;
    background: var(--surface);
    border-radius: var(--radius);
}

.gradient-border::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    border-radius: var(--radius);
    padding: 2px;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: subtract;
    -webkit-mask-composite: xor;
}

/* Effet de parallaxe léger pour le hero */
.hero-section {
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}

/* Loading skeleton pour les images */
.skill-icon img {
    opacity: 0;
    transition: opacity 0.3s ease;
}

.skill-icon img.loaded {
    opacity: 1;
}

/* Amélioration des transitions */
* {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>