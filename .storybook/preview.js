import 'quasar/dist/quasar.min.css'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/fontawesome-v5'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

import 'quasar/dist/quasar.css'
// import 'src/css/app.scss' // if you have an app.scss|sass|styl main file

import Vue from 'vue';
import VueRouter from 'vue-router';


import Quasar from 'quasar';

Vue.use(VueRouter);
Vue.use(Quasar, { config: {}, directives: {} });


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
