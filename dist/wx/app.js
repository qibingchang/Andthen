require("./common/manifest.js")
require("./common/vendor.js")
global.webpackJsonpMpvue([1],{

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__static_libs_qqmap_wx_jssdk_js__ = __webpack_require__(238);



console.log(__WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */]);
// 引入QQMap

__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = "app";
//将store挂载到vue原型上 作为共享钥匙
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_2__store__["a" /* default */];

//将QQMapWX挂载到vue原型上 作为共享地图
var $map = new __WEBPACK_IMPORTED_MODULE_3__static_libs_qqmap_wx_jssdk_js__["a" /* default */]({
  key: 'X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL'
});
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$map = $map;

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(186);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(185)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a7a9ecdc", Component.options)
  } else {
    hotAPI.reload("data-v-a7a9ecdc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 185:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_index_js__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_index_js__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(9);







// console.log(mapMutations())
/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    var _this = this;

    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    Object(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["b" /* getAuth */])("scope.userLocation", __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
      var location;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return Object(__WEBPACK_IMPORTED_MODULE_3__utils_index_js__["c" /* getLocation */])();

            case 2:
              location = _context.sent;

              wx.setStorageSync("location", location);
              console.log("location...", location);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    })));
    var openid = wx.getStorageSync("openid");
    wx.login({
      success: function () {
        var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2(res) {
          var data;
          return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  console.log(res);
                  // console.log(login);
                  _context2.next = 3;
                  return Object(__WEBPACK_IMPORTED_MODULE_4__api_index_js__["e" /* login */])(res.code);

                case 3:
                  data = _context2.sent;

                  console.log(data);
                  _this.updateState(data.data);
                  wx.setStorageSync("openid", data.data.openid);

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, _this);
        }));

        return function success(_x) {
          return _ref2.apply(this, arguments);
        };
      }()
    });
  },

  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["c" /* mapMutations */])({
    updateState: "updateState"
  }))
});

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_map__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_interview__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_sign__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_user__ = __webpack_require__(237);


// import createLogger from 'vuex/dist/logger';

// 挂载modules





__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  modules: {
    map: __WEBPACK_IMPORTED_MODULE_2__modules_map__["a" /* default */],
    interview: __WEBPACK_IMPORTED_MODULE_3__modules_interview__["a" /* default */],
    user: __WEBPACK_IMPORTED_MODULE_5__modules_user__["a" /* default */],
    sign: __WEBPACK_IMPORTED_MODULE_4__modules_sign__["a" /* default */]
  },
  state: {
    info: {} // 用户信息
  },
  mutations: {
    // 更新全局的state
    updateState: function updateState(state, payload) {
      state.info = payload;
    }
  }
  // plugins: [createLogger()]
}));

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var state = {
  latitude: 23.099994,
  longitude: 113.32452
};

var getters = {};
var mutations = {
  getmapAddress: function getmapAddress(state) {
    wx.getLocation({
      type: "wgs84", //返回可以用于wx.openLocation的经纬度
      success: function success(res) {
        state.latitude = res.latitude;
        state.longitude = res.longitude;
      }
    });
  }
};
var actions = {
  // async   function getmap({ commit }, state) {
  //   await commit("getmapAddress");
  // }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
});

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_objectWithoutProperties__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_objectWithoutProperties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_objectWithoutProperties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__api_index__ = __webpack_require__(19);








var state = {
  list: [],
  current: {
    company: '',
    phone: '',
    address: '',
    description: ''
  }
};

var mutations = {
  updateState: function updateState(state, payload) {
    state.current = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_helpers_extends___default()({}, state.current, payload);
  }
};

var actions = {
  submit: function submit(state, _ref) {
    var _this = this;

    var payload = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_objectWithoutProperties___default()(_ref, []);

    return __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log('1111111111', payload);
              return _context2.abrupt('return', new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function () {
                var _ref2 = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(resolve, reject) {
                  var result;
                  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          // 填充经纬度
                          payload.latitude = payload.address.location.lat;
                          payload.longitude = payload.address.location.lng;
                          // 序列号地址
                          payload.address = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_json_stringify___default()(payload.address);
                          _context.next = 5;
                          return Object(__WEBPACK_IMPORTED_MODULE_6__api_index__["a" /* addSign */])(payload);

                        case 5:
                          result = _context.sent;

                          resolve(result);

                        case 7:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, _this);
                }));

                return function (_x, _x2) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 2:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }))();
  }
};

/* harmony default export */ __webpack_exports__["a"] = ({
  namespaced: true,
  state: state,
  actions: actions,
  mutations: mutations
});

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__api_index__ = __webpack_require__(19);





var moment = __webpack_require__(0);

var state = {
  active: 1, //表示当前面试类型，0表示全部，1表示未开始，1表示已打卡，2表示已放弃
  list: [], //面试列表
  info: {}, //面试详情数据
  hasMore: true, //是否有更多数据
  page: 1, //当前页码
  pageSize: 10 //每页数据
};

