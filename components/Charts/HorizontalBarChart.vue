<template>
  <div>
    <apexchart
      height="400"
      width="100%"
      :options="options"
      :series="series"
      type="bar"
    ></apexchart>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const options = ref({
  chart: {
    type: "bar",
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["January", "February", "March", "April", "May", "June", "July"],
  },
});

const series = ref([
  {
    name: "Sales",
    data: [30, 40, 45, 50, 49, 60, 70],
  },
]);
</script>
