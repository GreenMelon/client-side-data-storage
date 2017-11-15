<template>
    <main>
        <h1>定义索引</h1>
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

                const openRequest = indexedDB.open('idb4', 1);

                openRequest.onupgradeneeded = e => {
                    db = e.target.result;

                    if (!db.objectStoreNames.contains('people')) {
                        let peopleOS = db.createObjectStore('people', {
                            keyPath: 'email'
                        });

                        peopleOS.createIndex('gender', 'gender', { unique: false });
                        peopleOS.createIndex('id_number', 'id_number', { unique: true });
                    }

                    if (!db.objectStoreNames.contains('notes')) {
                        let notesOS = db.createObjectStore('notes', {
                            autoIncrement: true
                        });

                        notesOS.createIndex('title', 'title', { unique: false });
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
