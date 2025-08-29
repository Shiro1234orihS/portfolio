<script setup>
import MenuProjet from '@/components/MenuProjet.vue'
import { onMounted, ref, nextTick } from 'vue';

// Importation des images techniques
import javaIcon from "/picture/technical/javaIcone.png";
import vaadinIcon from "/picture/technical/vaadinIcone.png";
import springBootIcon from "/picture/technical/Spring_Boot.png";
import PostgresqlIcone from "/picture/technical/PostgresqlIcone.png";

const showDetails = ref(false);
const isLoaded = ref(false);
const skillsAnimated = ref(false);

// Données du projet
const projectStats = ref([
    { number: '100%', labelKey: 'java_iot_stats_java', icon: '☕' },
    { number: '1', labelKey: 'java_iot_stats_database', icon: '🗄️' },
]);

const features = ref([
    { 
        icon: '🔄', 
        titleKey: 'java_iot_feature_refactor_title', 
        descriptionKey: 'java_iot_feature_refactor_desc',
        color: '#F89820'
    },
    { 
        icon: '🗄️', 
        titleKey: 'java_iot_feature_data_title', 
        descriptionKey: 'java_iot_feature_data_desc',
        color: '#336791'
    },
    { 
        icon: '📊', 
        titleKey: 'java_iot_feature_visualization_title', 
        descriptionKey: 'java_iot_feature_visualization_desc',
        color: '#00B4F0'
    },
    { 
        icon: '🎯', 
        titleKey: 'java_iot_feature_simplified_title', 
        descriptionKey: 'java_iot_feature_simplified_desc',
        color: '#6DB33F'
    }
]);

// Technologies et leurs données
const techStack = ref([
    {
        categoryKey: 'java_iot_tech_frontend',
        icon: '🎨',
        color: '#00B4F0',
        skills: [
            { name: 'Vaadin', percent: 80, image: vaadinIcon },
            { name: 'Java', percent: 75, image: javaIcon }
        ]
    },
    {
        categoryKey: 'java_iot_tech_backend',
        icon: '⚙️',
        color: '#6DB33F',
        skills: [
            { name: 'Spring Boot', percent: 80, image: springBootIcon },
            { name: 'Java', percent: 75, image: javaIcon }
        ]
    },
    {
        categoryKey: 'java_iot_tech_database',
        icon: '🗄️',
        color: '#336791',
        skills: [
            { name: 'PostgreSQL', percent: 85, image: PostgresqlIcone }
        ]
    }
]);

const architectureComponents = ref([
    {
        titleKey: 'java_iot_architecture_frontend_title',
        icon: '🎨',
        itemsKeys: [
            'java_iot_architecture_frontend_item_1',
            'java_iot_architecture_frontend_item_2',
            'java_iot_architecture_frontend_item_3',
            'java_iot_architecture_frontend_item_4'
        ]
    },
    {
        titleKey: 'java_iot_architecture_backend_title',
        icon: '⚙️',
        itemsKeys: [
            'java_iot_architecture_backend_item_1',
            'java_iot_architecture_backend_item_2',
            'java_iot_architecture_backend_item_3',
            'java_iot_architecture_backend_item_4'
        ]
    },
    {
        titleKey: 'java_iot_architecture_data_title',
        icon: '🗄️',
        itemsKeys: [
            'java_iot_architecture_data_item_1',
            'java_iot_architecture_data_item_2',
            'java_iot_architecture_data_item_3',
            'java_iot_architecture_data_item_4'
        ]
    }
]);

