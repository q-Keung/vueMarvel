<template>
  <el-main>
    <el-row>
      <el-col style="height:100%;" :span="22" :offset="1">
        <div class="marvel-main">
          <vue-echarts></vue-echarts>
          <div class="marvel-timeline">
            <time-line></time-line>
            <div class="marvel-rate">
              <div class="rate-title">
                <span class="span">了解完漫威电影宇宙，就来评个分吧！<span class="iconfont iconmysql"></span></span>
                <el-rate ref="rate" @change="changeRate" v-model="rateVal" allow-half show-score
                  :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
  import vueEcharts from '../components/echarts.vue'
  import timeLine from '../components/timeline'
  import {
    mapMutations,
    mapGetters
  } from 'vuex'
  export default {
    name: 'mainer',
    components: {
      timeLine,
      vueEcharts
    },
    data() {
      return {
        rateVal: 0,
      }
    },
    created() {
      this.rateVal = this.$store.getters.getRate;
    },
    methods: {
      getCarousel(e) {
        // console.log(e);
      },
      changeRate(rate) {
        //bug  tab
        this.rateVal = rate;
        this.$store.commit('setRate', rate);
        this.$message({
          type: "success",
          message: '谢谢您的评分！你真可爱！'
        })
      },

    },
    // beforeRouteLeave(to, from, next) {
    //   console.log(to)
    // }
  }

</script>

<style lang="scss">
  .el-main {
    margin: 0;
    padding: 0;

    img {
      width: 100%;
      height: 100%;
      // z-index: 9999;
    }
  }
  .marvel-main {

    header {
      text-align: center;
    }

    /*漫威时间线*/
    .marvel-timeline {
      width: 100%;
    }

    /*评分*/
    .marvel-rate {
      margin: 20px auto;
      width: 95%;
      display: flex;
      align-items: center;
      box-shadow: 0 0 5px 5px rgb(247, 244, 244);
      height: 80px;
      border: 1px solid rgb(236, 231, 231);
      border-radius: 10px;

      .rate-title {
        width: 100%;
        display: flex;
        justify-content: flex-end;
      }

      .span {
        margin-right: 20px;
      }

      .el-rate {
        width: 165px;
      }
    }

    .author {
      display: block;
      width: 580px;
      height: 180px;
      background: #c0c4cc;
      margin: 0 auto;
      text-align: left;
      // text-indent: 18px;
      border-left: 8px solid #606266;
      padding-left: 20px;
    }

    .author::after {}
  }

</style>
