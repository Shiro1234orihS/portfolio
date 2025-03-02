<script setup>
import MenuProjet from '@/components/MenuProjet.vue'
import { onMounted } from 'vue';

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
    <h1 class="section-title">{{$t('project_title')}}</h1>

    <div class="projet-container">
        <h2 class="degree-title">{{$t('project_presentation')}}</h2>
        <p  v-html="$t('project_description')">
        </p>
        <p v-html="$t('project_advantages')" >
   
        </p>

        <h2 class="degree-title">{{$t('docker_steps')}}</h2>
        <ol>
            <li v-html="$t('step_1')" ></li>
            <li v-html="$t('step_2')" ></li>
            <li v-html="$t('step_3')" ></li>
            <li v-html="$t('step_4')" ></li>
        </ol>

        <h2 class="degree-title">{{$t('technologies_used')}}</h2>
        <ul>
            <li v-html="$t('tech_docker')"></li>
            <li v-html="$t('tech_compose')" ></li>
            <li v-html="$t('tech_nginx')" ></li>
            <li v-html="$t('tech_database')" ></li>
            <li v-html="$t('tech_ci_cd')" ></li>
        </ul>

        <h2 class="degree-title">{{$t('challenges_solutions')}}</h2>
        <p v-html="$t('challenge_volumes')" >
      
        </p>
        <p v-html="$t('challenge_optimization')">

        </p v-html="$t('project_description')">
       
      
        <p>
            📌 <strong>{{$t('source_code')}}</strong> :
            <a href="https://github.com/phtuongvy/virtualisation_X"
                target="_blank">GitHub Repository</a>
        </p>
    </div>
</template>

<style scoped>
</style>
