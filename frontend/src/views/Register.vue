<script setup>
import { ref } from 'vue';
import { register } from '../services/auth';

const name = ref('');
const email = ref('');
const password = ref('');

async function doRegister() {
    try {
        await register(name.value, email.value, password.value);
        console.log('Registrado!');
    } catch (error) {
        console.error(error.response?.data);
    }
}
</script>

<template>
  <form @submit.prevent="doRegister">
    <input v-model="name" type="text" placeholder="Nome completo">
    <input v-model="email" type="email" placeholder="Email">
    <input v-model="password" type="password" placeholder="Senha">
    <button type="submit">Registrar</button>
  </form>
</template>
