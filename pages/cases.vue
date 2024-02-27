<script setup lang="ts">
import type { TableColumnsType } from "ant-design-vue";

import {
  TrademarkCircleFilled,
  PlusSquareOutlined
} from "@ant-design/icons-vue";
useHead({
  title: "Cases",
});

const router = useRouter();

const {
  isEditingCases,
  resetCasesFormState,
  getSingleCase,
  getAllCases,
  deleteSingleCase,
  casesFormState
} = useCases();

const response = await useApi<IGetAllCases>("/cases", {
  method: "GET",
});

casesFormState.value = response?.data;

const columns = ref<TableColumnsType>([
  {
    title: "id",
    dataIndex: "id",
    key: "id",
    resizable: true,
    width: 50,
  },
  {
    title: "Case ID",
    dataIndex: "case_uuid",
    key: "case_uuid",
    resizable: true,
    width: 150,
  },
  {
    title: "Category",
    dataIndex: "crime_type",
    key: "crime_type",
    resizable: true,
    width: 200,
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    resizable: true,
    width: 150,
    ellipsis: true,
  },
  {
    title: "Priority",
    dataIndex: "priority",
    key: "priority",
    resizable: true,
    width: 150,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    resizable: true,
    width: 150,
  },
  // {
  //   title: "Anonymous",
  //   dataIndex: "is_anonymous",
  //   key: "is_anonymous",
  //   resizable: true,
  //   width: 150,
  // },
  // {
  //   title: "Date posted",
  //   dataIndex: "created_at",
  //   key: "created_at",
  //   resizable: true,
  //   width: 150,
  // },
  {
    title: "Actions",
    key: "action",
    resizable: true,
    width: 150,
  },
]);

function handleResizeColumn(w: any, col: any) {
  col.width = w;
}

const editEventComment = async (comment_id: string) => {
  isEditingCases.value = true;
  const response = await getSingleCase(comment_id);
  router.push(`/cases/${response?.id}`);
};

const openEventsCommentsForm = () => {
  isEditingCases.value = false;
  resetCasesFormState();
  router.push("/cases/new-comment");
};

const showDeleteConfirm = async (comment_id: number) => {
  Modal.confirm({
    title: 'Delete event comment',
    icon: 'TrademarkCircleFilled',
    content: 'Are you sure you want to delete this comment?',
    okText: 'Yes',
    centered: true,
    okType: 'danger',
    cancelText: 'No',
    async onOk() {
      await deleteSingleCase(comment_id)
      await getAllCases()
    },
    onCancel() {
      return;
    },
  });
};
</script>

<template>
  <div class="pa-4">
    <!-- ---------------------------------------------- -->
    <!--Title -->
    <!-- ---------------------------------------------- -->
    <h1 class="text-h1 py-4">Cases</h1>

    <!-- ---------------------------------------------- -->
    <!--Event comments table -->
    <!-- ---------------------------------------------- -->
    <v-row>
      <v-col cols="12" md="12">
        <div class="py-7 pt-1">
          <div class="px-3 pb-5">
            <v-btn color="info" @click="openEventsCommentsForm()">
              <div class="d-flex align-center gap-2">
                <PlusSquareOutlined :size="24" />
                New case
              </div>
            </v-btn>
          </div>
          <div>
            <a-table
              :dataSource="casesFormState"
              :columns="columns"
              @resizeColumn="handleResizeColumn"
              :scroll="{ x: 2000 }"
              :expand-column-width="1000"
            >
              <template #bodyCell="{ column, record }">

                <!-- Actions -->
                <template v-if="column.key === 'action'">
                  <TrashIcon
                    size="18"
                    style="cursor: pointer"
                    color="red"
                    @click="showDeleteConfirm(record.id)"
                  />
                  <a-divider type="vertical" />
                  <EditIcon
                    size="18"
                    color="blue"
                    style="cursor: pointer"
                    @click="editEventComment(record.id)"
                  />
                </template>
              </template>
            </a-table>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
