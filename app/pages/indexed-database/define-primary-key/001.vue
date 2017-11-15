<template>
    <main>
        <h1>定义主键</h1>
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

                const openRequest = indexedDB.open('idb3', 1);

                openRequest.onupgradeneeded = e => {
                    db = e.target.result;

                    if (!db.objectStoreNames.contains('people')) {
                        db.createObjectStore('people', {
                            keyPath: 'email'
                        });
                    }

                    if (!db.objectStoreNames.contains('notes')) {
                        db.createObjectStore('notes', {
                            autoIncrement: true
                        });
                    }

                    if (!db.objectStoreNames.contains('logs')) {
                        db.createObjectStore('logs', {
                            keyPath: 'id',
                            autoIncrement: true
                        });
                    }
                };
            }
        },
        mounted() {
            this.init();
        }
    }
</script>
