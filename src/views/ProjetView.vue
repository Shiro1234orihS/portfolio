<script setup>
import { ref, onMounted } from "vue";

// Animation d'apparition progressive
const projectsVisible = ref(false);

onMounted(() => {
  setTimeout(() => {
    projectsVisible.value = true;
  }, 100);
});
</script>

<template>
  <!-- En-tête principal avec animation -->
  <header class="main-header">
    <div class="header-content">
      <h1 class="section-title">{{ $t("projects_academic_title") }}</h1>
      <p class="subtitle">Découvrez mes différents projets et réalisations</p>
    </div>
  </header>

  <!-- Section Projets Académiques -->
  <section class="projects-section" :class="{ 'fade-in': projectsVisible }">
    <div class="projet-container">
      <div class="section-header">
        <h2 class="degree-title">
          <span class="badge">1ère année</span>
          {{ $t("first_year_project") }}
        </h2>
      </div>

      <div class="projects-grid single-project">
        <router-link class="project-link" to="/westofsurvival">
          <article class="project-card featured">
            <div class="project-image">
              <img
                src="./../../public/picture/westsofsurvival/iconebull.png"
                alt="Wests Of Survival"
                loading="lazy"
              />
              <div class="project-status">Terminé</div>
            </div>
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ $t("project_west") }}</h3>
                <div class="project-tech">
                  <span class="tech-tag">Game</span>
                </div>
              </div>
              <p class="project-description">{{ $t("project_west_desc") }}</p>
              <div class="project-footer">
                <span class="view-project">
                  Voir le projet
                  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </router-link>
      </div>

      <div class="section-header">
        <h2 class="degree-title">
          <span class="badge">2ème année</span>
          {{ $t("second_year_project") }}
        </h2>
      </div>

      <div class="projects-grid">
        <router-link class="project-link" to="laravelbmw">
          <article class="project-card">
            <div class="project-image">
              <img
                src="./../../public/picture/BmwLaravel/image.png"
                alt="Projet BMW Laravel"
                loading="lazy"
              />
              <div class="project-status">Terminé</div>
            </div>
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ $t("project_bmw_laravel") }}</h3>
                <div class="project-tech">
                  <span class="tech-tag laravel">Laravel</span>
                  <span class="tech-tag php">PHP</span>
                </div>
              </div>
              <p class="project-description">{{ $t("project_bmw_laravel_desc") }}</p>
              <div class="project-footer">
                <span class="view-project">
                  Voir le projet
                  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </router-link>

        <router-link class="project-link" to="vuebmx">
          <article class="project-card">
            <div class="project-image">
              <img
                src="./../../public/picture/BmwVueJs/icone_vue.js.png"
                alt="Projet BMW Vue.js"
                loading="lazy"
              />
              <div class="project-status">Terminé</div>
            </div>
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ $t("project_bmw_vue") }}</h3>
                <div class="project-tech">
                  <span class="tech-tag vue">Vue.js</span>
                  <span class="tech-tag js">JavaScript</span>
                </div>
              </div>
              <p class="project-description">{{ $t("project_bmw_vue_desc") }}</p>
              <div class="project-footer">
                <span class="view-project">
                  Voir le projet
                  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </router-link>

        <router-link class="project-link" to="vueprojex">
          <article class="project-card">
            <div class="project-image">
              <img
                src="./../../public/picture/YProject/acceuil.webp"
                alt="Projet Y avec Docker"
                loading="lazy"
              />
              <div class="project-status">Terminé</div>
            </div>
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ $t("project_docker_y") }}</h3>
                <div class="project-tech">
                  <span class="tech-tag docker">Docker</span>
                  <span class="tech-tag vue">Vue.js</span>
                </div>
              </div>
              <p class="project-description">{{ $t("project_docker_y_desc") }}</p>
              <div class="project-footer">
                <span class="view-project">
                  Voir le projet
                  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </router-link>
      </div>
    </div>
    <!-- Troisième Année -->
    <div class="projet-container">
      <div class="section-header">
        <h2 class="degree-title">
          <span class="badge">3ème année</span>
          {{ $t("third_year_project") }}
        </h2>
      </div>

      <div class="projects-grid">
        <router-link class="project-link" to="/homeassistant">
          <article class="project-card">
            <div class="project-image">
              <img
                src="./../../public/picture/homeAssistent/homeAssistantHome.png"
                alt="Projet Home Assistant"
                loading="lazy"
              />
              <div class="project-status">Terminé</div>
            </div>
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ $t("project_home_assistant") }}</h3>
                <div class="project-tech">
                  <span class="tech-tag">IoT</span>
                  <span class="tech-tag">Automation</span>
                </div>
              </div>
              <p class="project-description">{{ $t("project_home_assistant_desc") }}</p>
              <div class="project-footer">
                <span class="view-project">
                  Voir le projet
                  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </router-link>

        <router-link class="project-link" to="/homeassistant2">
          <article class="project-card">
            <div class="project-image">
              <img
                src="./../../public/picture/homeAssistant2.0/homeAssistant2.0Home.png"
                alt="Projet Home Assistant 2.0"
                loading="lazy"
              />
              <div class="project-status">Terminé</div>
            </div>
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ $t("project_home_assistant_2") }}</h3>
                <div class="project-tech">
                  <span class="tech-tag">IoT</span>
                  <span class="tech-tag">Smart Home</span>
                </div>
              </div>
              <p class="project-description">{{ $t("project_home_assistant_2_desc") }}</p>
              <div class="project-footer">
                <span class="view-project">
                  Voir le projet
                  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </router-link>
      </div>
    </div>
  </section>

  <!-- Section Projets Personnels -->
  <section
    class="projects-section personal-projects"
    :class="{ 'fade-in': projectsVisible }"
  >
    <div class="projet-container">
      <div class="section-header">
        <h2 class="degree-title personal">
          <span class="badge personal">Personnel</span>
          {{ $t("projects_personal_title") }}
        </h2>
      </div>

      <div class="projects-grid">
        <!-- <router-link class="project-link" to="miniprojet">
          <article class="project-card">
            <div class="project-image">
              <img
                src="./../../public/picture/MiniProjet/logo.png"
                alt="Mini projets personnels"
                loading="lazy"
              />
              <div class="project-status personal">En cours</div>
            </div>
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ $t("project_mini") }}</h3>
                <div class="project-tech">
                  <span class="tech-tag">Divers</span>
                </div>
              </div>
              <p class="project-description">{{ $t("project_mini_desc") }}</p>
              <div class="project-footer">
                <span class="view-project">
                  Voir le projet
                  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </router-link> -->

        <router-link class="project-link" to="keypass">
          <article class="project-card">
            <div class="project-image">
              <img
                src="./../../public/picture/Keypass/image.png"
                alt="Site de gestion de mots de passe"
                loading="lazy"
              />
              <div class="project-status">Terminé</div>
            </div>
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ $t("project_keypass") }}</h3>
                <div class="project-tech">
                  <span class="tech-tag security">Sécurité</span>
                  <span class="tech-tag js">JavaScript</span>
                </div>
              </div>
              <p class="project-description">{{ $t("project_keypass_desc") }}</p>
              <div class="project-footer">
                <span class="view-project">
                  Voir le projet
                  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </router-link>

        <router-link class="project-link" to="earningcall">
          <article class="project-card">
            <div class="project-image">
              <img
                src="./../../public/picture/earningCall/iconebull.png"
                alt="Site Earning Call"
                loading="lazy"
              />
              <div class="project-status personal">Terminé</div>
            </div>
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ $t("project_earningcall") }}</h3>
                <div class="project-tech">
                  <span class="tech-tag finance">Finance</span>
                  <span class="tech-tag api">API</span>
                </div>
              </div>
              <p class="project-description">{{ $t("project_earningcall_desc") }}</p>
              <div class="project-footer">
                <span class="view-project">
                  Voir le projet
                  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </router-link>

        <!-- <router-link class="project-link" to="intranet">
          <article class="project-card">
            <div class="project-image">
              <img
                src="./../../public/picture/earningCall/iconebull.png"
                alt="Intranet"
                loading="lazy"
              />
              <div class="project-status">Terminé</div>
            </div>
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ $t("project_intranet") }}</h3>
                <div class="project-tech">
                  <span class="tech-tag enterprise">Enterprise</span>
                  <span class="tech-tag web">Web</span>
                </div>
              </div>
              <p class="project-description">{{ $t("project_intranet_desc") }}</p>
              <div class="project-footer">
                <span class="view-project">
                  Voir le projet
                  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </router-link> -->

        <router-link class="project-link" to="intranet/home">
          <article class="project-card">
            <div class="project-image">
              <img
                src="./../../public/picture/Intranet/Acceuille/home.png"
                alt="Intranet"
                loading="lazy"
              />
              <div class="project-status">Terminé</div>
            </div>
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ $t("project_intranet") }}</h3>
                <div class="project-tech">
                  <span class="tech-tag intranet">Intranet</span>
                  <span class="tech-tag web">Web</span>
                </div>
              </div>
              <p class="project-description">{{ $t("project_intranet_desc") }}</p>
              <div class="project-footer">
                <span class="view-project">
                  Voir le projet
                  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </router-link>

        <router-link class="project-link" to="intranet">
          <article class="project-card">
            <div class="project-image">
              <img
                src="./../../public/picture/Intranet/Agenda/home.png"
                alt="Intranet"
                loading="lazy"
              />
              <div class="project-status">Terminé</div>
            </div>
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ $t("project_intranet") }}</h3>
                <div class="project-tech">
                  <span class="tech-tag intranet">Intranet</span>
                  <span class="tech-tag web">Web</span>
                </div>
              </div>
              <p class="project-description">{{ $t("project_intranet_desc") }}</p>
              <div class="project-footer">
                <span class="view-project">
                  Voir le projet
                  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </router-link>

        <router-link class="project-link" to="intranet">
          <article class="project-card">
            <div class="project-image">
              <img
                src="./../../public/picture/Intranet/Kespass/home.png"
                alt="Intranet"
                loading="lazy"
              />
              <div class="project-status">Terminé</div>
            </div>
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ $t("project_intranet") }}</h3>
                <div class="project-tech">
                  <span class="tech-tag intranet">Intranet</span>
                  <span class="tech-tag web">Web</span>
                </div>
              </div>
              <p class="project-description">{{ $t("project_intranet_desc") }}</p>
              <div class="project-footer">
                <span class="view-project">
                  Voir le projet
                  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </router-link>

        <router-link class="project-link" to="intranet">
          <article class="project-card">
            <div class="project-image">
              <img
                src="./../../public/picture/Intranet/Notepad/home.png"
                alt="Intranet"
                loading="lazy"
              />
              <div class="project-status">Terminé</div>
            </div>
            <div class="project-content">
              <div class="project-header">
                <h3 class="project-title">{{ $t("project_intranet") }}</h3>
                <div class="project-tech">
                  <span class="tech-tag intranet">Intranet</span>
                  <span class="tech-tag web">Web</span>
                </div>
              </div>
              <p class="project-description">{{ $t("project_intranet_desc") }}</p>
              <div class="project-footer">
                <span class="view-project">
                  Voir le projet
                  <svg class="arrow-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </article>
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Variables CSS personnalisées */
:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --success-color: #10b981;
  --warning-color: #f59e0b;
  --danger-color: #ef4444;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
  --bg-card: #ffffff;
  --bg-surface: #f9fafb;
  --border-color: #e5e7eb;
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
  --radius-xl: 1rem;
}

