<template>
    <main>
        <h1>删除数据</h1>

        <p>
            <input v-model="email" type="email">
            <button @click="deletePerson" type="button">删除</button>
        </p>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                db: null
            }
        },
        methods: {
            init() {
                const openRequest = indexedDB.open('idb5', 1);

                openRequest.onsuccess = e => {
                    console.log("%c running success", "color: green");
                    this.db = e.target.result;
                }
            },
            deletePerson() {
                if (!this.db || !this.email) return;

                //获取事务(默认为所有对象存储，事务类型为read)
                let transaction = this.db.transaction(['people'], 'readwrite');
                //请求对象存储
                let store = transaction.objectStore('people');

                const key = this.email;

                let request = store.delete(key);

                request.onsuccess = e => {
                    console.log("%c delete person success", "color: green");
                    console.dir(e.target.result);
                }

                request.onerror = () => {
                    console.log("%c fail to delete person", "color: red");
                }
            }
        },
        mounted() {
            this.init();
        }
    }
</script>
