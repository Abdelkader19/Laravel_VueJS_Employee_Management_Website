<template>

 <nav>
        <router-link to="/accueilrh" class="large-button">Accueil RH</router-link>

  <router-link to="/listeemploye" class="large-button">liste employe</router-link>
    <router-link  to="/demandeconge" class="large-button">les demandes de conges</router-link>
    <router-link to="/historique" class="large-button">historique des conges</router-link>
    <router-link to="/recrutement" class="large-button">recrutement</router-link>
   </nav>
<br>
<div>
<div v-if="isLoading">
<h2> Loading .... </h2>
</div>

 

<div v-else class="py-6">
<table class="table table-striped shadow">
<thead >
<tr>
<th scope="col">prenom</th>
<th scope="col">nom</th>
<th scope="col">Email</th>
<th scope="col">Position</th>
<th scope="col">Departement</th>
<th scope="col">Grade</th>
<th scope="col">Modifier</th>
<th >Supprimer</th>
</tr>
</thead>
<tbody>
<tr v-for="emp in employes" :key="emp.id">

<td>{{ emp.Prénom }} </td>
<td>{{ emp.Nom }}</td>
<td>{{ emp.Email }}</td> 
<td>{{ emp.Position }}</td>
<td>{{ emp.Departement }}</td>
<td>{{ emp.Grade }}</td>

<td>
<router-link :to=" { name: 'EditEmploye', params: { id: emp.id } }" class="btn btn-outline-warning mx-2"> 
<!-- <i class="fa-solid fa-pen-to-square"></i> -->
Modifier 
</router-link> 
</td> 

<td><button class="btn btn-outline-danger mx2" @click="deleteemploye(emp.id)">
 <!--  <i class="fa-solid fa-trash-can"></i> -->
Delete
</button></td> 
</tr>
</tbody>
</table>
</div>
</div>
</template>


<script setup>
import { ref,onMounted } from 'vue';
import axios from 'axios';
const employes=ref([])
const isLoading=ref(true)
const getemployes=async()=>{
  
await axios.get("http://localhost:8000/api/employes")
.then(res=>{
employes.value=res.data
isLoading.value=false
})
.catch(error=>{ 
console.log(error)
})
}
onMounted(() => {
getemployes();
});

const deleteemploye=async(id)=>{
  if (window.confirm("Etes-vous sûr de vouloir supprimer ?")) {
try {

await axios.delete(`http://localhost:8000/api/employes/${id}`) 
getemployes()
} catch (error) {
console.log("error",error);
}
}} 

</script>


<style lang="scss" scoped>
</style>
