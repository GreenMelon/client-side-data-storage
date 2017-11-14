<style lang="less">
    @import './less/main.less';
</style>

<template>
    <div id="app">
        <aside>
            <ul class="mod-modules list-module">
                <li v-for="module in modules" class="item">
                    <router-link
                        :to="module.route"
                        :class="{active: $route.path.startsWith(module.route)}">{{ module.name }}
                    </router-link>
                </li>
            </ul>
        </aside>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                modules: [
                    {
                        name: 'cookie',
                        route: '/cookie'
                    },{
                        name: 'localStorage',
                        route: '/localStorage'
                    },{
                        name: 'indexed Database',
                        route: '/indexed-database'
                    },{
                        name: 'Web SQL',
                        route: '/web-sql'
                    }
                ]
            }
        },
        methods: {},
        created() {}
    }
</script>
