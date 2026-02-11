import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/services/authService';

import BlogDetail from '@/views/BlogDetail.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Services from '@/views/Services.vue'
import Blog from '@/views/Blog.vue'
import Contact from '@/views/Contact.vue'
import SignIn from '@/views/SignIn.vue'
import SignUp from '@/views/SignUp.vue'
import Info from '@/views/Blog/Info.vue'
import ActualiteBenin from '@/views/Blog/ActualiteBenin.vue'
import ActualiteInternationale from '@/views/Blog/ActualiteInternationale.vue'

const routes = [
    { path: '/signIn', name: 'signIn', component: SignIn },
    { path: '/signUp', name: 'signUp', component: SignUp },

    { path: '/', name: 'home', component: Home, meta: { requiresAuth: true }},
    { path: '/about', name: 'about', component: About, meta: { requiresAuth: true } },
    { path: '/services', name: 'services', component: Services, meta: { requiresAuth: true } },
    { path: '/blog', name: 'blog', component: Blog, meta: { requiresAuth: true },children:[
        {path: '', name: 'info', component: Info},
        {path: 'actualiteBenin', name: 'actualiteBenin', component: ActualiteBenin},
        {path: 'actualiteInternationale', name: 'actualiteInternationale', component: ActualiteInternationale},
    ]},
    { path: '/blog/:id', name: 'blog-detail', component: BlogDetail, meta: { requiresAuth: true } },
    { path: '/contact', name: 'contact', component: Contact, meta: { requiresAuth: true } },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/views/NotFound.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const loggedIn = isAuthenticated.value;

    // 1. Si on tente d'aller sur une page privée sans être connecté
    // Par défaut, on protège tout sauf SignIn et SignUp
    if (!loggedIn && to.name !== 'signIn' && to.name !== 'signUp') {
        next({ name: 'signIn' });
    } 
    // 2. Si on est déjà connecté et qu'on essaie d'aller sur SignIn ou SignUp (via l'URL)
    else if (loggedIn && (to.name === 'signIn' || to.name === 'signUp')) {
        next({ name: 'home' });
    } 
    // 3. Sinon, on laisse passer
    else {
        next();
    }
});

export default router
