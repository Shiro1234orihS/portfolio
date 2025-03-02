<script setup>

</script>

<template>
    <div class="main-content">
        <h1 class="section-title">{{ $t('education_title') }}</h1>
        <div class="education-container">
            <div class="education-item">
                <div>
                    <h2 class="degree-title">{{ $t('but_title') }}</h2>
                    <p class="text-base location">{{ $t('but_location') }}</p>
                    <p class="text-base date">{{ $t('but_date') }}</p>
                    <p class="text-base description">{{ $t('but_description') }}</p>
                </div>
                <img src="./../../public/picture/education/IUT.png" alt="Université Savoie Mont Blanc / IUT Annecy">
            </div>
            <div class="education-item">
                <div>
                    <h2 class="degree-title">{{ $t('bac_title') }}</h2>
                    <p class="text-base location">{{ $t('bac_location') }}</p>
                    <p class="text-base date">{{ $t('bac_date') }}</p>
                    <p class="text-base description">{{ $t('bac_description') }}</p>
                </div>
                <img src="./../../public/picture/education/lycee-charles-poncet.jpg"
                    alt="Lycée des Métiers Charles Poncet">
            </div>
        </div>
    </div>
</template>

<style scoped>
.education-item img {
    width: 30%;
}

.education-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    height: 60%;
}

.education-item {
    background-color: var(--hover-bg-color);
    padding: 30px;
    display: flex;
    border-radius: 10px;
    box-shadow: 0 4px 10px var(--box-shadow);
    width: 90%;
    transition: transform 0.3s ease;
}

.education-item:hover {
    transform: translateY(-5px);
}



.location,
.date {
    margin: 5px 0;
    color: var(--text-color);
}

.description {
    margin-top: 15px;
    line-height: 1.6;
    color: var(--text-color);
}
</style>
