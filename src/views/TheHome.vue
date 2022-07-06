<template>
  <v-app id="inspire" :style="{ background: $vuetify.theme.themes.dark.background}">
    <the-side-bar />
    <v-container >
        <the-nav-bar />
        <v-row>
            <v-col cols="12" sm="8"  >
                <v-row>
                    <v-col cols="12" sm="12">
                        <the-over-view />
                    </v-col>
                    <v-col cols="12" sm="12">
                        <the-money />
                    </v-col>
                    <v-col cols="12" sm="12">
                        <the-payment />
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="4">
                <the-card />
            </v-col>
        </v-row>
    </v-container>
  </v-app>
</template>

<script>
import TheSideBar from '@/components/TheSideBar.vue'
import TheNavBar from '@/components/TheNavBar.vue'
import TheOverView from '@/components/TheOverView.vue'
import TheMoney from '@/components/TheMoney.vue'
import ThePayment from '@/components/ThePayment.vue'
import TheCard from '@/components/TheCard.vue'
export default {
name: 'TheHome',
components:{TheSideBar,TheNavBar, TheOverView, TheMoney, ThePayment,  TheCard}
}
</script>


<style>
.v-btn.withoutupercase{
    text-transform: none;
}
.v-btn:not(.v-btn--round).v-size--small{
    min-width: 30px;
    padding: 0 5px;
}
</style>