<template>
    <div class="todo">
        <input v-model="val" @keydown.enter="add" type="text" />
        <ul>
            <li v-for="(a,index) in arr" :key="index">
                {{ a }} <button @click="remove(index)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods: {
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
                val: ''
            }
        },
    }
</script>

<style scoped>

</style>
