<script setup lang="ts">
import { ref, onMounted } from 'vue';

//parte da frente
const frenteCurrentDate = ref('');
const frenteCurrentIndex = ref(0);
const frenteIMG = ref([
  { img: '/Frente-1.png', title: 'Cross Rider' },
  { img: '/Frente-2.png', title: 'Cross Rider' },
  { img: '/Frente-3.png', title: 'Cross Rider' },
]);

const frenteNext = () => {
  if (frenteCurrentIndex.value < frenteIMG.value.length - 1) {
    frenteCurrentIndex.value++;
  } else {
    frenteCurrentIndex.value = 0; // Volta ao início
  }
};

const frentePrev = () => {
  if (frenteCurrentIndex.value > 0) {
    frenteCurrentIndex.value--;
  } else {
    frenteCurrentIndex.value = frenteIMG.value.length - 1; // Volta ao final
  }
};

// parte do motor 

const motorCurrentDate = ref('');
const motorCurrentIndex = ref(0);
const motorIMG = ref([
  { img: '/Motor-1.png', title: 'Cross Rider' },
  { img: '/Motor-2.png', title: 'Cross Rider' },
  { img: '/Motor-3.png', title: 'Cross Rider' },
]);

const motorNext = () => {
  if (motorCurrentIndex.value < motorIMG.value.length - 1) {
    motorCurrentIndex.value++;
  } else {
    motorCurrentIndex.value = 0; // Volta ao início
  }
};

const motorPrev = () => {
  if (motorCurrentIndex.value > 0) {
    motorCurrentIndex.value--;
  } else {
    motorCurrentIndex.value = motorIMG.value.length - 1; // Volta ao final
  }
};

//rodaFrente

const rodaFrenteCurrentDate = ref('');
const rodaFrenteCurrentIndex = ref(0);
const rodaFrenteIMG = ref([
  { img: '/RodaFrente-1.png', title: 'Cross Rider' },
  { img: '/RodaFrente-2.png', title: 'Cross Rider' },
  { img: '/RodaFrente-3.png', title: 'Cross Rider' },
]);

const rodaFrenteNext = () => {
  if (rodaFrenteCurrentIndex.value <rodaFrenteIMG.value.length - 1) {
    rodaFrenteCurrentIndex.value++;
  } else {
    rodaFrenteCurrentIndex.value = 0; // Volta ao início
  }
};

const rodaFrentePrev = () => {
  if (rodaFrenteCurrentIndex.value > 0) {
    rodaFrenteCurrentIndex.value--;
  } else {
    rodaFrenteCurrentIndex.value = rodaFrenteIMG.value.length - 1; // Volta ao final
  }
};

//rodaTraseira

const rodaTraseiraCurrentDate = ref('');
const rodaTraseiraCurrentIndex = ref(0);
const rodaTraseiraIMG = ref([
  { img: '/RodaTraseira-1.png', title: 'Cross Rider' },
  { img: '/RodaTraseira-2.png', title: 'Cross Rider' },
  { img: '/RodaTraseira-4.png', title: 'Cross Rider' },
]);

const rodaTraseiraNext = () => {
  if (rodaTraseiraCurrentIndex.value <rodaTraseiraIMG.value.length - 1) {
    rodaTraseiraCurrentIndex.value++;
  } else {
    rodaTraseiraCurrentIndex.value = 0; // Volta ao início
  }
};

const rodaTraseiraPrev = () => {
  if (rodaTraseiraCurrentIndex.value > 0) {
    rodaTraseiraCurrentIndex.value--;
  } else {
    rodaTraseiraCurrentIndex.value = rodaTraseiraIMG.value.length - 1; // Volta ao final
  }
};

