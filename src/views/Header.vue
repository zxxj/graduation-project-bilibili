<template>
  <div class="header-container">
    <div :class="route.path !== '/home' ? 'header2' : 'header'">
      <div class="left"></div>
      <div class="right">
        <div class="item" @click="handleMenu(0)" v-if="route.path !== '/home'">
          <div class="icon">
            <img src="../assets/images/home/房子.png" alt="" />
          </div>
          <div class="text">首页</div>
        </div>
        <div class="item" @click="handleMenu(1)">
          <div class="icon">
            <img src="../assets/images/home/心情.png" alt="" />
          </div>
          <div class="text">心情记录</div>
        </div>

        <div class="item" @click="handleMenu(2)">
          <div class="icon">
            <img src="../assets/images/home/自我评价.png" alt="" />
          </div>
          <div class="text">自我探知</div>
        </div>

        <div class="item" @click="handleMenu(3)">
          <div class="icon">
            <img src="../assets/images/home/问卷调查.png" alt="" />
          </div>
          <div class="text">问卷调查</div>
        </div>

        <div class="item" @click="handleLetter">
          <div class="icon">
            <img src="../assets/images/home/信件.png" alt="" />
          </div>
          <div class="text">信件</div>
        </div>

        <div class="item" @click="handleMenu(5)">
          <div class="icon">
            <img src="../assets/images/home/登录.png" alt="" />
          </div>
          <div class="text">个人中心</div>
        </div>
      </div>
    </div>
  </div>

  <a-modal
    v-model:open="open"
    title="信件"
    @ok="handleOk"
    style="width: 800px"
    cancelText="关闭"
    okText="发送"
  >
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="自我探知问卷">
        <a-card :bordered="false">
          <a-form :label-col="{ style: { width: '80px' } }">
            <a-form-item label="收件人">
              <a-select
                ref="select"
                v-model:value="value1"
                style="width: 120px"
                @focus="focus"
                @change="handleChange"
              >
                <a-select-option value="jack">Jack</a-select-option>
                <a-select-option value="lucy">Lucy</a-select-option>
                <a-select-option value="Yiminghe">yiminghe</a-select-option>
              </a-select>
            </a-form-item>

            <a-form-item label="内容">
              <a-textarea></a-textarea>
            </a-form-item>
          </a-form>
        </a-card>
      </a-tab-pane>
      <a-tab-pane key="3" tab="历史记录">
        <a-table :dataSource="dataSource" :columns="columns" style="width: 100%" />
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
// 1
const router = useRouter()
const route = useRoute()
const value1 = ref('lucy')
const open = ref(false)

const handleMenu = (index) => {
  switch (index) {
    case 0:
      router.push('/home')
      break
    case 1:
      router.push('/mood')
      break
    case 2:
      router.push('/self')
      break
    case 3:
      router.push('/question')
      break
    case 5:
      router.push('/info')
      break
  }
}

const handleLetter = () => {
  open.value = true
}

const handleOk = (e) => {
  open.value = false
}
const columns = ref([
  {
    title: '收件人',
    dataIndex: 'person',
    key: 'person'
  },
  {
    title: '内容',
    dataIndex: 'desc',
    key: 'desc',
    width: '60%'
  },
  {
    title: '发送时间',
    dataIndex: 'time',
    key: 'time'
  }
])
const dataSource = ref([
  {
    key: '1',
    person: '周杰伦',
    desc: '测试内容1',
    time: '2024-03-05 08:30'
  },
  {
    key: '2',
    person: '刘德华',
    desc: '测试内容2',
    time: '2024-03-04 07:30'
  }
])
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  height: 180px;
  background: url('../assets/images/home/header.png') no-repeat center center;
  background-size: cover;

  .right {
    display: flex;
    align-items: baseline;
    .item {
      cursor: pointer;
      margin-top: 20px;
      margin: 20px 10px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: flex-start;
      .icon {
        img {
          width: 30px;
        }
      }

      .text {
        margin-top: 5px;
        color: #fff;
      }
    }
  }
}

.header2 {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;
  height: 80px;
  border: 1px solid slateblue;
  .right {
    display: flex;
    align-items: baseline;
    .item {
      cursor: pointer;
      margin-top: 20px;
      margin: 20px 15px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: flex-start;
      .icon {
        img {
          width: 30px;
        }
      }

      .text {
        margin-top: 5px;
        color: slateblue;
      }
    }
  }
}
</style>
