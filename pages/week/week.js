Page({

  /**
   * 页面的初始数据
   */
  data: {
    "movie": {
      "name": "投洽会明日开幕",
      "img": "http://img.xmnn.cn/003/002/790/00300279007_598912e6.jpg",
      "desc": "第二十届投洽会明日开幕 12万名客商共赴全球投资盛会",
      "isRemed":false,
      "id":66
    },
    "movies":[
      {
        "name": "会明日开幕",
        "img": "http://img.xmnn.cn/003/002/790/00300279007_598912e6.jpg",
        "desc": "第二十届投洽会明日开幕 12万名客商共赴全球投资盛会",
        "isRemed": false,
        "id": 77
      }, {
        "name": "第二十届开幕",
        "img": "http://img.xmnn.cn/003/002/790/00300279007_598912e6.jpg",
        "desc": "第二十届投洽会明日开幕 12万名客商共赴全球投资盛会",
        "isRemed": true,
        "id": 88
      }, {
        "name": "第二日开幕",
        "img": "http://img.xmnn.cn/003/002/790/00300279007_598912e6.jpg",
        "desc": "第二十届投洽会明日开幕 12万名客商共赴全球投资盛会",
        "isRemed": true,
        "id": 99
      }
    ],
    "score":68,
    "currentIndex":0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentIndex: this.data.movies.length-2
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  /**
   * 返回本周的事件处理函数
   */
  f0:function(event){
    this.setData({
      currentIndex:this.data.movies.length-1
    });
  },
  
  /**
   * 幻灯片点击事件的处理函数
   */
  f1:function(event){
    console.log(event.currentTarget)
    var movieId = event.currentTarget.dataset.movieId;
    console.log(movieId);
    wx.navigateTo({
      url: '/pages/detail/detail?id=' + movieId,
    })
  }
})