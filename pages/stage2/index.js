//index.js
//获取应用实例
const app = getApp()

Page({
  // 页面的初始数据
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: false,
    vertical: true,
    autoplay: false,
    circular: false,
    interval: 2000,
    duration: 500,
    previousMargin: 0,
    nextMargin: 0
  },
  // 生命周期函数--监听页面加载
  onLoad: function () {
    console.log('Page onLoad');
  },
  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {
    console.log('Page onReady');
  },
  // 生命周期函数--监听页面显示
  onShow: function() {
    console.log('Page onShow');
  },
  // 生命周期函数--监听页面隐藏
  onHide: function() {
    console.log('Page onHide');
  },
  // 生命周期函数--监听页面卸载
  onUnload: function() {
    console.log('Page onUnload');
  },
  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function() {},
  // 页面上拉触底事件的处理函数
  onReachBottom: function() {},
  // 用户点击右上角转发
  onShareAppMessage: function() {},
  // 页面滚动触发事件的处理函数
  onPageScroll: function () {},
  // 当前是 tab 页时，点击 tab 时触发
  onTabItemTap: function () {},
})
