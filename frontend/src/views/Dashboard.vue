<script setup>
import { useRouter } from 'vue-router'
import api from '../services/api'
import { ref, onMounted } from 'vue'

const router = useRouter()
const user = ref(null)

// Buscar usuário autenticado
onMounted(async () => {
  try {
    const response = await api.get('/api/user')
    user.value = response.data
  } catch (err) {
    router.push('/login') // se não estiver logado
  }
})

function logout() {
  api.post('/logout').then(() => {
    router.push('/login')
  })
}

function iniciarQuiz() {
  router.push('/quiz')
}
</script>

<template>
  <div>

    <!-- MENU SUPERIOR -->
    <nav style="
      display: flex;
      justify-content: space-between;
      background: #333;
      padding: 15px;
      color: white;
      font-size: 18px;
    ">
      <div style="display: flex; gap: 20px;">
        <a href="/" style="color: white; text-decoration: none;">Início</a>
        <a href="/ranking" style="color: white; text-decoration: none;">Ranking</a>
      </div>

      <button 
        @click="logout"
        style="
          background: #ff4b4b;
          border: none;
          color: white;
          padding: 8px 15px;
          border-radius: 6px;
          cursor: pointer;
        "
      >
        Sair
      </button>
    </nav>

    <!-- CONTEÚDO -->
    <div style="text-align: center; margin-top: 40px;">
      <h2>Olá, {{ user?.name }} 👋</h2>
      <p>Pronto para começar seu quiz?</p>

      <img 
        src="https://i.imgur.com/yR7ZOcY.png" 
        alt="Quiz imagem"
        style="width: 280px; margin: 20px auto;"
      />

      <button
        @click="iniciarQuiz"
        style="
          padding: 12px 28px;
          background: #4CAF50;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-size: 18px;
          margin-top: 20px;
        "
      >
        Iniciar Quiz
      </button>
    </div>

  </div>
</template>
