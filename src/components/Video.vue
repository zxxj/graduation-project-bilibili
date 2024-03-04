<template>
  <div class="video-container">
    <div class="item">
      <div class="top">
        <img src="../assets/images/content/v1.jpg" alt="" />

        <div class="desc">
          <div class="desc-left">
            <div class="count">
              <img src="../assets/images/content/视频.png" alt="" />
              <div class="text">2.7万</div>
            </div>
            <div class="pcount">
              <img src="../assets/images/content/评论.png" alt="" />
              <div class="text">185</div>
            </div>
          </div>
          <div class="time">15:32</div>
        </div>
      </div>
      <div class="bottom"></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.item {
  border-radius: 8px;
  margin: 0 20px 60px 20px;
  width: 300px;
  height: 36%;
  background-color: pink;

  .top {
    position: relative;
    img {
      border-radius: 8px;
      width: 100%;
      height: 100%;
    }

    .desc {
      padding: 0 10px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.2);
      width: 100%;
      img {
        width: 25px;
        height: 25px;
      }
      position: absolute;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .desc-left {
        display: flex;
        font-size: 14px;
        .count {
          display: flex;
          align-items: center;
          margin-right: 8px;
        }

        .pcount {
          display: flex;
          align-items: center;
        }
      }

      .time {
        font-size: 14px;
      }
    }
  }
}
</style>
