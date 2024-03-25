<script lang="ts" setup>
import { useDisplay } from 'vuetify/lib/framework.mjs';

const { casesFormState, createCase, isEditingCases, updateSingleCase, getAllCases } =
  useCases();

const route = useRoute();

const userRole = useCookie<string | undefined>("role");

const userId = useCookie<string | number>("user_id");

const showSubmitButton = ref<boolean>(false);

showSubmitButton.value = route.fullPath.includes("new-case");

const submit = async () => {
  isEditingCases.value
    ? await updateSingleCase(casesFormState.value.id)
    : await createCase();
};
const officers = await useApi<IGetAllUsers>("/users/officers", {
  method: "GET",
});

const closeSingleCase = async () => {
  casesFormState.value.is_closed = true
  casesFormState.value.closed_by = userId.value
  casesFormState.value.date_closed = Date.UTC()
  casesFormState.value.status = 'closed'
  await updateSingleCase(casesFormState.value.id)

  await getAllCases();

  if(process.client) {
    window.location.reload()
  }

};
</script>

<template>
  <div style="display: flex">
    <a-form
      :model="casesFormState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finishFailed="onFinishFailed"
    >
      <a-row>
        <a-col :span="24">
          <a-form-item label="Case UUID" name="case_uuid" required>
            <a-input disabled v-model:value="casesFormState.case_uuid" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item
            label="What category does this fit in?"
            name="crime_type"
            required
          >
            <a-input v-model:value="casesFormState.crime_type" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item
            label="Briefly describe the occurrence"
            name="statement"
            required
          >
            <a-textarea v-model:value="casesFormState.statement" rows="6" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item
            label="Where did this take place"
            name="location"
            required
          >
            <a-input v-model:value="casesFormState.location" />
          </a-form-item>
        </a-col>
        <a-col :span="24" v-if="userRole === 'user'">
          <a-form-item label="Privacy" name="is_anonymous" required>
            <a-radio-group v-model:value="casesFormState.is_anonymous">
              <a-radio-button :value="1">Submit Anonymously</a-radio-button>
              <a-radio-button :value="0">Submit my information</a-radio-button>
            </a-radio-group>
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="Priority" name="priority" required>
            <a-select v-model:value="casesFormState.priority">
              <a-select-option value="high">High</a-select-option>
              <a-select-option value="medium">Medium</a-select-option>
              <a-select-option value="low">Low</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="24" v-if="userRole !== 'user'">
          <a-form-item label="Assigned to" name="assigned_officer" required>
            <a-select v-model:value="casesFormState.assigned_officer">
              <a-select-option
                v-for="officer in officers.data"
                :key="officer.id"
                :value="officer.id"
              >
                {{ officer.full_name }}
              </a-select-option>
            </a-select>
          </a-form-item>
        </a-col>

        <!-- <a-col :span="24">
          <a-form-item label="Is closed" name="is_closed" required>
            <a-radio-group v-model:value="casesFormState.is_closed">
              <a-radio-button :value="true">Case  is Closed</a-radio-button>
              <a-radio-button :value="false"
                >Case is Open</a-radio-button
              >
            </a-radio-group>
          </a-form-item>
        </a-col> -->
      </a-row>

      <a-row>
        <a-col :span="12">
          <a-form-item
            v-if="showSubmitButton"
            :wrapper-col="{ offset: 8, span: 16 }"
          >
            <a-button type="primary" @click="submit()">Submit</a-button>
          </a-form-item>
        </a-col>

        <a-col :span="12">
          <a-form-item
            v-if="userRole !== 'user'"
            :wrapper-col="{ offset: 8, span: 16 }"
          >
            <a-button type="primary" @click="closeSingleCase()">Close this case</a-button>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
