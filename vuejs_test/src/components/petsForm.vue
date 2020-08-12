<template>
  <div>
    <h1>Pet Details</h1>
    <div>{{id}}</div>
      <div>{{name}}</div>
  </div>
</template>

<script>
import PetService from '../services/PetService';
export default {
  name: "petDetails",
  data(){
    return {
      name: "",
      errors: [],
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
        }).catch(error => console.log(error));
    },
  },
  mounted() {
    this.refreshPetDetails();
  }
};
</script>
