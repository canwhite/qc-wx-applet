Component({
  data: { // 私有数据，可用于模板渲染
    selected: 0,
    color: "#666",
    selectedColor: "#f60",
    list:[{
      pagePath: "/pages/index/index",
      iconPath: "/images/tabbar/home.png",
      selectedIconPath: "/images/tabbar/home_active.png",
      text: "首页",
      id: 1
    },{
      pagePath: "/pages/news/news",
      iconPath: "/images/tabbar/category.png",
      selectedIconPath: "/images/tabbar/category_active.png",
      text: "消息",
      id: 2
    },{
      pagePath: "/pages/mine/mine",
      iconPath: "/images/tabbar/center.png",
      selectedIconPath: "/images/tabbar/center_active.png",
      text: "我的",
      id: 3
    }]
  },
  lifetimes: {
    attached(){
      console.log(11)
    }
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      console.log(data, url)
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})