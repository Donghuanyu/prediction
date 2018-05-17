// pages/match.js
const URL = getApp().globalData.URL
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
   * 匹配用户
   */
  matchUser: function (e) {

    var name = e.detail.value.name
    if (name == null || "" == name) {
      wx.showToast({
        title: '请填写您的昵称',
        icon: 'none',
        duration: 1500,
        mask: true
      })
      return;
    }
    // name = { name: name }
    this.setData({
      loading: true
    })
    var that = this;
    wx.request({
      url: URL.matchUser(),
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        name: name,
        id: getApp().globalData.userInfo.id
      },
      success: function(res) {
        console.log(res);
        that.dealWithData(res.data);
      },
      fail: function (e) {

      },
      complete: function() {
        that.setData({
          loading: false
        })
      }
    })

  },

  /**
   * 处理返回结果
   */
  dealWithData: function(data) {

    if('200' != data.code) {
      wx.showToast({
        title: data.msg,
        icon: 'none',
        duration: 1500,
        mask: true
      })
      return;
    }
    //成功，跳转到结果页面
    wx.redirectTo({
      url: '../showMatch/showMatch?result=' + JSON.stringify(data.data),
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

  }
})