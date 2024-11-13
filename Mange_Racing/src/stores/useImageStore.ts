import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useImageStore = defineStore('imageStore', () => {

  const frenteIMG = ref([]);
  const motorIMG = ref([]);
  const rodaFrenteIMG = ref([]);
  const rodaTraseiraIMG = ref([]);


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
