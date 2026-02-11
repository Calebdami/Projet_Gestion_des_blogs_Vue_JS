<script setup>
    import { isAuthenticated } from '@/services/authService';
    import Navigation from '@/components/Navigation.vue'
</script>

<template>
    <div class="app">
        <div class="container">
            <!-- On n'affiche la Navigation que si on n'est pas sur SignIn ou SignUp -->
            <Navigation v-if="isAuthenticated"/>
            <RouterView />
        </div>
    </div>
</template>