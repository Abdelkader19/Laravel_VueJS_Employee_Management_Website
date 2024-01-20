
<template>   


 <nav>
    <router-link to="/formconge" class="large-button">prendre un congé</router-link>
    <router-link  to="evolution" class="large-button">suivre mon évolution</router-link>
    <router-link to="/historiquecongeemploye" class="large-button">historique congé</router-link>
    <router-link to="idee" class="large-button">idée innovante</router-link>
            <router-link class="large-button" to="/" >Exit</router-link> 


  </nav> 
  <br>
<div >
<div v-if="isLoading">
<h2> Loading .... </h2>
</div>
<div v-else class="py-6">

 <br>
<table class="table table-striped shadow">
<thead>
<tr>

<th scope="col">date debut</th>
<th scope="col">date fin</th>
<th scope="col">cause</th> 
<th scope="col">id_employe</th>
</tr>
</thead>
<tbody>
<tr v-for="conge in conges" :key="conge.id">

<td>{{ conge.date_début }} </td>
<td>{{ conge.date_fin }}</td>
<td>{{ conge.cause }}</td>
<td>{{ conge.id_employe }}</td>

</tr>

</tbody>
</table>
</div>
</div>
</template>


<script setup>
import { ref,onMounted } from 'vue';
import axios from 'axios';
const conges=ref([])
const isLoading=ref(true)
const getconges=async()=>{
await axios.get("http://localhost:8000/api/conges")
.then(res=>{
conges.value=res.data
isLoading.value=false 
})
.catch(error=>{
console.log(error)
})
}
onMounted(() => {
getconges();
});

</script>
<style lang="scss" scoped>
</style>
  
  



