<template>
    <main>
        <h1>使用数据库</h1>
    </main>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {
            init() {
                let db;

                // 第一个参数是数据库名，第二个参数是版本号，一般从1开始
                const openRequest = indexedDB.open('idb1', 1);

                openRequest.onupgradeneeded = e => {
                    console.log("%c running onupgradeneeded", "color: blue");
                };

                openRequest.onsuccess = e => {
                    db  = e.target.result;
                    console.log("%c running success", "color: green");
                };

                openRequest.onerror = e => {
                    console.log('error');
                    console.dir(e);
                };
            }
        },
        mounted() {
            this.init();
        }
    }
</script>
