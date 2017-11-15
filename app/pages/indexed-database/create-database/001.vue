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
                // 第一个参数是数据库名，第二个参数是版本号，一般从1开始
                const openRequest = indexedDB.open('idb1', 1);

                openRequest.onupgradeneeded = e => {
                    console.log('running onupgradeneeded');
                };

                openRequest.onsuccess = e => {
                    console.log('running success');
                    let db  = e.target.result;
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
