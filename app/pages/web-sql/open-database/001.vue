<template>
    <main>
        <h1>使用数据库</h1>
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

                console.dir(this.db);
            }
        },
        mounted() {
            this.init();
        }
    }
</script>
