<template>
    <main>
        <h1>使用对象存储</h1>
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

                const openRequest = indexedDB.open('idb2', 1);

                openRequest.onupgradeneeded = e => {
                    console.log("%c running onupgradeneeded", "color: blue");

                    db = e.target.result;
                    if (!db.objectStoreNames.contains('os1')) {
                        db.createObjectStore('os1');
                        console.log("%c create object store", "color: blue");
                    }
                };

                openRequest.onsuccess = e => {
                    let db  = e.target.result;
                    console.log("%c running success", "color: green");
                    console.dir(db.objectStoreNames);
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
