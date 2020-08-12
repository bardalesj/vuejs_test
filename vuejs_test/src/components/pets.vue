<template>
  <div class="container">
    <h3>All Pets</h3>
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
          <tr v-for="pet in pets">
            <td>{{pet.id}}</td>
            <td>{{pet.name}}</td>
            <td>{{pet.kind}}</td>
            <td>{{pet.color}}</td>
            <td>{{pet.breed}}</td>
            <td>{{pet.gender}}</td>
            <td>{{pet.age}}</td>
            <td>{{pet.created_at.toString()}}</td>
            <td>
              <i class="material-icons">edit</i>
              <i class="material-icons">delete</i>
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
    };
  },
  methods:{
    refreshPets(){
      PetService.retrieveAllPets()
        .then(response => {
          this.pets = response.data
        }).catch(error => console.log(error))
    },
  },
  mounted(){
    this.refreshPets()
  }
};
</script>
