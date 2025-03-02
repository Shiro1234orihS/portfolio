<script setup>


</script>

<template>
    <h1 class="section-title">{{ $t('projects_academic_title') }}</h1>
    <div class="projet-container">
        <h3 class="degree-title">{{ $t('first_year_project') }}</h3>
        <div class="flex">
            <router-link class="lien" to="/westofsurvival">
                <div class="container-projet">
                    <div class="projet-item">
                        <img src="./../../public/picture/westsofsurvival/iconebull.png" alt="Wests Of Survival">
                        <div class="overlay">
                            <h3>{{ $t('project_west') }}</h3>
                            <p class="text-base ">{{ $t('project_west_desc') }}</p>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        <h3 class="degree-title">{{ $t('second_year_project') }}</h3>
        <div class="flex">
            <router-link class="lien" to="laravelbmw">
                <div class="container-projet">
                    <div class="projet-item">
                        <img src="./../../public/picture/BmwLaravel/image.png" alt="Projet BMW Laravel">
                        <div class="overlay">
                            <h3>{{ $t('project_bmw_laravel') }}</h3>
                            <p class="text-base ">{{ $t('project_bmw_laravel_desc') }}</p>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link class="lien" to="vuebmx">
                <div class="container-projet">
                    <div class="projet-item">
                        <img src="./../../public/picture/BmwVueJs/icone_vue.js.png" alt="Projet BMW Vue.js">
                        <div class="overlay">
                            <h3>{{ $t('project_bmw_vue') }}</h3>
                            <p class="text-base ">{{ $t('project_bmw_vue_desc') }}</p>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link class="lien" to="vueprojex">
                <div class="container-projet">
                    <div class="projet-item">
                        <img src="./../../public/picture/YProject/acceuil.webp" alt="Projet Y avec Docker">
                        <div class="overlay">
                            <h3>{{ $t('project_docker_y') }}</h3>
                            <p class="text-base ">{{ $t('project_docker_y_desc') }}</p>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
    <h2 class="section-title">{{ $t('projects_personal_title') }}</h2>
    <div class="projet-container">
        <div class="flex">
            <router-link class="lien" to="miniprojet">
                <div class="container-projet">
                    <div class="projet-item">
                        <img src="./../../public/picture/MiniProjet/logo.png" alt="Mini projets personnels">
                        <div class="overlay">
                            <h3>{{ $t('project_mini') }}</h3>
                            <p class="text-base ">{{ $t('project_mini_desc') }}</p>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link class="lien" to="keypass">
                <div class="container-projet">
                    <div class="projet-item">
                        <img src="./../../public/picture/Keypass/image.png" alt="Site de gestion de mots de passe">
                        <div class="overlay">
                            <h3>{{ $t('project_keypass') }}</h3>
                            <p class="text-base ">{{ $t('project_keypass_desc') }}</p>
                        </div>
                    </div>
                </div>
            </router-link>
            <router-link class="lien" to="earningcall">
                <div class="container-projet">
                    <div class="projet-item">
                        <img src="./../../public/picture/earningCall/iconebull.png" alt="Site Earning Call">
                        <div class="overlay">
                            <h3>{{ $t('project_earningcall') }}</h3>
                            <p class="text-base ">{{ $t('project_earningcall_desc') }}</p>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
    </div>

</template>

<style>
.projet-container {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    background-color: var(--sidebar-bg-color);
    border-radius: var(--border-radius);
    box-shadow: 0 10px 25px var(--box-shadow);
    text-align: center;
}

.container-projet {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 506px;
}

.projet-item {
    position: relative;
    width: 75%;
    height: 250px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 8px 20px var(--box-shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.projet-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* L'image couvre toute la div */
    transition: transform 0.3s ease;
}

/* Overlay contenant les informations */
.overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    opacity: 0;
    transition: height 0.4s ease, opacity 0.4s ease;
}

/* Animation lors du survol */
.projet-item:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px var(--box-shadow);
}

.projet-item:hover img {
    transform: scale(1.1);
    /* Agrandit légèrement l'image */
}

.projet-item:hover .overlay {
    height: 100%;
    opacity: 1;
}

.project-details {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.project-details h2 {
    margin-bottom: 20px;
}

.project-details p {
    max-width: 600px;
    text-align: center;
}

.ripple {
    position: absolute;
    width: 50px;
    /* Taille initiale plus grande */
    height: 50px;
    background: rgba(0, 123, 255, 0.5);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple-animation 1.2s ease-out;
    pointer-events: none;
    z-index: -1;
    /* Derrière le bouton */
}

@keyframes ripple-animation {
    from {
        transform: scale(1);
        opacity: 0.8;
    }

    to {
        transform: scale(15);
        /* Échelle plus grande */
        opacity: 0;
    }
}
</style>