const advantages = ref([
    {
        titleKey: 'java_iot_advantage_simplicity_title',
        descriptionKey: 'java_iot_advantage_simplicity_desc',
        icon: '⚡',
        color: '#F89820'
    },
    {
        titleKey: 'java_iot_advantage_maintenance_title',
        descriptionKey: 'java_iot_advantage_maintenance_desc',
        icon: '🔧',
        color: '#6DB33F'
    },
    {
        titleKey: 'java_iot_advantage_performance_title',
        descriptionKey: 'java_iot_advantage_performance_desc',
        icon: '🚀',
        color: '#336791'
    },
    {
        titleKey: 'java_iot_advantage_scalability_title',
        descriptionKey: 'java_iot_advantage_scalability_desc',
        icon: '📈',
        color: '#00B4F0'
    }
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
    
    const circles = document.querySelectorAll('.progress-circle');
    circles.forEach((circle, index) => {
        setTimeout(() => {
            const percent = circle.dataset.percent;
            const progressRing = circle.querySelector('.progress-ring');
            if (progressRing) {
                const radius = progressRing.r.baseVal.value;
                const circumference = 2 * Math.PI * radius;
                const offset = circumference - (percent / 100) * circumference;

                progressRing.style.strokeDasharray = circumference;
                progressRing.style.strokeDashoffset = circumference;
                progressRing.style.transition = 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)';
                
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
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        },
        { threshold: 0.1 }
    );

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
                <div class="java-pattern"></div>
                <div class="hero-overlay"></div>
            </div>
            
            <div class="hero-content">
                <div class="project-badge">
                    <span class="badge-icon">☕</span>
                    <span>{{ $t('java_iot_project_tag') }}</span>
                </div>
                
                <h1 class="hero-title">{{ $t('java_iot_hero_title') }}</h1>
                
                <div class="hero-subtitle">
                    {{ $t('java_iot_hero_subtitle') }}
                </div>
                
                <div class="hero-stats">
                    <div v-for="stat in projectStats" 
                         :key="stat.labelKey" 
                         class="stat-item">
                        <div class="stat-icon">{{ stat.icon }}</div>
                        <div class="stat-number">{{ stat.number }}</div>
                        <div class="stat-label">{{ $t(stat.labelKey) }}</div>
                    </div>
                </div>
            </div>
            
            <div class="hero-visual">
                <div class="java-ecosystem">
                    <div class="central-java">
                        <div class="java-logo">☕</div>
                        <div class="java-label">Java</div>
                    </div>
                    
                    <div class="tech-orbit">
                        <div class="tech-node vaadin" 
                             :style="{ '--angle': '0deg' }">
                            <img :src="vaadinIcon" alt="Vaadin" class="tech-icon" />
                        </div>
                        <div class="tech-node spring" 
                             :style="{ '--angle': '120deg' }">
                            <img :src="springBootIcon" alt="Spring Boot" class="tech-icon" />
                        </div>
                        <div class="tech-node postgres" 
                             :style="{ '--angle': '240deg' }">
                            <img :src="PostgresqlIcone" alt="PostgreSQL" class="tech-icon" />
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
                        <h2 class="card-title">{{ $t('java_iot_overview_title') }}</h2>
                        <div class="card-icon">📋</div>
                    </div>
                    
                    <div class="card-content">
                        <div class="description-grid">
                            <div class="description-main">
                                <h3 class="section-subtitle">
                                    <span class="subtitle-icon">🔄</span>
                                    {{ $t('java_iot_refactor_title') }}
                                </h3>
                                <div class="refactor-info">
                                    <p>{{ $t('java_iot_refactor_description') }}</p>
                                </div>
                                
                                <h3 class="section-subtitle">
                                    <span class="subtitle-icon">🎯</span>
                                    {{ $t('java_iot_objectives_title') }}
                                </h3>
                                <ul class="objectives-list">
                                    <li>{{ $t('java_iot_objective_1') }}</li>
                                    <li>{{ $t('java_iot_objective_2') }}</li>
                                    <li>{{ $t('java_iot_objective_3') }}</li>
                                    <li>{{ $t('java_iot_objective_4') }}</li>
                                </ul>
                            </div>
                            
                            <div class="project-highlights">
                                <div class="highlight-card">
                                    <div class="highlight-icon">☕</div>
                                    <h4>{{ $t('java_iot_highlight_java') }}</h4>
                                    <p>{{ $t('java_iot_highlight_java_desc') }}</p>
                                </div>
                                
                                <div class="highlight-card">
                                    <div class="highlight-icon">🗄️</div>
                                    <h4>{{ $t('java_iot_highlight_data') }}</h4>
                                    <p>{{ $t('java_iot_highlight_data_desc') }}</p>
                                </div>
                                
                                <div class="highlight-card">
                                    <div class="highlight-icon">📊</div>
                                    <h4>{{ $t('java_iot_highlight_simple') }}</h4>
                                    <p>{{ $t('java_iot_highlight_simple_desc') }}</p>
                                </div>
                            </div>
                        </div>
                        
                        <button @click="toggleDetails" class="toggle-button">
                            <span class="button-text">
                                {{ showDetails ? $t('hide_details') : $t('toggle_details') }}
                            </span>
                            <div class="button-icon" :class="{ 'rotated': showDetails }">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="m6 9 6 6 6-6"/>
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </section>

            <!-- Advantages Section -->
            <section class="advantages-section fade-in">
                <div class="section-header">
                    <h2 class="section-title">{{ $t('java_iot_advantages_title') }}</h2>
                    <p class="section-subtitle">{{ $t('java_iot_advantages_subtitle') }}</p>
                </div>
                
                <div class="advantages-grid">
                    <div v-for="(advantage, index) in advantages" 
                         :key="advantage.titleKey"
                         class="advantage-card"
                         :style="{ '--advantage-color': advantage.color, '--delay': `${index * 0.15}s` }">
                        
                        <div class="advantage-header">
                            <div class="advantage-icon">{{ advantage.icon }}</div>
                            <h3 class="advantage-title">{{ $t(advantage.titleKey) }}</h3>
                        </div>
                        
                        <p class="advantage-description">{{ $t(advantage.descriptionKey) }}</p>
                        <div class="advantage-glow"></div>
                    </div>
                </div>
            </section>

            <!-- Features Section -->
            <section class="features-section fade-in">
                <div class="section-header">
                    <h2 class="section-title">{{ $t('java_iot_features_title') }}</h2>
                    <p class="section-subtitle">{{ $t('java_iot_features_subtitle') }}</p>
                </div>
                
                <div class="features-grid">
                    <div v-for="(feature, index) in features" 
                         :key="feature.titleKey"
                         class="feature-card"
                         :style="{ '--feature-color': feature.color, '--delay': `${index * 0.15}s` }">
                        
                        <div class="feature-header">
                            <div class="feature-icon">{{ feature.icon }}</div>
                            <h3 class="feature-title">{{ $t(feature.titleKey) }}</h3>
                        </div>
                        
                        <p class="feature-description">{{ $t(feature.descriptionKey) }}</p>
                        <div class="feature-glow"></div>
                    </div>
                </div>
            </section>

            <!-- Technical Details -->
            <Transition name="slide-fade">
                <section v-if="showDetails" class="details-section">
                    <div class="section-header">
                        <h2 class="section-title">{{ $t('java_iot_tech_stack_title') }}</h2>
                        <p class="section-subtitle">{{ $t('java_iot_tech_stack_subtitle') }}</p>
                    </div>
                    
                    <div class="tech-stack-grid">
                        <div v-for="(category, catIndex) in techStack" 
                             :key="catIndex"
                             class="tech-category"
                             :style="{ '--category-color': category.color, '--delay': `${catIndex * 0.2}s` }">
                            
                            <div class="category-header">
                                <div class="category-icon">{{ category.icon }}</div>
                                <h3 class="category-title">{{ $t(category.categoryKey) }}</h3>
                            </div>
                            
                            <div class="skills-grid">
                                <div v-for="(skill, skillIndex) in category.skills" 
                                     :key="skillIndex"
                                     class="skill-card">
                                    
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

            <!-- Architecture Section -->
            <section class="architecture-section fade-in">
                <div class="content-card">
                    <div class="card-header">
                        <h2 class="card-title">{{ $t('java_iot_architecture_title') }}</h2>
                        <div class="card-icon">🏗️</div>
                    </div>
                    
                    <div class="card-content">
                        <div class="architecture-details">
                            <div v-for="component in architectureComponents" 
                                 :key="component.titleKey"
                                 class="arch-component">
                                <div class="component-header">
                                    <h4>{{ component.icon }} {{ $t(component.titleKey) }}</h4>
                                </div>
                                <ul>
                                    <li v-for="itemKey in component.itemsKeys" 
                                        :key="itemKey">
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
                        <h2 class="card-title">{{ $t('source_code') }}</h2>
                        <div class="card-icon">💻</div>
                    </div>

                    <div class="card-content">
                        <div class="github-section">
                            <div class="github-info">
                                <div class="github-icon">
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </div>
                                <div class="github-text">
                                    <h4>{{ $t('java_iot_github_title') }}</h4>
                                    <p>{{ $t('java_iot_github_desc') }}</p>
                                </div>
                            </div>

                            <a href="#" target="_blank" class="github-button">
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
    --java-primary: #F89820;
    --java-secondary: #ED8B00;
    --spring-green: #6DB33F;
    --vaadin-blue: #00B4F0;
    --postgres-blue: #336791;
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
    --java-primary: #FFA544;
    --java-secondary: #F89820;
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
    background: linear-gradient(135deg, var(--java-primary) 0%, var(--java-secondary) 100%);
}

.java-pattern {
    position: absolute;
    inset: 0;
    background-image: 
        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(248, 152, 32, 0.1) 0%, transparent 50%);
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
    color: white;
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

.java-ecosystem {
    position: relative;
    width: 300px;
    height: 300px;
}

.central-java {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    color: var(--java-primary);
    box-shadow: var(--shadow-lg);
    animation: pulse 3s ease-in-out infinite;
}

.java-logo {
    font-size: 2.5rem;
    margin-bottom: 0.25rem;
}

.java-label {
    font-size: 0.9rem;
}

.tech-orbit {
    position: relative;
    width: 100%;
    height: 100%;
}

.tech-node {
    position: absolute;
    width: 70px;
    height: 70px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow);
    animation: orbitFloat 4s ease-in-out infinite;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(var(--angle)) translateX(120px) rotate(calc(-1 * var(--angle)));
}

.tech-icon {
    width: 40px;
    height: 40px;
    object-fit: contain;
}

@keyframes pulse {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.05); }
}

