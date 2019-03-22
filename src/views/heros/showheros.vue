<template>
  <div class="heros-waterfall">
    <vue-waterfall-easy enablePullDownEvent ref="waterfall" :width="innerW" :height="innerH" :imgsArr="items"
      @scrollReachBottom="getData" @click="imgClickFn">
      <div slot="waterfall-head" class="marvel-head">漫威图片墙</div>
      <!-- <div class="img-info" slot-scope="props">
        <p class="some-info">第{{props.index+1}}张图片</p>
        <p class="some-info">{{props.value.info}}</p>
      </div> -->
    </vue-waterfall-easy>
  </div>
</template>

<script>
  import vueWaterfallEasy from 'vue-waterfall-easy'
  import mixins from '../../mixins/index'
  import NProgress from 'nprogress' // Progress 进度条
  import 'nprogress/nprogress.css' // Progress 进度条样式
  import {getMarvelWaterFall} from '../../API/apis'
  export default {
    name: 'showheros',
    components: {
      vueWaterfallEasy
    },
    created() {
      NProgress.start();
    },
    mixins: [mixins],
    data() {
      return {
        autoResize: false,
        loadingStyle: {
          background: 'red',
        },
        items: [],
        waterfallCount:1,
      }
    },
    created() {
      console.log(process.env.BASE_API)
      // this.getWaterFallData();
      getMarvelWaterFall().then(res=>{
        this.items = res.mWaterfall;
      })
    },
    methods: {
      getWaterFallData() {

      },
      getData() {
         getMarvelWaterFall().then(res=>{
           console.log(this.waterfallCount)
           if(this.waterfallCount > 1){
             this.$refs.waterfall.waterfallOver();
             return false;
           }
           this.waterfallCount++;
           this.items = this.items.concat(res.mWaterfall);
         })
        // this.$refs.waterfall.waterfallOver()
      },
      imgClickFn(e, {
        index,
        value
      }) {
        let event = e || window.event;
        event.preventDefault()
        console.log(event)
        if (event.target.tagName.toLowerCase() == 'img') {
          console.log('img clicked', index, value)
        }
      }
    },
    computed: {

    },
    watch: {

    },
  }

</script>

<style lang="scss">
  .heros-waterfall {
    width: calc(100vw - 300px);
    padding: 10px;

    // background:rgb(29, 29, 29);
    .marvel-head {
      text-align: center;
      font-weight: 600;
      // font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;
      text-transform: uppercase;
      display: block;
      font-size: 54px;
      color: #424242;
      text-shadow: 3px 5px 9px #a3a2a0, 0px -2px 1px rgb(240, 236, 236);
      letter-spacing: 0px;
      text-align: center;
      // background: linear-gradient(to bottom, #ece4d9 0%,#e9dfd1 100%);
    }

    img {
      width: 100%;
      height: 100%;
    }

    .vue-waterfall-easy-scroll::-webkit-scrollbar {
      display: none;
    }
  }

</style>
