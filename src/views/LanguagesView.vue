<script setup>

</script>

<template>
    <h1 class="section-title">{{ $t('languages_title') }}</h1>
    <div class="langauges-container">
        <div class="langauges-item" style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h2 class="degree-title" style="border-radius: 50%;">{{ $t('portuguese') }}</h2>
                <p class="text-base date">{{ $t('portuguese_level') }}</p>
            </div>
            <img src="./../../public/picture/languages/Portugal.png" alt="Drapeau du Portugal">
        </div>
        <div class="langauges-item" style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h2 class="degree-title">{{ $t('french') }}</h2>
                <p class="text-base date">{{ $t('french_level') }}</p>
            </div>
            <img src="./../../public/picture/languages/France.png" alt="Drapeau de la France">
        </div>
        <div class="langauges-item" style="display: flex; justify-content: space-between; align-items: center;">
            <div>
                <h2 class="degree-title">{{ $t('english') }}</h2>
                <p class="text-base date">{{ $t('english_level') }}</p>
            </div>
            <img src="./../../public/picture/languages/Anglais.png" alt="Drapeau du Royaume-Uni">
        </div>
    </div>
</template>

<style scoped>
.langauges-item img {
    width: 30%;
}

.langauges-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
    height: 60%;
}

.langauges-item {
    background-color: var(--hover-bg-color);
    padding: 30px;
    display: flex;
    border-radius: 10px;
    box-shadow: 0 4px 10px var(--box-shadow);
    width: 90%;
    transition: transform 0.3s ease;
}

.langauges-item:hover {
    transform: translateY(-5px);
}
</style>
