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
     <CaseCard :case="update"/>
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
