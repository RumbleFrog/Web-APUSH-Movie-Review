// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

import fontAwesome from '@fortawesome/fontawesome';
import faSolid from '@fortawesome/fontawesome-free-solid';
import faRegular from '@fortawesome/fontawesome-free-regular';
import faBrands from '@fortawesome/fontawesome-free-brands';

import 'animate.css/animate.min.css';

import App from './App';
import router from './router';

Vue.use(Buefy, {
    defaultIconPack: 'fas',
});

fontAwesome.library.add(faSolid);
fontAwesome.library.add(faRegular);
fontAwesome.library.add(faBrands);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
});
