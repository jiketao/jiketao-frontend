/*==========================
(+) 首页应用store 
 *==========================*/
var Fluxxor = require('Fluxxor');
var Fluxxor = require('fluxxor');

var constants = {
    ADD_TODO: "ADD_TODO",
    TOGGLE_TODO: "TOGGLE_TODO",
    CLEAR_TODOS: "CLEAR_TODOS"
};
/*
 * 菜单栏数据
 */
let menus = window.menus || [
  {name: "首页", url: "/"},
  {name: "关于", url: "/about"},
  {name: "...", url: "/"}
]

let productCategories = window.productCategories || [
  {name: "所有", _id: 0},
  {name: "电脑", _id: 1},
  {name: "键盘", _id: 2 },
  {name: "办公椅", _id: 3},
  {name: "软件", _id: 4},
  {name: "背包", _id: 5},
  {name: "鸡鸡", _id: 6}
]

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
            skus
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


