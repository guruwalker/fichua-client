<script lang="ts" setup>
const { casesFormState, isEditingCases, createCase, updateSingleCase } =
  useCases();

// const isUserRole = ref<bool>()

// const submit = async () => {
//   isEditingCases.value
//     ? await updateSingleCase(casesFormState.value.id)
//     : await createCase();
// };
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
          <a-form-item
            label="Case UUID"
            name="case_uuid"
            required
            disabled
          >
            <a-input v-model:value="casesFormState.case_uuid" />
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
        <a-col :span="24">
          <a-form-item label="Privacy" name="is_anonymous" required>
            <a-radio-group v-model:value="casesFormState.is_anonymous">
              <a-radio-button :value="true">Submit Anonymously</a-radio-button>
              <a-radio-button :value="false"
                >Submit my information</a-radio-button
              >
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

        <a-col :span="24">
          <a-form-item label="Is closed" name="is_closed" required>
            <a-radio-group v-model:value="casesFormState.is_closed">
              <a-radio-button :value="true">Case  is Closed</a-radio-button>
              <a-radio-button :value="false"
                >Case is Open</a-radio-button
              >
            </a-radio-group>
          </a-form-item>
        </a-col>
      </a-row>

      <!-- <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" @click="submit()">Submit</a-button>
      </a-form-item> -->
    </a-form>
  </div>
</template>
