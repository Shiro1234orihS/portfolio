<script setup>
import MenuProjet from '@/components/MenuProjet.vue'
import { onMounted, ref } from 'vue';

const showCompetences = ref(false);

function toggleCompetences() {
    showCompetences.value = !showCompetences.value;
}

onMounted(() => {
    const circles = document.querySelectorAll('.progress-circle');

    circles.forEach(circle => {
        const percent = circle.dataset.percent;
        const progress = circle.querySelector('.progress');
        const radius = progress.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percent / 100) * circumference;

        progress.style.strokeDashoffset = offset;
    });
});
</script>

<template>
    <MenuProjet />
    <h1 class="section-title">{{ $t('project_title') }}</h1>

    <div class="projet-container">
        <p v-html="$t('project_description')"></p>

        <button class="bottone1" @click="toggleCompetences">
            <strong>
                {{ showCompetences ? $t('hide_competences') : $t('toggle_competences') }}
            </strong>
        </button>

        <div v-if="showCompetences" class="mt-4 p-4 rounded shadow-inner border-r-4 border-primary-color">
            <h2 class="degree-title">{{ $t('developed_features') }}</h2>
            <ul>
                <li v-html="$t('feature_deployment')"></li>
                <li v-html="$t('feature_security')"></li>
            </ul>

            <h2 class="degree-title">{{ $t('challenges_solutions') }}</h2>
            <p v-html="$t('challenge_dependencies')"></p>
            <p v-html="$t('challenge_scalability')"></p>
        </div>

        <h2 class="degree-title">{{ $t('technical_skills') }}</h2>
        <ul id="content-skill" class="group-skill">

            <fieldset id="containerisation" class="group-skill">
                <legend>Front</legend>
                <div class="skill">
                    <div class="progress-circle" data-percent="90">
                        <svg>
                            <circle cx="50" cy="50" r="45"></circle>
                            <circle class="progress" cx="50" cy="50" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/vueIcone.png" alt="vueIcone">
                    </div>
                    <p class="name-technical">Vue JS</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="85">
                        <svg>
                            <circle cx="50" cy="50" r="45"></circle>
                            <circle class="progress" cx="50" cy="50" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/Pinialogo.png" alt="Pinialogo">
                    </div>
                    <p class="name-technical">Pinia</p>
                </div>
            </fieldset>

            <fieldset id="backend" class="group-skill">
                <legend>Backend et API</legend>
                <div class="skill">
                    <div class="progress-circle" data-percent="80">
                        <svg>
                            <circle cx="50" cy="50" r="45"></circle>
                            <circle class="progress" cx="50" cy="50" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/ASPIcone.png" alt="ASP.NET Core">
                    </div>
                    <p class="name-technical">ASP.NET Core</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="75">
                        <svg>
                            <circle cx="50" cy="50" r="45"></circle>
                            <circle class="progress" cx="50" cy="50" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/EntityFrameworkCore.png" alt="Entity Framework">
                    </div>
                    <p class="name-technical">Entity Framework Core</p>
                </div>
            </fieldset>

            <fieldset id="database" class="group-skill">
                <legend>Base de données</legend>
                <div class="skill">
                    <div class="progress-circle" data-percent="75">
                        <svg>
                            <circle cx="50" cy="50" r="45"></circle>
                            <circle class="progress" cx="50" cy="50" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/PostgresqlIcone.png" alt="PostgreSQL">
                    </div>
                    <p class="name-technical">PostgreSQL</p>
                </div>
            </fieldset>
        </ul>

        <p>
            {{ $t('source_code') }}
            <a href="https://github.com/phtuongvy/virtualisation_X" target="_blank">GitHub Repository</a>
        </p>
    </div>
</template>




<style scoped></style>
