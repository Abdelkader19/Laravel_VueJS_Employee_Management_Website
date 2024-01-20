<template>

<nav>
        <router-link to="/accueilrh" class="large-button">Accueil RH</router-link>

  <router-link to="/listeemploye" class="large-button">liste employe</router-link>
    <router-link  to="/demandeconge" class="large-button">les demandes de conges</router-link>
    <router-link to="/historique" class="large-button">historique des conges</router-link>
    <router-link to="/recrutement" class="large-button">recrutement</router-link>
   </nav>
   
   <br>

  <div class="col-md-6 offset-md-3 border rounded p-4 mt-2shadow">
<h4 align="center">Ajouter un Employé</h4>
<form @submit.prevent="addemploye"> 
<div class="row"> 
<div class="col-md-6">
<label for="Prénom" class="form-label">Prénom</label>
<input type="text" class="form-control" id="Prénom" v-model="employe.Prénom">
</div>
<div class="col-md-6 ms-auto">
<label for="Nom" class="formlabel">Nom</label>
<input type="text" class="form-control" id="Nom" v-model="employe.Nom">
</div>
</div>
<div class="row">
<div class="col-md-6">
<label for="Email" class="form-label">Email</label>
<input type="text" class="form-control" id="Email" v-model="employe.Email">

</div>
</div>

<div class="col-md-6 ms-auto">
<label for="Position" class="formlabel">Position</label>
<input type="text" class="form-control" id="Position" v-model="employe.Position">
</div>

<div class="col-md-6 ms-auto">
<label for="Departement" class="formlabel">Departement</label>
<input type="text" class="form-control" id="Departement" v-model="employe.Departement">
</div>

<div class="col-md-6 ms-auto"> 
<label for="Grade" class="formlabel">Grade</label>
<input type="text" class="form-control" id="Grade" v-model="employe.Grade">
</div>

<br/>
<!--
<button type="submit" class="btn btn-outline-primary">
<i class="fa-solid fa-floppy-disk"></i>Enregister
</button>
<router-link to="/accueilrh" class="btn btn-outline-danger
mx-2">
<i class="fa-solid fa-xmark"></i>Cancel
</router-link> --> 

 <button type="submit" className="btn btn-outline-primary">
              Enregister
            </button>
            <router-link to="/accueilrh" class="btn btn-outline-danger mx-2">
              Cancel
            </router-link>

</form>
</div>
</template>

<script setup>

import { ref } from "vue";

const myFiles = ref([]);

import { useRouter, useRoute } from 'vue-router';
const router = useRouter()
import axios from 'axios'; 
const employe=ref({
Prénom:"",
Nom:"", 
Email:"",                        
Position:"",
Departement:"",
Grade:"",
id_ResponsableRH: 2 

}) 

 

const addemploye=async()=>{
await axios.post("http://localhost:8000/api/employes/",employe.value)
.then(() => (
router.push({ name: 'ListeEmploye' })
))
.catch(err => console.log(err))
} 

</script>

<style lang="scss" scoped>

</style> 