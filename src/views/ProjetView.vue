<script setup>
// Si vous utilisez des données dynamiques, vous pouvez les ajouter ici
</script>

<template>
    <div class="projects-page">
        <!-- Section Projets Académiques -->
        <section class="projects-section">
            <h1 class="section-title">{{ $t('projects_academic_title') }}</h1>

            <!-- Première Année -->
            <div class="year-section">
                <h2 class="year-title">{{ $t('first_year_project') }}</h2>
                <div class="projects-grid">
                    <router-link class="project-link" to="/westofsurvival">
                        <article class="project-card">
                            <div class="project-image-container">
                                <img src="./../../public/picture/westsofsurvival/iconebull.png" alt="Wests Of Survival"
                                    class="project-image">
                                <div class="project-overlay">
                                    <div class="project-content">
                                        <h3 class="project-title">{{ $t('project_west') }}</h3>
                                        <p class="project-description">{{ $t('project_west_desc') }}</p>
                                        <div class="project-arrow">
                                            <svg width="24" height="24" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </router-link>
                </div>
            </div>

            <!-- Deuxième Année -->
            <div class="year-section">
                <h2 class="year-title">{{ $t('second_year_project') }}</h2>
                <div class="projects-grid">
                    <router-link class="project-link" to="laravelbmw">
                        <article class="project-card">
                            <div class="project-image-container">
                                <img src="./../../public/picture/BmwLaravel/image.png" alt="Projet BMW Laravel"
                                    class="project-image">
                                <div class="project-overlay">
                                    <div class="project-content">
                                        <h3 class="project-title">{{ $t('project_bmw_laravel') }}</h3>
                                        <p class="project-description">{{ $t('project_bmw_laravel_desc') }}</p>
                                        <div class="project-arrow">
                                            <svg width="24" height="24" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </router-link>

                    <router-link class="project-link" to="vuebmx">
                        <article class="project-card">
                            <div class="project-image-container">
                                <img src="./../../public/picture/BmwVueJs/icone_vue.js.png" alt="Projet BMW Vue.js"
                                    class="project-image">
                                <div class="project-overlay">
                                    <div class="project-content">
                                        <h3 class="project-title">{{ $t('project_bmw_vue') }}</h3>
                                        <p class="project-description">{{ $t('project_bmw_vue_desc') }}</p>
                                        <div class="project-arrow">
                                            <svg width="24" height="24" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </router-link>

                    <router-link class="project-link" to="vueprojex">
                        <article class="project-card">
                            <div class="project-image-container">
                                <img src="./../../public/picture/YProject/acceuil.webp" alt="Projet Y avec Docker"
                                    class="project-image">
                                <div class="project-overlay">
                                    <div class="project-content">
                                        <h3 class="project-title">{{ $t('project_docker_y') }}</h3>
                                        <p class="project-description">{{ $t('project_docker_y_desc') }}</p>
                                        <div class="project-arrow">
                                            <svg width="24" height="24" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </router-link>
                </div>
            </div>

            <!-- Troisième Année -->
            <div class="year-section">
                <h2 class="year-title">{{ $t('third_year_project') }}</h2>
                <div class="projects-grid">
                    <router-link class="project-link" to="homeassistant">
                        <article class="project-card">
                            <div class="project-image-container">
                                <img src="./../../public/picture/homeAssistent/homeAssistantHome.png"
                                    alt="Projet Home Assistant" class="project-image">
                                <div class="project-overlay">
                                    <div class="project-content">
                                        <h3 class="project-title">{{ $t('project_home_assistant') }}</h3>
                                        <p class="project-description">{{ $t('project_home_assistant_desc') }}</p>
                                        <div class="project-arrow">
                                            <svg width="24" height="24" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </router-link>

                    <router-link class="project-link" to="homeassistant2">
                        <article class="project-card">
                            <div class="project-image-container">
                                <img src="./../../public/picture/homeAssistant2.0/homeAssistant2.0Home.png"
                                    alt="Projet Home Assistant 2.0" class="project-image">
                                <div class="project-overlay">
                                    <div class="project-content">
                                        <h3 class="project-title">{{ $t('project_home_assistant_2') }}</h3>
                                        <p class="project-description">{{ $t('project_home_assistant_2_desc') }}</p>
                                        <div class="project-arrow">
                                            <svg width="24" height="24" fill="none" stroke="currentColor"
                                                viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </router-link>
                </div>
            </div>
        </section>

        <!-- Section Projets Personnels -->
        <section class="projects-section">
            <h1 class="section-title">{{ $t('projects_personal_title') }}</h1>
            <div class="projects-grid">
                <router-link class="project-link" to="miniprojet">
                    <article class="project-card">
                        <div class="project-image-container">
                            <img src="./../../public/picture/MiniProjet/logo.png" alt="Mini projets personnels"
                                class="project-image">
                            <div class="project-overlay">
                                <div class="project-content">
                                    <h3 class="project-title">{{ $t('project_mini') }}</h3>
                                    <p class="project-description">{{ $t('project_mini_desc') }}</p>
                                    <div class="project-arrow">
                                        <svg width="24" height="24" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </router-link>

                <router-link class="project-link" to="keypass">
                    <article class="project-card">
                        <div class="project-image-container">
                            <img src="./../../public/picture/Keypass/image.png" alt="Site de gestion de mots de passe"
                                class="project-image">
                            <div class="project-overlay">
                                <div class="project-content">
                                    <h3 class="project-title">{{ $t('project_keypass') }}</h3>
                                    <p class="project-description">{{ $t('project_keypass_desc') }}</p>
                                    <div class="project-arrow">
                                        <svg width="24" height="24" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </router-link>

                <router-link class="project-link" to="earningcall">
                    <article class="project-card">
                        <div class="project-image-container">
                            <img src="./../../public/picture/earningCall/iconebull.png" alt="Site Earning Call"
                                class="project-image">
                            <div class="project-overlay">
                                <div class="project-content">
                                    <h3 class="project-title">{{ $t('project_earningcall') }}</h3>
                                    <p class="project-description">{{ $t('project_earningcall_desc') }}</p>
                                    <div class="project-arrow">
                                        <svg width="24" height="24" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </router-link>
            </div>
        </section>
    </div>
