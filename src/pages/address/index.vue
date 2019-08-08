<template>
  <div class="wrap">
    <header>
      <span>北京</span>
      <input type="text" placeholder="面试地址" v-model="value" @blur="getSuggestion(value)" />
    </header>
    <ul>
      <li v-for="(item, index) in addresssList" :key="index" @click="select(item.address)">
        <img src="/static/images/location.svg" />
        <div>
          <p>{{item.title}}</p>
          <p>{{item.address}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      value: ""
    };
  },
  computed: {
    //搜索地址之后的返回列表
    ...mapState({
      addresssList: state => state.address.addresssList
    })
  },
  methods: {
    //搜索地址
    ...mapActions({
      getSuggestion: "address/getSuggestion"
    }),
    //点击地址回传
    ...mapMutations({
        select: "address/selectList"
    })
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  height: 88rpx;
  span {
    width: 26%;
    text-align: center;
    box-sizing: border-box;
    border-right: 1px solid #eee;
  }
  input {
    padding: 0 20rpx;
  }
}
li {
  height: 100rpx;
  padding: 10rpx 0 10rpx 60rpx;
  box-sizing: border-box;
  border-bottom: 1px solid #eee;
  display: flex;
  align-items: center;
  flex-direction: row;
  img {
    width: 44rpx;
    height: 44rpx;
  }
  div {
    flex: 1;
    margin-left: 30rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  p:nth-child(1) {
    font-size: 34rpx;
  }
  p:nth-child(2) {
    font-size: 24rpx;
    color: #c0c0c0;
  }
}
</style>