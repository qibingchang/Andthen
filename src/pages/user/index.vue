<template>
   <div class="wrap">
        <div class="nav">
            <dl>
                <dt>
                    <img src="https://c-ssl.duitang.com/uploads/item/201805/13/20180513224039_tgfwu.png" alt="">
                </dt>
                <dd>18301461209</dd>
            </dl>
        </div>
        <div class="cont">
            <ul>
                <li @click="myinterview">
                    <i class="iconfont icon-wode"></i>
                    <span class="middle">我的面试</span>
                    <img src="/static/images/arrow.svg" alt="">
                </li>
                <li @click="myCustomer">
                    <i class="iconfont icon-wode"></i>
                    <span class="middle">客服中心</span>
                    <img src="/static/images/arrow.svg" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  components: {},

  methods: {
    myinterview(){
      wx.navigateTo({
        url: "/pages/interview/main"
      });
    },
    myCustomer(){
      wx.navigateTo({
        url: "/pages/service/main"
      });
    }
  },

  created() {}
};
</script>

<style scoped>
.wrap {
    width: 100%;
    height: 100%;
}
.nav {
    width: 100%;
    height: 300rpx;
    background: #F5F6FA;
    display: flex;
    align-items: center;
    justify-content: center
}
.nav dl dt img {
    width: 110rpx;
    height: 110rpx;
    border-radius: 50%;
    margin-left: 50rpx
}
.cont>ul>li {
    width: 120%;
    height: 120rpx;
    display: flex;
    align-items: center;
    padding-left: 30rpx;
    border-bottom: 1px solid #ccc;
    color: #858585
}
.cont>ul>li>img {
    width: 40rpx;
    height: 40rpx;
    margin-left: 450rpx;
}
.middle {
    font-size: 35rpx;
    padding-left: 30rpx
}
.right {
    padding-left: 430rpx;
    font-size: 55rpx
}
</style>
