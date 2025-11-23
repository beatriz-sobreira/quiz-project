<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '../services/auth';

const router = useRouter();

const email = ref('');
const password = ref('');

async function doLogin() {
    try {
        const response = await login(email.value, password.value);
        console.log('Logado com sucesso!', response.data);
        router.push('/dashboard'); // redireciona
    } catch (error) {
        console.error(error.response?.data);
        alert("Email ou senha incorretos");
    }
}
</script>

<template>
  <form @submit.prevent="doLogin">
    <input v-model="email" placeholder="Email" type="email" />
    <input v-model="password" placeholder="Senha" type="password" />
    <button type="submit">Entrar</button>
  </form>
</template>
