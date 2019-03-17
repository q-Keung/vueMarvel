<template>
    <el-container>
        <el-header height="60px">
          <c-header></c-header>
        </el-header>
        
        <div class="assider">
          <!-- <div class="tester2"></div> -->
          <c-slider></c-slider>
        </div>
        <div class="bodyer">
          <!-- <div class="tester"></div> -->
          <transition name="fade-transform" mode="out-in">
            <router-view></router-view>
          </transition>
          <!-- <c-bodyer></c-bodyer> -->
        </div>
        
    </el-container>
    
</template>

<script>
import cHeader from '../../views/layout/cHeader.vue';
import cSlider from '../../views/layout/cSlider.vue';
import cBodyer from '../../views/layout/cBodyer.vue';
export default {
  name: "indexer",
  components: {
    cHeader,
    cSlider,
    cBodyer
  },
  data() {
    return {
      
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
body {
  overflow-x: hidden;
}
body > .el-container {
  margin-bottom: 40px;
}
.bodyer {
  position: absolute;
  left: 300px;
  top: 60px;
  bottom: 0;
  right: 0;
  width: calc(100vw - 320px);
  // width: 100vw;
  // height: 100vh;
  margin-top: 0;
  // background: #98b4d6;
  overflow-x: hidden;
  overflow-y: auto;
  .tester {
    height: 1000px;
  }
  /*修改滚动条样式*/
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #606266;
  }
}

.assider {
  width: 300px;
  // height: 100vh;
  position: absolute;
  left: 0;
  top: 60px;
  bottom: 0;
  right: 0;
  // margin: 0;
  // background: rgb(238, 186, 186);
  overflow-x: hidden;
  overflow-y: auto;
  .tester2 {
    height: 1200px;
    // width: 100%;
  }
  /*修改滚动条样式*/
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 6px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #606266;
  }
}

.el-header {
  height: 100px;
  color: #2575fc;
  // background: #aed2fd;
  text-align: center;
  vertical-align: middle;
  //   line-height: 60px;
}


</style>
