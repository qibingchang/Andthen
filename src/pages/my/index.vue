<template>
    <div class="main">
        <div class="mask" v-if="!maskshow">
        <button open-type='getPhoneNumber' @getphonenumber='getphonenumber' class='btn'>请先获取手机号</button>
      </div>
      <div class="titimg">
        <div class="img">
          <img src="/static/images/my.png" alt="" style="width:90%;height:90%">
        </div>
        <div class="text">{{name}}</div>
      </div>
      <div class="contentlist">
          <div @click='golist'>
            <icon class="_icon data-v-636e9b19" size='18' type="waiting" role='img'></icon>
            <div>我的面试</div>
            <img src="/static/images/arrow.svg" alt="">
          </div>
          <div>
            <icon type="info" size="18px" role='img' />
            <div>客服中心</div>
            <img src="/static/images/arrow.svg" />
          </div>
      </div>
    
    </div>
</template>

<script>
import { decrypt } from "@/api";
export default {
  data() {
    return {
      name: "************",
      maskshow: false
    };
  },
  methods: {
    golist() {
      wx.navigateTo({ 
        url: "/pages/web/list/main" 
      });
    },
    async getphonenumber(e) {
      console.log(e);
      if (e.target.errMsg != "getPhoneNumber:user deny") {
        let data = await decrypt({
          iv: e.target.iv,
          encryptedData: e.target.encryptedData
        });
        // console.log(data.data.phoneNumber.replace(data.data.phoneNumber.slice(3,7),'****'))
        this.name = data.data.phoneNumber.replace(data.data.phoneNumber.slice(3,7),'****')
        this.maskshow = true;
      } else {
        wx.navigateBack({
          delta: 1 //返回的页面数，如果 delta 大于现有页面数，则返回到首页,
        });
      }
    }
  },
  created() {}
};
</script>

<style>
.main {
  width: 100%;
  height: 100%;
}
.titimg {
  height: 350rpx;
  width: 100%;
  background: #f4f6f9;
  padding: 50rpx 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.titimg > div.img {
  width: 100rpx;
  height: 100rpx;
  background: #fff;
  padding: 20rpx;
  border-radius: 50%;
}
.contentlist > div {
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 30rpx 40rpx;
  border-bottom: 1rxp solid #eee;
}
.contentlist > div > div {
  flex: 1;
  margin-left: 40rpx;
  color: #666;
  font-size: 36rpx;
  background: transparent;
}
.contentlist > div > img {
  width: 40rpx;
  height: 40rpx;
}
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
.btn {
  width: 60%;
  height: 100rpx;
  line-height: 100rpx;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
</style>
