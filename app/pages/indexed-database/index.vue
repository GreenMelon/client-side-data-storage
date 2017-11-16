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
                                route: '/indexed-database/create-database/001'
                            }
                        ]
                    },{
                        name: '使用对象存储',
                        instances: [
                            {
                                name: '001',
                                route: '/indexed-database/create-object-store/001'
                            }
                        ]
                    },{
                        name: '定义主键',
                        instances: [
                            {
                                name: '001',
                                route: '/indexed-database/define-primary-key/001'
                            }
                        ]
                    },{
                        name: '定义索引',
                        instances: [
                            {
                                name: '001',
                                route: '/indexed-database/define-index/001'
                            }
                        ]
                    },{
                        name: '操作数据',
                        instances: [
                            {
                                name: '创建数据',
                                route: '/indexed-database/operate-data/create-data'
                            },{
                                name: '读取数据',
                                route: '/indexed-database/operate-data/read-data'
                            },{
                                name: '更新数据',
                                route: '/indexed-database/operate-data/update-data'
                            },{
                                name: '删除数据',
                                route: '/indexed-database/operate-data/delete-data'
                            }
                        ]
                    },{
                        name: '使用游标获取所有数据',
                        instances: [
                            {
                                name: '001',
                                route: '/indexed-database/open-cursor/001'
                            },{
                                name: '计算数据量',
                                route: '/indexed-database/open-cursor/count'
                            }
                        ]
                    },{
                        name: '使用范围和索引',
                        instances: [
                            {
                                name: '001',
                                route: '/indexed-database/range/001'
                            }
                        ]
                    },

                    {
                        name: '存储数组',
                        instances: [
                            {
                                name: '001',
                                route: '/indexed-database/multi-entry/001'
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
