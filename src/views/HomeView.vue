<script setup>
import { onMounted } from 'vue';
const userEmail = "Email : ricardonunesemiliogmail.com";
onMounted(() => {
  const lines = [
    "Bienvenue sur mon portfolio,",
    "je suis Ricardo NUNES EMILIO"
  ];

  const lineElements = [
    document.getElementById("line1"),
    document.getElementById("line2")
  ];

  let lineIndex = 0;
  let charIndex = 0;

  function typeWriter() {
    if (charIndex < lines[lineIndex].length) {
      lineElements[lineIndex].innerHTML += lines[lineIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100);  // Vitesse d'écriture
    } else {
      lineElements[lineIndex].style.borderRight = "none";  // Retirer le curseur à la fin
      lineIndex++;  // Passer à la ligne suivante
      charIndex = 0;
      if (lineIndex < lines.length) {
        setTimeout(typeWriter, 500);  // Délai avant la ligne suivante
      }
    }
  }

  // Lancer l'animation avec un délai initial
  setTimeout(typeWriter, 500);
});
</script>

<template>
  <main>
    <div class="container_info_personnel">
      <h1 id="line1" class="typing-line section-title"></h1>
      <h1 id="line2" class="typing-line section-title"></h1>
      <div class="personal-info">
        <div class="info">
          <p classe="text-base">{{ $t('birth_date') }}</p>
          <p classe="text-base">{{ $t('nationality') }}</p>
          <p class="text-base">{{ userEmail }}</p>
          <button onclick="ouvrirPDF1()" id="pdf-button">
            <span class="circle1"></span>
            <span class="circle2"></span>
            <span class="circle3"></span>
            <span class="circle4"></span>
            <span class="circle5"></span>
            <span class="text">{{ $t('open_cv') }}</span>
          </button>
        </div>
        <img id="PhotoDeProfil" src="./../../public/picture/photodeProfil_qualite.png" alt="Photo de profil">
      </div>
    </div>
    <div id="container_info_personnel2">
      <div style="margin-bottom: 1%;">
        <h2 class="degree-title">{{ $t('objective_title') }}</h2>
        <span class="text-base">{{ $t('objective_text') }}</span>
      </div>
      <h2 class="degree-title">{{ $t('social_networks') }}</h2>
      <div class="wrapper">
        <li class="icon git" onclick="window.open('https://github.com/Shiro1234orihS', '_blank')">
          <span class="tooltip">GitHub</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor"
            class="bi bi-git">
            <g>
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </g>
          </svg>
        </li>
        <li class="icon linkedin" onclick="window.open('https://www.linkedin.com/in/ricardo-nunes-emilio/', '_blank')">
          <span class="tooltip Linkedin">LinkedIn</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
            class="bi bi-linkedin">
            <g class="dash">
              <path style="--sped: 4s;"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </g>
          </svg>
        </li>
      </div>
    </div>
  </main>
</template>

<style scoped>
/* ----------------- WRAPPER (Icônes Réseaux Sociaux) ----------------- */
.wrapper {
  display: flex;
  list-style: none;
  font-family: "Poppins", sans-serif;
  justify-content: center;
  /* Centrage horizontal */
}

.wrapper .icon {
  position: relative;
  background: var(--sidebar-bg-color);
  /* Fond adapté au thème */
  border-radius: 50%;
  margin: 10px;
  width: 60px;
  /* Taille légèrement augmentée */
  height: 60px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 8px 15px var(--box-shadow);
  /* Ombre subtile */
  cursor: pointer;
  transition: all 0.3s ease-in-out;

}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background: var(--button-bg-color);
  /* Fond bouton */
  color: var(--text-color);
  /* Couleur du texte */
  padding: 6px 10px;
  border-radius: 5px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background: var(--button-bg-color);
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
}

/* Animation au survol */
.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  pointer-events: auto;
}

.wrapper .git:hover,
.wrapper .git:hover .tooltip,
.wrapper .git:hover .tooltip::before {
  background: var(--primary-color);
  color: var(--sidebar-bg-color);
}

.wrapper .linkedin:hover,
.wrapper .linkedin:hover .tooltip,
.wrapper .linkedin:hover .tooltip::before {
  background: var(--button-hover-color);
  color: var(--sidebar-bg-color);
}

/* ----------------- SECTION INFOS PERSONNELLES ----------------- */
/* Première section */
.container_info_personnel {
  position: relative;
  border: 1px solid var(--primary-color);
  padding: 30px;
  background-color: var(--sidebar-bg-color);
  box-shadow: 0 8px 20px var(--box-shadow);
  border-top-left-radius: var(--border-radius);
  border-top-right-radius: var(--border-radius);
}

/* Deuxième section */
#container_info_personnel2 {
  position: relative;
  border: 1px solid var(--primary-color);
  padding: 30px;
  background-color: var(--sidebar-bg-color);
  box-shadow: 0 8px 20px var(--box-shadow);
  border-bottom-left-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
}

/* ----------------- ALIGNEMENT DES ÉLÉMENTS (Photo + Infos) ----------------- */
.personal-info {
  display: flex;
  justify-content: center;
  /* Centrage horizontal */
  align-items: center;
  gap: 5%;
  /* Espacement ajusté */
  flex-wrap: wrap;
  /* Responsive : passe à la ligne si nécessaire */
}

/* Photo de profil */
#PhotoDeProfil {
  height: auto;
  width: 20%;
}

/* Texte */
.personal-info p,
.personal-info h3 {
  margin-top: 15px;
  font-weight: bold;
  color: var(--text-color);
}

#typing-container {
  text-align: center;
  margin-top: 20vh;
}

.typing-line {
  font-size: 2em;
  white-space: nowrap;
  overflow: hidden;
  width: fit-content;
  margin: 10px auto;
  border-right: 3px solid var(--primary-color);
  display: inline-block;
  animation: blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
  50% {
    border-color: transparent;
  }
}

/* ----------------- RESPONSIVE DESIGN ----------------- */
@media (max-width: 768px) {
  .container_info_personnel {
    width: 90%;
    padding: 20px;
  }

  .wrapper .icon {
    width: 50px;
    height: 50px;
  }

  #PhotoDeProfil {
    width: 40%;
  }
}
</style>