/* Mode sombre */
@media (prefers-color-scheme: dark) {
  :root {
    --text-primary: #f9fafb;
    --text-secondary: #d1d5db;
    --bg-card: #1f2937;
    --bg-surface: #111827;
    --border-color: #374151;
  }
}

/* Animations */
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

.fade-in {
  animation: fadeInUp 0.6s ease-out forwards;
}

/* Sections */
.projects-section {
  padding: 0 2rem 4rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.6s ease;
}

.projects-section.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.personal-projects {
  background-color: var(--bg-surface);
  margin-top: 2rem;
  padding-top: 4rem;
  min-height: 500px;
  /* Assure une hauteur minimale */
}

/* Conteneurs */
.projet-container {
  max-width: 1400px;
  margin: 0 auto;
  background-color: transparent;
  border-radius: 0;
  box-shadow: none;
}

.section-header {
  margin-bottom: 3rem;
  text-align: center;
}

.degree-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.badge {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: var(--text-primary);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: var(--shadow-md);
}

.badge.personal {
  background: linear-gradient(135deg, var(--success-color), #059669);
}

.degree-title.personal {
  color: var(--text-primary);
  font-size: 2.5rem;
}

/* Grille de projets */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.single-project {
  display: flex;
  justify-content: center;
}

.single-project .project-card {
  max-width: 600px;
}

/* Cartes de projet */
.project-link {
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
}

.project-card {
  background: var(--bg-card);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid var(--border-color);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: var(--shadow-xl);
}

.project-card.featured {
  border: 2px solid var(--primary-color);
  transform: scale(1.05);
}

.project-card.featured:hover {
  transform: translateY(-8px) scale(1.07);
}

/* Images de projet */
.project-image {
  position: relative;
  height: 250px;
  overflow: hidden;
  background: linear-gradient(45deg, #f3f4f6, #e5e7eb);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

/* Statut du projet */
.project-status {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: var(--success-color);
  color: var(--text-primary);
  padding: 0.375rem 0.875rem;
  border-radius: 50px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: var(--shadow-md);
}

.project-status.personal {
  background: var(--warning-color);
}

/* Contenu de la carte */
.project-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-header {
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--bg-surface);
  color: var(--text-secondary);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-sm);
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

/* Tags colorés selon la technologie */
.tech-tag.laravel {
  background: #ff2d20;
  color: var(--text-primary);
  border-color: #ff2d20;
}

.tech-tag.php {
  background: #777bb4;
  color: var(--text-primary);
  border-color: #777bb4;
}

.tech-tag.vue {
  background: #4fc08d;
  color: var(--text-primary);
  border-color: #4fc08d;
}

.tech-tag.js {
  background: #f7df1e;
  color: #000;
  border-color: #f7df1e;
}

.tech-tag.docker {
  background: #2496ed;
  color: var(--text-primary);
  border-color: #2496ed;
}

.tech-tag.security {
  background: #dc2626;
  color: var(--text-primary);
  border-color: #dc2626;
}

.tech-tag.finance {
  background: #059669;
  color: var(--text-primary);
  border-color: #059669;
}

.tech-tag.api {
  background: #8b5cf6;
  color: var(--text-primary);
  border-color: #8b5cf6;
}

.tech-tag.enterprise {
  background: #374151;
  color: var(--text-primary);
  border-color: #374151;
}

.tech-tag.intranet {
  background: #175ac5;
  color: var(--text-primary);
  border-color: #374151;
}

.tech-tag.web {
  background: #3b82f6;
  color: var(--text-primary);
  border-color: #3b82f6;
}

.project-description {
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  flex: 1;
}

/* Pied de carte */
.project-footer {
  margin-top: auto;
}

.view-project {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary-color);
  font-weight: 600;
  font-size: 0.875rem;
  transition: all 0.2s ease;
}

.project-card:hover .view-project {
  gap: 1rem;
  color: var(--secondary-color);
}

.arrow-icon {
  width: 1rem;
  height: 1rem;
  transition: transform 0.2s ease;
}

.project-card:hover .arrow-icon {
  transform: translateX(4px) translateY(-4px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .main-header {
    padding: 3rem 1rem 2rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .degree-title {
    font-size: 2rem;
    flex-direction: column;
    gap: 0.5rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    padding: 0 1rem;
  }

  .projects-section {
    padding: 0 1rem 3rem;
  }

  .project-content {
    padding: 1.25rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 2rem;
  }

  .degree-title {
    font-size: 1.75rem;
  }

  .project-image {
    height: 200px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}

/* Optimisations pour l'accessibilité */
@media (prefers-reduced-motion: reduce) {
  .project-card,
  .project-image img,
  .view-project,
  .arrow-icon {
    transition: none;
  }

  .fade-in {
    animation: none;
    opacity: 1;
    transform: none;
  }
}

/* Focus pour l'accessibilité clavier */
.project-link:focus-visible {
  outline: 2px solid var(--primary-color);
  outline-offset: 4px;
  border-radius: var(--radius-lg);
}
</style>
