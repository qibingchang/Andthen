<template>
    <from @submit="submit" report-submit>
      <p>面试信息</p>
      <ul>
        <li>
          <lable>公司名称</lable>
          <input type="text" v-model="currentCompany" placeholder="请输入公司名称"/>
        </li>
        <li>
          <lable>公司电话</lable>
          <input type="text" v-model="currentMobile" placeholder="请输入面试联系人电话"  maxlength="11"/>
        </li>
        <li>
          <lable>面试时间</lable>
          <picker
            mode="multiSelector"
            :range="dateRange"
            :value="info.date"
            @change="dateChange"
            @columnchange="columnChange"
          ><view class="date">{{dateShow}}</view>
          </picker>
          <icon @click="showTimeTip" class="tip" type="warn" color="#197DBF" size="24"></icon>
        </li>
        <li @click="address">
          <lable>面试地址</lable>
          <input type="text" placeholder="请选择面试地址" v-model="selectList" />
        </li>
      </ul>
      <p>备注信息</p>
      <textarea type="text" maxlength="100" v-model="note" placeholder="备注信息(可选，100个字以内)" />
      <button form-type="submit">确认</button>
    </from>
</template>
<script>

import {mapState, mapMutations, mapActions} from 'vuex';
const moment = require('moment');

const range = [
  [0,1,2,3,4,5,6,7,8,9],
  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
  ['00分','10分','20分','30分','40分','50分','60分']
];

export default {
  props: {},

  components: {},
  data() {
    return {
     info: {
        date: [0,0,0],
      }
    };
  },

  computed: {
      ...mapState({
          selectList:state=>state.address.selectList,
          // addStatus:state=>state.interview.addStatus
      }),
    // 处理面试日期
    dateRange(){
      let dateRange = [...range];
      // 如果时间是今天，过滤掉现在之前的小时
      if (!this.info.date[0]){
        dateRange[1] = dateRange[1].filter(item=>{
          return item>moment().hour();
        })
      }else{
        dateRange[1] = range[1]
      }
      // 格式化小时
      dateRange[1] = dateRange[1].map(item=>{
        return item+'点'
      })
      // 计算当前日期之后的十天
      dateRange[0] = dateRange[0].map(item=>{
        return moment().add(item, 'days').date()+'号'
      })
      return dateRange;
    },
    // 显示的日期
    dateShow(){
      return moment()
      .add(moment().hour()==23?this.info.date[0]-1:this.info.date[0], 'd')
      .add(this.info.date[1]+1, 'h')
      .minute(this.info.date[2]*10)
      .format('YYYY-MM-DD HH:mm');
    }
  },

  methods: {
    ...mapActions({
      submitInterview: 'interview/sendInterview'
    }),
    address() {
      wx.navigateTo({
        url: "/pages/address/main"
      });
    },
    // 监听多列选择器每列变化
    columnChange(e){
      let {column, value} = e.target;
      let date = [...this.info.date];
      date[column] = value;
      this.info.date = date;
    },
    showTimeTip() {
      wx.showToast({
        title: "在面试前一个小时我们会通知你哦!!!!", //提示的内容,
        icon: "none" //图标,
      });
    },
    //点击确认--进行提交
    submit(e) {
      if(!this.currentCompany){
        wx.showToast({
        title: '请填写公司名称',
        icon: 'none',
        duration: 1000
        })
        return false;
      }
      if(!/^1[3456789]\d{9}$/.test(this.currentMobile)){
        wx.showToast({
        title: '请填写正确的手机号',
        icon: 'none',
        duration: 1000
        })
        return false;
      }
      if(!this.selectList){
        wx.showToast({
        title: '请填写地址信息',
        icon: 'none',
        duration: 1000
        })
        return false;
      }
      let info={
        "company" : this.currentCompany,	
        "phone" : this.currentMobile,		
        "form_id" : e.target.formId,		
        "address" : this.selectList,	
        "latitude" : this.selectList.location.lat*1,	
        "longitude" : this.selectList.location.lng*1,	
        "start_time" : moment(this.dateShow).unix()*1000*1,	
        "description" : this.note
      };
      this.submitInterview(info)
    },
  },

  created() {
     // 如果当前时间是十一点之后，过滤掉今天
    if (moment().hour() == 23){
      this.info.date = [1,0,0];
    }
  },

  mounted() {
    console.log()
  }
};

</script>


<style scoped lang="scss">
.wrap {
  height: 100%;
}
p {
  font-size: 38rpx;
  padding: 15rpx 0 15rpx 30rpx;
  background: #f6f6f6;
}
ul {
  border-top: 1rpx solid #eee;
  border-bottom: 1rpx solid #eee;
  background: #fff;
}
li {
  width: 720rpx;
  height: 88rpx;
  margin-left: 30rpx;
  border-bottom: 1rpx solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  lable {
    color: #666;
    width: 170rpx;
    font-size: 30rpx;
  }
}
input,picker{
    flex: 1;
    font-size: 30rpx;
    // background: #eee;
    color: #333;
    height: 88rpx;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 30rpx;
    box-sizing: border-box;
  }
.date {
  width: 100%;
  line-height: 88rpx;
}
li:last-child {
  border: none;
}

.tip {
  margin-right: 30rpx;
}

textarea {
  font-size: 30rpx;
  // background: #eee;
  color: #333;
  width: 690rpx;
  height: 200rpx;
  margin: 30rpx;
  box-sizing: border-box;
  padding: 10rpx;
  border: 1rpx solid #c0c0c0;
  border-radius: 5rpx;
}

button {
  margin-top: 50rpx;
  color: #fff;
  background: #ccc;
}

button.disable {
  background: #999;
}
</style>