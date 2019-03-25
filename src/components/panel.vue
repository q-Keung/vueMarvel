<template>
  <div class="panel-margin">
    <div class="panel-container">
      <img src="../assets/imgs/waterfalls/s23.jpg" alt="">
      <p class="justify">
        是由美国漫威电影工作室出品的一部科幻冒险电影，改编自同名系列漫画，由乔恩·费儒执导，小罗伯特·唐尼及格温妮斯·帕特洛、杰夫·布里吉斯等主演。该作也是“漫威电影宇宙”系列的首部电影。该片于2008年5月2日在美国上映。影片讲述了托尼·史塔克在遇难后改进了盔甲的功能，化身“钢铁侠”，以一个义务警察的身份保护了这个世界和平的故事。
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'panelcontainer',
    data() {
      return {

      }
    }
  }

</script>

<style lang="scss">
  .panel-container {
    width: 100%;
    height: 100%;
    // background:cornflowerblue;
    border: 1px solid rgb(240, 233, 233);
    border-radius: 20px;
    box-shadow: 0 0 4px 2px rgb(240, 236, 236);
    padding: 15px;
    display: flex;

    // margin-bottom:20px;
    img {
      width: 200px;
      height: 100%;
      border-radius: 10px;
      margin-right: 10px;
    }
    p{
        flex:1;
    }
  }

  .panel-margin {
    width: 60%;
    height: 230px;
    margin-bottom:20px;
  }

</style>
