<template>

<div class="card-header" >Bienvenue dans notre site</div>
<div class="card-body">Vous êtes à la page d'accueil</div>

<div class="container">
  
   <td><router-link class="large-button" to="/accueilemploye" >Employé</router-link> </td> 
   <br>
   
   <td><router-link class="large-button" to="/login" >Service RH</router-link> </td>
    
</div>

</template>

<script>
export default {
mounted() {
console.log('Component mounted.')
}
}
</script>

<style >

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
 
}

.large-button {
  display: block;
  padding: 15px 20px;
  text-align: center;
  text-decoration: none;
  color: #fff;
  background-color: #333;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;
}

.large-button:hover {
  background-color: #737678;
  transform: translateY(-2px);
  color: black;
}
  
</style>


