<template>
  <div class="speak-container">
    <quill-editor @change="onEditorChange" ref="myTextEditor" v-model="content" :options="editorOption"></quill-editor>
    <div class="confirm-btn">
        <el-button type="primary" @click="speakClick(toContent)">发言</el-button>
    </div>
    <div class="content">
      <div class="content-item items-center" v-for="(item,cur) in contentData" :key="cur">
        <div class="c-left c-vertical">
          <img src="../../assets/ironman.jpg" alt="">
          <span>钢铁侠</span>
        </div>
        <div class="c-right">
          <span class="c-t">{{item.content}}</span>
          <span class="c-b">{{item.date}}</span>
        </div>
        <div class="del-tag c-center" @click="contentData.splice(item,1)">
          <i class="el-icon-error"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import mixins from '../../mixins/index'
  import {
    quillEditor
  } from 'vue-quill-editor'
  import {mapGetters,mapMutations} from 'vuex'
  export default {
    components: {
      quillEditor,
    },
    mixins :[mixins],
    data() {
      return {
        content: "",
        editorOption: {
          placeholder: '请开始你的表演：'
        },
        toContent:{},
        contentData: [{
          content: '这是IronMan第一次发言啦！',
          date: "2019-03-17 22:10"
        }]
      }
    },
    created(){
      if(this.$ls.get('content')){
        this.usContent(JSON.parse(this.$ls.get('content')))
      }
    },
    methods: {
      usContent(content){
        this.contentData.unshift(content);
      },
      onEditorChange(event) {
        this.toContent = {
            content:event.text,
            date: this.speskGetTime()
        }
      },
      speakClick(content){
          this.usContent(content);
          this.$ls.set('content',JSON.stringify(content));
          this.content = "";
      }
    },
  }

</script>

<style lang="scss">
  .speak-container {
    width: 100%;
    padding: 0 10px;
    .confirm-btn{
        margin-top:10px;
        display: flex;
        justify-content: flex-end;
    }
    .content {
      margin-top: 50px;
      width: 100%;
      height: 500px;
      // background: #1989fa;
    }

    .content-item {
      width: 100%;
      height: 140px;
      padding: 10px 10px;
      border: 1px solid #cfd1d495;
      border-radius: 4px;
      position: relative;
        margin-bottom: 10px;
      .del-tag {
        position: absolute;
        width: 25px;
        height: 25px;
        border-radius: 4px;
        top: 0;
        right: 0;
        // background:#F56C6C;
        // color:#fff;
        font-size: 16px;

        .share-button {
          width: 100%;
          height: 100%;
        }
      }

      .del-tag:hover {
        background: rgb(218, 215, 215);
      }

      // background: #1989fa;
    }

    .c-left {
      width: 100px;
      height: 100px;
      // background: #6084a8;
      margin-right: 20px;

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-bottom: 2px;
      }

      span {
        // display:block;
        font-size: 16px;
      }
    }

    .c-right {
      // width:100%;
      height: 100%;
      flex: 1;

      span {
        display: block;
      }

      .c-t {
        font-size: 15px;
        height: 85%;
      }

      .c-b {
        height: 15%;
        width: 100%;
        line-height: 1.6;
        font-size: 12px;
        text-align: right;
        color: #909399;
      }
    }
  }

</style>
