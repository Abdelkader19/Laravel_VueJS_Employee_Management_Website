<template>

 <nav>
    <router-link to="/formconge" class="large-button">prendre un congé</router-link>
    <router-link  to="evolution" class="large-button">suivre mon évolution</router-link>
    <router-link to="/historiquecongeemploye" class="large-button">historique congé</router-link>
    <router-link to="idee" class="large-button">idée innovante</router-link>
            <router-link class="large-button" to="/" >Exit</router-link> 


  </nav> 

  <br>

    


  <div class="col-md-6 offset-md-3 border rounded p-4 mt-2shadow">
<h4 align="center">Ajout Conge</h4>
<form @submit.prevent="addConge">
<div class="row">

  <div class="col-md-6">
<label for="id_employe" class="form-label">id employe</label>
<input type="text" class="form-control" id="id_employe" v-model="conge.id_employe">
</div>
<div class="col-md-6">
<label for="date_début" class="form-label">Date debut</label>
<input type="text" class="form-control" id="date_début" v-model="conge.date_début">
</div>
<div class="col-md-6 ms-auto">
<label for="date_fin" class="formlabel">Date fin</label>
<input type="texte" class="form-control" id="date_fin" v-model="conge.date_fin">
</div>
</div>
<div class="row">
<div class="col-md-6">
<label for="cause" class="form-label">Cause</label>
<input type="text" class="form-control" id="cause" v-model="conge.cause">

</div>
</div>

<br/>
<button type="submit" class="btn btn-outline-primary">
<i class="fa-solid fa-floppy-disk"></i>Enregister
</button>
<router-link to="/accueilemploye" class="btn btn-outline-danger mx-2">
<i class="fa-solid fa-xmark"></i>Cancel
</router-link>
</form>
</div>
</template>

<script setup>

import { ref, onMounted } from "vue";

const myFiles = ref([]);

import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
import axios from 'axios'; 
const conge=ref({
id_employe:"",  
date_début:"",
date_fin:"",
cause:"",
nb_j_deja_pris : 8

})

const addConge=async()=>{
      console.log(conge.value)
  await axios.post("http://localhost:8000/api/conges/",conge.value)
.then(() => (
router.push({ name: 'DemandeConge' })
)) 
.catch(err => console.log(err))
}

onMounted(() => {
}
); 

</script>

<style lang="scss" scoped>

</style> 