<template>
<v-card class=" rounded-lg" flat color="#202022">
  <v-row>
    <v-col cols="12" sm="4" >
      <v-card class=" rounded-lg mx-2" flat color=" transparent" >
        <v-btn color="green" small height="40" width="40">
          <v-icon color="white">far fa-dollar-sign</v-icon>
        </v-btn>
        <h2 class="white--text">$1054.75</h2>
        <h6 class="grey--text"> Current ETH price (USD)</h6>
        <v-btn class="whithoutupercase mt2" color="#524eed" dark>Search by country</v-btn>
      </v-card>
    </v-col>

    <v-col cols="12" sm="4">
      <v-card class="mx-2 rounded-lg" flat color="#242426" dark>
      <v-app-bar color="rgba(0,0,0,0)" flat>
        <span class=" caption grey--text mt-n6">On Eth</span>
      </v-app-bar>
      <v-app-bar class="mt-n12" flat color="rgba(0,0,0,0)">
       <h4 class=" white--text"> 90,8%</h4>
            <span class=" caption grey--text ml-2">+10,15%</span>
      </v-app-bar>
      <v-app-bar class=" mt-n10" color="rgba(0,0,0,0)" flat>
        <v-progress-linear color="orange" height="6" value="45"></v-progress-linear>
      </v-app-bar>
      <v-card-text class=" pt-0 mt-n4">
        <span class=" text-caption grey--text font-weight-light">Total Authorized</span>
      </v-card-text>
      </v-card>
    </v-col>
     <v-col cols="12" sm="4">
      <v-card class="mx-2 rounded-lg" flat color="#242426" dark>
      <v-app-bar color="rgba(0,0,0,0)" flat>
        <span class=" caption grey--text mt-n6">On Omni</span>
      </v-app-bar>
      <v-app-bar class="mt-n12" flat color="rgba(0,0,0,0)">
       <h4 class=" white--text"> 30,1%</h4>
            <span class=" caption grey--text ml-2">+1,10%</span>
      </v-app-bar>
      <v-app-bar class=" mt-n10" color="rgba(0,0,0,0)" flat>
        <v-progress-linear color="orange" height="6" value="25"></v-progress-linear>
      </v-app-bar>
      <v-card-text class=" pt-0 mt-n4">
        <span class=" text-caption grey--text font-weight-light">Total Authorized</span>
      </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>