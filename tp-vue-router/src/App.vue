<script setup>
    import Navigation from '@/components/Navigation.vue'
</script>

<!-- <template>
    <div class="app">
        <div class="container">
            <Navigation />
            <RouterView />
        </div>
    </div>
</template> -->

<!-- App.vue -->
<template>
    <div class="app">
        <div class="container">
            <!-- On n'affiche la Navigation que si on n'est pas sur SignIn ou SignUp -->
            <Navigation v-if="$route.name !== 'signIn-signUp' && $route.name !== 'signUp'" />
            <RouterView />
        </div>
    </div>
</template>

