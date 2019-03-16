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
          <router-view></router-view>
          <div class="footer">
            <div class="footer-container">
              <div class="f-logo-area">
                <img src="../assets/marvel-l-logo.jpg" alt="">
                <img src="../assets/avengers.png" alt="">
              </div>
              <ul>
                <li>Marvel的MCU</li>
                <li>对家的DC联盟</li>
                <li>博客</li>
                <li>作品集</li>
                <li>Github</li>
              </ul>
              <div class="contact">
                <img v-for="(item,index) in fImg" :key="index" :src="item.img" alt="">
              </div>
            </div>
          </div>
        </div>
        
    </el-container>
    
</template>

<script>
import cHeader from '@/views/header';
import cSlider from '@/views/body'
export default {
  name: "index",
  components: {
    cHeader,
    cSlider
  },
  data() {
    return {
      fImg: [{
        img: require('../assets/twitter.png')
      }, {
        img: require('../assets/facebook.png')
      }, {
        img: require('../assets/github.png')
      }, {
        img: require('../assets/in.png')
      }]
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
.footer {
  width: 100%;
  height: 200px;
  // background: #f5f2f2;
  // position: absolute;
  // bottom: 0;
  // left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .footer-container {
    width: 60%;
    height: 80%;
    .f-logo-area {
      width: 100px;
      height: 40px;
      margin: 0 auto 20px auto;
      display: flex;
      img {
        height: 40px;
        margin-right: 3px;
      }
    }
    .contact {
      display: flex;
      height: 40px;
      width: 200px;
      // background: red;
      margin: 0 auto;
      img {
        height: 100%;
        margin-right: 10px;
      }
    }
    // border: 1px solid red;
    ul {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      li {
        text-shadow: 2px 2px 4px #686767;
        font-size: 1rem;
        // font-weight: 600;
        color: rgb(56, 55, 55);
        cursor: pointer;
      }
      li:hover {
        text-decoration-line: underline;
      }
    }
    // padding: 30px 0;
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

.el-footer {
  background: #bad0e7;
}
</style>
