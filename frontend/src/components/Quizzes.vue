<script>
import api from '../services/api.js'; // Importa o Axios configurado

export default {
  data() {
    return {
      quizzes: [], // Array que vai armazenar os dados do Laravel
    };
  },
  methods: {
    async getQuizzes() {
      try {
        // Faz a requisição para a rota Laravel
        const response = await api.get('/quizzes');
        this.quizzes = response.data; // Salva os quizzes no array
      } catch (error) {
        console.error('Erro ao carregar quizzes:', error);
      }
    },
  },
};
</script>

<template>
  <div>
    <h1>Lista de Quizzes</h1>
    <button @click="getQuizzes">Carregar Quizzes</button>
    <ul>
      <li v-for="quiz in quizzes" :key="quiz.id">{{ quiz.title }}</li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  color: #333;
  margin-bottom: 10px;
}
button {
  padding: 8px 12px;
  margin-bottom: 10px;
  cursor: pointer;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  background-color: #f2f2f2;
  margin-bottom: 5px;
  padding: 6px 10px;
  border-radius: 4px;
}
</style>