onMounted(() => {
  const date = new Date();
  frenteCurrentDate.value = date.toLocaleDateString('pt-BR', {
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
              <button @click="frentePrev" class="carrosel-button">❮</button>
              <div class="grupo">
                <div v-for="(frent, index) in frenteIMG" v-show="index === frenteCurrentIndex" :key="index" class="frenteIMG">
                  <img :src="frent.img" :alt="frent.title" />
                </div>
              </div>
              <button @click="frenteNext" class="carrosel-button">❯</button>
            </div>
            <div class="motor">
              <button @click="motorNext" class="carrosel-buttonMotor">❮</button>
              <div class="grupo">
                <div v-for="(motors, index) in motorIMG" v-show="index === motorCurrentIndex" :key="index" class="motorIMG">
                  <img :src="motors.img" :alt="motors.title" />
                </div>
              </div>
              <button @click="motorNext" class="carrosel-buttonMotor">❯</button>
            </div>
            <div class="rodaFrente">
              <button @click="rodaFrenteNext" class="carrosel-buttonRodaFrente">❮</button>
              <div class="grupo">
                <div v-for="(rodaFrentes, index) in rodaFrenteIMG" v-show="index === rodaFrenteCurrentIndex" :key="index" class="rodaFrenteIMG">
                  <img :src="rodaFrentes.img" :alt="rodaFrentes.title" />
                </div>
              </div>
              <button @click="rodaFrenteNext" class="carrosel-buttonRodaFrente">❯</button>
            </div>
            <div class="rodaTraseira">
              <button @click="rodaTraseiraNext" class="carrosel-buttonRodaTraseira">❮</button>
              <div class="grupo">
                <div v-for="(rodaTraseiras, index) in rodaTraseiraIMG" v-show="index === rodaTraseiraCurrentIndex" :key="index" class="rodaTraseiraIMG">
                  <img :src="rodaTraseiras.img" :alt="rodaTraseiras.title" />
                </div>
              </div>
              <button @click="rodaTraseiraNext" class="carrosel-buttonRodaTraseira">❯</button>
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
/* motor */

.carrosel-buttonMotor {
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
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.carrosel-buttonMotor:first-of-type { /* Botão anterior à esquerda */
  left: 36%; /* Ajuste conforme necessário */
}

.carrosel-buttonMotor:last-of-type { /* Botão próximo à direita */
  right: 36%; /* Ajuste conforme necessário */
}

.motorIMG img {
  width: 140px;
  height: auto;
  border-radius: 3%;
}

.motorIMG h3 {
  text-align: center;
  margin-top: 0.5rem;
  color: black;
}
/* roda frente */

.carrosel-buttonRodaFrente {
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
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.carrosel-buttonRodaFrente:first-of-type { /* Botão anterior à esquerda */
  left: 39%; /* Ajuste conforme necessário */
}

.carrosel-buttonRodaFrente:last-of-type { /* Botão próximo à direita */
  right: 39%; /* Ajuste conforme necessário */
}

.rodaFrenteIMG img {
  width: 140px;
  height: auto;
  border-radius: 3%;
}

.rodaFrenteIMG h3 {
  text-align: center;
  margin-top: 0.5rem;
  color: black;
}

/* roda TRASEIRA */

.carrosel-buttonRodaTraseira {
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
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

.carrosel-buttonRodaTraseira:first-of-type { /* Botão anterior à esquerda */
  left: 40%; /* Ajuste conforme necessário */
}

.carrosel-buttonRodaTraseira:last-of-type { /* Botão próximo à direita */
  right: 41%; /* Ajuste conforme necessário */
}

.rodaTraseiraIMG img {
  width: 140px;
  height: auto;
  border-radius: 3%;
}

.rodaTraseiraIMG h3 {
  text-align: center;
  margin-top: 0.5rem;
  color: black;
}

.rodaTraseira {
  top: 37%;
  left: 20%;
  width: 90%;
}

.rodaFrente {
  bottom: 26%;
  left: -20%;
  width: 80%;
}

.motor {
  bottom: 30%;
  left: 12%;
  width: 60%;
}
</style>
