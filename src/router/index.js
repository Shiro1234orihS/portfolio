import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import EductionView from '@/views/EductionView.vue';
import ProjetView from '@/views/ProjetView.vue';
import WorkView from '@/views/WorkView.vue';
import TechnicalView from '@/views/TechnicalView.vue';
import LanguagesView from '@/views/LanguagesView.vue';
import ReferencesView from '@/views/ReferencesView.vue';
import LoisirView from '@/views/LoisirView.vue';
import WestOfSurvivalView from '@/views/WestOfSurvivalView.vue';
import LaravelBmwView from '@/views/LaravelBmwView.vue';
import VueBmxView from '@/views/VueBmxView.vue';
import VueProjetXView from '@/views/VueProjetXView.vue';
import MiniProjetView from '@/views/MiniProjetView.vue';
import KeypassView from '@/views/KeypassView.vue';
import EarningCallView from '@/views/EarningCallView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/education',
      name: 'education',
      component: EductionView,
    },
    {
      path: '/project',
      name: 'projet',
      component: ProjetView,
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView,
    },
    {
      path: '/technical',
      name: 'technical',
      component: TechnicalView,
    },
    {
      path: '/languages',
      name: 'languages',
      component: LanguagesView,
    },
    {
      path: '/references',
      name: 'references',
      component: ReferencesView,
    },
    {
      path: '/loisir',
      name: 'loisir',
      component: LoisirView,
    },
    {
      path: '/westofsurvival',
      name: 'westofsurvival',
      component: WestOfSurvivalView,
    },
    {
      path: '/vuebmx',
      name: 'vuebmx',
      component: VueBmxView,
    },
    {
      path: '/laravelbmw',
      name: 'laravelbmw',
      component: LaravelBmwView,
    },
    {
      path: '/vueprojex',
      name: 'vueprojetx',
      component: VueProjetXView,
    },
    {
      path: '/miniprojet',
      name: 'miniprojet',
      component: MiniProjetView,
    },
    {
      path: '/keypass',
      name: 'keypass',
      component: KeypassView,
    },
    {
      path: '/earningcall',
      name: 'earningcall',
      component: EarningCallView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
