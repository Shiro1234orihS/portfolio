<script setup>
import MenuProjet from '@/components/MenuProjet.vue'
import { ref, onMounted } from 'vue';

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
    <h1 class="section-title">{{ $t('project_title') }}</h1>
  
    <div class="projet-container">
      <h2 class="degree-title">{{ $t('project_presentation') }}</h2>
      <p>{{ $t('project_description') }}</p>
  
      <button @click="toggleContent" class="bottone1">
        {{ showContent ? $t('hide_details') : $t('toggle_details') }}
      </button>
  
      <div v-if="showContent" class="mt-4 p-4 rounded shadow-inner border-r-4 border-primary-color">
        <h2 class="degree-title">{{ $t('project_features') }}</h2>
        <ul>
          <li v-html="$t('feature_users')"></li>
          <li v-html="$t('feature_catalog_motos')"></li>
          <li v-html="$t('feature_catalog_equipements')"></li>
          <li v-html="$t('feature_admin')"></li>
          <li v-html="$t('feature_powerbi')"></li>
        </ul>
  
        <h2 class="degree-title">{{ $t('challenges') }}</h2>
        <p v-html="$t('challenge_performance')"></p>
        <p v-html="$t('challenge_powerbi')"></p>
      </div>
  
      <h2 class="degree-title">{{ $t('technologies') }}</h2>
      <fieldset class="group-skill">
        <legend>{{ $t('technologies') }}</legend>
        <div class="flex">
          <div class="skill">
            <div class="progress-circle" data-percent="80">
              <svg><circle cx="50" cy="50" r="45"></circle><circle class="progress" cx="50" cy="50" r="45"></circle></svg>
              <img src="./../../public/picture/technical/laravelIcone.png" alt="Laravel" />
            </div>
            <p class="name-technical">Laravel</p>
          </div>
        </div>
      </fieldset>
  
      <h2>{{ $t('available_link') }}</h2>
      <p><a href="http://ricardonunesemilio.fr:8008/" target="_blank">http://ricardonunesemilio.fr:8008/</a></p>
  
      <h2 class="degree-title">{{ $t('project_conclusion') }}</h2>
      <p v-html="$t('conclusion_flexibility')"></p>
      <p v-html="$t('conclusion_user_experience')"></p>
      <p v-html="$t('conclusion_learnings')"></p>
    </div>
  </template>
  

<style scoped>

</style>
