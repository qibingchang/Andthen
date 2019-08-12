const state = {
  latitude: 23.099994,
  longitude: 113.32452
};

const getters = {};
const mutations = {
  getmapAddress(state) {
    wx.getLocation({
      type: "wgs84", //返回可以用于wx.openLocation的经纬度
      success: res => {
        state.latitude = res.latitude;
        state.longitude = res.longitude;
      }
    });
  }
};
const actions = {
  // async   function getmap({ commit }, state) {
  //   await commit("getmapAddress");
  // }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
