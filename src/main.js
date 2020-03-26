import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue';
import i18n from './i18n';
import VueSweetalert2 from 'vue-sweetalert2';
import Vuelidate from 'vuelidate';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.use(VueSweetalert2);
Vue.use(Vuelidate);

import Home from './components/Home.vue';
import SMS from './components/SMS.vue';
import FormA from './components/FormA.vue';
import FormB from './components/FormB.vue';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue2-timepicker/dist/VueTimepicker.css'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        default: Home
      }
    },
    {
      path: '/sms',
      components: {
        default: SMS
      }
    },
    {
      path: '/forma',
      components: {
        default: FormA
      }
    },
    {
      path: '/formb',
      components: {
        default: FormB
      }
    }
  ]
});


Vue.use( VueRouter );

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
