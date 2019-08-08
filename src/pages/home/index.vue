<template>
  <div class="wrap">
    <map id="map" show-location :longitude="longitude" :latitude="latitude"></map>
    <cover-view>
        <cover-image @click="location" class="location" src="/static/images/location.png"></cover-image>
    </cover-view>
    <cover-view>
        <cover-image @click="locationmy" class="locations" src="/static/images/my.png"></cover-image>
    </cover-view>
    <div class="counter">
      <button @click="chengge">添加面试</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      markers: []
    };
  },
  computed: {
    ...mapState({
      longitude: state => state.home.longitude,
      latitude: state => state.home.latitude
    })
  },
  methods: {
    ...mapActions({
      location: "home/getLocation",
      getSuggestion: "address/getSuggestion"
    }),
    locationmy() {
      wx.navigateTo({
        url: "/pages/user/main"
      });
    },
    chengge() {
      wx.navigateTo({
        url: "/pages/add/main"
      });
    }
  },

  components: {},

  created() {
    this.getSuggestion("八维");
  }
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
}

.wrap > map {
  width: 100%;
  height: 91.5%;
}

.counter > button {
  color: #fff;
  text-align: center;
  background: #000;
}

.location {
  position: fixed;
  bottom: 130rpx;
  left: 20rpx;
  height: 80rpx;
  width: 80rpx;
}

.locations {
  position: fixed;
  bottom: 130rpx;
  left: 650rpx;
  height: 80rpx;
  width: 80rpx;
}
</style>




