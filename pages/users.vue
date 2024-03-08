
<script setup lang="ts">
import UserTable from "@/components/UserTable.vue";
import type { TableColumnsType } from "ant-design-vue";

import {
  TrademarkCircleFilled,
  PlusSquareOutlined,
} from "@ant-design/icons-vue";

useHead({
  title: "System users | Fichua",
});

const route = useRoute();

const pageNameCapitalized = computed(() => {
  return route.name
    ? route.name.toString().charAt(0).toUpperCase() +
        route.name.toString().slice(1)
    : "";
});

const {
  isEditingUser,
  updateSingleUser,
  userFormState,
  getAllUsers,
  getSingleUser,
  deleteSingleUser,
  resetUsersFormState,
  users,
} = useUsers();

const response = await useApi<IGetAllUsers>("/users", {
  method: "GET",
});

users.value = response?.data.data;

const columns = ref<TableColumnsType>([
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    resizable: true,
    sorter: true,
    width: 100,
  },
  {
    title: "Full name",
    dataIndex: "full_name",
    key: "full_name",
    resizable: true,
    sorter: true,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    resizable: true,
    sorter: true,
  },
  {
    title: "Phone number",
    dataIndex: "phone_number",
    key: "phone_number",
    resizable: true,
    sorter: true,
  },
  {
    title: "National ID",
    dataIndex: "national_id",
    key: "national_id",
    resizable: true,
    sorter: true,
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
    resizable: true,
    sorter: true,
  },
  {
    title: "Actions",
    key: "action",
    fixed: "right",
    width: 100,
  },
]);

const router = useRouter();

const showEditUserDrawer = ref<boolean>(false);

const editUser = async (user_id: string) => {
  await getSingleUser(user_id);
  showEditUserDrawer.value = true;
};

const updateUser = async () => {
  await updateSingleUser(userFormState.value.id);
  await getAllUsers();
  showEditUserDrawer.value = false
};

const deleteUser = async (user_id: number) => {
  Modal.confirm({
    title: "Delete user",
    content: "Are you sure you want to delete this user?",
    okText: "Yes",
    centered: true,
    okType: "danger",
    cancelText: "No",
    async onOk() {
      await deleteSingleUser(user_id);
      await getAllUsers();
    },
    onCancel() {
      return;
    },
  });
};
</script>

<template>
  <div>
    <!-- ---------------------------------------------- -->
    <!-- Header -->
    <!-- ---------------------------------------------- -->
    <!-- Breadcrumb -->
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
            title="Users"
            sub-title="Manage system users"
            :ghost="false"
          >
            <template #extra>
              <a-button key="1" type="primary" :color="'#5f8524'">
                Create User
              </a-button>
            </template>
          </a-page-header>
        </a-col>
      </a-row>
    </a-space>

    <!-- ---------------------------------------------- -->
    <!-- Search bar -->
    <!-- ---------------------------------------------- -->
    <a-space direction="vertical" style="width: 100%; padding: 14px">
      <a-input-search
        v-model:value="value"
        placeholder="Search users"
        enter-button
        @search="onSearch"
      />
    </a-space>

    <!-- ---------------------------------------------- -->
    <!-- Datagrid -->
    <!-- ---------------------------------------------- -->
    <Datagrid
      :dataSource="users"
      :columns="columns"
      @edit="editUser"
      @delete="deleteUser"
    />
  </div>

  <!-- Edit User Drawer -->
  <a-drawer
    width="100%"
    title="Edit user"
    placement="bottom"
    :open="showEditUserDrawer"
    @close="showEditUserDrawer = false"
  >
    <template #extra>
      <a-button style="margin-right: 8px" @click="showEditUserDrawer = false"
        >Cancel</a-button
      >
      <a-button type="primary" @click="updateUser()">Submit</a-button>
    </template>
    <FormsUserForm />
  </a-drawer>
</template>
