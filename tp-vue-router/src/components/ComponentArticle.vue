<script setup>
    const props = defineProps({post: {type:Object, required:true} });

</script>

<template>
    <article>
        <h2>{{ post.id }} - {{ post.title }} </h2>
        <p>{{post.body.split(' ').reduce((n, i, j)=>{j<=20?j==20?n+=i+'...':n+=i+' ':n; return n}, '')}}</p>
        <router-link class="show" :to="{name: 'blog-detail', params: {id: post.id}}">See All</router-link>
        <p class="info"><span class="clickLike" @click.prevent="post.reactions.likes++">🧡</span> {{ post.reactions.likes }} 🧐 {{ post.views }}</p>
    </article>
</template>
