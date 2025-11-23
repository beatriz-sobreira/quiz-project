<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { register } from '../services/auth';

const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');

async function doRegister() {
    try {
        await register(name.value, email.value, password.value);
        alert("Conta criada com sucesso!");
        router.push('/login');
    } catch (error) {
        console.error(error.response?.data);
        alert("Erro ao criar conta");
    }
}
</script>

<template>
  <form @submit.prevent="doRegister">
    <input v-model="name" placeholder="Nome" />
    <input v-model="email" placeholder="Email" type="email" />
    <input v-model="password" placeholder="Senha" type="password" />
    <button type="submit">Cadastrar</button>
  </form>
</template>
