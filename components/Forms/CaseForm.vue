<script lang="ts" setup>
const { casesFormState, isEditingCases, createCase, updateSingleCase } =
  useCases();

const submit = async () => {
  isEditingCases.value
    ? await updateSingleCase(casesFormState.value.id)
    : await createCase();
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
      </a-row>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" @click="submit()">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
