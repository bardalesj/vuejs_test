import Vue from 'vue'
import Router from 'vue-router'
import Pets from '@/components/pets.vue'
import PetsForm from '@/components/petsForm.vue'
Vue.use(Router)
const router = new Router({
mode: 'history',
routes : [
  {
    path: '/',
    name : 'Pets',
    component: Pets,
  },
  {
    path: '/pets/:id',
    name : 'PetsForm',
    component: PetsForm,
  },
]
})

export default router;
