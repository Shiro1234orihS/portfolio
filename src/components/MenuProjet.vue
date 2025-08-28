<script setup>
import { ref, onMounted } from "vue";

const isExpanded = ref(false);
const showTooltip = ref("");

const projects = [
  {
    to: "westofsurvival",
    title: "West of Survival",
    icon: "🎮",
    image: "./../../public/picture/westsofsurvival/icone_westsofsurvival.png",
    color: "#8B4513",
  },
  {
    to: "laravelbmw",
    title: "BMW Laravel",
    icon: "🚗",
    image: "./../../public/picture/BmwLaravel/incone_laravel.png",
    color: "#FF2D20",
  },
  {
    to: "vuebmx",
    title: "BMW Vue.js",
    icon: "⚡",
    image: "./../../public/picture/BmwVueJs/icone_vue.js.png",
    color: "#4FC08D",
  },
  {
    to: "vueprojex",
    title: "Projet Y Docker",
    icon: "🐳",
    image: "./../../public/picture/YProject/acceuil.webp",
    color: "#2496ED",
  },
  {
    to: "homeassistant",
    title: "Projet Home Assistant",
    icon: "🐳",
    image: "./../../public/picture/homeAssistent/homeAssistantHome.png",
    color: "#2496ED",
  },
   {
    to: "homeassistant2.0",
    title: "Projet Home Assistant 2.0",
    icon: "🐳",
    image: "./../../public/picture/homeAssistant2.0/homeAssistant2.0Home.png",
    color: "#2496ED",
  },
  {
    to: "miniprojet",
    title: "Mini Projets",
    icon: "🔧",
    image: "./../../public/picture/MiniProjet/logo.png",
    color: "#6366F1",
  },
  {
    to: "keypass",
    title: "KeyPass",
    icon: "🔐",
    image: "./../../public/picture/Keypass/image.png",
    color: "#059669",
  },
  {
    to: "earningcall",
    title: "Earning Call",
    icon: "📊",
    image: "./../../public/picture/earningCall/iconebull.png",
    color: "#DC2626",
  },
];

const toggleMenu = () => {
  isExpanded.value = !isExpanded.value;
};

const closeMenu = () => {
  isExpanded.value = false;
};

// Fermer le menu en cliquant à l'extérieur
onMounted(() => {
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".project-menu")) {
      closeMenu();
    }
  });
});
</script>

<template>
  <div class="project-menu" :class="{ expanded: isExpanded }">
    <!-- Bouton de retour -->
    <router-link to="project" class="back-btn" title="Retour aux projets">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </svg>
    </router-link>

    <!-- Toggle button -->
    <button
      class="menu-toggle"
      @click="toggleMenu"
      :title="isExpanded ? 'Fermer le menu' : 'Voir tous les projets'"
    >
      <div class="toggle-icon" :class="{ rotated: isExpanded }">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="4" r="1" />
          <circle cx="12" cy="20" r="1" />
          <circle cx="4" cy="12" r="1" />
          <circle cx="20" cy="12" r="1" />
        </svg>
      </div>
      <span class="project-count">{{ projects.length }}</span>
    </button>

    <!-- Menu déroulant -->
    <div class="menu-dropdown" :class="{ visible: isExpanded }">
      <div class="menu-header">
        <h3>Mes Projets</h3>
        <button class="close-btn" @click="closeMenu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div class="projects-list">
        <router-link
          v-for="project in projects"
          :key="project.to"
          :to="project.to"
          class="project-item"
          :class="{ active: $route.name === project.to }"
          :style="{ '--project-color': project.color }"
          @click="closeMenu"
          @mouseenter="showTooltip = project.to"
          @mouseleave="showTooltip = ''"
        >
          <div class="project-avatar">
            <img :src="project.image" :alt="project.title" />
            <div class="project-status"></div>
          </div>

          <div class="project-info">
            <span class="project-name">{{ project.title }}</span>
            <div class="project-icon">{{ project.icon }}</div>
          </div>

          <div class="project-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </div>

          <!-- Tooltip -->
          <div class="project-tooltip" :class="{ show: showTooltip === project.to }">
            {{ project.title }}
          </div>
        </router-link>
      </div>

      <div class="menu-footer">
        <div class="current-project" v-if="$route.name">
          Projet actuel:
          <strong>{{
            projects.find((p) => p.to === $route.name)?.title || "Inconnu"
          }}</strong>
        </div>
      </div>
    </div>

    <!-- Overlay -->
    <div class="menu-overlay" :class="{ visible: isExpanded }" @click="closeMenu"></div>
  </div>
