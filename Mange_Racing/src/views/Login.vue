<script lang="ts">
import { ref } from 'vue';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const errorMessage = ref('');

    const login = async () => {
      try {
        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();

        const user = users.find(
          (u: { email: string; password: string }) => u.email === email.value && u.password === password.value
        );

        if (user) {
          alert('Login bem-sucedido!');
        } else {
          errorMessage.value = 'Usuário ou senha inválidos';
        }
      } catch (error) {
        errorMessage.value = 'Erro ao conectar ao servidor';
      }
    };

    return {
      email,
      password,
      errorMessage,
      login
    };
  }
};
</script>


<template>
    <main>
      <div class="login">
        <h1>Faça o seu login</h1>
        <label for="email">Seu e-mail:</label>
        <input v-model="email" type="email" id="email" />
        <label for="password">Sua senha</label>
        <input v-model="password" type="password" id="password" />
        <button @click="login">Entrar</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </main>
  </template>
  

<style>
.login {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #f5f5f5;
    height: 60vh;
    width: 30vw;
    margin: 7% auto;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(255, 255, 255, 0.1);
    padding: 2rem;
}

.login h1 {
    color: #333;
    margin-bottom: 1rem;
    font-size: 2rem;
}

.login label {
    color: #555;
    margin-top: 1rem;
    font-weight: bold;
}

.login input {
    width: 100%;
    padding: 0.8rem;
    margin-top: 0.5rem;
    border-radius: 10px;
    border: 1px solid #ccc;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 1rem;
}

.login input:focus {
    outline: none;
    border-color: #000000;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.25);
}

.login button {
    margin-top: 2rem;
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    border: none;
    background-color: #000000;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.login button:hover {
    background-color: #626060;
}
.error-message {
  color: red;
  margin-top: 1rem;
}



</style>