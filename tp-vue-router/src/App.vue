<script setup>
    import Navigation from '@/components/Navigation.vue'
</script>

<template>
    <div class="app">
        <div class="container">
            <Navigation />
            <RouterView />
        </div>
    </div>
</template>

<style scoped>
    .app{
        min-height: 100vh;
        background-color: #A8DADC;
        display: flex;
        justify-content: center;
        gap: 2rem;
    }

    .container{
        margin-top: 2vh;
        width: 80vw;
    }

</style>