</template>

<style scoped>
/* Variables */
:root {
  --menu-primary: #3b82f6;
  --menu-background: #ffffff;
  --menu-surface: #f8fafc;
  --menu-border: #e2e8f0;
  --menu-text: #1e293b;
  --menu-text-secondary: #64748b;
  --menu-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --menu-shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.dark-mode {
  --menu-primary: #60a5fa;
  --menu-background: #1e293b;
  --menu-surface: #334155;
  --menu-border: #475569;
  --menu-text: #f1f5f9;
  --menu-text-secondary: #94a3b8;
  --menu-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2);
  --menu-shadow-lg: 0 20px 25px -5px rgba(0, 0, 0, 0.3),
    0 10px 10px -5px rgba(0, 0, 0, 0.2);
}

/* Menu principal */
.project-menu {
  position: fixed;
  top: 2rem;
  z-index: 1000;
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

/* Bouton de retour */
.back-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: var(--menu-background);
  border: 1px solid var(--menu-border);
  border-radius: 0.75rem;
  color: var(--menu-text);
  text-decoration: none;
  box-shadow: var(--menu-shadow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.back-btn:hover {
  transform: translateY(-2px);
  box-shadow: var(--menu-shadow-lg);
  border-color: var(--menu-primary);
  color: var(--menu-primary);
}

.back-btn svg {
  width: 1.25rem;
  height: 1.25rem;
}

/* Toggle button */
.menu-toggle {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: var(--menu-primary);
  border: none;
  border-radius: 0.75rem;
  color: var(--menu-text);
  cursor: pointer;
  box-shadow: var(--menu-shadow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(10px);
}

.menu-toggle:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: var(--menu-shadow-lg);
}

.toggle-icon {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.toggle-icon.rotated {
  transform: rotate(90deg);
}

.toggle-icon svg {
  width: 1.25rem;
  height: 1.25rem;
}

.project-count {
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  background: #ef4444;
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 50%;
  border: 2px solid var(--menu-background);
}

/* Menu déroulant */
.menu-dropdown {
  position: absolute;
  top: 4rem;
  right: 0;
  width: 20rem;
  background: var(--menu-background);
  border: 1px solid var(--menu-border);
  border-radius: 1rem;
  box-shadow: var(--menu-shadow-lg);
  backdrop-filter: blur(20px);
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
  max-height: 70vh;
  overflow-y: auto;
}

.menu-dropdown.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: all;
}

/* Header du menu */
.menu-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--menu-border);
}

.menu-header h3 {
  margin: 0;
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--menu-text);
}

.close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  background: none;
  border: none;
  border-radius: 0.5rem;
  color: var(--menu-text-secondary);
  cursor: pointer;
  transition: all 0.2s;
}

.close-btn:hover {
  background: var(--menu-surface);
  color: var(--menu-text);
}

.close-btn svg {
  width: 1rem;
  height: 1rem;
}

/* Liste des projets */
.projects-list {
  padding: 0.5rem;
}

.project-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  border-radius: 0.75rem;
  text-decoration: none;
  color: var(--menu-text);
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 0.25rem;
}

.project-item:hover {
  background: var(--menu-surface);
  transform: translateX(4px);
}

