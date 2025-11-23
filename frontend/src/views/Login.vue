<script setup>
import { ref } from 'vue';
import { login } from '../services/auth';
import { useRouter } from 'vue-router';

const router = useRouter();

const email = ref('');
const password = ref('');

async function doLogin() {
  try {
    await login(email.value, password.value);

    console.log('Logado com sucesso!');

    router.push('/dashboard');

  } catch (error) {
    console.error(error.response?.data);
  }
}
</script>

<template>
  <form @submit.prevent="doLogin">
    <input v-model="email" type="email" placeholder="Email">
    <input v-model="password" type="password" placeholder="Senha">
    <button type="submit">Entrar</button>
  </form>
</template>
