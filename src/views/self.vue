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
                name="content1"
                style="display: block"
              >
                <a-textarea v-model:value="formState.content1" />
              </a-form-item>

              <a-form-item
                label="2.你最自豪的成就是什么？为什么这些成就对你如此重要？"
                name="content2"
                style="display: block"
              >
                <a-textarea v-model:value="formState.content2" />
              </a-form-item>

              <a-form-item
                label="3.你是如何处理挫折和困难的？你的应对策略是什么？"
                name="content3"
                style="display: block"
              >
                <a-textarea v-model:value="formState.content3" />
              </a-form-item>

              <a-form-item
                label="4.在你的人际关系中，你通常扮演什么角色？你喜欢这个角色吗？"
                name="content4"
                style="display: block"
              >
                <a-textarea v-model:value="formState.content4" />
              </a-form-item>

              <a-form-item
                label="5.你在未来五年内的职业和个人目标是什么？你计划如何实现这些目标？"
                name="content5"
                style="display: block"
              >
                <a-textarea v-model:value="formState.content5" />
              </a-form-item>

              <a-form-item>
                <a-space style="width: 100%; justify-content: center">
                  <a-button @click="resetClick">重置</a-button>
                  <a-button type="primary" html-type="submit" @click="handleSubmit">提交</a-button>
                </a-space>
              </a-form-item>
            </a-form>
          </a-card>
        </a-tab-pane>
        <a-tab-pane key="3" tab="历史记录">
          <a-table
            :dataSource="dataSource"
            :columns="columns"
            :pagination="pagination"
            @change="handlePageParams"
          />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import { reactive, ref, onMounted } from 'vue'
import { listSelf, addSelf } from '../http/user'
import { message } from 'ant-design-vue'

onMounted(() => {
  listSelfData()
})

const pagination = ref({
  pageSize: 10,
  pageNumber: 1,
  total: 0
})

const formState = ref({
  content1: '',
  content2: '',
  content3: '',
  content4: '',
  content5: ''
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
    title: '你认为自己的核心价值观是什么？这些价值观如何影响你的日常生活和决策？',
    dataIndex: 'content1',
    key: 'content1'
  },
  {
    title: '你最自豪的成就是什么？为什么这些成就对你如此重要？',
    dataIndex: 'content2',
    key: 'content2'
  },
  {
    title: '你是如何处理挫折和困难的？你的应对策略是什么？',
    dataIndex: 'content3',
    key: 'content3'
  },
  {
    title: '在你的人际关系中，你通常扮演什么角色？你喜欢这个角色吗？',
    dataIndex: 'content4',
    key: 'content4'
  },
  {
    title: '你在未来五年内的职业和个人目标是什么？你计划如何实现这些目标？',
    dataIndex: 'content5',
    key: 'content5'
  }
])

const listSelfData = async () => {
  const userId = localStorage.getItem('userId')
  const body = {
    ...pagination.value,
    userId: userId
  }
  const res = await listSelf(body)
  if (res && res.data.body.dataList) {
    dataSource.value = res.data.body.dataList
    pagination.value.total = res.data.body.allTotal
  } else {
    message.error('自我探知列表获取失败')
  }
}

const resetClick = () => {
  formState.value = {
    content1: '',
    content2: '',
    content3: '',
    content4: '',
    content5: ''
  }
}
const handleSubmit = async () => {
  const body = {
    ...formState.value,
    userId: Number(localStorage.getItem('userId'))
  }
  const res = await addSelf(body)
  if (res && res.data.reCode == '200') {
    message.success('添加成功!!')
    listSelfData()
    formState.value = {
      content1: '',
      content2: '',
      content3: '',
      content4: '',
      content5: ''
    }
  } else {
    message.error('添加失败!!')
  }
}

const handlePageParams = (page, pageSize) => {
  console.log(page, pageSize)
  pagination.value.pageNumber = page.current
  listSelfData()
}
</script>

<style lang="scss" scoped>
:deep(.ant-form-item-control) {
  width: 100% !important;
  justify-content: center !important;
  margin-left: 0 !important;
  text-align: center !important;
}
</style>
