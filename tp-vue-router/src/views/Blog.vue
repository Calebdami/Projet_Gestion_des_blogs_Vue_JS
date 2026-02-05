<script setup>
    import ComponentArticle from '@/components/ComponentArticle.vue';
    import { ref, onMounted, onUnmounted } from 'vue'

    const posts = ref([]);
    const loading = ref(true);

    onMounted(async () => {
        try {
            const response = await fetch('https://dummyjson.com/posts')
            const data = await response.json()
            posts.value = data.posts;
        } 
        catch (error) { console.error('❌ Erreur lors du chargement des articles', error) } 
        finally { loading.value = false }
    })

    onUnmounted(() => { console.log('Le composant Blog est détruit') })

</script>

<template>
    <section>
        <h1>Blog</h1>
        <p>Découvrez nos derniers articles.</p>
        <p v-if="loading">Chargement des articles...</p>
        <div v-else class="articles">
            <ComponentArticle  v-for="post in posts" :key="post.id" :post="post"/>
        </div>
    </section>
</template>

<style scoped>
    h1{
        color: #2a205a;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    p{
        color: #2a205a;
        font-size: 1.5rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .articles {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    article {
        position: relative;
        padding: 15px;
        border: 1px solid;
        border-radius: 1rem;
    }
</style>