</template>

<style scoped>
/* Variables CSS pour une meilleure cohérence */
:root {
    --primary-color: #3b82f6;
    --primary-hover: #2563eb;
    --text-primary: #1f2937;
    --text-secondary: #6b7280;
    --background: #ffffff;
    --surface: #f8fafc;
    --border: #e5e7eb;
    --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    --radius: 12px;
    --transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --transition-fast: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.projects-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
    min-height: 100vh;
}

.projects-section {
    margin-bottom: 4rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--text-primary);
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary-color), var(--primary-hover));
    border-radius: 2px;
}

.year-section {
    margin-bottom: 3rem;
}

.year-title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    padding-left: 1rem;
    border-left: 4px solid var(--primary-color);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.project-link {
    text-decoration: none;
    color: inherit;
    transition: var(--transition);
}

.project-card {
    background: var(--background);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
    height: 280px;
    position: relative;
    cursor: pointer;
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-lg);
}

.project-image-container {
    position: relative;
    width: 100%;
    height: 110%;
    overflow: hidden;
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.project-card:hover .project-image {
    transform: scale(1.05);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top,
            rgba(0, 0, 0, 0.229) 0%,
            rgba(0, 0, 0, 0.27) 30%,
            rgba(0, 0, 0, 0.225) 60%,
            rgba(0, 0, 0, 0.175) 80%,
            rgba(0, 0, 0, 0.1) 100%);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.8s ease-in-out;
    backdrop-filter: blur(2px);
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.project-content {
    text-align: center;
    color: white;
    padding: 2.5rem 2rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateY(20px);
    transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(6px);
    border-radius: 0;
}

.project-card:hover .project-content {
    transform: translateY(0);
}

.project-title {
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.9);
    max-width: 90%;
}

.project-description {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
    opacity: 1;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);
    max-width: 85%;
    overflow-y: auto;
    max-height: 120px;
}

.project-arrow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.project-card:hover .project-arrow {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateX(2px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .projects-page {
        padding: 1rem 0.5rem;
    }

    .section-title {
        font-size: 2rem;
        margin-bottom: 2rem;
    }

    .projects-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }

    .project-card {
        height: 280px;
    }

    .year-title {
        font-size: 1.25rem;
        margin-bottom: 1rem;
    }

    .project-content {
        padding: 2rem 1.5rem;
    }

    .project-description {
        max-height: 100px;
        font-size: 0.9rem;
    }
}

@media (max-width: 480px) {
    .project-content {
        padding: 1.5rem;
    }

    .project-title {
        font-size: 1.25rem;
    }

    .project-description {
        font-size: 0.9rem;
    }
}

/* Animation d'entrée */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.project-card {
    animation: fadeInUp 0.6s ease-out;
}

.project-card:nth-child(2) {
    animation-delay: 0.1s;
}

.project-card:nth-child(3) {
    animation-delay: 0.2s;
}

.project-card:nth-child(4) {
    animation-delay: 0.3s;
}

/* Mode sombre (optionnel) */
@media (prefers-color-scheme: dark) {
    :root {
        --text-primary: #f9fafb;
        --text-secondary: #d1d5db;
        --background: #1f2937;
        --surface: #374151;
        --border: #4b5563;
    }
}
</style>