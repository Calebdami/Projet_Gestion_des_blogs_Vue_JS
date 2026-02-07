<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router'

    const route = useRoute();
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
        <router-link class="retour" to="/blog">Retour</router-link>
    </section>
</template>
