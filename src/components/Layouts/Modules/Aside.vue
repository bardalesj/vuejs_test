<template>
          <!-- Sidebar  -->
          <nav id="sidebar">
                  <img width="100%" src="../../../../public/images/logo.png">
                  <br>
                  <br>
                  <br>
                  <br>
                  <div class="row">
                    <button class="btn btn-sm">Pets
                    <router-link class="brand-link" :to="{name : 'Layout'}">

                    <i class="material-icons">pets</i></router-link></button>
                  </div>
                  <br>
                  <br>
                  <div class="row">
                    <button class="btn btn-sm" v-on:click="addPetClicked()">Add Pet<i class="material-icons">add</i></button>
                  </div>
          </nav>
</template>
<script>
export default{
  name : "Menu",
  methods:{
    addPetClicked() {
      this.$router.push(`/home/pets/-1`);
    },
  }
};
</script>
