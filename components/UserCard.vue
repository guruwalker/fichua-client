<script setup lang="ts">
const props = defineProps({
  user: {
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
            {{ props.user.full_name }}
          </h1>
        </div>
        <div>
        User ID:  <b>{{ props.user.id }}</b>
        </div>
      </a-list-item>

      <a-list-item style="font-size: 17px"
        ><b>National ID: </b>{{ props.user.national_id }}</a-list-item
      >
      <a-list-item style="font-size: 17px"
        ><b>Email</b>: {{ props.user.email }}</a-list-item
      >
      <a-list-item style="font-size: 17px"
        ><b>Phone number</b>: {{ props.user.phone_number }}</a-list-item
      >
      <a-list-item style="font-size: 17px"
        ><b>Role: </b>{{ props.user.role }}</a-list-item
      >
      <!-- <a-list-item style="font-size: 17px"
        ><b>Status: </b>: {{ props.user.status }}</a-list-item
      >  -->
    </a-list>
  </a-card>
</template>
