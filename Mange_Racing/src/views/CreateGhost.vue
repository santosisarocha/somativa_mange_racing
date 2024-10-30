<script lang="ts">
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
                    
                    <div class="hamburger">
                        <!-- Você pode adicionar um ícone aqui -->
                        &#9776; <!-- Exemplo de um menu hamburguer -->
                    </div>
                    <div class="linha">
                    </div>
                </div>
                <div class="main">
                    <div class="titulo">
                        <h1>Ghost Rider 900</h1>
                    </div>
                    <div class="moto">
                        <img src="/Frente-1.png" alt="logo" class="logo" />
                        <img src="/Motor-1.png" alt="logo" class="logo" />
                        <img src="/RodaFrente-1.png" alt="logo" class="logo" />
                        <img src="/RodaTraseira-1.png" alt="logo" class="logo" />
                        
                    </div>

                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
.computed {
    display: flex; /* Adiciona o flexbox */
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    margin: 0;
    padding: 0;
    height: 80vh;
    width: 125vh;
    background-color: rgb(30, 30, 30);
    margin-top: 8%;
    border-radius: 1%;
}

.fundo {
    margin: 0;
    padding: 0;
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
    text-align: center; /* Centraliza a logo */
}

.hamburger {
    margin-left: auto; /* Empurra o menu hamburguer para a direita */
    font-size: 2em; /* Aumenta o tamanho do ícone */
    color: white;
}
.main{
    display: flex; 
    align-items: center; 
    width: 100%;
}

</style>
