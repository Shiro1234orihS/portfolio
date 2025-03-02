<script setup>

</script>

<template>
    <div>
        <router-link to="project" class="close-details back-to-project">
            <svg height="16" width="16" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024">
                <path id="fill-white"
                    d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z">
                </path>
            </svg>
            <span>Retour</span>
        </router-link>
        <div style="display: flex; align-items: center; justify-content: center; gap: 2%;">
            <router-link to="westofsurvival" class="menu-projet ripple-button">
                <div>
                    <img src="./../../public/picture/westsofsurvival/icone_westsofsurvival.png" alt="Wests Of Survival">
                </div>
            </router-link>
            <router-link to="laravelbmw" class="menu-projet">
                <div>
                    <img src="./../../public/picture/BmwLaravel/incone_laravel.png" alt="Projet BMW Laravel">
                </div>
            </router-link>
            <router-link to="vuebmx" class="menu-projet ripple-button">
                <div>
                    <img src="./../../public/picture/BmwVueJs/icone_vue.js.png" alt="Projet BMW Vue.js">
                </div>
            </router-link>
            <router-link to="vueprojex" class="menu-projet ripple-button">
                <div>
                    <img src="./../../public/picture/YProject/acceuil.webp" alt="Projet Y avec Docker">
                </div>
            </router-link>
            <router-link to="miniprojet" class="menu-projet ripple-button">
                <div>
                    <img src="./../../public/picture/MiniProjet/logo.png" alt="Mini projets personnels">
                </div>
            </router-link>
            <router-link to="keypass" class="menu-projet ripple-button">
                <div>
                    <img src="./../../public/picture/Keypass/image.png" alt="Site de gestion de mots de passe">
                </div>
            </router-link>
            <router-link to="earningcall" class="menu-projet ripple-button">
                <div>
                    <img src="./../../public/picture/earningCall/iconebull.png" alt="Site Earning Call">
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.menu-projet {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    overflow: hidden;
    box-shadow: 0 8px 20px var(--box-shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.menu-projet div {
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 8px 20px var(--box-shadow);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.menu-projet img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* L'image couvre toute la div */
    transition: transform 0.3s ease;
}

/* Animation lors du survol */
.menu-projet div:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px var(--box-shadow);
}

.menu-projet div:hover img {
    transform: scale(1.1);
    /* Agrandit légèrement l'image */
}

.menu-projet div:hover .overlay {
    height: 100%;
    opacity: 1;
}

#fill-white {
    fill: var(--text-color);

}
</style>
