import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    strict: true,
    state: {
        car: JSON.parse(localStorage.getItem('car') || '[]')    //先看本地存储中是否有数据  购物车中的商品数据
        // {id:商品的id,count:商品的数量,price:商品的价格,
        // selected:false商品在购物车中是否被选中,src:商品图片}
    },
    mutations: {
        addToCar(state, goodsinfo) {
            //加入购物车
            /*
            如果已经存在该商品  只需更新数量
            如果不存在  push到car数组中
             */
            var flag = false;
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count);
                    flag = true;
                    return true;
                }
            });
            if (!flag) {
                state.car.push(goodsinfo);
            }
            //存在本地的localStorage中
            localStorage.setItem('car', JSON.stringify(state.car));
        },
        updateGoodsInfo(state, goodsinfo) {
            state.car.some(item => {
                if (item.id == goodsinfo.id) {
                    item.count = parseInt(goodsinfo.count);
                    return true
                }
            });

            localStorage.setItem('car', JSON.stringify(state.car));
        },
        removeFromCar(state, id) {
            state.car.some((item, index) => {
                if (item.id == id) {
                    state.car.splice(index, 1);
                    return true
                }
            });

            localStorage.setItem('car', JSON.stringify(state.car));
        },
        updateGoodsSelected(state, info) {
            state.car.some(item => {
                if (item.id == info.id) {
                    item.selected = info.selected;
                    return true
                }
            });
            localStorage.setItem('car', JSON.stringify(state.car));
        }
    },
    actions: {},
    getters: {
        getAllCount(state) {
            var c = 0;
            state.car.forEach(item => {
                c += item.count;
            });
            return c;
        },
        getGoodsCountAndAmount(state){
            var o = {
                count:0,       //勾选的数量
                amount:0        //勾选的总价
            };
            state.car.forEach(item => {
                if (item.selected) {
                    o.count += item.count;
                    o.amount += item.count * item.price;
                }
            });
            return o;
        }
    },
    modules: {}
});

export default store;