var mutations = {
  updateState: function updateState(state, payload) {
    // 判断是否还有更多页码
    if (payload.list) {
      if (payload.list.length === state.pageSize * state.page) {
        state.hasMore = true;
      } else {
        state.hasMore = false;
      }
    }
    for (var key in payload) {
      state[key] = payload[key];
    }
  }
};

var actions = {
  // 获取面试列表
  getList: function getList(_ref, payload) {
    var _this = this;

    var commit = _ref.commit,
        state = _ref.state;

    console.log('payload...', payload);
    return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function () {
      var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(resolve, reject) {
        var params, result;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                params = {};
                // 修正面试状态

                if (state.active) {
                  params.status = state.active - 2;
                }
                // 拼接面试页码和每页数量
                params.page = state.page;
                params.pageSize = state.pageSize;
                _context.next = 6;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_index__["d" /* getSignList */])(params);

              case 6:
                result = _context.sent;

                result.data.forEach(function (item) {
                  item.address = JSON.parse(item.address);
                  item.start_time = formatTime(item.start_time);
                });
                // 判断是替换还是追加
                if (state.page === 1) {
                  commit('updateState', { list: result.data });
                } else {
                  commit('updateState', { list: [].concat(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(state.list), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_toConsumableArray___default()(result.data)) });
                }
                // 调用resolve通知前端
                resolve();
                console.log(result.data);

              case 11:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  },

  // 获取面试详情
  getDetail: function getDetail(_ref3, payload) {
    var _this2 = this;

    var commit = _ref3.commit;

    return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function () {
      var _ref4 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2(resolve, reject) {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_index__["c" /* getSignDetail */])(payload);

              case 2:
                data = _context2.sent;

                console.log(data);
                if (data.data.address) {
                  data.data.address = JSON.parse(data.data.address);
                }
                data.data.start_time = formatTime(data.data.start_time);
                console.log(data.data.start_time);
                commit('updateState', { info: data.data });
                resolve();

              case 9:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x3, _x4) {
        return _ref4.apply(this, arguments);
      };
    }());
  },

  // 更新面试状态
  updateDetail: function updateDetail(_ref5, payload) {
    var _this3 = this;

    var commit = _ref5.commit,
        dispatch = _ref5.dispatch;

    return new __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_promise___default.a(function () {
      var _ref6 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3(resolve, reject) {
        var data;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(__WEBPACK_IMPORTED_MODULE_4__api_index__["f" /* updateSignDetail */])(payload.id, payload.params);

              case 2:
                data = _context3.sent;

                if (data.code == 0) {
                  // 重新获取详情
                  dispatch('getDetail', payload.id);
                }
                resolve(data);

              case 5:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }));

      return function (_x5, _x6) {
        return _ref6.apply(this, arguments);
      };
    }());
  }
};

function formatTime(start_time) {
  return moment(start_time * 1).format('YYYY-MM-DD HH:mm');
}

/* harmony default export */ __webpack_exports__["a"] = ({
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions
});

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_index__ = __webpack_require__(19);





var state = {
  phone: ''
};

var mutations = {
  updateState: function updateState(state, payload) {
    for (var key in payload) {
      state[key] = payload[key] + '';
    }
  }
};

var actions = {
  getPhoneNumber: function getPhoneNumber(_ref, payload) {
    var _this = this;

    var commit = _ref.commit;
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt('return', new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a(function () {
                var _ref2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(resolve, reject) {
                  var data;
                  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return Object(__WEBPACK_IMPORTED_MODULE_3__api_index__["b" /* decrypt */])(payload);

                        case 2:
                          data = _context.sent;

                          commit('updateState', { phone: data.data.phoneNumber });
                          resolve(data);

                        case 5:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, _this);
                }));

                return function (_x, _x2) {
                  return _ref2.apply(this, arguments);
                };
              }()));

            case 1:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }))();
  }
};
/* harmony default export */ __webpack_exports__["a"] = ({
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions
});

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 微信小程序JavaScriptSDK
 *
 * @version 1.2
 * @date 2019-03-06
 * @author v_ylyue@tencent.com
 */

