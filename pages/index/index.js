//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    pageY: 0,
    motto: "Hello World",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    isActive: 0,
    baseInfo: {
      name: "李国庆",
      position: "资深前端工程师",
      github: "https://github.com/lixingdecai",
      blob: "http://lixingdecai.com",
      education: "本科",
      duration: "7年",
      school: '厦门理工',
      email: 'lixingdecai@gmail.com',
      phone: "15980834526",
      intr: [
        '1、目前负责一个5人团队，主要负责公司混合应用方向;',
        '2、前端的 NG、Vue、React 三大框架都有落地并上线项目经验;',
        '3、RN、Ionic、Weex 的三种混合开发模式开发 APP 都有上线项目。',
        '4、6 年工作互联网开发经验;3 年多的前端、2年的服务端(Java Web)、半年的 Android 原生。',
        '5、3个 APP、N个后台系统、微信小程序、小米新应用、2个互联网网站、微信公众号。',
      ],
      avatar:
        "https://wx.qlogo.cn/mmhead/Q3auHgzwzM4yU4q0t5APadCkcMFQ9qfuFezdSViasSXf4wEgIzhmnJg/0"
    },
    exInfo: [
      {
        title: "百万女王(在线直播答题)",
        time: "2016.07 - 2018.05",
        content: [
          "美柚的在线直播答题项目(仿冲顶大会)，两周左右时间开发迭代上线;",
          "Android 和 iOS 端稳定和持续迭代维护热更新;",
          "同时在线人数达 15w 左右，每场奖金 20w 元。达到相当不错的拉新效果;"
        ]
      },
      {
        title: "RN 相关项目(小说、美柚号、小工具等)",
        time: "2016.07 - 2018.05",
        content: [
          "小工具、小说、美柚号等多个业务项目，使用 RN 技术，集成到美柚 APP 中",
          "小说: 停留时长最高 30 分钟，平均在线人数 5w，平均每日新增充值 2w 人民币。线上错误率低于万分之 1",
          "小工具:点击率提高 5%，页面加载时间低于 400ms，页面响应速度低 于 50ms，页面滚动时，主流机型的 FPS 保持在 50 帧以上。",
          "RN 前端框架设计、工程自动化、规范化、组件化、整体流程设计、 热更新版本管理、性能体验优化"
        ]
      },
      {
        title: "微信小程序 - 美柚 App",
        time: "2016.11 - 2016.12",
        content: ["两星期开发测试提审"]
      }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: "../logs/logs"
    });
  },
  onLoad: function() {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      });
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        });
      };
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          });
        }
      });
    }
  },
  getUserInfo: function(e) {
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo;
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    });
  },
  // MainContent组件touchstart事件
  mcTouchS(e) {
    this.startY = e.touches[0].clientY;
  },
  touchmove(e) {
    this.data.pageY = e.changedTouches[0].pageY - this.data.pageY;
    // console.log(pageY);
    this.setData({
      pageY: this.data.pageY
    })
  },
  // MainContent组件touchend事件
  mcTouchE(e) {
    const disY = e.changedTouches[0].clientY - this.startY;

    // 当前在主播tab栏并且右滑
    this.zActive = this.data.isActive;
    if (disY > 100) {
      if (this.data.isActive === 0) return;
      this.data.isActive -= 1;
      this.data.pageGo = 'pageDown z-active';
      // this.data.
      // false;
    } else if (disY < -100) {
      if (this.data.isActive === 4) return;
      this.data.isActive += 1;
      this.data.pageGo = 'pageUp z-active';
      // true;
    }
    this.setData({
      zActive: this.zActive,
      isActive: this.data.isActive,
      pageGo: this.data.pageGo,
    });
  }
});
