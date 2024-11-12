import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useImageStore = defineStore('imageStore', () => {
  // Estado para as imagens
  const frenteIMG = ref([]);
  const motorIMG = ref([]);
  const rodaFrenteIMG = ref([]);
  const rodaTraseiraIMG = ref([]);

  // Função para configurar as imagens
  const setImages = (images: any[], type: string) => {
    if (type === 'frente') {
      frenteIMG.value = images;
    } else if (type === 'motor') {
      motorIMG.value = images;
    } else if (type === 'rodaFrente') {
      rodaFrenteIMG.value = images;
    } else if (type === 'rodaTraseira') {
      rodaTraseiraIMG.value = images;
    }
  };

  return {
    frenteIMG,
    motorIMG,
    rodaFrenteIMG,
    rodaTraseiraIMG,
    setImages
  };
});
