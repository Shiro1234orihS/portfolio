<script setup>
(() => {
    let currentIndex = 0;
    let autoScroll;
    const autoScrollDelay = 4000;

    window.onload = function () {
        resetToFirstSlide();
        startAutoScroll();
    };

    // Lancement du défilement automatique
    function startAutoScroll() {
        clearInterval(autoScroll);
        autoScroll = setInterval(nextSlide, autoScrollDelay);
    }

    // Affiche le premier élément au chargement
    function resetToFirstSlide() {
        const carrousel = document.querySelector('.carrousel');
        carrousel.style.transform = 'translateX(0px)';
        currentIndex = 0;
        updateButtons();
    }

    // Défilement vers la droite
    window.nextSlide = function () {
        const carrousel = document.querySelector('.carrousel');
        const items = document.querySelectorAll('.container-references');
        const visibleItems = getVisibleItems();
        const maxIndex = items.length - visibleItems;

        // Si on atteint la fin, revenir au début
        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }

        updateCarousel(carrousel, items, visibleItems);
        startAutoScroll();
    };

    // Défilement vers la gauche
    window.prevSlide = function () {
        const carrousel = document.querySelector('.carrousel');
        const items = document.querySelectorAll('.container-references');
        const visibleItems = getVisibleItems();

        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = items.length - visibleItems;  // Aller à la fin
        }

        updateCarousel(carrousel, items, visibleItems);
        startAutoScroll();
    };

    // Mise à jour du carrousel pour éviter les éléments coupés
    function updateCarousel(carrousel, items, visibleItems) {
        const itemWidth = items[0].clientWidth + 30; // Largeur de l'élément avec marge
        const maxOffset = -(items.length - visibleItems) * itemWidth;

        // Empêche le carrousel de dépasser le dernier élément
        let offset = -(currentIndex * itemWidth);
        if (offset < maxOffset) {
            offset = maxOffset;  // Ajuste si nécessaire pour éviter les éléments coupés
        }

        carrousel.style.transform = `translateX(${offset}px)`;
        updateButtons();
    }

    // Mise à jour des boutons pour les masquer si nécessaire
    function updateButtons() {
        const items = document.querySelectorAll('.container-references');
        const visibleItems = getVisibleItems();
        const maxIndex = items.length - visibleItems;

        document.querySelector('.nav-button.left').style.display = currentIndex === 0 ? 'none' : 'block';
        document.querySelector('.nav-button.right').style.display = currentIndex >= maxIndex ? 'none' : 'block';
    }

    // Ajustement dynamique lors du redimensionnement
    window.addEventListener('resize', () => {
        resetToFirstSlide();
        updateButtons();
    });

    // Détecte le nombre d'éléments visibles
    function getVisibleItems() {
        if (window.innerWidth > 992) {
            return 3;  // 3 éléments sur desktop
        } else if (window.innerWidth > 600) {
            return 2;  // 2 éléments sur tablette
        } else {
            return 1;  // 1 élément sur mobile
        }
    }
})();
</script>

