<template>
  <div id="content" class="container">
    <h1>Pet Details</h1>
    <div v-if="message" class="alert alert-success">
      {{message}}
    </div>
    <div class="container">
    <form @submit.prevent="submit">
        <fieldset class="form-group">
          <label>Name:</label>
          <input type="text" class="form-control" v-model="name" required>
        </fieldset>
        <fieldset class="form-group">
        <label>Kind: </label>
        <select class="form-control" v-model="kind" required>
          <option value="cat">Cat</option>
          <option value="dog">Dog</option>
          <option value="hamster">Hamster</option>
          <option value="bird">Bird</option>
          <option value="fish">Fish</option>
          <option value="turtle">Turtle</option>
          <option value="rabbit">Rabbit</option>
        </select>
      </fieldset>
        <fieldset class="form-group">
          <label>Breed: </label>
          <input type="text" class="form-control" v-model="breed" required>
        </fieldset>
        <fieldset class="form-group">
          <label>Age: </label>
          <input type="number" class="form-control" v-model="age" required>
        </fieldset>
        <fieldset class="form-group">
        <label>Gender: </label>
        <select class="form-control" v-model="gender" required>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        </fieldset>
        <fieldset class="form-group">
          <label>Color: </label>
          <input type="text " class="form-control" v-model="color" required>
        </fieldset>
        <button class="btn btn-success" type="submit">Save</button>
      </form>
    </div>
  </div>
</template>

<script>
import PetService from '../services/PetService';
export default {
  name: "petDetails",
  data(){
    return {
      name: "",
      kind: "",
      breed: "",
      age: "",
      gender: "",
      color : "",
      message: null,
    }
  },
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  methods: {
    refreshPetDetails() {
        PetService.retrievePet(this.id)
        .then(response => {
          this.name = response.data.name;
          this.kind = response.data.kind;
          this.breed = response.data.breed;
          this.age = response.data.age;
          this.gender = response.data.gender;
          this.color = response.data.color;
        }).catch(error => console.log(error));
    },
    submit(){
      if(this.id == -1){
        PetService.addPet(this.id,{
          name : this.name,
          kind: this.kind,
          breed: this.breed,
          age: this.age,
          gender: this.gender,
          color: this.color,
        }).then(response => {
          this.message = `Pet added Successful`;
          this.$router.push({name : 'Pets'})
        })
        .catch(error => {
            console.log(error.message);
          })
      }else{
        PetService.updatePet(this.id,{
          name : this.name,
          kind: this.kind,
          breed: this.breed,
          age: this.age,
          gender: this.gender,
          color: this.color,
        }).then(response => {
          this.message = `Pet updated Successful`;
          this.$router.push({name : 'Pets'})
        })
        .catch(error => {
            console.log(error.message);
          })

      }
    },
  },
  mounted() {
    if(this.id != -1){
      this.refreshPetDetails();
    }
  }
};
</script>
