<template>
  <div class="self-container">
    <Header />

    <div class="content banner">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="自我探知问卷">
          <a-card :bordered="false">
            <a-form
              :model="formState"
              name="basic"
              autocomplete="off"
              @finish="onFinish"
              @finishFailed="onFinishFailed"
            >
              <a-form-item
                label="1.你认为自己的核心价值观是什么？这些价值观如何影响你的日常生活和决策？"
                name="username"
                style="display: block"
              >
                <a-textarea v-model:value="formState.username" />
              </a-form-item>

              <a-form-item
                label="2.你最自豪的成就是什么？为什么这些成就对你如此重要？"
                name="username"
                style="display: block"
              >
                <a-textarea v-model:value="formState.username" />
              </a-form-item>

              <a-form-item
                label="3.你是如何处理挫折和困难的？你的应对策略是什么？"
                name="username"
                style="display: block"
              >
                <a-textarea v-model:value="formState.username" />
              </a-form-item>

              <a-form-item
                label="4.在你的人际关系中，你通常扮演什么角色？你喜欢这个角色吗？"
                name="username"
                style="display: block"
              >
                <a-textarea v-model:value="formState.username" />
              </a-form-item>

              <a-form-item
                label="5.你是如何描述自己的性格的？你认为自己的优点和缺点是什么？"
                name="username"
                style="display: block"
              >
                <a-textarea v-model:value="formState.username" />
              </a-form-item>

              <a-form-item
                label="6.你在未来五年内的职业和个人目标是什么？你计划如何实现这些目标？"
                name="username"
                style="display: block"
              >
                <a-textarea v-model:value="formState.username" />
              </a-form-item>

              <a-form-item>
                <a-space style="width: 100%; justify-content: center">
                  <a-button>重置</a-button>
                  <a-button type="primary" html-type="submit">提交</a-button>
                </a-space>
              </a-form-item>
            </a-form>
          </a-card>
        </a-tab-pane>
        <a-tab-pane key="3" tab="历史记录">
          <a-table :dataSource="dataSource" :columns="columns" />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import { reactive, ref } from 'vue'

const formState = reactive({
  username: '',
  password: '',
  remember: true
})
const onFinish = (values) => {
  console.log('Success:', values)
}
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

const activeKey = ref('1')
const dataSource = ref([
  {
    key: '1',
    status: '狂喜',
    desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈,我在狂喜,哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈,我在狂喜',
    time: '2024-03-05 08:30'
  },
  {
    key: '2',
    status: '开心',
    desc: '你看我像开心吗?你看我像开心吗?你看我像开心吗?你看我像开心吗?你看我像开心吗?你看我像开心吗?你看我像开心吗?',
    time: '2024-03-04 07:30'
  }
])

const columns = ref([
  {
    title: '心情状态',
    dataIndex: 'status',
    key: 'status'
  },
  {
    title: '心情描述',
    dataIndex: 'desc',
    key: 'desc',
    width: '70%'
  },
  {
    title: '记录时间',
    dataIndex: 'time',
    key: 'time'
  }
])
</script>

<style lang="scss" scoped>
:deep(.ant-form-item-control) {
  width: 100% !important;
  justify-content: center !important;
  margin-left: 0 !important;
  text-align: center !important;
}
</style>
