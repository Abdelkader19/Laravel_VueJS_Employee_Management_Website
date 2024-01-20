<template >
  <nav>
    <router-link to="/formconge" class="large-button">prendre un congé</router-link>
    <router-link  to="evolution" class="large-button">suivre mon évolution</router-link>
    <router-link to="/historiquecongeemploye" class="large-button">historique congé</router-link>
    <router-link to="idee" class="large-button">idée innovante</router-link>
        <router-link class="large-button" to="/" >Exit</router-link> 


  </nav> 
  <body>
    <h1>Accueil Service Employe</h1>
   </body>

</template>

<script setup>

</script>

<style lang="scss" scoped>


.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.large-button {
  font-size: 1.5em;
  padding: 15px 30px;
  margin-right: 20px;
}

 h1 {
      text-align: center;
      color:blue;
    }

</style>