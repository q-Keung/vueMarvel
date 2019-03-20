<template>
  <div class="marvel-upload">
    <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :limit="imgLimit" :on-exceed="handleExceedFn"
      :on-preview="handlePreview" :on-remove="handleRemove" :before-upload="beforeUploadFn" :on-progress="handleProgress"
      multiple :file-list="fileList" list-type="picture-card">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        <el-progress :text-inside="true" status="text" :stroke-width="16" :percentage="70"></el-progress>
      </div>
      
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      <!-- <div slot="trigger" class="el-upload__trigger">hello,I'm is trigger</div> -->
    </el-upload>
  </div>
</template>

<script>
  export default {
    name: 'marvelUpload',
    data() {
      return {
        ak: 'FiThL7dzuaEw1fO0pMT7fb_bGjt8y-KtgQIgvUK9',
        sk: 'WI-4Qirou1j-SfN6ZEodXDW8MSZVzM2B1usENeYh',
        imgLimit: 9,
        fileList: [{
          name: 'food.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }, {
          name: 'food2.jpeg',
          url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
        }]
      }
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleProgress(event, file, fileList) {
        console.log(event)
        console.log(file)
        console.log(fileList)
      },
      beforeUploadFn(file) {
        console.log(file)
        //上传文件之前的钩子
        this.$loading()
      },
      handleExceedFn(files, fileList) {
        //文件超出个数限制时的钩子
        console.log('files:', files, 'fileList:', fileList)
      }
    }
  }

</script>

<style scoped lang="scss">
  .marvel-upload {
    padding: 20px;
  }

</style>
