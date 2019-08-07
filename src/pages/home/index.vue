<template>
  <div class="wrap">
    <map></map>
    <button @click="maps">添加面试</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {
   
  },

  created() {}
};
</script>

<style scoped>
  .wrap{
    width: 100%;
    height: 100%;
  }

  .wrap>map{
    width: 100%;
    height: 91%;
  }

  .wrap>button{
    color: #fff;
    text-align: center;
    background: #000;
  }
</style>



//  maps() {
//       wx.navigateTo({
//         url: "/pages/user/main"
//       });
//     }
