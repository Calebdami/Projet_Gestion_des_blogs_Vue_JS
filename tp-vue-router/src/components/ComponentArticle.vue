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

<style scoped>

    .show{
        font-size: 1.5rem;
        border-radius: 0.5rem;
        border: solid gray 1px;
    }

    h2{
        color: #2a205a;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .routerLink{
        text-decoration: none;
        color: #2a205a;
    }

    p{
        color: #2a205a;
        font-size: 1.5rem;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }

    .info{
        position: absolute;
        right: 15px;
        bottom: 0rem;
    }

    .clickLike{
        cursor: pointer;
    }

</style>

feature/vue-nomme