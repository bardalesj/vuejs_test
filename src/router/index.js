import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layouts/Layout.vue'
import Pets from '@/components/pets.vue'
import PetsForm from '@/components/petsForm.vue'
Vue.use(Router)
const router = new Router({
mode: 'history',
routes : [
        {
          path: '/',
          redirect: '/home/pets',
          name: 'Layout',
          component: Layout,
          children:[
            {
              path: '/home/pets',
              name: 'Pet',
              component: {
                render (c){ return c('router-view') }
              },
              children:[
                {
                  path:'/home/pets',
                  name: 'Pets',
                  component: Pets,
                },
                {
                  path:'/home/pets/:id',
                  name: 'PetsDetails',
                  component: PetsForm,
                },
              ]
            }
          ]
        },
      ]
})

export default router;
