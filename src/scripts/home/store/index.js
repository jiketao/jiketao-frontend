/*==========================
(+) 首页应用store 
 *==========================*/
import Fluxxor from "fluxxor"

/*
 * 菜单栏数据
 */
let menus = window.menus || [
  {name: "首页", url: "/"},
  {name: "关于", url: "/about"},
  {name: "...", url: "/"}
]

let productCategories = []

/*
 * Sku数据，后台吐出
 */
 let skus = [
   {name: "home-sku1", url: "http://baidu.com", picture: "assets/watch.jpg"},
   {name: "home-sku2", url: "http://weibo.com", picture: "assets/mac.png"},
   {name: "home-sku3", url: "http://mp.weixin.qq.com", picture: "assets/arduino.jpg"},
   {name: "home-sku4", url: "http://zhihu.com", picture: "assets/phone2.png"},
 ]

export default Fluxxor.createStore({
    initialize: function() {

        this.data = {
            menus,
            productCategories,
            skus,
            paginate: {
              totalCount: 100000,
              currentPage: 1,
            }
        };

        this.bindActions('loadPageData', this.onLoadPageData);
    },
    /**
     * [onLoadPageData 加载页面数据]
     * @param  {[Object]} data [description]
     * @return {[type]}      [description]
     */
    onLoadPageData: function(data) {

        for (var attr in data) {
            this.data[attr] = data[attr];
        }

        this.emit('change');
    },
    onAddTodo: function(payload) {
        var id = this._nextTodoId();
        var todo = {
            id: id,
            text: payload.text,
            complete: false
        };
        this.todos[id] = todo;
        this.emit("change");
    },
    getState: function() {
        return {
            data: this.data
        };
    }
});


