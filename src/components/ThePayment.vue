<template>
    <v-row>
        <v-col cols="12" sm="6">
            <v-toolbar class=" mt-n5" flat color="transparent">
                <v-toolbar-title class=" white--text">All Paymant</v-toolbar-title>
                <v-chip class="ml-2" color="green" text-color=" white" >3</v-chip>
            </v-toolbar>
            <v-row>

                <v-col cols="12" sm="6">
                    <v-card color="#242426" class="rounded-lg mx-2 pa-2 mt-n3 " flat>
                        <span class="caption grey--text mt-n6">Credit Card</span><br>
                        <h6 class="white--text mt-4">Balance</h6>
                        <h4 class="white--text"> $369.12</h4>
                        <v-card-text class="pt-0">
                            <v-icon class="mr-2" color="grey">fab fa-cc-mastercard</v-icon>
                            <span class="text-caption grey--text font-weight-light">**3240</span>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-card color="#242426" class="rounded-lg mx-2 pa-2 mt-n3 " flat>
                        <span class="caption grey--text mt-n6">Credit Card</span><br>
                        <h6 class="white--text mt-4">Balance</h6>
                        <h4 class="white--text"> $569.52</h4>
                        <v-card-text class="pt-0">
                            <v-icon class="mr-2" color="grey">fab fa-cc-visa</v-icon>
                            <span class="text-caption grey--text font-weight-light">**3240</span>
                        </v-card-text>

                    </v-card>

                </v-col>

            </v-row>
        </v-col>
        <v-col cols="12" sm="6">
            <v-toolbar class="mt-n5" flat color="transparent">
                <v-toolbar-title class="white--text">All Transactions</v-toolbar-title>
                <v-chip class="  ml-2" color="green" text-color="white">9</v-chip>
            </v-toolbar>
            <v-card class="rounded-lg mr-2 mt-n3 " flat color="#242426">
                <h5 class="white--text ml-2">Recent Experiance</h5>
                <v-list class="mt-n2" color="transparent" dense>
                    <v-list-item v-for="experiance in experiences" :key="experiance.title">
                        <v-list-item-avatar>
                            <v-img :src="experiance.img" />
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="white--text" v-text="experiance.title">
                            </v-list-item-title>
                            <v-list-item-subtitle v-text="experiance.subtitle" class="grey--text">
                            </v-list-item-subtitle>
                        </v-list-item-content>
                        <v-list-item-action>
                            <h5 class="white--text">{{ experiance.price }}</h5>
                        </v-list-item-action>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data: () => ({
        experiences: [
            {
                img: "spotify.png",
                subtitle: "Premium 1 Month Services",
                title: "Spotify",
                price: "-$90.21"

            },
            {
                img: "netflix.png",
                subtitle: "Premium 1 Month Services",
                title: "Netflix",
                price: "-$10.51"

            },
        ]
    })
}
</script>

<style>
</style>