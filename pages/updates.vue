<script setup lang="ts">
import {
  PushpinOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";

definePageMeta({
  layout: "default",
});

useHead({
  title: "Updates | Fichua",
});

const updates = ref();

const response = await useApi<IGetUpdates>("/pages/updates", {
  method: "GET",
});

updates.value = response?.data;

// Define a function to capitalize the first letter of each word
const capitalizeFirstLetter = (str: string) => {
  return str.replace(/\b\w/g, (char: string) => char.toUpperCase());
};
</script>


<template>
  <div>
    <!-- ---------------------------------------------- -->
    <!-- Header -->
    <!-- ---------------------------------------------- -->
    <a-breadcrumb style="height: 40px; display: flex; align-items: center">
      <a-breadcrumb-item style="color: #5f8524; font-weight: 600"
        >Dashboard</a-breadcrumb-item
      >
      <a-breadcrumb-item>{{ pageNameCapitalized }}</a-breadcrumb-item>
    </a-breadcrumb>

    <a-space direction="vertical" style="width: 100%">
      <a-row
        :gutter="[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]"
      >
        <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <a-page-header
            title="Updates"
            sub-title="Latest reports and cases in Nairobi"
            :ghost="false"
          >
          </a-page-header>
        </a-col>
      </a-row>
    </a-space>

    <div v-for="update in updates" :key="update.id">
      <a-card
        hoverable
        :title="capitalizeFirstLetter(update.crime_type)"
        style="margin: 20px"
      >
        <p style="font-size: 17px">{{ update.statement }}</p>
        <p style="font-size: 17px">Status: {{ update.status }}</p>
        <p style="font-size: 17px">Priority: {{ update.priority }}</p>
        <p style="font-size: 17px">Location: {{ update.location }}</p>
        <p style="font-size: 17px">Status: {{ update.status }}</p>

      </a-card>
    </div>
  </div>
</template>

<style scoped>
:where(.css-dev-only-do-not-override-1hsjdkk).ant-card .ant-card-head {
  font-size: 20px !important;
}

.ant-card-head-title {
  font-size: 20px !important;
}
</style>
