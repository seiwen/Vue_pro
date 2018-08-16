<template>
    <div class="todo">
        <input v-model="val" @keydown.enter="add" type="text" />
        <ul>
            <li v-for="(a,index) in arr" :key="index">
                {{ a }} <button @click="remove(index)">删除</button>
            </li>
        </ul>
        <table class="table">
            <caption class="h2">购物车</caption>
            <tr>
                <!-- click 点击是 checkbox的状态还没有改变 所以拿到的总是相反的 change可以保证只当值变化后在触发函数 -->
                <th>全选 <input type="checkbox" v-model="checkAll" @change="change"></th>
                <th>商品</th>
                <th>单价</th>
                <th>数量</th>
                <th>小计</th>
                <th>操作</th>
            </tr>
            <tr v-for="(product,index) in products" :key="index">
                <td>
                    <input v-model="product.isSelected" type="checkbox" @change="select" />
                    </td>
                <td>
                    <img :src="product.productCover" :title="product.productName">{{product.productName}}
                    </td>
                <td>
                    {{product.productPrice}}

                </td>
                <!-- .number 是让输入框的值变成数字类型  .lazy 当输入框失去焦点是更新数据 -->
                <td>
                    <input type="number" v-model.number="product.productCount">
                    </td>
                <!-- 过滤器 原数据不变的情况下，只是改变显示的效果 -->
                <td>
                    {{product.productPrice*product.productCount | toFixed(2)}}
                    </td>
                <td>
                    <button @click="removes(product)">删除</button>
                </td>
            </tr>
            <tr><td colspan="6">总计：{{totol() | toFixed(2)}}</td></tr>
        </table>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        filters:{//过滤器
            toFixed(input,param1){//这里的this指向的是window
                return '￥'+input.toFixed(param1)//input代表的是管道符前面的内容 param1代表的是toFixed中传递的参数
            }
        },
        //专门用来发送ajax的方法
        created() {// 在数据被初始化后会调用，this指向指的也是VM实例，（钩子函数）
            this.getData();
        },
        methods: {
            getData() {
                //Promise 解决回调问题的
                axios.get('./json/cart.json').then((result) => {
                    this.products = result.data;
                    this.select();//数据获取完成后 checkAll赋予值
                }).catch(() => {
                    //console.log(err)
                });
            },
            add() {
                this.arr.unshift(this.val),
                this.val = ''
            },
            remove(i) {
                this.arr = this.arr.filter((item,index) => index !== i)
            },
            removes(pro) {
                this.products = this.products.filter(item => item !== pro);
            },
            change() {
                //根据当前自己的状态设置其它的状态 实现全选和反选
                this.products.forEach(item => item.isSelected = this.checkAll );
            },
            select() {
                //列表选择控制是否全选
                this.checkAll = this.products.every(item => item.isSelected);
            },
            totol() {
                //求和函数
                return this.products.reduce((prev,next) => {
                    if(!next.isSelected) return prev; //如果当前没有被选中，就不加当前值
                    return prev+ parseFloat(next.productPrice)*parseFloat(next.productCount);
                },0)
            }
        },
        data() {
            return {
                arr: [],
                val: '',
                products: [],
                checkAll: true, //是否全选
            }
        },
    }
</script>

<style lang="scss" scoped>
    .table{
        width: 100%;
        tr{
             padding: 10px;
             min-height: 50px;
        }
    }
</style>
