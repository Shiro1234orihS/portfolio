<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
}

function changeLanguage(lang) {
  locale.value = lang
  localStorage.setItem('locale', lang)
}

// Fonction pour ouvrir le CV
function ouvrirPDF1() {
  const cvPath = './../../public/Cv.pdf'; // Chemin vers ton CV
  window.open(cvPath, '_blank'); // Ouvre le CV dans un nouvel onglet
}
</script>

<template>
  <div id="container-global">
    <nav class="sidebar">
      <router-link to="/" class="lien">
        {{ $t('welcome') }}
        <span class="barreVisuel"></span>
      </router-link>

      <router-link to="/education" class="lien">
        {{ $t('education') }}
        <span class="barreVisuel"></span>
      </router-link>

      <router-link to="project" class="lien">
        {{ $t('project') }}
        <span class="barreVisuel"></span>
      </router-link>

      <router-link to="work" class="lien">
        {{ $t('work') }}
        <span class="barreVisuel"></span>
      </router-link>

      <router-link to="technical" class="lien">
        {{ $t('technical') }}
        <span class="barreVisuel"></span>
      </router-link>

      <router-link to="languages" class="lien">
        {{ $t('languages') }}
        <span class="barreVisuel"></span>
      </router-link>

      <router-link to="references" class="lien">
        {{ $t('references') }}
        <span class="barreVisuel"></span>
      </router-link>

      <!-- <router-link to="loisir" class="lien">
        {{ $t('leisure') }}
        <span class="barreVisuel"></span>
      </router-link> -->


      <fieldset class="container-buttons">
        <legend>{{ $t('choose_language') }}</legend>
        <button class="lang-button" @click="changeLanguage('fr')">FR</button>
        <button class="lang-button" @click="changeLanguage('en')">EN</button>
        <button class="lang-button" @click="changeLanguage('pt')">PT</button>
      </fieldset>


      <div class="cv-container">
        <button @click="ouvrirPDF1()" id="pdf-button">
          <span class="circle1"></span>
          <span class="circle2"></span>
          <span class="circle3"></span>
          <span class="circle4"></span>
          <span class="circle5"></span>
          <span class="text"> {{ $t('open_cv') }}</span>
        </button>
      </div>
    </nav>

    <main class="main-content">
      <RouterView />
      <label class="switch">
        <input type="checkbox" @click="toggleDarkMode()" />
        <span class="slider">
          <span class="circle">
            <span class="shine shine-1"></span>
            <span class="shine shine-2"></span>
            <span class="shine shine-3"></span>
            <span class="shine shine-4"></span>
            <span class="shine shine-5"></span>
            <span class="shine shine-6"></span>
            <span class="shine shine-7"></span>
            <span class="shine shine-8"></span>
            <span class="moon"></span>
          </span>
        </span>
      </label>
    </main>
  </div>
</template>

<style scoped>
#container-global {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}

.sidebar {
  flex: 0 0 20%;
  max-width: 300px;
  height: 100%;
  background-color: var(--sidebar-bg-color);
  box-shadow: 2px 0 5px var(--box-shadow);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-x: hidden;
  transition: background-color 0.3s ease;
}

.main-content {
  flex: 1;
  display: flex;

  padding: 20px;
  background-color: var(--content-bg-color);
  overflow-y: auto;
  flex-direction: column;
}

/* ----------------- LIENS DANS LA SIDEBAR ----------------- */
.sidebar .lien {
  padding: 20px;
  font-size: 1.5vw;
  text-decoration: none;
  color: var(--text-color);
  display: block;
  position: relative;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Barre animée sous les liens */
.barreVisuel {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  width: 100%;
  background: var(--bar-gradient);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

/* Animation au survol */
.sidebar .lien:hover .barreVisuel {
  transform: scaleX(1);
}


/* ----------------- BOUTONS LANGUES ----------------- */
.container-buttons {
  margin-top: auto;
  text-align: center;
  padding: 20px;
}

.lang-button {
  border: none;
  background-color: transparent;
  font-size: 1vw;
  color: var(--text-color);
  margin: 0 10px;
  cursor: pointer;
  transition: color 0.3s ease;
}

.lang-button.active,
.lang-button:hover {
  color: var(--primary-color);
  font-weight: bold;
}


/* ----------------- RESPONSIVE ----------------- */
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
}

/* ----------------- SCROLLBAR  ----------------- */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--sidebar-bg-color);
  /* Fond de la scrollbar */
}

::-webkit-scrollbar-thumb {
  background: var(--primary-color);
  /* Couleur de la barre */
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--button-hover-color);
  /* Couleur au survol */
}

@media (max-width: 768px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    transform: translateY(-100%);
    transition: transform 0.3s ease-in-out;
  }

  .sidebar.open {
    transform: translateY(0);
  }

  .menu-toggle {
    display: block;
  }

  .menu-content {
    display: flex;
    flex-direction: column;
    background-color: var(--sidebar-bg-color);
  }

  .sidebar .lien {
    font-size: 1.2rem;
    padding: 15px;
  }

  .lang-button {
    font-size: 1rem;
  }

  #pdf-button {
    font-size: 1rem;
  }
}



/*bouton toggle switches */

/* From Uiverse.io by TahaShameli */
/* The switch - the box around the slider */
.switch {
  font-size: 17px;
  position: fixed;
  display: inline-block;
  width: 3.5em;
  height: 2em;
  left: 93%;
  top: 5%;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #33333300;
  transition: 0.4s;
  border-radius: 30px;
  overflow: hidden;
  border: 1px solid;
}

.circle {
  position: absolute;
  content: "";
  height: 1.4em;
  width: 1.4em;
  border-radius: 20px;
  left: 0.3em;
  bottom: 0.3em;
  background-color: #fff000;
  transition: 0.4s;
}

.switch input:checked+.slider .circle {
  transform: rotate(0deg) translateX(1.5em) !important;
}

.switch input:checked+.slider .circle .shine {
  transform: translate(0%, 0%) !important;
}

.switch input:checked+.slider .circle .moon {
  left: -10%;
  opacity: 1;
  transform: translateY(-60%);
}

.moon {
  position: absolute;
  left: -100%;
  top: 50%;
  opacity: 0;
  background-color: #333;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 99999px;
  transform: translateY(-50%);
  transition: all 0.4s;
}

.shine {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0.25rem;
  height: 0.25rem;
  background-color: #fff000;
  border-radius: 1rem;
  transition: all 0.4s;
}

.shine-1 {
  transform: translate(-50%, -375%);
}

.shine-2 {
  transform: translate(175%, -275%);
}

.shine-3 {
  transform: translate(275%, -50%);
}

.shine-4 {
  transform: translate(175%, 175%);
}

.shine-5 {
  transform: translate(-50%, 275%);
}

.shine-6 {
  transform: translate(-275%, 175%);
}

.shine-7 {
  transform: translate(-375%, -50%);
}

.shine-8 {
  transform: translate(-275%, -275%);
}
</style>
