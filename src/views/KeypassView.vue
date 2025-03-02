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
    <h1 class="section-title" v-html="$t('project_title')"></h1>

    <div class="projet-container">
        <h2 class="degree-title" v-html="$t('project_presentation')" ></h2>
        <p v-html="$t('project_description')"></p>
        <ul>
            <li v-html="$t('project_feature_1')"></li>
            <li v-html="$t('project_feature_2')"></li>
            <li v-html="$t('project_feature_3')"></li>
        </ul>
        <p v-html="$t('project_security')"></p>

        <h2 class="degree-title" v-html="$t('technologies_used')"></h2>
        <ul>
            <li v-html="$t('tech_frontend')"></li>
            <li v-html="$t('tech_backend')"> </li>
            <li v-html="$t('tech_database')"></li>
            <li v-html="$t('tech_security')"></li>
        </ul>

        <button class="bottone1" @click="toggleCompetences">
            <strong>
                {{ showCompetences ? $t('hide_competences') :$t('toggle_competences')}}
            </strong>
        </button>

        <div v-if="showCompetences" class="mt-4 p-4 rounded shadow-inner border-r-4 border-primary-color">
            <h2 class="degree-title" v-html="$t('developed_features')"></h2>
            <ul>
                <li v-html="$t('feature_1')"></li>
                <li v-html="$t('feature_2')"></li>
                <li v-html="$t('feature_3')"></li>
                <li v-html="$t('feature_4')"></li>
            </ul>

            <h2 class="degree-title" v-html="$t('challenges_solutions')"></h2>
            <p v-html="$t('challenge_1')"></p>
            <p v-html="$t('challenge_2')"></p>
            <p v-html="$t('challenge_3')"></p>
        </div>

        <h2 class="degree-title" v-html="$t('technical_skills')" ></h2>
        <ul id="competencesLaravel" class="group-skill">
            <fieldset id="FrontEnd" class="group-skill">
                <legend>Front-end</legend>
                <div class="skill">
                    <div class="progress-circle" data-percent="90">
                        <svg>
                            <circle cx="50" cy="50" r="45"></circle>
                            <circle class="progress" cx="50" cy="50" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/vueIcone.png" alt="Vue">
                    </div>
                    <p class="name-technical">Vue Js</p>
                </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="90">
                        <svg>
                            <circle cx="50" cy="50" r="45"></circle>
                            <circle class="progress" cx="50" cy="50" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/Pinialogo.png" alt="Vue">
                    </div>
                    <p class="name-technical">Pinia</p>
                </div>
            </fieldset>
            <fieldset id="backend" class="group-skill">
                <legend>Back-end</legend>
                <div class="skill">
                <div class="progress-circle" data-percent="90">
                    <svg>
                        <circle cx="50" cy="50" r="45"></circle>
                        <circle class="progress" cx="50" cy="50" r="45"></circle>
                    </svg>
                    <img src="./../../public/picture/technical/nodeJsIncone.png" alt="Node.js">
                </div>
                <p class="text-base ">{{ $t('nodejs') }}</p>
            </div>
                <div class="skill">
                    <div class="progress-circle" data-percent="90">
                        <svg>
                            <circle cx="50" cy="50" r="45"></circle>
                            <circle class="progress" cx="50" cy="50" r="45"></circle>
                        </svg>
                        <img src="./../../public/picture/technical/nodeJsIncone.png" alt="Laravel">
                    </div>
                    <p class="name-technical">{{ $t('express') }}</p>
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
                        <img src="./../../public/picture/technical/MySQLIcone.png" alt="Mysql">
                    </div>
                    <p class="name-technical">Mysql</p>
                </div>
            </fieldset>
        </ul>

        <h2 class="degree-title"v-html="$t('project_review')"></h2>
        <p v-html="$t('result_1')"></p>
        <p v-html="$t('result_2')"></p>
    </div>
</template>

<style scoped></style>
