<template>
  <div class="login">
    <div class="login-wrap">
      <a-form
        :model="formData"
        :rules="rules"
        ref="formName"
        class="login-form"
      >
        <div class="title">欢迎来到后台管理系统</div>
        <a-form-item
          label="账号"
          name="account"
          :wrapper-col="{ span: 18, offset: 1 }"
        >
          <a-input
            v-model:value="formData.account"
            placeholder="请输入账号"
          ></a-input>
        </a-form-item>
        <a-form-item
          label="密码"
          name="password"
          :wrapper-col="{ span: 18, offset: 1 }"
        >
          <a-input-password
            v-model:value="formData.password"
            placeholder="请输入密码"
          >
          </a-input-password>
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 18, offset: 3 }">
          <a-button type="primary" @click="submitForm" block>
            登陆
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, inject } from 'vue';
import { Form } from 'ant-design-vue';
import { useRouter, Router } from 'vue-router';
interface iFormData {
  account: string;
  password: string;
}
export default defineComponent({
  name: 'LOGIN',
  setup() {
    const message: any = inject('$message');
    const router: Router = useRouter();
    const formData = reactive<iFormData>({ account: '', password: '' });
    const rules = reactive({
      account: [{ required: true, message: '请输入账号', trigger: 'blur' }],
      password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
    });
    const formName = ref<typeof Form | null>(null);
    const submitForm = (): void => {
      if (!formName.value) return;
      formName.value
        .validate()
        .then(() => {
          message.success('登录成功');
          router.push({ name: 'HOME' });
        })
        .catch((err: any) => {
          console.log(err);
        });
    };
    return {
      formData,
      rules,
      formName,
      submitForm,
    };
  },
});
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  background: linear-gradient(to bottom right, #50a3a2, #53e3a6);
  overflow: hidden;
  .login-wrap {
    width: 330px;
    margin: auto;
    margin-top: 200px;
    .login-form {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 400px;
      padding: 30px 50px 10px;
      background: #fff;
      border-radius: 10px;
      text-align: center;
      transform: translate(-50%, -50%);
      box-shadow: 0 2px 10px #e6e6e6;
      z-index: 9;
      .title {
        font-size: 22px;
        color: #0b9aff;
        letter-spacing: 2px;
        margin: 10px 0 24px;
      }
    }
  }
}
</style>
