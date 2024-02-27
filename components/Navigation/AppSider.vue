<script setup lang="ts">
import {
  UsergroupAddOutlined,
  ReadOutlined,
  UserOutlined,
  AreaChartOutlined,
  BellOutlined,
  GroupOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";

const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(["1"]);

const menuItems = [
  { key: "1", icon: GroupOutlined, title: "Overview", to: "/overview" },
  { key: "3", icon: AreaChartOutlined, title: "Analytics", to: "/analytics" },
  { key: "2", icon: ReadOutlined, title: "Cases", to: "/cases" },
  { key: "4", icon: UsergroupAddOutlined, title: "Users", to: "/users" },
  { key: "5", icon: BellOutlined, title: "Updates", to: "/updates" },
  { key: "6", icon: UserOutlined, title: "Profile", to: "/profile" },
];
</script>

<template>
  <a-layout-sider v-model:collapsed="collapsed" class="sider" collapsible>
    <div style="height: 64px; background-color: #f5f5f5">
      <div
        style="
          max-width: 180px;
          max-height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <v-img src="/images/fichua-logo.png" />
      </div>
    </div>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      style="height: 100%"
    >
      <a-menu-item v-for="item in menuItems" :key="item.key">
        <NuxtLink :to="item.to">
          <component :is="item.icon" />
          <span>{{ item.title }}</span>
        </NuxtLink>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>
