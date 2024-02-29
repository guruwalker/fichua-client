<template>
  <div>
    <apexchart
      height="400"
      width="100%"
      :options="options"
      :series="[series]"
    ></apexchart>
  </div>
</template>

<script setup lang="ts">

const options = ref({
  chart: {
    type: "bar",
  },
  plotOptions: {
    bar: {
      borderRadius: 10,
      borderRadiusApplication: "around",
    },
  },
  xaxis: {
    categories: ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"]
  }
});

const series = ref({
  name: "Score",
  data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 160]
});
</script>