var ERROR_CONF = {
    KEY_ERR: 311,
    KEY_ERR_MSG: 'key格式错误',
    PARAM_ERR: 310,
    PARAM_ERR_MSG: '请求参数信息有误',
    SYSTEM_ERR: 600,
    SYSTEM_ERR_MSG: '系统错误',
    WX_ERR_CODE: 1000,
    WX_OK_CODE: 200
};
var BASE_URL = 'https://apis.map.qq.com/ws/';
var URL_SEARCH = BASE_URL + 'place/v1/search';
var URL_SUGGESTION = BASE_URL + 'place/v1/suggestion';
var URL_GET_GEOCODER = BASE_URL + 'geocoder/v1/';
var URL_CITY_LIST = BASE_URL + 'district/v1/list';
var URL_AREA_LIST = BASE_URL + 'district/v1/getchildren';
var URL_DISTANCE = BASE_URL + 'distance/v1/';
var URL_DIRECTION = BASE_URL + 'direction/v1/';
var MODE = {
  driving: 'driving',
  transit: 'transit'
};
var EARTH_RADIUS = 6378136.49;
var Utils = {
  /**
  * md5加密方法
  * 版权所有©2011 Sebastian Tschan，https：//blueimp.net
  */
  safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return (msw << 16) | (lsw & 0xffff);
  },
  bitRotateLeft(num, cnt) {
    return (num << cnt) | (num >>> (32 - cnt));
  },
  md5cmn(q, a, b, x, s, t) {
    return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(a, q), this.safeAdd(x, t)), s), b);
  },
  md5ff(a, b, c, d, x, s, t) {
    return this.md5cmn((b & c) | (~b & d), a, b, x, s, t);
  },
  md5gg(a, b, c, d, x, s, t) {
    return this.md5cmn((b & d) | (c & ~d), a, b, x, s, t);
  },
  md5hh(a, b, c, d, x, s, t) {
    return this.md5cmn(b ^ c ^ d, a, b, x, s, t);
  },
  md5ii(a, b, c, d, x, s, t) {
    return this.md5cmn(c ^ (b | ~d), a, b, x, s, t);
  },
  binlMD5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << (len % 32);
    x[((len + 64) >>> 9 << 4) + 14] = len;

    var i;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;

    for (i = 0; i < x.length; i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;

      a = this.md5ff(a, b, c, d, x[i], 7, -680876936);
      d = this.md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = this.md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = this.md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = this.md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = this.md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = this.md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = this.md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = this.md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = this.md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = this.md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = this.md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = this.md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = this.md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = this.md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = this.md5ff(b, c, d, a, x[i + 15], 22, 1236535329);

      a = this.md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = this.md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = this.md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = this.md5gg(b, c, d, a, x[i], 20, -373897302);
      a = this.md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = this.md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = this.md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = this.md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = this.md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = this.md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = this.md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = this.md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = this.md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = this.md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = this.md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = this.md5gg(b, c, d, a, x[i + 12], 20, -1926607734);

      a = this.md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = this.md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = this.md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = this.md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = this.md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = this.md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = this.md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = this.md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = this.md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = this.md5hh(d, a, b, c, x[i], 11, -358537222);
      c = this.md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = this.md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = this.md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = this.md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = this.md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = this.md5hh(b, c, d, a, x[i + 2], 23, -995338651);

      a = this.md5ii(a, b, c, d, x[i], 6, -198630844);
      d = this.md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = this.md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = this.md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = this.md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = this.md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = this.md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = this.md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = this.md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = this.md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = this.md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = this.md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = this.md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = this.md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = this.md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = this.md5ii(b, c, d, a, x[i + 9], 21, -343485551);

      a = this.safeAdd(a, olda);
      b = this.safeAdd(b, oldb);
      c = this.safeAdd(c, oldc);
      d = this.safeAdd(d, oldd);
    }
    return [a, b, c, d];
  },
  binl2rstr(input) {
    var i;
    var output = '';
    var length32 = input.length * 32;
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode((input[i >> 5] >>> (i % 32)) & 0xff);
    }
    return output;
  },
  rstr2binl(input) {
    var i;
    var output = [];
    output[(input.length >> 2) - 1] = undefined;
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0;
    }
    var length8 = input.length * 8;
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << (i % 32);
    }
    return output;
  },
  rstrMD5(s) {
    return this.binl2rstr(this.binlMD5(this.rstr2binl(s), s.length * 8));
  },
  rstrHMACMD5(key, data) {
    var i;
    var bkey = this.rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = undefined;
    if (bkey.length > 16) {
      bkey = this.binlMD5(bkey, key.length * 8);
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }
    hash = this.binlMD5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
    return this.binl2rstr(this.binlMD5(opad.concat(hash), 512 + 128));
  },
  rstr2hex(input) {
    var hexTab = '0123456789abcdef';
    var output = '';
    var x;
    var i;
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i);
      output += hexTab.charAt((x >>> 4) & 0x0f) + hexTab.charAt(x & 0x0f);
    }
    return output;
  },
  str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  },
  rawMD5(s) {
    return this.rstrMD5(this.str2rstrUTF8(s));
  },
  hexMD5(s) {
    return this.rstr2hex(this.rawMD5(s));
  },
  rawHMACMD5(k, d) {
    return this.rstrHMACMD5(this.str2rstrUTF8(k), str2rstrUTF8(d));
  },
  hexHMACMD5(k, d) {
    return this.rstr2hex(this.rawHMACMD5(k, d));
  },

  md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return this.hexMD5(string);
      }
      return this.rawMD5(string);
    }
    if (!raw) {
      return this.hexHMACMD5(key, string);
    }
    return this.rawHMACMD5(key, string);
  },
  /**
   * 得到md5加密后的sig参数
   * @param {Object} requestParam 接口参数
   * @param {String} sk签名字符串
   * @param {String} featrue 方法名
   * @return 返回加密后的sig参数
   */
  getSig(requestParam, sk, feature, mode) {
    var sig = null;
    var requestArr = [];
    Object.keys(requestParam).sort().forEach(function(key){
      requestArr.push(key + '=' + requestParam[key]);
    });
    if (feature == 'search') {
      sig = '/ws/place/v1/search?' + requestArr.join('&') + sk;
    }
    if (feature == 'suggest') {
      sig = '/ws/place/v1/suggestion?' + requestArr.join('&') + sk;
    }
    if (feature == 'reverseGeocoder') {
      sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;
    }
    if (feature == 'geocoder') {
      sig = '/ws/geocoder/v1/?' + requestArr.join('&') + sk;
    }
    if (feature == 'getCityList') {
      sig = '/ws/district/v1/list?' + requestArr.join('&') + sk;
    }
    if (feature == 'getDistrictByCityId') {
      sig = '/ws/district/v1/getchildren?' + requestArr.join('&') + sk;
    }
    if (feature == 'calculateDistance') {
      sig = '/ws/distance/v1/?' + requestArr.join('&') + sk;
    }
    if (feature == 'direction') {
      sig = '/ws/direction/v1/' + mode + '?' + requestArr.join('&') + sk;
    }
    sig = this.md5(sig);
    return sig;
  },
    /**
     * 得到终点query字符串
     * @param {Array|String} 检索数据
     */
    location2query(data) {
        if (typeof data == 'string') {
            return data;
        }
        var query = '';
        for (var i = 0; i < data.length; i++) {
            var d = data[i];
            if (!!query) {
                query += ';';
            }
            if (d.location) {
                query = query + d.location.lat + ',' + d.location.lng;
            }
            if (d.latitude && d.longitude) {
                query = query + d.latitude + ',' + d.longitude;
            }
        }
        return query;
    },

    /**
     * 计算角度
     */
    rad(d) {
      return d * Math.PI / 180.0;
    },
    /**
     * 处理终点location数组
     * @return 返回终点数组
     */
    getEndLocation(location){
      var to = location.split(';');
      var endLocation = [];
      for (var i = 0; i < to.length; i++) {
        endLocation.push({
          lat: parseFloat(to[i].split(',')[0]),
          lng: parseFloat(to[i].split(',')[1])
        })
      }
      return endLocation;
    },

    /**
     * 计算两点间直线距离
     * @param a 表示纬度差
     * @param b 表示经度差
     * @return 返回的是距离，单位m
     */
    getDistance(latFrom, lngFrom, latTo, lngTo) {
      var radLatFrom = this.rad(latFrom);
      var radLatTo = this.rad(latTo);
      var a = radLatFrom - radLatTo;
      var b = this.rad(lngFrom) - this.rad(lngTo);
      var distance = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLatFrom) * Math.cos(radLatTo) * Math.pow(Math.sin(b / 2), 2)));
      distance = distance * EARTH_RADIUS;
      distance = Math.round(distance * 10000) / 10000;
      return parseFloat(distance.toFixed(0));
    },
    /**
     * 使用微信接口进行定位
     */
    getWXLocation(success, fail, complete) {
        wx.getLocation({
            type: 'gcj02',
            success: success,
            fail: fail,
            complete: complete
        });
    },

    /**
     * 获取location参数
     */
    getLocationParam(location) {
        if (typeof location == 'string') {
            var locationArr = location.split(',');
            if (locationArr.length === 2) {
                location = {
                    latitude: location.split(',')[0],
                    longitude: location.split(',')[1]
                };
            } else {
                location = {};
            }
        }
        return location;
    },

    /**
     * 回调函数默认处理
     */
    polyfillParam(param) {
        param.success = param.success || function () { };
        param.fail = param.fail || function () { };
        param.complete = param.complete || function () { };
    },

    /**
     * 验证param对应的key值是否为空
     *
     * @param {Object} param 接口参数
     * @param {String} key 对应参数的key
     */
    checkParamKeyEmpty(param, key) {
        if (!param[key]) {
            var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + key +'参数格式有误');
            param.fail(errconf);
            param.complete(errconf);
            return true;
        }
        return false;
    },

    /**
     * 验证参数中是否存在检索词keyword
     *
     * @param {Object} param 接口参数
     */
    checkKeyword(param){
        return !this.checkParamKeyEmpty(param, 'keyword');
    },

    /**
     * 验证location值
     *
     * @param {Object} param 接口参数
     */
    checkLocation(param) {
        var location = this.getLocationParam(param.location);
        if (!location || !location.latitude || !location.longitude) {
            var errconf = this.buildErrorConfig(ERROR_CONF.PARAM_ERR, ERROR_CONF.PARAM_ERR_MSG + ' location参数格式有误');
            param.fail(errconf);
            param.complete(errconf);
            return false;
        }
        return true;
    },

    /**
     * 构造错误数据结构
     * @param {Number} errCode 错误码
     * @param {Number} errMsg 错误描述
     */
    buildErrorConfig(errCode, errMsg) {
        return {
            status: errCode,
            message: errMsg
        };
    },

    /**
     *
     * 数据处理函数
     * 根据传入参数不同处理不同数据
     * @param {String} feature 功能名称
     * search 地点搜索
     * suggest关键词提示
     * reverseGeocoder逆地址解析
     * geocoder地址解析
     * getCityList获取城市列表：父集
     * getDistrictByCityId获取区县列表：子集
     * calculateDistance距离计算
     * @param {Object} param 接口参数
     * @param {Object} data 数据
     */
    handleData(param,data,feature){
      if (feature == 'search') {
        var searchResult = data.data;
        var searchSimplify = [];
        for (var i = 0; i < searchResult.length; i++) {
          searchSimplify.push({
            id: searchResult[i].id || null,
            title: searchResult[i].title || null,
            latitude: searchResult[i].location && searchResult[i].location.lat || null,
            longitude: searchResult[i].location && searchResult[i].location.lng || null,
            address: searchResult[i].address || null,
            category: searchResult[i].category || null,
            tel: searchResult[i].tel || null,
            adcode: searchResult[i].ad_info && searchResult[i].ad_info.adcode || null,
            city: searchResult[i].ad_info && searchResult[i].ad_info.city || null,
            district: searchResult[i].ad_info && searchResult[i].ad_info.district || null,
            province: searchResult[i].ad_info && searchResult[i].ad_info.province || null
          })
        }
        param.success(data, {
          searchResult: searchResult,
          searchSimplify: searchSimplify
        })
      } else if (feature == 'suggest') {
        var suggestResult = data.data;
        var suggestSimplify = [];
        for (var i = 0; i < suggestResult.length; i++) {
          suggestSimplify.push({
            adcode: suggestResult[i].adcode || null,
            address: suggestResult[i].address || null,
            category: suggestResult[i].category || null,
            city: suggestResult[i].city || null,
            district: suggestResult[i].district || null,
            id: suggestResult[i].id || null,
            latitude: suggestResult[i].location && suggestResult[i].location.lat || null,
            longitude: suggestResult[i].location && suggestResult[i].location.lng || null,
            province: suggestResult[i].province || null,
            title: suggestResult[i].title || null,
            type: suggestResult[i].type || null
          })
        }
        param.success(data, {
          suggestResult: suggestResult,
          suggestSimplify: suggestSimplify
          })
      } else if (feature == 'reverseGeocoder') {
        var reverseGeocoderResult = data.result;
        var reverseGeocoderSimplify = {
          address: reverseGeocoderResult.address || null,
          latitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lat || null,
          longitude: reverseGeocoderResult.location && reverseGeocoderResult.location.lng || null,
          adcode: reverseGeocoderResult.ad_info && reverseGeocoderResult.ad_info.adcode || null,
          city: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.city || null,
          district: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.district || null,
          nation: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.nation || null,
          province: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.province || null,
          street: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street || null,
          street_number: reverseGeocoderResult.address_component && reverseGeocoderResult.address_component.street_number || null,
          recommend: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.recommend || null,
          rough: reverseGeocoderResult.formatted_addresses && reverseGeocoderResult.formatted_addresses.rough || null
        };
        if (reverseGeocoderResult.pois) {//判断是否返回周边poi
          var pois = reverseGeocoderResult.pois;
          var poisSimplify = [];
          for (var i = 0;i < pois.length;i++) {
            poisSimplify.push({
              id: pois[i].id || null,
              title: pois[i].title || null,
              latitude: pois[i].location && pois[i].location.lat || null,
              longitude: pois[i].location && pois[i].location.lng || null,
              address: pois[i].address || null,
              category: pois[i].category || null,
              adcode: pois[i].ad_info && pois[i].ad_info.adcode || null,
              city: pois[i].ad_info && pois[i].ad_info.city || null,
              district: pois[i].ad_info && pois[i].ad_info.district || null,
              province: pois[i].ad_info && pois[i].ad_info.province || null
            })
          }
          param.success(data,{
            reverseGeocoderResult: reverseGeocoderResult,
            reverseGeocoderSimplify: reverseGeocoderSimplify,
            pois: pois,
            poisSimplify: poisSimplify
          })
        } else {
          param.success(data, {
            reverseGeocoderResult: reverseGeocoderResult,
            reverseGeocoderSimplify: reverseGeocoderSimplify
          })
        }
      } else if (feature == 'geocoder') {
        var geocoderResult = data.result;
        var geocoderSimplify = {
          title: geocoderResult.title || null,
          latitude: geocoderResult.location && geocoderResult.location.lat || null,
          longitude: geocoderResult.location && geocoderResult.location.lng || null,
          adcode: geocoderResult.ad_info && geocoderResult.ad_info.adcode || null,
          province: geocoderResult.address_components && geocoderResult.address_components.province || null,
          city: geocoderResult.address_components && geocoderResult.address_components.city || null,
          district: geocoderResult.address_components && geocoderResult.address_components.district || null,
          street: geocoderResult.address_components && geocoderResult.address_components.street || null,
          street_number: geocoderResult.address_components && geocoderResult.address_components.street_number || null,
          level: geocoderResult.level || null
        };
        param.success(data,{
          geocoderResult: geocoderResult,
          geocoderSimplify: geocoderSimplify
        });
      } else if (feature == 'getCityList') {
        var provinceResult = data.result[0];
        var cityResult = data.result[1];
        var districtResult = data.result[2];
        param.success(data,{
          provinceResult: provinceResult,
          cityResult: cityResult,
          districtResult: districtResult
        });
      } else if (feature == 'getDistrictByCityId') {
        var districtByCity = data.result[0];
        param.success(data, districtByCity);
      } else if (feature == 'calculateDistance') {
        var calculateDistanceResult = data.result.elements;
        var distance = [];
        for (var i = 0; i < calculateDistanceResult.length; i++){
          distance.push(calculateDistanceResult[i].distance);
        }
        param.success(data, {
          calculateDistanceResult: calculateDistanceResult,
          distance: distance
          });
      } else if (feature == 'direction') {
        var direction = data.result.routes;
        param.success(data,direction);
      } else {
        param.success(data);
      }
    },

    /**
     * 构造微信请求参数，公共属性处理
     *
     * @param {Object} param 接口参数
     * @param {Object} param 配置项
     * @param {String} feature 方法名
     */
    buildWxRequestConfig(param, options, feature) {
        var that = this;
        options.header = { "content-type": "application/json" };
        options.method = 'GET';
        options.success = function (res) {
            var data = res.data;
            if (data.status === 0) {
              that.handleData(param, data, feature);
            } else {
                param.fail(data);
            }
        };
        options.fail = function (res) {
            res.statusCode = ERROR_CONF.WX_ERR_CODE;
            param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
        };
        options.complete = function (res) {
            var statusCode = +res.statusCode;
            switch(statusCode) {
                case ERROR_CONF.WX_ERR_CODE: {
                    param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
                    break;
                }
                case ERROR_CONF.WX_OK_CODE: {
                    var data = res.data;
                    if (data.status === 0) {
                        param.complete(data);
                    } else {
                        param.complete(that.buildErrorConfig(data.status, data.message));
                    }
                    break;
                }
                default:{
                    param.complete(that.buildErrorConfig(ERROR_CONF.SYSTEM_ERR, ERROR_CONF.SYSTEM_ERR_MSG));
                }

            }
        };
        return options;
    },

    /**
     * 处理用户参数是否传入坐标进行不同的处理
     */
    locationProcess(param, locationsuccess, locationfail, locationcomplete) {
        var that = this;
        locationfail = locationfail || function (res) {
            res.statusCode = ERROR_CONF.WX_ERR_CODE;
            param.fail(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
        };
        locationcomplete = locationcomplete || function (res) {
            if (res.statusCode == ERROR_CONF.WX_ERR_CODE) {
                param.complete(that.buildErrorConfig(ERROR_CONF.WX_ERR_CODE, res.errMsg));
            }
        };
        if (!param.location) {
            that.getWXLocation(locationsuccess, locationfail, locationcomplete);
        } else if (that.checkLocation(param)) {
            var location = Utils.getLocationParam(param.location);
            locationsuccess(location);
        }
    }
};


