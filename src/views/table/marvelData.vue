<template>
  <div class="marvel-data">
    <c-table></c-table>
  </div>
</template>

<script>
import cTable from "../../components/table"
  export default {
    name: 'marveldata',
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
