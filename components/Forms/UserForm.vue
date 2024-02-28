<script lang="ts" setup>
interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = ref<FormState>({
  username: "",
  password: "",
  remember: true,
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};
</script>

<template>
  <div style="display: flex">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-row>
        <a-col :span="24">
          <a-form-item
            label="Full name"
            name="fullname"
            :rules="[
              { required: true, message: 'Please input your full name!' },
            ]"
          >
            <a-input v-model:value="formState.username" />
          </a-form-item>
        </a-col>
        <a-col :span="24">
          <a-form-item
            label="Password"
            name="password"
            :rules="[
              { required: true, message: 'Please input your password!' },
            ]"
          >
            <a-input-password v-model:value="formState.password" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </div>
</template>
