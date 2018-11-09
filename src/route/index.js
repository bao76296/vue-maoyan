import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter)

import AppFilm from '@pages/film/AppFilm';
import AppMine from '@pages/mine/AppMine';
import AppCinema from '@pages/cinema/AppCinema';


const routes = [
    {
        path : '/',
        redirect : { name : 'film'}
    },
    {
        path : '/film/:url',
        name : 'film',
        component : AppFilm,
        props: true

    },
    {
        path : '/mine',
        name : 'mine',
        component : AppMine
    },
    {
        path : '/cinema',
        name : 'cinema',
        component : AppCinema
    }
]
const router = new VueRouter({
    mode : 'history',
    routes
})


export default router;
