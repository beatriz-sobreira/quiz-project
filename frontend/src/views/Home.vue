<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goLogin() {
  router.push('/login')
}

function goRegister() {
  router.push('/register')
}
</script>

<template>
    <div class="container">
        <div class="title">
            <h1>Bem-vindo ao Quiz Web!</h1>
            <p>Teste seus conhecimentos respondendo quizzes interativos!</p>

            <div style="margin-top: 30px;">
            <button @click="goLogin" class="login-btn">Login</button>

            <button @click="goRegister" class="register-btn">Cadastro</button>
            </div>
        </div>
    </div>

</template>

<style>
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .register-btn{
        padding: 12px 25px;
        background: #2196F3;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 16px;
    }

    .login-btn{
        padding: 12px 25px;
        margin-right: 10px;
        background: #4CAF50;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 16px;
    }
</style>
