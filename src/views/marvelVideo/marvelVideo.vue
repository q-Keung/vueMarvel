<template>
  <div class="marvelVideo" v-if="isShowRideo">
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
  import {getMarvelVideo} from '../../API/apis'
  export default {
    name: 'marvelVideo',
    data() {
      return {
        isShowRideo:false,
        playerOptions: {
          // videojs options
          controls: true,
          muted: true,
          language: 'zh-CN',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "1"
          }],
          preload: 'metadata',
          poster: "", //在视频开始播放之前显示的图像的URL
          width: window.innerWidth - 310,
          height: window.innerHeight - 65,
        }
      }
    },
    created(){
      getMarvelVideo().then(({marvelVideo})=>{
        let {sources,poster} = this.playerOptions;
        poster = marvelVideo.avatar;
        sources[0].src = marvelVideo.video;
        this.isShowRideo = true;
      })
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

<style lang="scss">
  .marvelVideo {
    width: 100%;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    align-items: center;
    .video-js .vjs-big-play-button{
      top:0;left:0;bottom:0;right:0;
      margin:auto;
    }
  }

</style>
