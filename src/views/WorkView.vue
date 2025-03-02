<template>
    <h1 class="section-title">Expérience Professionnelle</h1>
    <div class="education-container">
        <div class="work-item">
            <div>
                <h2 class="degree-title">Stage de troisiéme Année - BUT Informatique</h2>
                <p class="text-base location"><strong>Durée :</strong> 14 semaines - <strong>Année :</strong> 2025</p>
                <p class="text-base description"><strong>Entreprise :</strong>Parker Meggitt</p>
                <p class="text-base description"><strong>Poste :</strong> Développeur full stack</p>
                <p class="text-base description">
                    <strong>Missions :</strong> Création de processus de vérification des bases de données à
                    l'aide de Power Automate,
                    optimisation des workflows et amélioration des outils internes.
                </p>
            </div>
            <img src="./../../public/picture/experiancePro/ParkerMeggitt.png" alt="Logo ParkerMeggit">
        </div>
        <div class="work-item">
            <div>
                <h2 class="degree-title">Stage de Deuxième Année - BUT Informatique</h2>
                <p class="text-base location"><strong>Durée :</strong> 12 semaines - <strong>Année :</strong> 2024</p>
                <p class="text-base description"><strong>Entreprise :</strong> Autoroutes et Tunnel du Mont Blanc
                    (ATMB)</p>
                <p class="text-base description"><strong>Poste :</strong> Chargé de Qualité Système d’Information</p>
                <p class="text-base description">
                    <strong>Missions :</strong> Création de processus de vérification des bases de données à
                    l'aide de Power Automate,
                    optimisation des workflows et amélioration des outils internes.
                </p>
            </div>
            <img src="./../../public/picture/experiancePro/ATMB.png"
                alt="Logo Autoroutes et Tunnel du Mont Blanc (ATMB)">
        </div>
        <div class="work-item">
            <div>
                <h2 class="degree-title">Job d'Été - Aide Maçon</h2>
                <p class="text-base location"><strong>Durée :</strong> 12 semaines - <strong>Année :</strong> 2023</p>
                <p class="text-base description"><strong>Entreprise :</strong> Decremps BTP</p>
                <p class="text-base description"><strong>Poste :</strong> Aide Maçon</p>
                <p class="text-base description">
                    <strong>Missions :</strong> Assistance dans les travaux de maçonnerie, préparation des
                    chantiers,
                    manipulation des matériaux de construction et respect des normes de sécurité.
                </p>
            </div>
            <img src="./../../public/picture/experiancePro/Decremps.png" alt="Logo Decremps BTP">
        </div>
    </div>
</template>

<style>
.work-item {
    background-color: var(--hover-bg-color);
    padding: 30px;
    display: flex;
    border-radius: 10px;
    box-shadow: 0 4px 10px var(--box-shadow);
    width: 90%;
    transition: transform 0.3s ease;
    margin-bottom: 2%;
}

.work-item:hover {
    transform: translateY(-5px);
}

.work-item img {
    width: 30%;
}
</style>