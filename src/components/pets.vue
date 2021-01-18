<template>
  <div id="content" class="container">
    <h3>Pets</h3>
    <div v-if="message" class="alert alert-success">
      {{message}}
    </div>
    
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Type</th>
            <th>Color</th>
            <th>Breed</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Created at</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pet in pets" :key="pet.id">
            <td>{{pet.id}}</td>
            <td>{{pet.name}}</td>
            <td>{{pet.kind}}</td>
            <td><span class="dot" :style="{backgroundColor : pet.color}"></span></td>
            <td>{{pet.breed}}</td>
            <td>{{pet.gender}}</td>
            <td>{{pet.age}}</td>
            <td>{{toJSONLocal(pet.created_at)}}</td>
            <td>
              <button class="btn btn-light btn-sm" v-on:click="updatePetClicked(pet.id)"><i class="material-icons">edit</i></button>
              <button class="btn btn-light btn-sm" v-on:click="deletePetClicked(pet.id)"><i class="material-icons">delete</i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>
<script>
import PetService from '../services/PetService';
export default {
  name: "pets",
  data(){
    return {
      pets : [],
      message: null,
    };
  },
  methods:{
    refreshPets(){
      PetService.retrieveAllPets()
        .then(response => {
          this.pets = response.data
        }).catch(error => console.log(error))
    },
    addPetClicked() {
      this.$router.push(`/home/pets/-1`);
    },
    updatePetClicked(id){
      this.$router.push(`/home/pets/${id}`);
    },
    deletePetClicked(id){
      if(confirm('Are you sure to delete the record?')==true){
        PetService.deletePet(id)
        .then(response=>{
          this.message = `Delete of pet ${id} Successful`;
          this.refreshPets()
        }).catch(error => console.log(error))
      }
    },
   toJSONLocal (date) {
  	var local = new Date(date);
  	return local.toISOString().slice(0, 10);
  },
  },
  mounted(){
    this.refreshPets()
  }
};
</script>