class QQMapWX {

    /**
     * 构造函数
     *
     * @param {Object} options 接口参数,key 为必选参数
     */
    constructor(options) {
        if (!options.key) {
            throw Error('key值不能为空');
        }
        this.key = options.key;
    };

    /**
     * POI周边检索
     *
     * @param {Object} options 接口参数对象
     *
     * 参数对象结构可以参考
     * @see http://lbs.qq.com/webservice_v1/guide-search.html
     */
    search(options) {
        var that = this;
        options = options || {};

        Utils.polyfillParam(options);

        if (!Utils.checkKeyword(options)) {
            return;
        }

        var requestParam = {
            keyword: options.keyword,
            orderby: options.orderby || '_distance',
            page_size: options.page_size || 10,
            page_index: options.page_index || 1,
            output: 'json',
            key: that.key
        };

        if (options.address_format) {
            requestParam.address_format = options.address_format;
        }

        if (options.filter) {
            requestParam.filter = options.filter;
        }

        var distance = options.distance || "1000";
        var auto_extend = options.auto_extend || 1;
        var region = null;
        var rectangle = null;

        //判断城市限定参数
        if (options.region) {
          region = options.region;
        }

        //矩形限定坐标(暂时只支持字符串格式)
        if (options.rectangle) {
          rectangle = options.rectangle;
        }

        var locationsuccess = function (result) {
          if (region && !rectangle) {
            //城市限定参数拼接
            requestParam.boundary = "region(" + region + "," + auto_extend + "," + result.latitude + "," + result.longitude + ")";
            if (options.sig) {
              requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
            }
          } else if (rectangle && !region) {
            //矩形搜索
            requestParam.boundary = "rectangle(" + rectangle + ")";
            if (options.sig) {
              requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
            }
            } else {
              requestParam.boundary = "nearby(" + result.latitude + "," + result.longitude + "," + distance + "," + auto_extend + ")";
            if (options.sig) {
              requestParam.sig = Utils.getSig(requestParam, options.sig, 'search');
            }
            }
            wx.request(Utils.buildWxRequestConfig(options, {
                url: URL_SEARCH,
                data: requestParam
            }, 'search'));
        };
        Utils.locationProcess(options, locationsuccess);
    };

