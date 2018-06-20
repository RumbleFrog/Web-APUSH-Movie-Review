import Vue from 'vue';
import Router from 'vue-router';

import Landing from '@/components/Landing';

import ForrestGump from '@/components/Movies/ForrestGump';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: Landing,
        },
        {
            path: '/ForrestGump',
            name: 'ForrestGump',
            component: ForrestGump,
        },
    ],
});
