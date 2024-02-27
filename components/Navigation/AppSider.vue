<script setup lang="ts">
import {
  UsergroupAddOutlined,
  ReadOutlined,
  UserOutlined,
  AreaChartOutlined,
  BellOutlined,
  GroupOutlined
} from "@ant-design/icons-vue";
import { ref } from "vue";

const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(["1"]);

const menuItems = [
  { key: "1", icon: GroupOutlined, title: "Overview", to: "/overview"},
  { key: "3", icon: AreaChartOutlined, title: "Analytics", to: "/analytics" },
  { key: "2", icon: ReadOutlined, title: "Cases", to: "/cases" },
  { key: "4", icon: UsergroupAddOutlined, title: "Users", to: "/users" },
  { key: "4", icon: BellOutlined, title: "Updates", to: "/updates" },
  { key: "5", icon: UserOutlined, title: "Profile", to: "/profile" },
];
</script>

<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <div style="height: 64px; background-color: grey">
      <div
        style="height: 100%; display: flex; align-items: center; justify-content: center"
      >
        <h1>Logo</h1>
      </div>
    </div>
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <NuxtLink :to="item.to">
        <a-menu-item v-for="item in menuItems" :key="item.key">
        <component :is="item.icon" />
        <span>{{ item.title }}</span>
      </a-menu-item>
      </NuxtLink>
    </a-menu>
  </a-layout-sider>
</template>



<style scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme="dark"] .site-layout .site-layout-background {
  background: #2c3e50;
}
</style>

