<template>
  <div class="marvelVideo">
    <video-player class="video-player-box" ref="videoPlayer" :options="playerOptions" :playsinline="true"
      customEventName="customstatechangedeventname" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)" @playing="onPlayerPlaying($event)" @loadeddata="onPlayerLoadeddata($event)"
      @timeupdate="onPlayerTimeupdate($event)" @canplay="onPlayerCanplay($event)" @canplaythrough="onPlayerCanplaythrough($event)"
      @statechanged="playerStateChanged($event)" @ready="playerReadied">
    </video-player>
  </div>
</template>

<script>
  import mixins from '../../mixins/index'
  export default {
    name: 'marvelVideo',
    data() {
      return {
        playerOptions: {
          // videojs options
          controls: true,
          muted: true,
          language: 'zh-CN',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          preload: 'metadata',
          poster: "../../assets/iron1.jpg", //在视频开始播放之前显示的图像的URL
          width: window.innerWidth - 310,
          height: window.innerHeight - 65,
        }
      }
    },
    mounted() {
      console.log('this is current player instance object', this.player)
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    methods: {
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event
      onPlayerPlaying(player) {

      },
      onPlayerWaiting(player) {

      },
      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      },
      onPlayerTimeupdate(player) {

      },
      onPlayerLoadeddata(player) {

      },
      onPlayerCanplay(player) {

      },
      onPlayerCanplaythrough(player) {

      }
    }
  }

</script>

<style scoped lang="scss">
  .marvelVideo {
    width: 100%;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
