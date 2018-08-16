<template>
    <div class="todo">
        <input v-model="val" @keydown.enter="add" type="text" />
        <ul>
            <li v-for="(a,index) in arr" :key="index">
                {{ a }} <button @click="remove(index)">删除</button>
            </li>
        </ul>
        <div class="btn-group" role="group" aria-label="...">
            <button type="button" class="btn btn-default">Left</button>
            <button type="button" class="btn btn-default">Middle</button>
            <button type="button" class="btn btn-default">Right</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        //专门用来发送ajax的方法
        created() {// 在数据被初始化后会调用，this指向指的也是VM实例，（钩子函数）
            this.getData();
        },
        methods: {
            getData() {
                //Promise 解决回调问题的
                axios.get('./json/cart.json').then((result) => {
                    this.products = result.data;
                }).catch((err) => {
                    console.log(err)
                });
            },
            add() {
                this.arr.unshift(this.val),
                this.val = ''
            },
            remove(i) {
                this.arr = this.arr.filter((item,index) => index !== i)
            }
        },
        data() {
            return {
                arr: [],
                val: '',
                products: []
            }
        },
    }
</script>

<style scoped>

</style>
