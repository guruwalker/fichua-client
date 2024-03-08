<script setup lang="ts">
const props = defineProps({
  case: {
    type: Object,
    required: true,
  },
});

// Define a function to capitalize the first letter of each word
const capitalizeFirstLetter = (str: string) => {
  return str.replace(/\b\w/g, (char: string) => char.toUpperCase());
};
</script>

<template>
  <a-card
    hoverable
    style="margin: 20px"
  >
    <a-list size="small" bordered>
      <a-list-item
        style="
          display: flex;
          justify-content: space-between;
          align-items: center;
        "
      >
        <div style="text-align: center">
          <h1 style="font-size: 20px; text-transform: uppercase">
            {{ props.case.crime_type }}
          </h1>
        </div>
        <div>
        Case ID:  <b>{{ props.case.id }}</b>
        </div>
      </a-list-item>

      <a-list-item style="font-size: 17px"
        ><b>Description</b>{{ props.case.statement }}</a-list-item
      >
      <a-list-item style="font-size: 17px"
        ><b>Status</b>: {{ props.case.status }}</a-list-item
      >
      <a-list-item style="font-size: 17px"
        ><b>Priority</b>: {{ props.case.priority }}</a-list-item
      >
      <a-list-item style="font-size: 17px"
        ><b>Location</b>: {{ props.case.location }}</a-list-item
      >
      <a-list-item style="font-size: 17px"
        ><b>Status</b>: {{ props.case.status }}</a-list-item
      >
    </a-list>
  </a-card>
</template>
