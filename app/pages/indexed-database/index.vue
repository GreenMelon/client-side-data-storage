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
                    }
                ]
            }
        }
    }
</script>
