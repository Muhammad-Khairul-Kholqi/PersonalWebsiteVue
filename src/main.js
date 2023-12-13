import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import AOS from 'aos';
import 'aos/dist/aos.css';

import App from './App.vue';
import Portfolio from '@/Pages/Portfolio.vue';
import Home from '@/Pages/Home.vue';
import Skills from '@/Pages/Skills.vue';
import SoftSkills from '@/components/Skills/SoftSkills.vue';
import HardSkills from '@/components/Skills/HardSkills.vue';
import ProgamSkills from '@/components/Skills/ProgrammingSkills.vue';
import Contact from '@/Pages/Contact.vue';
import About from '@/Pages/About.vue'

AOS.init();

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/portfolio",
        component: Portfolio
    },
    {
        path: "/skills",
        component: Skills
    },
    {
        path: "/skills/soft-skills",
        component: SoftSkills,
    },
    {
        path: "/skills/hard-skills",
        component: HardSkills,
    },
    {
        path: "/skills/programming-skills",
        component: ProgamSkills
    },
    {
        path: '/contact',
        component: Contact
    },
    {
        path: '/about-me',
        component: About
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

createApp(App).use(router).mount("#app");
