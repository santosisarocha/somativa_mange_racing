<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useImageStore } from '../stores/useImageStore';

// Definindo os refs para armazenar as imagens e os índices de cada seção
const frenteCurrentDate = ref('');
const frenteCurrentIndex = ref(0);
const frenteIMG = ref([]);

const motorCurrentIndex = ref(0);
const motorIMG = ref([]);

const rodaFrenteCurrentIndex = ref(0);
const rodaFrenteIMG = ref([]);

const rodaTraseiraCurrentIndex = ref(0);
const rodaTraseiraIMG = ref([]);

// Função para buscar as imagens do servidor e filtrar apenas com `title: "City"`
const fetchImages = async () => {
  try {
    const [frenteResponse, motorResponse, rodaFrenteResponse, rodaTraseiraResponse] = await Promise.all([
      fetch('http://localhost:3000/frenteIMG'),
      fetch('http://localhost:3000/motorIMG'),
      fetch('http://localhost:3000/rodaFrenteIMG'),
      fetch('http://localhost:3000/rodaTraseiraIMG')
    ]);

    if (!frenteResponse.ok || !motorResponse.ok || !rodaFrenteResponse.ok || !rodaTraseiraResponse.ok) {
      throw new Error('Erro ao buscar os dados');
    }

    const frenteData = await frenteResponse.json();
    const motorData = await motorResponse.json();
    const rodaFrenteData = await rodaFrenteResponse.json();
    const rodaTraseiraData = await rodaTraseiraResponse.json();

    // Filtra para pegar apenas os itens com title "Ghost"
    frenteIMG.value = frenteData.filter(img => img.title === "Ghost");
    motorIMG.value = motorData.filter(img => img.title === "Ghost");
    rodaFrenteIMG.value = rodaFrenteData.filter(img => img.title === "Ghost");
    rodaTraseiraIMG.value = rodaTraseiraData.filter(img => img.title === "Ghost");
  } catch (error) {
    console.error("Erro ao carregar imagens:", error);
  }
};

// Funções de navegação para cada carrossel
const frenteNext = () => {
  frenteCurrentIndex.value = (frenteCurrentIndex.value + 1) % frenteIMG.value.length;
};

const frentePrev = () => {
  frenteCurrentIndex.value = (frenteCurrentIndex.value - 1 + frenteIMG.value.length) % frenteIMG.value.length;
};

const motorNext = () => {
  motorCurrentIndex.value = (motorCurrentIndex.value + 1) % motorIMG.value.length;
};

const motorPrev = () => {
  motorCurrentIndex.value = (motorCurrentIndex.value - 1 + motorIMG.value.length) % motorIMG.value.length;
};

const rodaFrenteNext = () => {
  rodaFrenteCurrentIndex.value = (rodaFrenteCurrentIndex.value + 1) % rodaFrenteIMG.value.length;
};

const rodaFrentePrev = () => {
  rodaFrenteCurrentIndex.value = (rodaFrenteCurrentIndex.value - 1 + rodaFrenteIMG.value.length) % rodaFrenteIMG.value.length;
};

const rodaTraseiraNext = () => {
  rodaTraseiraCurrentIndex.value = (rodaTraseiraCurrentIndex.value + 1) % rodaTraseiraIMG.value.length;
};

const rodaTraseiraPrev = () => {
  rodaTraseiraCurrentIndex.value = (rodaTraseiraCurrentIndex.value - 1 + rodaTraseiraIMG.value.length) % rodaTraseiraIMG.value.length;
};

// Função para salvar os dados no Pinia e mostrar no console
const saveData = async () => {
  const imageStore = useImageStore();

  // Dados a serem enviados para o db.json
  const dataToSave = {
    frenteIMG: frenteIMG.value,
    motorIMG: motorIMG.value,
    rodaFrenteIMG: rodaFrenteIMG.value,
    rodaTraseiraIMG: rodaTraseiraIMG.value,
  };

  try {
    // Envia os dados para o db.json
    const response = await fetch('http://localhost:3000/compras', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        images: dataToSave, // Dados das imagens
        date: new Date().toISOString(), // Data do salvamento
      }),
    });

    if (!response.ok) {
      throw new Error('Erro ao salvar os dados');
    }

    // Exibe os dados no console para confirmação
    console.log('Imagens Salvas com Sucesso!');
    console.log('Frente:', dataToSave.frenteIMG);
    console.log('Motor:', dataToSave.motorIMG);
    console.log('Roda Frente:', dataToSave.rodaFrenteIMG);
    console.log('Roda Traseira:', dataToSave.rodaTraseiraIMG);
  } catch (error) {
    console.error('Erro ao salvar as imagens:', error);
  }
};

// Chamando a função fetchImages e definindo a data ao montar o componente
onMounted(() => {
  fetchImages();
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
            <!-- Seções de carrossel -->
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
              <button @click="motorPrev" class="carrosel-buttonMotor">^</button>
              <div class="grupo">
                <div v-for="(motors, index) in motorIMG" v-show="index === motorCurrentIndex" :key="index" class="motorIMG">
                  <img :src="motors.img" :alt="motors.title" />
                </div>
              </div>
              <button @click="motorNext" class="carrosel-buttonMotor">v</button>
            </div>
            <div class="rodaFrente">
              <button @click="rodaFrentePrev" class="carrosel-buttonRodaFrente">❮</button>
              <div class="grupo">
                <div v-for="(rodaFrentes, index) in rodaFrenteIMG" v-show="index === rodaFrenteCurrentIndex" :key="index" class="rodaFrenteIMG">
                  <img :src="rodaFrentes.img" :alt="rodaFrentes.title" />
                </div>
              </div>
              <button @click="rodaFrenteNext" class="carrosel-buttonRodaFrente">❯</button>
            </div>
            <div class="rodaTraseira">
              <button @click="rodaTraseiraPrev" class="carrosel-buttonRodaTraseira">❮</button>
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
      <!-- Botão de Salvar -->
      <button @click="saveData" class="save-button">Salvar Dados</button>
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

.carrosel-button:first-of-type { 
  left: -20px; 
  margin-right: 10px; 
}

.carrosel-button:last-of-type { 
  
  margin-left: 150px; 
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

.motor {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto; 
}

.carrosel-buttonMotor {
  background-color: rgba(128, 128, 128, 0.623);
  border: none;
  font-size: 1rem;
  cursor: pointer;
  width: 100px; 
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 5;
}

.carrosel-buttonMotor:first-of-type {
  margin-bottom: 1px; 
}

.carrosel-buttonMotor:last-of-type {
  margin-top: 0px; 
}

.motorIMG img {
  width: 100px;
  height: auto;
  border-radius: 3%;
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

.carrosel-buttonRodaFrente:first-of-type { 
  left: 39%; 
}

.carrosel-buttonRodaFrente:last-of-type { 
  right: 39%; 
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

.carrosel-buttonRodaTraseira:first-of-type { 
  left: 38%; 
}

.carrosel-buttonRodaTraseira:last-of-type { 
  right: 38%; 
}

.rodaTraseiraIMG img {
  width: 200px;
  height: auto;
  border-radius: 3%;
}

.rodaTraseiraIMG h3 {
  text-align: center;
  margin-top: 0.5rem;
  color: black;
}

.rodaTraseira {
  top: 27%;
  left: 17%;
  width: 90%;
}

.rodaFrente {
  bottom: 27%;
  left: -10%;
  width: 80%;
}

.motor {
  bottom: -11%;
  left: 15%;
  width: 60%;
}
.save-button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20%;
}

.save-button:hover {
  background-color: purple;
}

</style>