@keyframes orbitFloat {
    0%, 100% { transform: translate(-50%, -50%) rotate(var(--angle)) translateX(120px) rotate(calc(-1 * var(--angle))) translateY(0px); }
    50% { transform: translate(-50%, -50%) rotate(var(--angle)) translateX(120px) rotate(calc(-1 * var(--angle))) translateY(-8px); }
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
    background: linear-gradient(90deg, var(--java-primary), var(--spring-green));
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

.highlight-card {
    background: linear-gradient(135deg, var(--surface), var(--background));
    border: 2px solid var(--java-primary);
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

.refactor-info {
    margin-bottom: 2rem;
}

.refactor-info p {
    line-height: 1.6;
    color: var(--text-secondary);
    background: var(--background);
    padding: 1.5rem;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    margin: 0;
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
    color: var(--text-secondary);
}

.objectives-list li::before {
    content: '✓';
    background: var(--java-primary);
    color: white;
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
    border-color: var(--java-primary);
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
    line-height: 1.4;
}

/* Toggle Button */
.toggle-button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, var(--java-primary), var(--java-secondary));
    color: white;
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

/* Advantages Section */
.advantages-section {
    margin: 4rem 0;
}

.advantages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.advantage-card {
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

.advantage-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
    border-color: var(--advantage-color);
}

.advantage-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.advantage-icon {
    font-size: 2.5rem;
    color: var(--advantage-color);
}

.advantage-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0;
}

