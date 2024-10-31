<script setup lang="ts">
import { ref, onMounted } from 'vue';

const currentDate = ref('');
const currentIndex = ref(0);
const frenteIMG = ref([
  { img: '/Frente-1.png', title: 'Cross Rider' },
  { img: '/Frente-2.png', title: 'Cross Rider' },
  { img: '/Frente-3.png', title: 'Cross Rider' },
]);

const next = () => {
  if (currentIndex.value < frenteIMG.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0; // Volta ao início
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = frenteIMG.value.length - 1; // Volta ao final
  }
};

onMounted(() => {
  const date = new Date();
  currentDate.value = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'numeric',
    year: 'numeric',
  });
});
</script>

<template>
  <main>
    <div class="computed">
      <div class="fundo">
        <div class="header">
          <h2>Chassi</h2>
          <h2>Motorização</h2>
          <h2>Tecnologia</h2>
          <img src="/logo.png" alt="logo" class="logo" />
          <div class="hamburger">&#9776;</div>
          <div class="linha"></div>
        </div>
        <div class="main">
          <div class="titulo">
            <h1>Ghost Rider 900</h1>
          </div>
          <div class="moto">
            <div class="frente">
              <button @click="prev" class="carrosel-button">❮</button>
              <div class="grupo">
                <div v-for="(frent, index) in frenteIMG" v-show="index === currentIndex" :key="index" class="frenteIMG">
                  <img :src="frent.img" :alt="frent.title" />
                </div>
              </div>
              <button @click="next" class="carrosel-button">❯</button>
            </div>
            <div class="motor">
              <img src="/Motor-1.png" alt="motor" class="logo" />
            </div>
            <div class="rodaFrente">
              <img src="/RodaFrente-1.png" alt="roda frente" class="logo" />
            </div>
            <div class="rodaTraseira">
              <img src="/RodaTraseira-1.png" alt="roda traseira" class="logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.computed {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  height: 80vh;
  width: 125vh;
  background-color: rgb(30, 30, 30);
  margin-top: 8%;
  border-radius: 1%;
}

.fundo {
  height: 76vh;
  width: 122vh;
  background-color: black;
  border-radius: 1%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  width: 100%;
}
.header h2 {
  padding: 0 1%;
  color: white;
}

.logo {
  width: 14%;
  text-align: center;
}

.hamburger {
  margin-left: auto;
  font-size: 2em;
  color: white;
}

.main {
  align-items: center;
}

.titulo {
  background-color: black;
  color: white;
  width: 100%;
  font-size: 30px;
}

.moto {
  position: relative;
  height: 490px;
  background-color: white;
  margin: 20px;
  border-radius: 10px;
}

.frente,
.rodaTraseira,
.rodaFrente,
.motor {
  position: absolute;
}

.frente {
  position: relative;
  top: 10%;
  left: 35%;
  display: flex;
  align-items: center;
}

.carrosel-button {
  background-color: rgba(128, 128, 128, 0.623);
  border: none;
  font-size: 2rem;
  cursor: pointer;
  width: 20px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  position: absolute;
}

.carrosel-button:first-of-type { /* Botão anterior à esquerda */
  left: -20px; /* Ajustar a posição para dar mais espaço */
  margin-right: 10px; /* Adicionar margem à direita */
}

.carrosel-button:last-of-type { /* Botão próximo à direita */
  
  margin-left: 150px; /* Adicionar margem à esquerda */
}



.frenteIMG img {
  width: 150px;
  height: auto;
  border-radius: 3%;
}

.frenteIMG h3 {
  text-align: center;
  margin-top: 0.5rem;
  color: black;
}

.rodaTraseira {
  top: 37%;
  left: 50%;
  width: 90%;
}

.rodaFrente {
  bottom: 26%;
  left: 24%;
  width: 80%;
}

.motor {
  bottom: 30%;
  left: 39%;
  width: 60%;
}
</style>
