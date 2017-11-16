<template>
    <main>
        <ul class="list-category mod-categories">
            <li v-for="category in categories" class="item-main">
                <h2 v-text="category.name"></h2>
                <ul class="list-instance">
                    <li v-for="instance in category.instances" class="item-sub">
                        <router-link :to="instance.route">{{ instance.name }}
                        </router-link>
                    </li>
                </ul>
            </li>
        </ul>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                categories: [
                    {
                        name: '使用数据库',
                        instances: [
                            {
                                name: '001',
                                route: '/web-sql/open-database/001'
                            }
                        ]
                    },{
                        name: '创建表',
                        instances: [
                            {
                                name: '001',
                                route: '/web-sql/create-table/001'
                            }
                        ]
                    },{
                        name: '读写业务',
                        instances: [
                            {
                                name: '001',
                                route: '/web-sql/transaction/001'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
