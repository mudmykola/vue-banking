<template>
  <v-card class=" rounded-lg mt-n3 pb-1" color="#202022" flat>
    <v-toolbar flat color="transparent">
      <v-toolbar-title class=" white--text mt-n2"> Your Cards</v-toolbar-title>
    </v-toolbar>
    <v-card class="  rounded-lg mx-2  pa-1  mt-n3  gradient flip" color="#242426" flat>
      <v-toolbar flat color="transparent">
        <v-toolbar-title class=" caption grey--text">Universal Cards</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon color=" grey">fab fa-cc-mastercard</v-icon>
      </v-toolbar>
      <span class=" grey--text ml-3 ml-4 caption"> Balance</span>
      <h2 class=" white--text  ml-4">$50.600,25</h2>
      <v-card-text class=" pt-0 mt-4">
        <span class=" white--text font-weight-light">**** **** **** 6587</span>
      </v-card-text>
    </v-card>
    <v-toolbar class=" mt-n2" flat color="transparent">
      <v-toolbar-title class=" white--text">Chats</v-toolbar-title>
      <v-chip class=" ml-2" color="green" text-color=" white">5</v-chip>
    </v-toolbar>
    <v-list class=" mt-n6" color="transparent" dense>
      <v-list-item v-for="chat in chats" :key="chat.title">
        <v-list-item-avatar>
          <v-img :src="chat.img"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class=" white--text" v-text="chat.title">

          </v-list-item-title>
          <v-list-item-subtitle class=" grey--text" v-text="chat.subtitle">

          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <h5 class="white--text">{{chat.date}}</h5>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-card class=" rounded-lg mx-2 pa-1 mt-n3 gradient flip" color="#242426" flat>
      <h2 class=" white--text ml-4">Premium Kit</h2>
      <span class=" grey--text mt-4 ml-4 caption">Get out about our new item</span><br>
      <span class=" grey--text ml-4 caption">for community</span>
      <v-card-text class=" pt-0 mt-5">
        <v-btn class="withoutupercase mt-2" color="#524eed" dark>trial from $20</v-btn>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>


export default {
  data: () => ({
    chats: [
      {
        img: "image-1.png",
        subtitle: "Allright then, see you later !",
        title: "Evar Rou",
        date: "25/05/2022",
      },
      {
        img: "image-2.png",
        subtitle: "Allright then, see you later !",
        title: "Ziro Kou",
        date: "01/09/2012",
      },
      {
        img: "image-3.png",
        subtitle: "Allright then, see you later !",
        title: "Kevin Simon",
        date: "15/05/2023",
      },

    ]
  })
}
</script>

<style>
.gradient {
  background: rgba(64, 94, 254);
  background: radial-gradient(circle, rgba(63, 94, 251, 1)0%, rgba(52, 36, 69, 1)100%);
}


.flip {
  transform-style: preserve-3d;
  transition: all 0.8s ease;
}

.flip:hover {
  transform: rotateY(180deg);
}
</style>