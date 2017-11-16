<template>
    <main>
        <h1>创建表</h1>
    </main>
</template>

<script>
    const isWebSqlOk = () => {
        return 'openDatabase' in window;
    };

    export default {
        data() {
            return {
                db: null
            }
        },
        methods: {
            init() {
                if (!isWebSqlOk()) return;

                this.db = window.openDatabase('db1', '1', 'database 1', 5*1024*1024);

                //读写业务
                this.db.transaction(tx => {
                    tx.executeSql('create table if not exists notes(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT, updated DATE)');
                }, () => {
                    console.log('%c error', 'color: red');
                }, () => {
                    console.log('%c ready', 'color: green');
                });
            }
        },
        mounted() {
            this.init();
        }
    }
</script>
