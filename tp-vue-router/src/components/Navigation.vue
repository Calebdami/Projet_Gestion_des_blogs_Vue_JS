<template>
    <nav class="menu">
        <RouterLink class="menuNav" to="/">Accueil</RouterLink>
        <RouterLink class="menuNav" to="/about">À propos</RouterLink>
        <RouterLink class="menuNav" to="/services">Services</RouterLink>
        <RouterLink class="menuNav" to="/blog">Blog</RouterLink>
        <RouterLink class="menuNav" to="/contact">Contact</RouterLink>
    </nav>
</template>

<style scoped>
    .menu {
        display: flex;
        justify-content: space-around;
        font-size: 1.5rem;
    }

    .menuNav{
        text-decoration: none;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: #2a205a;
        font-size: 1.5rem;
        transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        user-select: none;
    }

    .menuNav:hover{
        transform: translateY(-2px); /* Soulèvement léger */
    }

    .menuNav:active {
        box-shadow: 0 2px 5px 5px rgba(0, 0, 255, 0.2);
    }

</style>