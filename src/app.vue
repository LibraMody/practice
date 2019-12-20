<template>
    <div id="app">
        <log-in v-if="!is_login" :is-login.sync="is_login"></log-in>

        <router-view v-else></router-view>
    </div>
</template>

<script>

import LogIn from '@/pages/login';

export default {
    components: {
        'log-in': LogIn
    },

    data() { return {
        is_login: false
    };},    

    methods: {

    },
}
</script>