<template>
  <div class="register-container">
    <div class="content">
      <div class="left">
        <!-- <div class="title">欢迎来到我的毕设项目</div> -->
      </div>
      <div class="right">
        <a-form
          :model="formState"
          name="normal_login"
          class="login-form"
          @finish="onFinish"
          @finishFailed="onFinishFailed"
          :label-col="{ style: { width: '100px' } }"
        >
          <a-form-item
            label="用户名"
            name="username"
            :rules="[{ required: true, message: '请输入用户名!' }]"
          >
            <a-input v-model:value="formState.username">
              <template #prefix>
                <UserOutlined class="site-form-item-icon" />
              </template>
            </a-input>
          </a-form-item>

          <a-form-item
            label="密码"
            name="password"
            :rules="[{ required: true, message: '请输入密码!' }]"
          >
            <a-input-password v-model:value="formState.password">
              <template #prefix>
                <LockOutlined class="site-form-item-icon" />
              </template>
            </a-input-password>
          </a-form-item>

          <a-form-item label="年龄" name="age">
            <a-input v-model:value="formState.age"> </a-input>
          </a-form-item>

          <a-form-item label="邮箱" name="email">
            <a-input v-model:value="formState.email"> </a-input>
          </a-form-item>

          <a-form-item label="性别" name="gender">
            <a-select v-model:value="formState.gender">
              <a-select-option value="1">男</a-select-option>
              <a-select-option value="0">女</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item label="手机号" name="phone">
            <a-input v-model:value="formState.phone"> </a-input>
          </a-form-item>

          <a-form-item label="用户类型" name="flag">
            <a-select v-model:value="formState.flag">
              <a-select-option value="0">普通用户</a-select-option>
              <a-select-option value="1">医生</a-select-option>
              <a-select-option value="2">管理员</a-select-option>
            </a-select>
          </a-form-item>

          <a-form-item>
            <a-button
              :disabled="disabled"
              type="primary"
              html-type="submit"
              class="login-form-button"
              style="width: 60%; margin-left: 90px"
            >
              注册
            </a-button>
          </a-form-item>

          <a-form-item style="margin-left: 125px">
            <a @click="() => router.push('/login')">已有账号?去登录!</a>
          </a-form-item>
        </a-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { LockFilled, LockOutlined, UserOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import { reactive, computed } from 'vue'
import { register } from '../http/user'
import { message } from 'ant-design-vue'

const router = useRouter()

const formState = reactive({
  username: '',
  password: ''
})
const onFinish = async (values) => {
  values.age = Number(values.age)
  // values.phone = Number(values.phone)
  values.gender = Number(values.gender)
  values.flag = Number(values.flag)

  const res = await register(values)
  console.log(res)

  if (res && res.data.reCode == '200') {
    message.success('注册成功,即将进入登录页面!!')
    setTimeout(() => {
      router.push('/login')
    }, 2000)
  }
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
const disabled = computed(() => {
  return !(formState.username && formState.password)
})
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  height: 100vh;

  .left {
    flex: 1;
    background-color: slateblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .title {
      font-size: 40px;
      font-weight: bold;
      color: #fff;
    }

    .subtitle {
      color: #fff;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 500px;
    background-color: #fff;
  }
}
</style>
