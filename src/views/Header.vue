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

        <div class="item" @click="handleMenu(4)">
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
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

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
  }
}
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
