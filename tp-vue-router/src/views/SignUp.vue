<script setup>
    import { ref } from 'vue';
    import router from '@/router'
    const name = ref('');
    const gmail = ref('');
    const password1 = ref('');
    const password2 = ref('');
    let allUser = ref([]);

    function confirmSignUp(){
        if(name.value.length>3 && password1.value.length>8 && password1.value===password2.value) {
            const newSignUp = {
                id:Date.now(),
                name:name.value,
                gmail:gmail.value,
                password:password1.value
            }
            allUser.value.push(newSignUp);
            localStorage.setItem("allUser", JSON.stringify(allUser));
            name.value = '';
            gmail.value = '';
            password1.value = '';
            password2.value = '';
            router.push('/signIn');
            return;
        };
        name.value = '';
        gmail.value = '';
        password1.value = '';
        password2.value = '';
        confirm('Veillez mettre des valeurs exigees')
        return;
    }
</script>

<template>
    <section>
        <h1>Sign Up</h1>
        <form class="formulaire">
            <label for="">Nom</label>
            <input type="text" placeholder="Name" v-model="name" required>
            <label for="">Gmail</label>
            <input type="gmail" placeholder="Gmail" v-model="gmail" required>
            <label for="">Password</label>
            <input type="password" placeholder="Password" v-model="password1" required>
            <label for="">Confirm Password</label>
            <input type="password" placeholder="Password" v-model="password2" required>
            <button @click.prevent="confirmSignUp">Se connecter</button>
            <RouterLink id="signup" to="/signIn">Vous avez déjà un compte ? Connectez vous</RouterLink>
        </form>
    </section>
</template>