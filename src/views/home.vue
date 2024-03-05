<template>
  <div class="home-container">
    <Header />

    <div class="menu banner">
      <Menu />
    </div>

    <div class="content banner">
      <Content />
    </div>
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Menu from '../components/HomeMenu.vue'
import Content from '../components/HomeContent.vue'
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
