<template>
    <div>
        <button @click="login_click('ok', $event)">log in</button>
    </div>
</template>

<script>
export default {
    props: {
        isLogin: {
            type: Boolean,
            default: false
        }
    },
 
    data() { return {

    };},    

    methods: {
        async login_click(message = '', event) {
            this.$emit('update:isLogin', !this.isLogin);
            this.$router.push({ name: 'home' });
        }
    },
}

//默认单向数据流，子组件无法向父组件传参
//.sync传参
//click参数内首个默认触发事件
//routerlink和routerview貌似没必要关系?
//理清思路很必要
</script>