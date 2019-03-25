<template>
  <!-- <div class="marvel-panel c-vertical"> -->
  <el-row>
    <el-col :span="24">
      <div class="marvel-panel c-vertical">
        <!-- <el-carousel trigger="click" height="350px">
          <el-carousel-item v-for="(item,index) in carouselArr" :key="index">
              <img :src="item.url" alt="">
          </el-carousel-item>
        </el-carousel> -->
        <!-- <transition name="panel"> -->

          <m-panel></m-panel>
          <m-panel></m-panel>
          <m-panel></m-panel>

          <m-panel></m-panel>
          <m-panel></m-panel>
        <!-- </transition> -->
      </div>
    </el-col>
  </el-row>
  <!-- </div> -->
</template>

<script>
  import mPanel from '../../components/panel.vue'
  export default {
    name: 'marvelpanel',
    components: {
      mPanel,
    },
    data() {
      return {
        carouselArr: [{
            url: require('../../assets/imgs/swipers/carousel1.jpg')
          },
          {
            url: require('../../assets/imgs/swipers/carousel2.jpg')
          },
          {
            url: require('../../assets/imgs/swipers/carousel3.jpg')
          },
        ]
      }
    }
  }

</script>

<style lang="scss">
  .marvel-panel {
    width: 100%;
    padding: 10px;
  }

  .panel-enter-active,
  .panel-leave-active {
    transition: opacity .5s;
  }

  .panel-enter,
  .panel-leave-to
  /* .fade-leave-active below version 2.1.8 */
    {
    opacity: 0;
  }

  .el-col {
    height: 300px;
    // background: chocolate;
  }

  .el-carousel {
    width: 100%;

    img {
      width: 100%;
      height: 100%;
    }
  }

</style>
