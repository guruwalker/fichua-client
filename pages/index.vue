<script setup lang="ts">
import { TrashIcon } from "vue-tabler-icons";

</script>


<template>
  <div>
    Hello world

    <v-btn>Button</v-btn>

  <a-breadcrumb>
    <a-breadcrumb-item>Home</a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Application Center</a></a-breadcrumb-item>
    <a-breadcrumb-item><a href="">Application List</a></a-breadcrumb-item>
    <a-breadcrumb-item>An Application</a-breadcrumb-item>
  </a-breadcrumb>

wahome
  <TrashIcon
                    size="18"
                    style="cursor: pointer"
                    color="red"
                  />
  </div>
</template>
