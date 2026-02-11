import { ref } from 'vue';

// État réactif pour savoir si l'utilisateur est connecté
export const isAuthenticated = ref(!!localStorage.getItem("userConnected"));

export const authService = {
    login(user) {
        localStorage.setItem("userConnected", JSON.stringify(user));
        isAuthenticated.value = true;
    },
    logout() {
        localStorage.removeItem("userConnected");
        isAuthenticated.value = false;
    },
    getUser() {
        return JSON.parse(localStorage.getItem("userConnected"));
    }
};