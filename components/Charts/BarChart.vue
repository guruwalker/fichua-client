<script setup lang="ts">
const { analyticsState } = useAnalytics();

const barChartData = analyticsState.value.bar_chart;

console.log("barChartData", barChartData);

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
    categories: Object.keys(barChartData), // Use keys as x-axis categories
  },
});

const series = ref([
  {
    name: "Score",
    data: Object.values(barChartData), // Use values as series data
  },
]);
</script>

<template>
  <div>
    <apexchart
      height="400"
      width="100%"
      :options="options"
      :series="series"
    ></apexchart>
  </div>
</template
