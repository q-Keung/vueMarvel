<template>
  <div>
    <div class="operator delScrollBar">
      <el-button type="warning" @click="clearSelection">清空选择</el-button>
      <el-input placeholder="请输入关键字" prefix-icon="el-icon-search" v-model="tableVal"></el-input>
      <el-button type="primary">搜索</el-button>
    </div>
    <el-table class="" ref="multipleTable" @cell-click="cellClick" @select="selectOne" @select-all="selectAll" height="100%"
      :data="tableData.slice((curPages-1)*pageSize,curPages*pageSize)" stripe highlight-current-row current-row-key="1">
      <el-table-column type="selection" width="50"></el-table-column>
      <el-table-column type="index" width="50" label="序号"></el-table-column>
      <el-table-column sortable prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="sex" label="性别"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="hobby" label="爱好"></el-table-column>
      <el-table-column fixed="right" label="操作" width="80">
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" size="small">
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pageSize-box">
      <el-pagination @current-change="current_change" :current-page="curPages" :page-size="pageSize" background layout="prev, pager, next"
        :total.sync="tableData.length"></el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableVal: '',
        pageSize: 10,
        curPages: 1
      }
    },
    methods: {
      current_change(cur) {
        this.curPages = cur;
      },
      //选中全部
      selectAll(e) {
        console.log(e)
      },
      //选择某一行  或者多行
      selectOne(e, row) {
        console.log(e); //数组形式  多行数据
        console.log("row:", row); //json形式   当前行数据
      },
      deleteRow(index, data) {
        console.log(index, data)
        this.$confirm('确认删除吗？').then(_ => {
          data.splice(index, 1);
        }).catch(__ => {

        })
      },
      cellClick(row, column, cell, event) {
        //row 当前行   column当前列（没啥用）  cell当前单元格DOM  event事件源对象
        console.log(row, column, cell, event)
      },
      //清空选择
      clearSelection(rows) {
        this.$refs.multipleTable.clearSelection();
      },
    },
    created() {},
    computed: {
      tableData() {
        let data = [{
            date: '2016-05-03',
            name: '王小虎',
            sex: '男',
            address: '广州市普陀区金沙江路 1518 弄',
            hobby: '曲棍球'
          },
          {
            date: '2016-05-02',
            name: '阿斯顿',
            sex: '男',
            address: '北京市普陀区金沙江路 1518 弄',
            hobby: '足球'
          },
          {
            date: '2016-05-04',
            name: '大京水库',
            sex: '男',
            address: '上海市普陀区金沙江路 1518 弄',
            hobby: '排球'
          },
          {
            date: '2016-05-01',
            name: '而无一',
            sex: '男',
            address: '深圳市普陀区金沙江路 1518 弄',
            hobby: '游泳'
          },
          {
            date: '2016-05-08',
            name: '十点半',
            sex: '男',
            address: '成都市普陀区金沙江路 1518 弄',
            hobby: '羽毛球'
          },
          {
            date: '2016-05-06',
            name: '王府大街',
            sex: '男',
            address: '青岛市普陀区金沙江路 1518 弄',
            hobby: '乒乓球'
          },
          {
            date: '2016-05-21',
            name: '舒服点',
            sex: '男',
            address: '杭州市普陀区金沙江路 1518 弄',
            hobby: '篮球'
          },
          {
            date: '2016-05-29',
            name: '阿斯加德',
            sex: '男',
            address: '惠州市普陀区金沙江路 1518 弄',
            hobby: '铁锤'
          },
          {
            date: '2016-05-28',
            name: '可大可',
            sex: '男',
            address: '厦门市普陀区金沙江路 1518 弄',
            hobby: '篮球'
          },
          {
            date: '2016-05-30',
            name: '大时代',
            sex: '男',
            address: '温州市普陀区金沙江路 1518 弄',
            hobby: '飞刀'
          },
          {
            date: '2016-05-22',
            name: '爱仕达',
            sex: '男',
            address: '成都市普陀区金沙江路 1518 弄',
            hobby: '唱歌'
          },
        ];
        let d = (data, cd) => {
          for (let k in data) {
            if (data[k].toLowerCase().includes(this.tableVal.toLowerCase())) {
              return true;
            } else {
              cd && cd();
            }
          }
        }

        return data.filter(item => {
          return !this.tableVal || d(item);
        });
      }
    }
  }

</script>

<style lang="scss">
  // .el-table__body-wrapper::-webkit-scrollbar {
  //   display: none;
  // }
  .pageSize-box {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .operator {
    width: 100%;
    height: 50px;
    // background:#1989fa;
    display: flex;
    align-items: center;

    .el-input {
      margin: 0 10px 0 45px;
      width: 280px;
    }
  }

</style>
