<template>
  <div class="heros-position">
    <baidu-map @moving="syncCenterAndZoom" @moveend="syncCenterAndZoom" @zoomend="syncCenterAndZoom" class="map"
      :scroll-wheel-zoom="isScroll" :style="{width:innerW,height:innerH}" :center="center" :zoom="zoom">
      <!-- <bm-view style="width: 100%; height:100px; flex: 1"></bm-view> -->
      <!-- 比例尺组件 -->
      <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
      <!-- 缩放组件 -->
      <bm-navigation showZoomInfo enableGeolocation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
    </baidu-map>
  </div>
</template>

<script>
  import mixins from '../../mixins/index.js'
  export default {
    name: 'herosposition',
    data() {
      return {
        isScroll: true,
        mapType:'BMAP_SATELLITE_MAP',
        center: {
          lng: 116.404,
          lat: 39.915
        },
        zoom: 15,
        ak: 'Gj4pVfAeFPLn9gmaW4gfhrXOSZG1DaLG'
      }
    },
    methods: {
      syncCenterAndZoom(e) {
        const {
          lng,
          lat
        } = e.target.getCenter()
        this.center.lng = lng
        this.center.lat = lat
        this.zoom = e.target.getZoom()
      }
    },
    mixins: [mixins]
  }

</script>

<style lang="scss">
  .heros-position {
    width: 100%;
  }

</style>
