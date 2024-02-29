<script setup lang="ts">
const { analyticsState } = useAnalytics();

const horizontalBarChartData = analyticsState.value.horizontal_bar_chart;

const officerFullName = horizontalBarChartData.map(
  (data) => data.officer_details.full_name
);
const closedCases = horizontalBarChartData.map(
  (data) => data.number_of_closed_cases
);

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
    categories: officerFullName,
  },
});

const series = ref([
  {
    name: "Number of Closed Cases",
    data: closedCases,
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
      type="bar"
    ></apexchart>
  </div>
</template>
