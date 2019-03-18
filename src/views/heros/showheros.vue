<template>
  <div class="heros-waterfall">
    <vue-waterfall-easy enablePullDownEvent ref="waterfall" :height="innerH" :imgsArr="items" @scrollReachBottom="getData"
      @click="imgClickFn">
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
  function parseUrl() {
    let startUrl = '../../assets/imgs/waterfalls/s',
      endUrl = '.jpg',
      imgsArr = [];
    for (let i = 1; i <= 23; i++) {
      let opt = {
        href: i,
        src: `${startUrl}${i}${endUrl}`
      }
      imgsArr.push(opt)
    }
    return imgsArr;
  }
  export default {
    name: 'showheros',
    components: {
      vueWaterfallEasy
    },
    created() {
      console.log(vueWaterfallEasy);
    },
    mixins : [mixins],
    data() {
      return {
        autoResize: false,
        loadingStyle: {
          background: 'red',
        },
        items: [{
            href: '1',
            src: require("../../assets/imgs/waterfalls/s1.jpg"),
          },
          {
            href: '2',
            src: require("../../assets/imgs/waterfalls/s2.jpg"),
          },
          {
            href: '3',
            src: require("../../assets/imgs/waterfalls/s3.jpg"),
          },
          {
            href: '4',
            src: require("../../assets/imgs/waterfalls/s4.jpg"),
          },
          {
            href: '5',
            src: require("../../assets/imgs/waterfalls/s5.jpg"),
          },
          {
            href: '10',
            src: require("../../assets/imgs/waterfalls/s4.jpg"),
          },
          {
            href: '6',
            src: require("../../assets/imgs/waterfalls/s6.jpg"),
          },
          {
            href: '7',
            src: require("../../assets/imgs/waterfalls/s7.jpg"),
          },
          {
            href: '8',
            src: require("../../assets/imgs/waterfalls/s8.jpg"),
          },
          {
            href: '9',
            src: require("../../assets/imgs/waterfalls/s9.jpg"),
          },
          {
            href: '11',
            src: require("../../assets/imgs/waterfalls/s3.jpg"),
          },
          {
            href: '12',
            src: require("../../assets/imgs/waterfalls/s12.jpg"),
          },
          {
            href: '13',
            src: require("../../assets/imgs/waterfalls/s13.jpg"),
          },
          {
            href: '14',
            src: require("../../assets/imgs/waterfalls/s14.jpg"),
          },
          {
            href: '15',
            src: require("../../assets/imgs/waterfalls/s15.jpg"),
          },
          {
            href: '16',
            src: require("../../assets/imgs/waterfalls/s16.jpg"),
          },
          {
            href: '17',
            src: require("../../assets/imgs/waterfalls/s17.jpg"),
          },
          {
            href: '18',
            src: require("../../assets/imgs/waterfalls/s18.jpg"),
          },
          {
            href: '19',
            src: require("../../assets/imgs/waterfalls/s19.jpg"),
          },
          {
            href: '20',
            src: require("../../assets/imgs/waterfalls/s20.jpg"),
          },
          {
            href: '21',
            src: require("../../assets/imgs/waterfalls/s21.jpg"),
          },
          {
            href: '22',
            src: require("../../assets/imgs/waterfalls/s22.jpg"),
          },
          {
            href: '23',
            src: require("../../assets/imgs/waterfalls/s23.jpg"),
          },

        ]
      }
    },
    methods: {
      getData() {
        setTimeout(() => {
          this.$refs.waterfall.waterfallOver()
        }, 2000)
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
    width: 100%;
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
