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
<h4 align="center">Edit Employe</h4>
<form  @submit.prevent="editEmploye"> 
<div class="row">
<div class="col-md-6">
<label for="Prénom" class="form-label">prenom</label>
<input type="text" class="form-control" id="Prénom" v-model="employe.Prénom">
</div>
<div class="col-md-6 ms-auto">
<label for="Nom" class="form-label">nom</label>
<input type="texte" class="form-control" id="Nom" v-model="employe.Nom">
</div>
</div>
<div class="row">
<div class="col-md-6">
<label for="Email" class="form-label">Email</label>
<input type="text" class="form-control" id="Email" v-model="employe.Email">

</div>
<div class="col-md-6 ms-auto">
<label for="Position" class="form-label">Position</label>
<input type="texte" class="form-control" id="Position" v-model="employe.Position">
</div>
</div>
<div class="row">
<div class="col-md-6">
<label for="Departement" class="form-label">Departement</label>
<input type="text" class="form-control" id="Departement" v-model="employe.Departement">
</div>
<div class="col-md-6">
<label for="Grade" class="form-label">Grade</label>
<input type="text" class="form-control" id="Grade" v-model="employe.Grade">
</div> 
</div>

<br/>

<button type="submit" class="btn btn-outline-primary" >
<i class="fa-solid fa-floppy-disk"></i>Enregister
</button>
<router-link to="/accueilrh" class="btn btn-outline-danger
mx-2">
<i class="fa-solid fa-xmark"></i>Cancel
</router-link> 
</form>
</div>
</template>

<script setup>

import { ref, onMounted } from "vue";


const myFiles = ref([]);

import { useRouter,useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

import axios from 'axios'; 
const employe=ref({})

const editEmploye=async()=>{
await
axios.put(`http://localhost:8000/api/employes/${route.params.id}`,employe.value)
.then(() => (
router.push({ name: 'ListeEmploye' })
))
.catch(err => console.log(err))
}

const fetchEmploye= async()=> {
await
axios.get(`http://localhost:8000/api/employes/${route.params.id}`).then((res)=> {
employe.value = res.data;
})
.catch((err) => {console.error(err)})
}

onMounted(() => {

fetchEmploye()
} 
);

const ajouteremploye=()=>{
console.log(employe)
axios.post("/api/employes",employe)
.then(() => {
router.push('/employes')})
.catch(error => {
console.error("There was an error!", error);})
}
</script>

<style lang="scss" scoped>

</style> 



 