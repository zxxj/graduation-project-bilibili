<template>
  <div class="home-container">
    <div class="header">
      <div class="left"></div>
      <div class="right">
        <div class="item">
          <div class="icon">
            <img src="../assets/images/home/心情.png" alt="" />
          </div>
          <div class="text">心情记录</div>
        </div>

        <div class="item">
          <div class="icon">
            <img src="../assets/images/home/自我评价.png" alt="" />
          </div>
          <div class="text">自我探知</div>
        </div>

        <div class="item">
          <div class="icon">
            <img src="../assets/images/home/问卷调查.png" alt="" />
          </div>
          <div class="text">问卷调查</div>
        </div>

        <div class="item">
          <div class="icon">
            <img src="../assets/images/home/信件.png" alt="" />
          </div>
          <div class="text">信件</div>
        </div>

        <div class="item">
          <div class="icon">
            <img src="../assets/images/home/登录.png" alt="" />
          </div>
          <div class="text">登录</div>
        </div>
      </div>
    </div>

    <div class="menu banner">
      <Menu />
    </div>

    <div class="content banner">content</div>
  </div>
</template>

<script setup>
import Menu from '../components/HomeMenu.vue'
</script>

<style lang="scss" scoped>
.home-container {
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
}
</style>
