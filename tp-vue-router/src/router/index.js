import { createRouter, createWebHistory } from 'vue-router'

import BlogDetail from '@/views/BlogDetail.vue'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Services from '@/views/Services.vue'
import Blog from '@/views/Blog.vue'
import Contact from '@/views/Contact.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/services', name: 'services', component: Services },
    { path: '/blog', name: 'blog', component: Blog },
    { path: '/blog/:id', name: 'blog-detail', component: BlogDetail },
    { path: '/contact', name: 'contact', component: Contact },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('@/views/NotFound.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router