import Vue from 'vue';
import Router from 'vue-router';

import Landing from '@/components/Landing';

import ForrestGump from '@/components/Movies/ForrestGump';
import TakingChance from '@/components/Movies/TakingChance';
import SavingPrivateRyan from '@/components/Movies/SavingPrivateRyan';
import HiddenFigures from '@/components/Movies/HiddenFigures';

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
        {
            path: '/TakingChance',
            name: 'TakingChance',
            component: TakingChance,
        },
        {
            path: '/SavingPrivateRyan',
            name: 'SavingPrivateRyan',
            component: SavingPrivateRyan,
        },
        {
            path: '/HiddenFigures',
            name: 'HiddenFigures',
            component: HiddenFigures,
        },
    ],
});
