<template>
  <div class="marvel-data" :style="{height:innerH}">
    <c-table></c-table>
  </div>
</template>

<script>
import cTable from "../../components/table"
import mixins from "../../mixins/index"
  export default {
    name: 'marveldata',
    mixins:[mixins],
    components:{
      cTable
    },
    data() {
      return {

      }
    }
  }

</script>

<style lang="scss">
  .marvel-data {
    box-sizing: border-box;
    width: 100%;
    // height: 500px;
    padding: 30px 20px;
    // background: #1989fa;
  }

</style>
