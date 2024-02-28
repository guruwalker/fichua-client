<template>
  <div>
    <apexchart
      height="400"
      width="100%"
      :options="options"
      :series="series"
      type="pie"
    ></apexchart>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const options = ref({
  chart: {
    type: "pie",
  },
  labels: ["Apple", "Banana", "Orange", "Grapes", "Mango"],
  plotOptions: {
    pie: {
      expandOnClick: false,
    },
  },
});

const series = ref([44, 55, 13, 43, 22]);
</script>
