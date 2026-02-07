<script setup>
import { ref } from 'vue'
import router from '@/router' // Assure-toi d'importer le router

const email = ref('');
const password = ref('');
const isError = ref(false); // État pour l'animation
const allUser = ref(JSON.parse(localStorage.getItem("allUser")) || []);

function connect() {
    const userFound = allUser._value.find(u => u.gmail === email.value && u.password === password.value);
    
    if (userFound) {
        localStorage.setItem("userConnected", "true");
        router.push('/home');
    } else {
        // Déclenche l'animation
        isError.value = true;
        // On retire la classe après 500ms pour pouvoir recommencer
        setTimeout(() => { isError.value = false }, 500);
        
        email.value = '';
        password.value = '';
        alert('Identifiants incorrectes')
    }
}
</script>

<template>
    <section>
        <h1>Sign In</h1>
        <!-- La classe 'shake' s'ajoute dynamiquement si isError est vrai -->
        <form class="formulaire" :class="{ 'shake': isError }">
            <input type="text" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <button @click.prevent="connect">Se connecter</button>
            <RouterLink id="signin" to="/signUp">Pas de compte ? Inscription</RouterLink>
        </form>
    </section>
</template>


