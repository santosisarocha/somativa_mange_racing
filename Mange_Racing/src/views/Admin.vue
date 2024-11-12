<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue';
import { useImageStore } from '../stores/useImageStore';

export default defineComponent({
  setup() {
    const imageStore = useImageStore();
    const compras = ref<any[]>([]); // Armazenar dados das compras aqui

    // Função para buscar as compras
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/compras');
        if (!response.ok) {
          throw new Error('Erro ao buscar dados de compras');
        }
        const data = await response.json();
        console.log('Dados de compras recebidos:', data);
        compras.value = data || []; // Garantir que os dados de compras sejam atribuídos
      } catch (error) {
        console.error('Erro ao carregar compras:', error);
      }
    };

    // Carregar os dados quando o componente for montado
    onMounted(() => {
      fetchData();
      console.log('frenteIMG:', imageStore.frenteIMG);
      console.log('motorIMG:', imageStore.motorIMG);
      console.log('rodaFrenteIMG:', imageStore.rodaFrenteIMG);
      console.log('rodaTraseiraIMG:', imageStore.rodaTraseiraIMG);
    });

    // Computed para acessar as imagens de forma estruturada
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

      <!-- Tabela de imagens -->
      <table v-if="images.frente.length > 0 || images.motor.length > 0 || images.rodaFrente.length > 0 || images.rodaTraseira.length > 0">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Título</th>
            <th>Imagem</th>
          </tr>
        </thead>
        <tbody>
          <!-- Exibir imagens da seção Frente -->
          <tr v-for="(image, index) in images.frente" :key="'frente-' + index">
            <td>Frente</td>
            <td>{{ image.title }}</td>
            <td><img :src="image.img" alt="Frente Image" width="100" /></td>
          </tr>
          <!-- Exibir imagens da seção Motor -->
          <tr v-for="(image, index) in images.motor" :key="'motor-' + index">
            <td>Motor</td>
            <td>{{ image.title }}</td>
            <td><img :src="image.img" alt="Motor Image" width="100" /></td>
          </tr>
          <!-- Exibir imagens da seção Roda Frente -->
          <tr v-for="(image, index) in images.rodaFrente" :key="'rodaFrente-' + index">
            <td>Roda Frente</td>
            <td>{{ image.title }}</td>
            <td><img :src="image.img" alt="Roda Frente Image" width="100" /></td>
          </tr>
          <!-- Exibir imagens da seção Roda Traseira -->
          <tr v-for="(image, index) in images.rodaTraseira" :key="'rodaTraseira-' + index">
            <td>Roda Traseira</td>
            <td>{{ image.title }}</td>
            <td><img :src="image.img" alt="Roda Traseira Image" width="100" /></td>
          </tr>
        </tbody>
      </table>
      <p v-else></p>

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
            <td>{{ new Date(compra.date).toLocaleString() }}</td> <!-- Formatação de data -->
            <td>
              <div v-if="compra.images">
                <!-- Exibindo imagens associadas à compra -->
                <div v-for="(img, idx) in compra.images" :key="'img-' + idx">
                  <img :src="img.url" :alt="'Imagem ' + idx" width="100" />
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
  background-color: #f4f4f4;
}

img {
  border-radius: 5px;
  margin: 5px;
}
</style>
