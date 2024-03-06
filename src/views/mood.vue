<template>
  <div class="mood-container">
    <Header />
    <div class="content banner">
      <div class="top">
        <div class="left">
          <div class="seletedMood">
            <span class="hello">Hello!!</span>
            &nbsp;
            <span class="title">欢迎来到我的主页,祝您有美好的一天,让我来记录您当前的心情吧~</span>
            <a-select
              ref="select"
              v-model:value="moodStatus"
              style="width: 200px; margin-left: 20px"
              @focus="focus"
              @change="handleChange"
              placeholder="请选择心情"
            >
              <a-select-option value="1">快乐</a-select-option>
              <a-select-option value="2">悲伤</a-select-option>
              <a-select-option value="3">愤怒</a-select-option>
              <a-select-option value="4">狂喜</a-select-option>
              <a-select-option value="5">平静</a-select-option>
            </a-select>
          </div>

          <div style="margin-left: 20px">
            <a-input
              v-model:value="moodDesc"
              placeholder="请输入心情描述"
              style="width: 500px"
            ></a-input>
          </div>
        </div>

        <div class="right">
          <a-button type="primary" @click="handleClick">保存</a-button>
        </div>
      </div>

      <div class="center">
        <div class="days">
          <div class="name">周杰伦，</div>
          <div class="total">您累计记录心情: 215 天</div>
        </div>

        <p class="time">您上次记录时间:2024-03-05 11:17</p>
      </div>
      <div class="bottom">
        <a-table :dataSource="dataSource" :columns="columns" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import { ref } from 'vue'

const moodStatus = ref()
const moodDesc = ref()

const focus = () => {
  console.log('focus')
}

const handleChange = (value) => {
  console.log(`selected ${value}`)
}

const handleClick = () => {
  switch (Number(moodStatus.value)) {
    case 1:
      moodStatus.value = '快乐'
      break
    case 2:
      moodStatus.value = '悲伤'
      break
    case 3:
      moodStatus.value = '愤怒'
      break
    case 4:
      moodStatus.value = '狂喜'
      break
    case 5:
      moodStatus.value = '平静'
      break
  }

  const obj = {
    key: Math.random() * 10,
    status: moodStatus.value,
    desc: moodDesc.value,
    time: '2024-03-05 23:30'
  }
  dataSource.value.push(obj)
}

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
.mood-container {
  .top {
    padding-top: 50px;
    display: flex;
    align-items: baseline;

    .left {
      display: flex;
      align-items: baseline;
      .seletedMood {
        .hello {
          font-size: 30px;
          font-weight: bold;
          color: slateblue;
        }

        .title {
          color: slateblue;
        }
      }
    }

    .right {
      margin-left: 40px;
    }
  }

  .center {
    font-size: 14px;
    .days {
      margin-top: 20px;
      display: flex;
      align-items: center;
      .name {
        color: slateblue;
        font-weight: bold;
      }
    }

    .time {
      margin-top: 10px;
    }
  }

  .bottom {
    margin-top: 40px;
  }
}
</style>
