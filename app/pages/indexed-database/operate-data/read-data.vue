<template>
    <main>
        <h1>读取数据</h1>

        <h2>读取用户</h2>
        <p>
            <input v-model="email" type="email">
            <button @click="getPerson" type="button">提交</button>
        </p>

        <h2>读取笔记</h2>
        <p>
            <input v-model="text" type="text">
            <button @click="getNote" type="button">提交</button>
        </p>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                text: '',
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
            getPerson() {
                if (!this.db || !this.email) return;

                //获取事务(默认为所有对象存储，事务类型为read)
                let transaction = this.db.transaction(['people'], 'readonly');
                //请求对象存储
                let store = transaction.objectStore('people');

                const key = this.email;

                let request = store.get(key);

                request.onsuccess = e => {
                    console.log("%c read person success", "color: green");
                    console.dir(e.target.result);
                }

                request.onerror = () => {
                    console.log("%c fail to read person", "color: red");
                }
            },
            getNote() {
                if (!this.db || !this.text) return;

                //获取事务(默认为所有对象存储，事务类型为read)
                let transaction = this.db.transaction(['notes'], 'readonly');
                //请求对象存储
                let store = transaction.objectStore('notes');

                const key = +this.text;

                let request = store.get(key);

                request.onsuccess = () => {
                    console.log("%c read note success", "color: green");
                }

                request.onerror = () => {
                    console.log("%c fail to read note", "color: red");
                }
            },
        },
        mounted() {
            this.init();
        }
    }
</script>
