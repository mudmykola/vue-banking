<template>
<v-app-bar class="mt-2" color=" transparent" flat >
  <div >
      <h3 class=" white--text mt-n3">
       Free CRM template
      </h3>
      <br>
      <p class="grey--text caption mt-n5">
      Organize your leads, forecast revenue & improve your sales process - for free
      </p>
  </div>
  <v-text-field class="ml-5" label="Search anything here" filled prepend-inner-icon="mdi-magnify" dense solo flat background-color="#1d1c21" dark>
  </v-text-field>
      <v-spacer></v-spacer>
      <v-icon class="mt-n8" color="#878a94">far fa-envelope</v-icon>
      <v-badge class="ml-3 mt-n8" bordered overlap color="red" content="3" dark>
        <v-icon color="#878a94">far fa-bell</v-icon>
      </v-badge>
      <v-avatar class="ml-3 mt-n8" size="30" >
        <v-img src="../assets/image/image-1.png"></v-img>
      </v-avatar>
      <div>
        <p class="white--text mt-n3 ml-2 caption">Mykola Mud</p>
        <br>
        <p class="grey--text mt-n10 ml-2 caption" >Khmelnytskyi, Ukraine </p>
      </div>
      <v-icon class=" mt-n8 ml-2" x-small color="#878a94">fas fa-chevron-down</v-icon>
</v-app-bar>
</template>

<script>
export default {

}
</script>

<style>

</style>