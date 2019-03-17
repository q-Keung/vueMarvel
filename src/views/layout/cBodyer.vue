<template>
  <div>
    <!-- <router-view></router-view> -->
    <div class="footer">
      <div class="footer-container">
        <div class="f-logo-area">
          <img src="../../assets/marvel-l-logo.jpg" alt="">
          <img src="../../assets/avengers.png" alt="">
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
</template>

<script>
  export default {
    name: "cBodyer",
    data() {
      return {
        fImg: [{
          img: require('../../assets/twitter.png')
        }, {
          img: require('../../assets/facebook.png')
        }, {
          img: require('../../assets/github.png')
        }, {
          img: require('../../assets/in.png')
        }]
      }
    },
  }

</script>

<style lang="scss">
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

  .el-footer {
    background: #bad0e7;
  }

</style>
