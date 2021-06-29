require('./bootstrap');

import router from './routes';
import VueRouter from 'vue-router';
import Index from './Index';

window.Vue = require('vue');

// only for global components 
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vue.component('Example2Component', require('./components/Example2Component.vue').default);



Vue.use(VueRouter);

const app = new Vue({
    el: '#app',
    router : router,
    components: {
    	'Index' : Index,
    }
});
