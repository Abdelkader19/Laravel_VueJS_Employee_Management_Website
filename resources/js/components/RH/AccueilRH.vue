<template>
  <nav>
  <router-link to="/listeemploye" class="large-button">liste employe</router-link>
    <router-link  to="/demandeconge" class="large-button">les demandes de conges</router-link>
    <router-link to="/historique" class="large-button">historique des conges</router-link>
    <router-link to="/recrutement" class="large-button">recrutement</router-link>
    <router-link class="nav-link active" to="/register">Register</router-link>
    <button @click="logout">Logout</button>

   </nav>

   <body>
    <br>
    <br>
    <h1>Accueil Service RH</h1>
   </body>

  
</template>

<script setup>


import axios from 'axios';
import { useRouter } from 'vue-router';
const router = useRouter();
const logout=async()=> {
let token=""
token=localStorage.getItem('token')
console.log(token) 
axios.post('http://localhost:8000/api/logout', null, {
headers: {
'Authorization': `Bearer ${token}`
}
})
.then((response) => {

localStorage.removeItem('token')
localStorage.removeItem('user')

router.push("/")
})
.catch(err => {console.log(err);alert(err) })
}

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