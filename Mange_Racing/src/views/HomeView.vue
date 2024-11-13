<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'; 

const router = useRouter(); 

const currentDate = ref('');
const currentIndex = ref(0); 
const items = ref([
  { img: '/Group40.png', title: 'Cross Rider', route: '/creteCross' },
  { img: '/Group41.png', title: 'Nimbus', route: '/creteSpeedester' },
  { img: '/Group42.png', title: 'Traveler', route: '/creteTraveler' },
  { img: '/Ghost.png', title: 'Ghost', route: '/creteGhost' },
  { img: '/city.png', title: 'City', route: '/creteCity' },
]);

const next = () => {
  if (currentIndex.value < items.value.length - 1) {
    currentIndex.value++;
  } else {
    currentIndex.value = 0;
  }
};

const prev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  } else {
    currentIndex.value = items.value.length - 1; 
  }
};

const goToRoute = (route: string) => {
  router.push(route); 
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
    <div class="header">
      <img src="/foto11.png" alt="foto" />
    </div>
    <div class="menu">
      <div class="name">
        <h1>Mange Racing</h1>
      </div>
      <div class="date">
        <h2>{{ currentDate }}</h2>
      </div>
    </div>
    <div class="descricao">
      <div class="descricao1">
        <h2>Somos especialistas em fazer sonhos em 2 rodas, venha conferir conosco as maravilhas da Indústria 4.0</h2>
      </div>
      <div class="descricao2">
        <h3>Estamos desde 1984 inovando conceitos e criando tendências no mercado motociclista. Contando com nosso arsenal tecnológico, você pode criar a motocicleta que tem a sua cara.</h3>
      </div>
    </div>
    <div class="carrosel">
      <button @click="prev" class="carrosel-button">❮</button>
      <div class="grupo">
        <div v-for="(item, index) in items" v-show="index === currentIndex" :key="index" class="item">
          <img :src="item.img" :alt="item.title" @click="goToRoute(item.route)" />
          <h3>{{ item.title }}</h3>
        </div>
      </div>
      <button @click="next" class="carrosel-button">❯</button>
    </div>
    <div class="footer">
      <img src="/foto12.png" alt="foto" />

    </div>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main {
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 130vh;
  overflow-x: hidden; 
}


.header img {
  width: 100%;
  
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem; 
  margin-top: 0;
  background-color: white;
  max-width: 100%; 
  margin-left: auto;
  margin-right: auto;
}

.name h1 {
  font-size: 2rem;
  font-weight: bold;
  color: black;
}

.date h2 {
  font-size: 1.5rem;
  font-weight: normal;
  color: black;
}
.descricao {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem; 
  margin-top: 0;
  background-color: white;
  max-width: 100%; 
  margin-left: auto;
  margin-right: auto;
}
.descricao1 h2 {
  font-size: 1.0rem;
  font-weight: bold;
  color: black;
}

.descricao2 h3 {
  font-size: 1.0rem;
  font-weight: normal;
  color: black;
}

.carrosel {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  padding: 1rem;
}

.carrosel-button {
  background-color: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

.grupo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  transition: opacity 1s;
}

.item img {
  width: 550px;
  height: auto;
  border-radius: 3%;
}

.item h3 {
  text-align: center;
  margin-top: 0.5rem;
  color: black;
}
.footer img {
  width: 100%;
  
}
</style>
