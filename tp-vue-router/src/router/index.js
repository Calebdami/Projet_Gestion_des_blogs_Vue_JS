import { createRouter, createWebHistory } from 'vue-router'

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
    { path: '/', name: 'signIn-signUp', component: SignIn },
    { path: '/signUp', name: 'signUp', component: SignUp },

    { path: '/home', name: 'home', component: Home, meta: { requiresAuth: true }},
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
    // On vérifie si l'utilisateur est marqué comme connecté
    const isAuthenticated = localStorage.getItem("userConnected") === "true";

    if (to.meta.requiresAuth && !isAuthenticated) {
        // Si la page demande une connexion et que l'utilisateur n'est pas connecté
        next({ name: 'signIn-signUp' }); // Redirection vers Sign In
    } 
    else { next()} // Sinon, on laisse passer 
});

export default router