<script lang="ts" setup>
const { profileFormState, updateProfile } = useProfile();

const { getSingleUser } = useUsers()

const userId = useCookie('user_id')

const update = async () => {
  await updateProfile(userId.value)
  // await getSingleUser(userId.value)
}
</script>

<template>
  <div style="display: flex">
    <a-form
      :model="profileFormState.user"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finishFailed="onFinishFailed"
    >
      <a-row>
        <a-col :span="24">
          <a-form-item label="Full name" name="full_name" required>
            <a-input v-model:value="profileFormState.user.full_name" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="Phone number" name="phone_number" required>
            <a-input v-model:value="profileFormState.user.phone_number" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="National ID" name="national_id" required>
            <a-input v-model:value="profileFormState.user.national_id" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item label="Email" name="email" required>
            <a-input v-model:value="profileFormState.user.email" />
          </a-form-item>
        </a-col>
      </a-row>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" @click="update()">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