.advantage-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
}

.advantage-glow {
    position: absolute;
    inset: -2px;
    background: linear-gradient(135deg, var(--advantage-color), transparent);
    border-radius: var(--radius);
    opacity: 0;
    filter: blur(8px);
    transition: var(--transition);
    z-index: -1;
}

.advantage-card:hover .advantage-glow {
    opacity: 0.2;
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
    border-bottom: 2px solid var(--java-primary);
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
    content: '▶';
    color: var(--java-primary);
    font-size: 0.75rem;
    margin-right: 0.75rem;
}

/* GitHub Section */
.github-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
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
    color: var(--text-primary);
    flex-shrink: 0;
}

.github-text h4 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 0.25rem 0;
}

.github-text p {
    color: var(--text-secondary);
    margin: 0;
    line-height: 1.5;
}

.github-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, var(--java-primary), var(--java-secondary));
    color: white;
    text-decoration: none;
    border-radius: 2rem;
    font-weight: 600;
    transition: var(--transition);
    box-shadow: var(--shadow);
}

.github-button:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
    text-decoration: none;
    color: white;
}

.github-button .button-icon {
    width: 1rem;
    height: 1rem;
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
        grid-template-columns: repeat(2, 1fr);
        max-width: none;
    }
    
    .advantages-grid,
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
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
    
    .java-ecosystem {
        width: 250px;
        height: 250px;
    }
    
    .central-java {
        width: 80px;
        height: 80px;
    }
    
    .java-logo {
        font-size: 2rem;
    }
    
    .tech-node {
        width: 60px;
        height: 60px;
    }
    
    .tech-icon {
        width: 35px;
        height: 35px;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .advantages-grid,
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
    
    .github-section {
        flex-direction: column;
        gap: 1.5rem;
        text-align: center;
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
    
    .toggle-button {
        width: 100%;
        justify-content: center;
    }
    
    .java-ecosystem {
        width: 200px;
        height: 200px;
    }
    
    .central-java {
        width: 70px;
        height: 70px;
    }
    
    .tech-node {
        width: 50px;
        height: 50px;
    }
    
    .tech-icon {
        width: 30px;
        height: 30px;
    }
}

/* États de focus pour l'accessibilité */
.toggle-button:focus-visible,
.github-button:focus-visible {
    outline: 2px solid var(--java-primary);
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
    
    .advantage-card,
    .feature-card,
    .tech-category {
        opacity: 1;
        transform: none;
    }
}

/* Améliorations pour le mode sombre */
.dark-mode .hero-background {
    background: linear-gradient(135deg, #cc7a1a 0%, #b8690f 100%);
}

.dark-mode .java-pattern {
    background-image: 
        radial-gradient(circle at 25% 25%, rgba(248, 152, 32, 0.15) 0%, transparent 50%),
        radial-gradient(circle at 75% 75%, rgba(237, 139, 0, 0.15) 0%, transparent 50%);
}

.dark-mode .project-badge,
.dark-mode .stat-item {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.1);
}

.dark-mode .central-java,
.dark-mode .tech-node {
    background: rgba(255, 255, 255, 0.9);
    color: var(--java-primary);
}

/* Scrollbar personnalisé */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--surface);
}

::-webkit-scrollbar-thumb {
    background: var(--java-primary);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--java-secondary);
}
</style>