<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute, useRouter } from 'vue-router'

    const route = useRoute();
    const router = useRouter();
    const post = ref(null);
    const loading = ref(true);

    onMounted(async () => {
        try {
            const response = await fetch( `https://dummyjson.com/posts/${route.params.id}` )
            post.value = await response.json()
        } 
        catch (error) {console.error('Erreur chargement article', error) } 
        finally { loading.value = false }
    })
    
</script>

<template>
    <section>
        <p v-if="loading">Chargement de l'article...</p>
        <article v-else>
            <h1>{{ post.title }}</h1>
            <p>{{ post.body }}</p>
        </article>
        <router-link to="/blog">Retour</router-link>
    </section>
</template>

<style scoped>
    h1 {
        color: #2a205a;
    }

    p {
        font-size: 1.5rem;
        color: #2a205a;
    }
</style>
