
<script setup lang="ts">
import type { TableColumnsType } from "ant-design-vue";

import {
  TrademarkCircleFilled,
  PlusSquareOutlined,
} from "@ant-design/icons-vue";

useHead({
  title: "Cases & Reports | Fichua",
});

const route = useRoute();

const userRole = useCookie<string | undefined>("role");

const userId = useCookie<string | number>("user_id");

const pageNameCapitalized = computed(() => {
  return route.name
    ? route.name.toString().charAt(0).toUpperCase() +
        route.name.toString().slice(1)
    : "";
});

const {
  isEditingCases,
  getAllCases,
  getSingleCase,
  deleteSingleCase,
  createCase,
  resetCasesFormState,
  casesFormState,
  updateSingleCase,
  cases
} = useCases();

const response = await useApi<IGetAllCases>("/cases", {
  method: "GET",
});

cases.value = response?.data;

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
    title: "Reported By",
    dataIndex: "reported_by",
    key: "reported_by",
    resizable: true,
    sorter: true,
    width: 150,
  },
  {
    title: "Category",
    dataIndex: "crime_type",
    key: "crime_type",
    resizable: true,
    sorter: true,
  },
  {
    title: "Statement",
    dataIndex: "statement",
    key: "statement",
    resizable: true,
    sorter: true,
    ellipsis: true,
    width: 260
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    resizable: true,
    sorter: true,
  },
  {
    title: "Assigned to",
    dataIndex: "assigned_officer",
    key: "assigned_officer",
    resizable: true,
    sorter: true,
    width: 190
  },
  {
    title: "Priority",
    dataIndex: "priority",
    key: "priority",
    resizable: true,
    sorter: true,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    resizable: true,
    sorter: true,
  },
  // {
  //   title: "Date closed",
  //   dataIndex: "date_closed",
  //   key: "date_closed",
  //   resizable: true,
  //   sorter: true,
  // },
  {
    title: "Actions",
    key: "action",
    fixed: "right",
    width: 130,
  },
]);

const router = useRouter();

const showEditCaseDrawer = ref<boolean>(false);

const showViewCaseModal = ref<boolean>(false);

const editCase = async (case_id: string) => {
  await getSingleCase(case_id);
  isEditingCases.value = true
  showEditCaseDrawer.value = true;
};

const viewCase = async (case_id: string) => {
  await getSingleCase(case_id);
  // isEditingCases.value = true
  showViewCaseModal.value = true;
};


const submitInformation = async () => {
  // await updateSingleCase(casesFormState.value.id);
    isEditingCases.value
    ? await updateSingleCase(casesFormState.value.id)
    : await createCase();
  await getAllCases();
  showEditCaseDrawer.value = false
};

const deleteCase = async (case_id: number) => {
  Modal.confirm({
    title: "Delete case",
    content: "Are you sure you want to delete this case?",
    okText: "Yes",
    centered: true,
    okType: "danger",
    cancelText: "No",
    async onOk() {
      await deleteSingleCase(case_id);
      await getAllCases();
    },
    onCancel() {
      return;
    },
  });
};

const getOfficerCases = async () => {
  const newResponse = await useApi<IGetAllCases>(`/cases/officer/${userId.value}`, {
  method: "GET",
});

cases.value = newResponse?.data;

}
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
            title="Cases"
            sub-title="Manage system cases"
            :ghost="false"
          >
            <template #extra>
              <a-button key="1" type="primary" :color="'#5f8524'" @click="showEditCaseDrawer = true">
                Create new case
              </a-button>

              <a-button v-if="userRole !== 'user'" key="2" type="primary" :color="'#5f8524'" @click="getOfficerCases()">
                Get cases assigned to me
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
        placeholder="Search cases"
        enter-button
        @search="onSearch"
      />
    </a-space>

    <!-- ---------------------------------------------- -->
    <!-- Datagrid -->
    <!-- ---------------------------------------------- -->
    <Datagrid
      :dataSource="cases"
      :columns="columns"
      @edit="editCase"
      @delete="deleteCase"
      @view="viewCase"
    />
  </div>

  <!-- Edit case Drawer -->
  <a-drawer
    width="100%"
    :title="isEditingCases ? 'Edit case' : 'Create case'"
    placement="bottom"
    :open="showEditCaseDrawer"
    @close="showEditCaseDrawer = false"
  >
    <template #extra>
      <a-button style="margin-right: 8px" @click="showEditCaseDrawer = false"
        >Cancel</a-button
      >
      <a-button type="primary" @click="submitInformation()">Submit</a-button>
    </template>
    <FormsCaseForm />
  </a-drawer>

    <!-- View case modal -->
    <a-modal
      v-model:open="showViewCaseModal"
      centered
      @ok="showViewCaseModal = false"
    >
    <CaseCard :case="casesFormState"/>
    </a-modal>
</template>
