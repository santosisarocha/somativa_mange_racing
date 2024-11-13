import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementação dos eventos
    },
    baseUrl: 'http://localhost:5175', // Exemplo de configuração de URL base
  },
});
