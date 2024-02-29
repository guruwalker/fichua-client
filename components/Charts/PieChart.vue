<script setup lang="ts">
const { analyticsState } = useAnalytics()

const pieChartData = analyticsState.value.pie_chart

// Modify the keys dynamically
const renamedPieChartData = Object.fromEntries(
  Object.entries(pieChartData).map(([key, value]) => [
    key.replace('_', ' '), // Replace underscores with spaces
    value
  ])
);

const options = ref({
  chart: {
    type: "pie",
  },
  labels: Object.keys(renamedPieChartData),
  plotOptions: {
    pie: {
      expandOnClick: false,
    },
  },
});

const series = ref(Object.values(pieChartData));
</script>

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
