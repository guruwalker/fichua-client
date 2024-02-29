<script setup lang="ts">
const props = defineProps({
  case: {
    type: Object,
    required: true,
  },
});

console.log('props', props.case)

// Define a function to capitalize the first letter of each word
const capitalizeFirstLetter = (str: string) => {
  return str.replace(/\b\w/g, (char: string) => char.toUpperCase());
};
</script>

<template>
   <a-card
        hoverable
        :title="capitalizeFirstLetter(props.case.crime_type)"
        style="margin: 20px"
      >
        <p style="font-size: 17px">{{ props.case.statement }}</p>
        <p style="font-size: 17px">Status: {{ props.case.status }}</p>
        <p style="font-size: 17px">Priority: {{ props.case.priority }}</p>
        <p style="font-size: 17px">Location: {{ props.case.location }}</p>
        <p style="font-size: 17px">Status: {{ props.case.status }}</p>

      </a-card>
</template>
