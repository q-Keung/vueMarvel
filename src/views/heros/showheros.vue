<template>
  <div class="heros-waterfall">
    <waterfall :auto-resize="autoResize" @reflow="rewaterfall" fixed-height align="center" :line-gap="200" :max-line-gap="300" :watch="items">
      <!-- each component is wrapped by a waterfall slot -->
      <waterfall-slot v-for="(item, index) in items" :style="{background:item.bgcolor}" :width="item.width" :height="item.height" :order="index" :key="index">
          
      </waterfall-slot>
    </waterfall>
  </div>
</template>

<script>
  import Waterfall from 'vue-waterfall/lib/waterfall'
  import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
  export default {
    name: 'showheros',
    components: {
      Waterfall,
      WaterfallSlot
    },
    data() {
      return {
          autoResize:false,
          items:[
              {
                  width:"200",
                  height:"200",
                  bgcolor:"#1989fa"
              },
              {
                  width:"200",
                  height:"250",
                  bgcolor:"#F56C6C"
              },
          ]
      }
    },
    methods: {
        rewaterfall(e){
            console.log(e,"1111");
        }
    },
    watch: {

    },
  }

</script>

<style lang="scss">
  .heros-waterfall {
    width: 100%;
    padding: 10px;
  }

</style>
