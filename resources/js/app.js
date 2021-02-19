

require('./bootstrap');

window.Vue = require('vue').default;

import Vue from 'vue'

import routes from './router'

//ViewUI Meterial
//import VueMaterial from 'vue-material'
//import 'vue-material/dist/vue-material.min.css'
//import 'vue-material/dist/theme/default.css'

//Vue.use(VueMaterial)

//MDB
require("bootstrap-css-only/css/bootstrap.min.css");
require("mdbvue/lib/css/mdb.min.css");
require("@fortawesome/fontawesome-free/css/all.min.css");

//ViewUI Meterial
//import ViewUI from 'view-design';
//import 'view-design/dist/styles/iview.css';

//Vue.use(ViewUI);

//import { Button, Table } from 'view-design';
//Vue.component('Button', Button);
//Vue.component('Table', Table);


const app = new Vue({
    el: '#app',
    router: routes,
});
