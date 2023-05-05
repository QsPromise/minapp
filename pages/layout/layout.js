// pages/layout/layout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    layoutList:[
      {offset:0,colB:(24/1/24*100).toFixed(0),colN:1},
      {offset:0,colB:(24/2/24*100).toFixed(0),colN:2},
      {offset:0,colB:(24/3/24*100).toFixed(0),colN:3},
      {offset:0,colB:(24/4/24*100).toFixed(0),colN:4},
      {offset:0,colB:(24/6/24*100).toFixed(0),colN:6},
      {offset:0,colB:(24/8/24*100).toFixed(0),colN:8},
      {offset:0,colB:(24/12/24*100).toFixed(0),colN:12},
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log((24/3 / 24*100).toFixed(2));
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})