<template>
  <div class="top-bar">
    <el-tabs  v-model="activeName2" type="card" @tab-click="handleClick">
      <el-tab-pane label="QQ空间" disabled="" name="first"></el-tab-pane>
      <el-tab-pane name="second">
        <span slot="label"><img src="../assets/iconImage/person.png" alt="">个人中心</span>
      </el-tab-pane>
      <el-tab-pane name="third">
        <span slot="label"><img src="../assets/iconImage/home.png" alt="">我的主页</span>
        <slot name="my-home"></slot>
      </el-tab-pane>
      <el-tab-pane name="fourth">
        <span slot="label"><img src="../assets/iconImage/friend.png" alt="">好友</span>
      </el-tab-pane>
      <el-tab-pane name="fifth">
        <span slot="label"><img src="../assets/iconImage/games.png" alt="">游戏</span>
      </el-tab-pane>
      <el-tab-pane name="sixth">
        <span slot="label"><img src="../assets/iconImage/clothing.png" alt="">装扮</span>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  export default {
    name: 'TopBar',
    data() {
      return {
        activeName2: 'third'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .top-bar {
    img {
      margin-top: 15px;
      margin-right: 5px;
    }
  }

</style>

<style lang="scss">
  .top-bar {
    .el-tabs--border-card {
      border: none !important;
      box-shadow: none !important;
    }
    .el-tabs__header {
      background-color: #d18b00 !important;
    }
    .el-tabs__nav{
      border: none !important;
    }
    .el-tabs__item {
      color: #ffffff !important;
      border: none !important;
      height: 100%;
    }
    .is-active {
      background-color: #e09600 !important;
      border: none !important;
    }
  }
</style>
