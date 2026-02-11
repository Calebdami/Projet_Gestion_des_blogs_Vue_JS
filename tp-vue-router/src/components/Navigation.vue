<script setup>
    import { authService } from '@/services/authService';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    function handleLogout() {
        authService.logout();
        router.push('/signIn');
    }
</script>

<template>
    <nav class="menu">
        <RouterLink class="menuNav" to="/">Accueil</RouterLink>
        <RouterLink class="menuNav" to="/about">À propos</RouterLink>
        <RouterLink class="menuNav" to="/services">Services</RouterLink>
        <RouterLink class="menuNav" to="/blog">Blog</RouterLink>
        <RouterLink class="menuNav" to="/contact">Contact</RouterLink>
        <a class="menuNav" href="#" @click.prevent="handleLogout">Log out</a>
    </nav>
</template>