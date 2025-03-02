<script setup>
import MenuProjet from '@/components/MenuProjet.vue'
import { ref } from 'vue'
import { onMounted } from 'vue';

const showContent = ref(false)
function toggleContent() {
    showContent.value = !showContent.value
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
    <h1 class="section-title text-center my-6">{{ $t('project_title') }}</h1>
    <div class="projet-container p-6 rounded-lg shadow-lg">
      <h2 class="degree-title mb-4">{{ $t('project_objective') }}</h2>
      <p class="text-base mb-4 leading-relaxed" v-html="$t('project_description')"></p>
  
      <button @click="toggleContent" class="bottone1">
        {{ showContent ? $t('hide_details') : $t('toggle_details') }}
      </button>
  
      <div v-if="showContent" class="mt-4 p-4 rounded shadow-inner border-r-4 border-primary-color">
        <h2 class="degree-title mt-6 mb-2">{{ $t('main_software') }}</h2>
  
        <h3 class="mt-4">{{ $t('tiled') }}</h3>
        <p class="text-base mb-4 leading-relaxed">{{ $t('tiled_description') }}</p>
  
        <h3 class="mt-4">{{ $t('monogame') }}</h3>
        <p class="text-base mb-4 leading-relaxed">{{ $t('monogame_description') }}</p>
  
        <h3 class="mb-2">{{ $t('challenges') }}</h3>
        <p class="text-base mb-2">{{ $t('challenges_description') }}</p>
  
        <h3 class="mb-2">{{ $t('role') }}</h3>
        <p class="text-base mb-2">{{ $t('role_description') }}</p>
  
        <h3 class="mb-2">{{ $t('results') }}</h3>
        <p class="text-base">{{ $t('results_description') }}</p>
      </div>
  
      <h2 class="degree-title">{{ $t('project_skills') }}</h2>
      <fieldset id="api" class="group-skill">
        <legend>{{ $t('technologies') }}</legend>
        <div class="flex">
          <div class="skill">
            <div class="progress-circle" data-percent="95">
              <svg>
                <circle cx="50" cy="50" r="45"></circle>
                <circle class="progress" cx="50" cy="50" r="45"></circle>
              </svg>
              <img src="./../../public/picture/technical/CShapeIcone.png" alt="CSharpIcone" />
            </div>
            <p class="name-technical">{{ $t('csharp') }}</p>
          </div>
        </div>
      </fieldset>
  
      <h2>{{ $t('availability') }}</h2>
      <p>{{ $t('availability_text') }} 
        <a href="https://ricardonunesemilio.fr/jeux_web/phaser/west_of_survival/" target="_blank">{{ $t('available') }}</a>.
      </p>
      <p>{{ $t('github_source') }} 
        <a href="https://github.com/Shiro1234orihS/West-of-Survival" target="_blank">GitHub</a>.
      </p>
    </div>
  </template>
  

<style scoped>
</style>