    /**
     * sug模糊检索
     *
     * @param {Object} options 接口参数对象
     *
     * 参数对象结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-suggestion.html
     */
    getSuggestion(options) {
        var that = this;
        options = options || {};
        Utils.polyfillParam(options);

        if (!Utils.checkKeyword(options)) {
            return;
        }

        var requestParam = {
            keyword: options.keyword,
            region: options.region || '全国',
            region_fix: options.region_fix || 0,
            policy: options.policy || 0,
            page_size: options.page_size || 10,//控制显示条数
            page_index: options.page_index || 1,//控制页数
            get_subpois : options.get_subpois || 0,//返回子地点
            output: 'json',
            key: that.key
        };
        //长地址
        if (options.address_format) {
          requestParam.address_format = options.address_format;
        }
        //过滤
        if (options.filter) {
          requestParam.filter = options.filter;
        }
        //排序
        if (options.location) {
          var locationsuccess = function (result) {
            requestParam.location = result.latitude + ',' + result.longitude;
            if (options.sig) {
              requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');
            }
            wx.request(Utils.buildWxRequestConfig(options, {
              url: URL_SUGGESTION,
              data: requestParam
            }, "suggest"));
          };
          Utils.locationProcess(options, locationsuccess);
        } else {
          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'suggest');
          }
          wx.request(Utils.buildWxRequestConfig(options, {
            url: URL_SUGGESTION,
            data: requestParam
          }, "suggest"));
        }
    };

    /**
     * 逆地址解析
     *
     * @param {Object} options 接口参数对象
     *
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-gcoder.html
     */
    reverseGeocoder(options) {
        var that = this;
        options = options || {};
        Utils.polyfillParam(options);
        var requestParam = {
            coord_type: options.coord_type || 5,
            get_poi: options.get_poi || 0,
            output: 'json',
            key: that.key
        };
        if (options.poi_options) {
            requestParam.poi_options = options.poi_options
        }

        var locationsuccess = function (result) {
            requestParam.location = result.latitude + ',' + result.longitude;
          if (options.sig) {
            requestParam.sig = Utils.getSig(requestParam, options.sig, 'reverseGeocoder');
          }
            wx.request(Utils.buildWxRequestConfig(options, {
                url: URL_GET_GEOCODER,
                data: requestParam
            }, 'reverseGeocoder'));
        };
        Utils.locationProcess(options, locationsuccess);
    };

    /**
     * 地址解析
     *
     * @param {Object} options 接口参数对象
     *
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-geocoder.html
     */
    geocoder(options) {
        var that = this;
        options = options || {};
        Utils.polyfillParam(options);

        if (Utils.checkParamKeyEmpty(options, 'address')) {
            return;
        }

        var requestParam = {
            address: options.address,
            output: 'json',
            key: that.key
        };

        //城市限定
        if (options.region) {
          requestParam.region = options.region;
        }

        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'geocoder');
        }

        wx.request(Utils.buildWxRequestConfig(options, {
            url: URL_GET_GEOCODER,
            data: requestParam
        },'geocoder'));
    };


    /**
     * 获取城市列表
     *
     * @param {Object} options 接口参数对象
     *
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-region.html
     */
    getCityList(options) {
        var that = this;
        options = options || {};
        Utils.polyfillParam(options);
        var requestParam = {
            output: 'json',
            key: that.key
        };

        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'getCityList');
        }

        wx.request(Utils.buildWxRequestConfig(options, {
            url: URL_CITY_LIST,
            data: requestParam
        },'getCityList'));
    };

    /**
     * 获取对应城市ID的区县列表
     *
     * @param {Object} options 接口参数对象
     *
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-region.html
     */
    getDistrictByCityId(options) {
        var that = this;
        options = options || {};
        Utils.polyfillParam(options);

        if (Utils.checkParamKeyEmpty(options, 'id')) {
            return;
        }

        var requestParam = {
            id: options.id || '',
            output: 'json',
            key: that.key
        };

        if (options.sig) {
          requestParam.sig = Utils.getSig(requestParam, options.sig, 'getDistrictByCityId');
        }

        wx.request(Utils.buildWxRequestConfig(options, {
            url: URL_AREA_LIST,
            data: requestParam
        },'getDistrictByCityId'));
    };

    /**
     * 用于单起点到多终点的路线距离(非直线距离)计算：
     * 支持两种距离计算方式：步行和驾车。
     * 起点到终点最大限制直线距离10公里。
     *
     * 新增直线距离计算。
     *
     * @param {Object} options 接口参数对象
     *
     * 请求参数结构可以参考
     * http://lbs.qq.com/webservice_v1/guide-distance.html
     */
    calculateDistance(options) {
        var that = this;
        options = options || {};
        Utils.polyfillParam(options);

        if (Utils.checkParamKeyEmpty(options, 'to')) {
            return;
        }

        var requestParam = {
            mode: options.mode || 'walking',
            to: Utils.location2query(options.to),
            output: 'json',
            key: that.key
        };

        if (options.from) {
          options.location = options.from;
        }

        //计算直线距离
        if(requestParam.mode == 'straight'){
          var locationsuccess = function (result) {
            var locationTo = Utils.getEndLocation(requestParam.to);//处理终点坐标
            var data = {
              message:"query ok",
              result:{
                elements:[]
              },
              status:0
            };
            for (var i = 0; i < locationTo.length; i++) {
              data.result.elements.push({//将坐标存入
                distance: Utils.getDistance(result.latitude, result.longitude, locationTo[i].lat, locationTo[i].lng),
                duration:0,
                from:{
                  lat: result.latitude,
                  lng:result.longitude
                },
                to:{
                  lat: locationTo[i].lat,
                  lng: locationTo[i].lng
                }
              });
            }
            var calculateResult = data.result.elements;
            var distanceResult = [];
            for (var i = 0; i < calculateResult.length; i++) {
              distanceResult.push(calculateResult[i].distance);
            }
            return options.success(data,{
              calculateResult: calculateResult,
              distanceResult: distanceResult
            });
          };

          Utils.locationProcess(options, locationsuccess);
        } else {
          var locationsuccess = function (result) {
            requestParam.from = result.latitude + ',' + result.longitude;
            if (options.sig) {
              requestParam.sig = Utils.getSig(requestParam, options.sig, 'calculateDistance');
            }
            wx.request(Utils.buildWxRequestConfig(options, {
              url: URL_DISTANCE,
              data: requestParam
            },'calculateDistance'));
          };

          Utils.locationProcess(options, locationsuccess);
        }
    };

  /**
   * 路线规划：
   *
   * @param {Object} options 接口参数对象
   *
   * 请求参数结构可以参考
   * https://lbs.qq.com/webservice_v1/guide-road.html
   */
  direction(options) {
    var that = this;
    options = options || {};
    Utils.polyfillParam(options);

    if (Utils.checkParamKeyEmpty(options, 'to')) {
      return;
    }

    var requestParam = {
      output: 'json',
      key: that.key
    };

    //to格式处理
    if (typeof options.to == 'string') {
      requestParam.to = options.to;
    } else {
      requestParam.to = options.to.latitude + ',' + options.to.longitude;
    }
    //初始化局部请求域名
    var SET_URL_DIRECTION = null;
    //设置默认mode属性
    options.mode = options.mode || MODE.driving;

    //设置请求域名
    SET_URL_DIRECTION = URL_DIRECTION + options.mode;

    if (options.from) {
      options.location = options.from;
    }

    if (options.mode == MODE.driving) {
      if (options.from_poi) {
        requestParam.from_poi = options.from_poi;
      }
      if (options.heading) {
        requestParam.heading = options.heading;
      }
      if (options.speed) {
        requestParam.speed = options.speed;
      }
      if (options.accuracy) {
        requestParam.accuracy = options.accuracy;
      }
      if (options.road_type) {
        requestParam.road_type = options.road_type;
      }
      if (options.to_poi) {
        requestParam.to_poi = options.to_poi;
      }
      if (options.from_track) {
        requestParam.from_track = options.from_track;
      }
      if (options.waypoints) {
        requestParam.waypoints = options.waypoints;
      }
      if (options.policy) {
        requestParam.policy = options.policy;
      }
      if (options.plate_number) {
        requestParam.plate_number = options.plate_number;
      }
    }

    if (options.mode == MODE.transit) {
      if (options.departure_time) {
        requestParam.departure_time = options.departure_time;
      }
      if (options.policy) {
        requestParam.policy = options.policy;
      }
    }

    var locationsuccess = function (result) {
      requestParam.from = result.latitude + ',' + result.longitude;
      if (options.sig) {
        requestParam.sig = Utils.getSig(requestParam, options.sig, 'direction',options.mode);
      }
      wx.request(Utils.buildWxRequestConfig(options, {
        url: SET_URL_DIRECTION,
        data: requestParam
      }, 'direction'));
    };

    Utils.locationProcess(options, locationsuccess);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (QQMapWX);
// module.exports = QQMapWX;


/***/ })

},[183]);