<template>
    <div class="carrousel-wrapper">
        <button class="nav-button left" onclick="prevSlide()">❮</button>
        <div class="carrousel">
            <div class="container-references">
                <div class="profil-reference">
                    <img src="./../../public/picture/references/luc-damas.png" alt="Photo de Luc Damas">
                    <div>
                        <p>{{ $t('luc_damas') }}</p>
                        <p>{{ $t('luc_damas_role') }}</p>
                    </div>
                </div>
                <p>{{ $t('luc_damas_comment') }}</p>
                <h2 class="sousTitre">{{ $t('contact') }}</h2>
                <div class="wrapper">
                    <li class="icon linkedin"
                        onclick="window.open('https://www.linkedin.com/in/luc-damas-0b67731/', '_blank')">
                        <span class="tooltip Linkedin">LinkedIn</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="currentColor">
                            <g>
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                                </path>
                            </g>
                        </svg>
                    </li>
                </div>
            </div>

            <!-- Pascal Colin -->
            <div class="container-references">
                <div class="profil-reference">
                    <img src="./../../public/picture/references/pascal-colin.png" alt="Photo de Pascal Colin">
                    <div>
                        <p>{{ $t('pascal_colin') }}</p>
                        <p>{{ $t('pascal_colin_role') }}</p>
                    </div>
                </div>
                <p>{{ $t('pascal_colin_comment') }}</p>
                <h2 class="sousTitre">{{ $t('contact') }}</h2>
                <div class="wrapper">
                    <li class="icon linkedin"
                        onclick="window.open('https://www.linkedin.com/in/pascal-colin-055a7535/', '_blank')">
                        <span class="tooltip Linkedin">LinkedIn</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="currentColor">
                            <g>
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                                </path>
                            </g>
                        </svg>
                    </li>
                </div>
            </div>

            <!-- Franck Lagoutte -->
            <div class="container-references">
                <div class="profil-reference">
                    <img src="./../../public/picture/references/franck-lagoutte.png" alt="Photo de Franck Lagoutte">
                    <div>
                        <p>{{ $t('franck_lagoutte') }}</p>
                        <p>{{ $t('franck_lagoutte_role') }}</p>
                    </div>
                </div>
                <p>{{ $t('franck_lagoutte_comment') }}</p>
            </div>

            <!-- Hugo Raguin -->
            <div class="container-references">
                <div class="profil-reference">
                    <img src="./../../public/picture/references/Hugo.png" alt="Photo de Hugo Raguin">
                    <div>
                        <p>{{ $t('hugo_raguin') }}</p>
                        <p>{{ $t('hugo_raguin_role') }}</p>
                    </div>
                </div>
                <p>{{ $t('hugo_raguin_comment') }}</p>
                <h2 class="sousTitre">{{ $t('contact') }}</h2>
                <div class="wrapper">
                    <li class="icon linkedin"
                        onclick="window.open('https://www.linkedin.com/in/hugo-raguin-220b29227/', '_blank')">
                        <span class="tooltip Linkedin">LinkedIn</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="currentColor">
                            <g>
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                                </path>
                            </g>
                        </svg>
                    </li>
                </div>
            </div>

            <!-- Tuong Vy Pham Huynh -->
            <div class="container-references">
                <div class="profil-reference">
                    <img src="./../../public/picture/references/Vy.png" alt="Photo de Tuong Vy Pham Huynh">
                    <div>
                        <p>{{ $t('tuong_vy') }}</p>
                        <p>{{ $t('tuong_vy_role') }}</p>
                    </div>
                </div>
                <p>{{ $t('tuong_vy_comment') }}</p>
                <h2 class="sousTitre">{{ $t('contact') }}</h2>
                <div class="wrapper">
                    <li class="icon linkedin" onclick="window.open('https://www.linkedin.com/in/phtuongvy/', '_blank')">
                        <span class="tooltip Linkedin">LinkedIn</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                            fill="currentColor">
                            <g>
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z">
                                </path>
                            </g>
                        </svg>
                    </li>
                </div>
            </div>
        </div>
        <button class="nav-button right" onclick="nextSlide()">❯</button>
    </div>
</template>

<style scoped>
.carrousel-wrapper {
    display: flex;
    justify-content: center; /* Centre horizontalement */
    align-items: center; /* Centre verticalement si nécessaire */
    width: 100%; /* Occupe toute la largeur du parent */
    height: 100vh; /* Ajuste la hauteur selon ton besoin */
    position: relative; /* Assure le positionnement des boutons */
}


.carrousel {
    display: flex;
    transition: transform 0.7s ease-in-out;
    gap: 30px;
    /* Espacement entre les éléments */
    width: 80%;

}

.container-references {
    flex: 0 0 calc(100%/3 - 30px);
    /* Largeur fixe pour 3 par ligne */
    box-shadow: 0 8px 16px var(--box-shadow);
    background-color: var(--sidebar-bg-color);
    padding: 20px;
    border-radius: var(--border-radius);
    transition: transform 0.3s ease;
    margin: 10px 0;
}

.profil-reference {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 10px;
}

.container-references img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
}


/* Flèches de navigation */
.nav-button {
    background-color: var(--button-bg-color);
    color: white;
    border: none;
    font-size: 30px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    transition: background-color 0.3s ease;
}

.nav-button:hover {
    background-color: var(--button-hover-color);
}

.nav-button:disabled {
    opacity: 0;
    pointer-events: none;
}


.nav-button.right {
    right: 10px;
}
.nav-button.left {
    left: 10px;
}


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

/* RESPONSIVE DESIGN */
@media (max-width: 992px) {
    .container-references {
        flex: 0 0 calc(50% - 30px);
        /* 2 éléments par ligne sur tablette */
    }
}

@media (max-width: 600px) {
    .container-references {
        flex: 0 0 100%;
        /* 1 élément visible sur mobile */
    }

    .nav-button {
        font-size: 20px;
        width: 40px;
        height: 40px;
    }
}
</style>