.project-item.active {
  background: linear-gradient(
    135deg,
    var(--project-color),
    rgba(var(--project-color), 0.1)
  );
  color: white;
  box-shadow: 0 4px 12px rgba(var(--project-color), 0.3);
}

.project-item.active .project-status {
  background: #10b981;
  box-shadow: 0 0 8px #10b981;
}

/* Avatar du projet */
.project-avatar {
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  overflow: hidden;
  flex-shrink: 0;
}

.project-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-status {
  position: absolute;
  bottom: -2px;
  right: -2px;
  width: 0.75rem;
  height: 0.75rem;
  background: var(--menu-border);
  border: 2px solid var(--menu-background);
  border-radius: 50%;
  transition: all 0.2s;
}

/* Info du projet */
.project-info {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-name {
  font-weight: 500;
  font-size: 0.875rem;
}

.project-icon {
  font-size: 1rem;
  opacity: 0.7;
}

/* Flèche */
.project-arrow {
  width: 1rem;
  height: 1rem;
  color: var(--menu-text-secondary);
  transition: all 0.2s;
}

.project-item:hover .project-arrow {
  transform: translateX(2px);
  color: var(--project-color);
}

.project-arrow svg {
  width: 100%;
  height: 100%;
}

/* Tooltip */
.project-tooltip {
  position: absolute;
  left: -0.5rem;
  top: 50%;
  transform: translateX(-100%) translateY(-50%);
  background: var(--menu-text);
  color: var(--menu-background);
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: all 0.2s;
  z-index: 10;
}

.project-tooltip::after {
  content: "";
  position: absolute;
  right: -4px;
  top: 50%;
  transform: translateY(-50%);
  border: 4px solid transparent;
  border-left-color: var(--menu-text);
}

.project-tooltip.show {
  opacity: 1;
}

/* Footer du menu */
.menu-footer {
  padding: 1rem 1.25rem;
  border-top: 1px solid var(--menu-border);
  background: var(--menu-surface);
  border-radius: 0 0 1rem 1rem;
}

.current-project {
  font-size: 0.75rem;
  color: var(--menu-text-secondary);
  text-align: center;
}

.current-project strong {
  color: var(--menu-primary);
}

/* Overlay */
.menu-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s;
  z-index: -1;
}

.menu-overlay.visible {
  opacity: 1;
  pointer-events: all;
}

/* Responsive */
@media (max-width: 768px) {
  .project-menu {
    top: 1rem;
    right: 1rem;
  }

  .menu-dropdown {
    width: calc(100vw - 2rem);
    right: -1rem;
  }

  .back-btn,
  .menu-toggle {
    width: 2.5rem;
    height: 2.5rem;
  }

  .back-btn svg,
  .toggle-icon svg {
    width: 1rem;
    height: 1rem;
  }

  .project-count {
    width: 1rem;
    height: 1rem;
    font-size: 0.625rem;
  }
}

@media (max-width: 480px) {
  .menu-dropdown {
    width: calc(100vw - 1rem);
    right: -0.5rem;
    max-height: 60vh;
  }

  .project-item {
    padding: 1rem 0.75rem;
  }

  .project-avatar {
    width: 2.25rem;
    height: 2.25rem;
  }
}

/* Amélioration du scroll */
.menu-dropdown::-webkit-scrollbar {
  width: 4px;
}

.menu-dropdown::-webkit-scrollbar-track {
  background: transparent;
}

.menu-dropdown::-webkit-scrollbar-thumb {
  background: var(--menu-border);
  border-radius: 2px;
}

.menu-dropdown::-webkit-scrollbar-thumb:hover {
  background: var(--menu-text-secondary);
}

/* Animations d'apparition */
@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.project-menu {
  animation: slideInRight 0.4s ease-out;
}

/* Focus states */
.back-btn:focus-visible,
.menu-toggle:focus-visible,
.project-item:focus-visible {
  outline: 2px solid var(--menu-primary);
  outline-offset: 2px;
}
</style>
