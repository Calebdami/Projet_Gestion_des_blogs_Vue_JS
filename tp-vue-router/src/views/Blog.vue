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

    onUnmounted(() => {})

</script>

<template>
    <div class="big">
        <nav class="menu">
            <router-link class="menuNav" :to="{name:'blog'}">Info</router-link>
            <router-link class="menuNav" :to="{name:'actualiteBenin'}">Actualites du Benin</router-link>
            <router-link class="menuNav" to="/blog/actualiteInternationale">Actualites Internationales</router-link>
        </nav>
        <section>
            <h1>Blog</h1>
            <p>Découvrez nos derniers articles.</p>
            <RouterView/>
            <!-- Message de chargement -->
            <p v-if="loading">Chargement des articles...</p>
    
            <!-- Liste des articles -->
            <div v-else class="articles">
                <ComponentArticle  v-for="post in posts" :key="post.id" :post="post"/>
            </div>
        </section>
    </div>
</template>

