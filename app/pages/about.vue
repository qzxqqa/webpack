<template>
    <div>
        <h1>这是关于我们的页面</h1>
        <button @click="handle">跳转按钮</button>
        <img src="../static/img/logo.png">
    </div>
</template>

<script>
    export default {
        name: 'about',
        data() {
            return {

            }
        },
        methods: {
            handle(){
                console.log("123".padStart(10,"0"))
                this.$router.push({
                    name: 'index'
                })
            }
        }
    }
</script>

<style scoped>
    div{
        color: red;
    }
</style>