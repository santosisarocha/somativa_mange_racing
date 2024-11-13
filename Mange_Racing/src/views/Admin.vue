<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue';
import { useImageStore } from '../stores/useImageStore';

export default defineComponent({
  setup() {
    const imageStore = useImageStore();
    const compras = ref<any[]>([]); 


    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/compras');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados de compras');
        }
        const data = await response.json();
        console.log('Dados de compras recebidos:', data);
        compras.value = data || []; 
      } catch (error) {
        console.error('Erro ao carregar compras:', error);
      }
    };

    onMounted(() => {
      fetchData();
      console.log('frenteIMG:', imageStore.frenteIMG);
      console.log('motorIMG:', imageStore.motorIMG);
      console.log('rodaFrenteIMG:', imageStore.rodaFrenteIMG);
      console.log('rodaTraseiraIMG:', imageStore.rodaTraseiraIMG);
    });

  
    const images = computed(() => ({
      frente: imageStore.frenteIMG || [],
      motor: imageStore.motorIMG || [],
      rodaFrente: imageStore.rodaFrenteIMG || [],
      rodaTraseira: imageStore.rodaTraseiraIMG || [],
    }));

    return {
      images,
      compras
    };
  }
});
</script>

<template>
  <main>
    <div>
      <h1>Admin Dashboard - Imagens</h1>

      
      <table v-if="images.frente.length > 0 || images.motor.length > 0 || images.rodaFrente.length > 0 || images.rodaTraseira.length > 0">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>ID</th>
            <th>Título</th>
            <th>Imagem</th>
          </tr>
        </thead>
        <tbody>
          
          <tr v-for="(image, index) in images.frente" :key="'frente-' + index">
            <td>Frente</td>
            <td>{{ image.id }}</td>
            <td>{{ image.title }}</td>
            <td><img :src="image.img" alt="Frente Image" width="100" /></td>
          </tr>
          
          <tr v-for="(image, index) in images.motor" :key="'motor-' + index">
            <td>Motor</td>
            <td>{{ image.id }}</td>
            <td>{{ image.title }}</td>
            <td><img :src="image.img" alt="Motor Image" width="100" /></td>
          </tr>
          
          <tr v-for="(image, index) in images.rodaFrente" :key="'rodaFrente-' + index">
            <td>Roda Frente</td>
            <td>{{ image.id }}</td>
            <td>{{ image.title }}</td>
            <td><img :src="image.img" alt="Roda Frente Image" width="100" /></td>
          </tr>
          
          <tr v-for="(image, index) in images.rodaTraseira" :key="'rodaTraseira-' + index">
            <td>Roda Traseira</td>
            <td>{{ image.id }}</td>
            <td>{{ image.title }}</td>
            <td><img :src="image.img" alt="Roda Traseira Image" width="100" /></td>
          </tr>
        </tbody>
      </table>
      <p v-else>Nenhuma imagem disponível.</p>

      <h2>Compras</h2>
      <table v-if="compras.length > 0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Imagens</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(compra, index) in compras" :key="'compra-' + index">
            <td>{{ compra.id }}</td>
            <td>{{ new Date(compra.date).toLocaleString() }}</td> 
            <td>
              <div v-if="compra.images">
                
                <div v-for="(img, idx) in compra.images.frenteIMG" :key="'frente-img-' + idx">
                  <img :src="img.img" :alt="'Imagem Frente ' + idx" width="100" />
                </div>
                <div v-for="(img, idx) in compra.images.motorIMG" :key="'motor-img-' + idx">
                  <img :src="img.img" :alt="'Imagem Motor ' + idx" width="100" />
                </div>
                <div v-for="(img, idx) in compra.images.rodaFrenteIMG" :key="'rodaFrente-img-' + idx">
                  <img :src="img.img" :alt="'Imagem Roda Frente ' + idx" width="100" />
                </div>
                <div v-for="(img, idx) in compra.images.rodaTraseiraIMG" :key="'rodaTraseira-img-' + idx">
                  <img :src="img.img" :alt="'Imagem Roda Traseira ' + idx" width="100" />
                </div>
              </div>
              <p v-else>Sem imagens</p>
            </td>
          </tr>
        </tbody>
      </table>
      <p v-else>Não há compras disponíveis.</p>
    </div>
  </main>
</template>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
}

th {
  background-color: black;
  color: white;
}

img {
  border-radius: 5px;
  margin: 5px;
}
</style>
