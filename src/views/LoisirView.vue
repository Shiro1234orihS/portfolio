<script setup>
// Scripts Vue.js si nécessaire
import { ref, reactive } from 'vue'

// Données réactives pour les jeux
const games = reactive([
  {
    id: 1,
    name: 'Rocket League',
    image: './../../public/picture/loisir/RlRank.png',
    progress: '50/100',
    description: 'Football avec des voitures - Un mélange unique entre sport automobile et football'
  },
  {
    id: 2,
    name: 'League of Legends',
    image: './../../public/picture/loisir/LolRank.png',
    progress: '50lp / 100',
    description: 'MOBA stratégique - Combattez en équipe pour détruire le Nexus adverse'
  },
  {
    id: 3,
    name: 'Fortnite',
    image: './../../public/picture/loisir/FnRank.png',
    progress: '50lp / 100',
    description: 'Battle Royale - Survivez et soyez le dernier joueur debout'
  },
  {
    id: 4,
    name: 'Clash Royale',
    image: './../../public/picture/loisir/CrRank.png',
    progress: '50lp / 100',
    description: 'Stratégie temps réel - Collectionnez des cartes et affrontez vos adversaires'
  }
])

</script>

<template>
  <div>
    <!-- En-tête principal -->
    <header class="main-header">
      <h1 class="section-title">
        Mes Principaux Loisirs
      </h1>
      <p class="subtitle">Découvrez mes différents loisir</p>
    </header>

    <!-- Section Jeux Vidéo -->
    <section class="gaming-section">
      <div class="section-header">
        <h2 class="category-title">
          <i class="category-icon">🕹️</i>
          Jeux Vidéo
        </h2>
        <p class="category-subtitle">Les jeux compétitifs</p>
      </div>

      <!-- Grille des jeux -->
      <div class="games-grid">
        <div v-for="game in games" :key="game.id" class="game-card">
          <!-- Image et progression -->
          <div class="rank-container">
            <img :src="game.image" :alt="`Rang ${game.name}`" class="rank-image"
              @error="$event.target.style.display = 'none'">
            <div class="progress-badge">
              {{ game.progress }}
            </div>
          </div>

          <!-- Nom du jeu -->
          <h3 class="game-name">{{ game.name }}</h3>

          <!-- Indicateur de clic -->
          <div class="click-indicator">
            Cliquer pour plus d'infos
          </div>
        </div>
      </div>
    </section>

    <!-- Section pour ajouter d'autres loisirs -->
    <section class="other-hobbies">
      <h2 class="category-title">
        <i class="category-icon">🌟</i>
        Autres Loisirs
      </h2>
      <p class="coming-soon">Section en développement...</p>
    </section>
  </div>
</template>

<style scoped>
/* Section gaming */
.gaming-section {
  border-radius: var(--border-radius);
  padding: 40px;
  margin-bottom: 30px;
  box-shadow: 0 8px 20px var(--box-shadow);
  backdrop-filter: blur(10px);
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.category-title {
  font-size: 2rem;
  color: var(--text-color);
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.category-icon {
  font-size: 1.8rem;
}

.category-subtitle {
  font-size: 1.1rem;
  color: rgba(51, 51, 51, 0.7);
  font-style: italic;
}

/* Grille des jeux */
.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  margin-top: 30px;
}

/* Carte de jeu */
.game-card {
  border-radius: var(--border-radius);
  padding: 25px;
  text-align: center;
  box-shadow: 0 8px 20px var(--box-shadow);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
}

.game-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px var(--box-shadow);
  border-color: var(--primary-color);
}

.game-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  transition: left 0.6s ease;
}

.game-card:hover::before {
  left: 100%;
}

/* Container du rang */
.rank-container {
  position: relative;
  margin-bottom: 20px;
  display: inline-block;
}

.rank-image {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 4px 12px var(--box-shadow);
  transition: transform 0.3s ease;
}

.game-card:hover .rank-image {
  transform: scale(1.1);
}

.progress-badge {
  position: absolute;
  bottom: -10px;
  right: -10px;
  background: linear-gradient(135deg, var(--primary-color), var(--button-hover-color));
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  box-shadow: 0 4px 12px var(--box-shadow);
  animation: pulse 2s infinite;
}

/* Nom du jeu */
.game-name {
  font-size: 1.3rem;
  color: var(--text-color);
  margin-bottom: 15px;
  font-weight: 600;
  letter-spacing: -0.02em;
}

/* Indicateur de clic */
.click-indicator {
  font-size: 0.9rem;
  color: var(--primary-color);
  opacity: 0;
  transition: opacity 0.3s ease;
  font-weight: 500;
}

.game-card:hover .click-indicator {
  opacity: 1;
}

/* Section autres loisirs */
.other-hobbies {
  border-radius: var(--border-radius);
  padding: 40px;
  text-align: center;
  box-shadow: 0 8px 20px var(--box-shadow);

}

.coming-soon {
  font-size: 1.1rem;
  color: rgba(51, 51, 51, 0.7);
  font-style: italic;
  margin-top: 20px;
}

/* Animations */
@keyframes bounce {

  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-10px);
  }

  60% {
    transform: translateY(-5px);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .loisir-container {
    padding: 15px;
  }

  .section-title {
    font-size: 2rem;
  }

  .games-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .gaming-section {
    padding: 25px;
  }

  .main-header {
    padding: 30px 15px;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
    flex-direction: column;
    gap: 10px;
  }

  .game-card {
    padding: 20px;
  }

  .rank-image {
    width: 70px;
    height: 70px;
  }
}

/* Gestion des erreurs d'images */
.rank-image[style*="display: none"]+.progress-badge {
  position: static;
  margin-top: 10px;
}
</style>