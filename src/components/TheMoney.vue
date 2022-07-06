<template>
  <v-card class=" rounded-lg mt-2" flat color="#202022">
    <v-row>
      <v-col cols="12" sm="8">
        <v-toolbar class=" mt-n3" color="  transparent" flat>
          <v-toolbar-title class=" white--text">Monet Earned</v-toolbar-title>
          <v-spacer></v-spacer>
          <span class=" grey--text">1 Yeart</span>
          <v-icon class="ml-2" color="#878494" x x-small>fas fa-chevron-down</v-icon>
        </v-toolbar>
        <Scatter :chart-options="chartOptions" :chart-data="chartData" :chart-id="chartId"
          :dataset-id-key="datasetIdKey" :plugins="plugins" :css-classes="cssClasses" :styles="styles" :width="width"
          :height="height" />
      </v-col>
      <v-col cols="12" sm="4">
        <v-card class=" rounded-lg mr-2" flat color="#242426">
          <v-toolbar color=" transparent" flat>
            <v-toolbar-title class=" white--text mt-n6">Investation</v-toolbar-title>
          </v-toolbar>
          <v-list class=" mt-n10" color=" transparent" subheader two-line  >
            <v-list-item v-for="file in files" :key="file.title" >
            <v-list-item-avatar rounded >
              <v-icon :class="file.color" dark v-text="file.icon" small ></v-icon>
            </v-list-item-avatar>
            <v-list-item-content  >
             
              <v-list-item-title class="white--text"  v-text="file.title" ></v-list-item-title>
              <v-list-item-subtitle class=" grey--text"  v-text="file.subtitle" ></v-list-item-subtitle>
            </v-list-item-content>
 <v-list-item-action >
                <v-btn icon >
                  <v-icon class="" color=" grey lighten-1"  small >fas fa-chevron-right</v-icon>
                </v-btn>
              </v-list-item-action>

            </v-list-item>
            
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { Scatter } from "vue-chartjs/legacy";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement
);
export default {
  props: {
    chartId: {
      type: String,
      default: "scatter-chart",
    },
    defaultIdKey: {
      type: String,
      default: "label",

    },
    width: {
      type: Number,
      default: 400,
    },
    height: {
      type: Number,
      default: 100,
    },
    cssClasses: {
      default: "",
      type: String,
    },
    styles: {
      type: Object,
      default: () => { },

    },
    plugins: {
      type: Array,
      default: () => [],
    },

  },
  data: () => ({
    chartData: {
      datasets: [
        {
          label: "S41k/ Income",
          fill: false,
          borderColor: "#f87989",
          bgColor: "#f87989",
          data: [
            {
              x: -2,
              y: 4,

            },
            {
              x: -1,
              y: 1,
            },
            {
              x: 0,
              y: 0,
            },
            {
              x: 1,
              y: 1,
            },
            {
              x: 2,
              y: 4,
            },
          ],
        },
        {
          label: "Banking",
          fill: false,
          borderColor: "#524eed",
          bgColor: "#524eed",
          data: [
            {
              x: -2,
              y: -4,
            },
            {
              x: 0,
              y: 1,
            },
            {
              x: 1,
              y: -1,
            },
            {
              x: 2,
              y: -4,
            },
          ],
        },
      ],
    },
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
    },
    files: [
      {
        color: "blue",
        icon: "fas fa-dollar-sign",
        subtitle: "Dolars",
        title: "24",

      },
      {
        color: "green",
        icon: "fas fa-pound-sign",
        subtitle: "Pound",
        title: "24",

      },
      {
        color: "orange",
        icon: "fas fa-euro-sign",
        subtitle: "Euro",
        title: "24",

      },
    ],
  }),
  components: {
    Scatter,
  },
}
</script>

<style>
</style>