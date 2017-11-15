<template>
    <main>
        <h1>更新数据</h1>

        <h2>读取用户</h2>
        <p>
            <input v-model="primary_key" type="text">
            <button @click="getPerson" type="button">提交</button>
        </p>
        <p>
            名字：<input v-model="person.name" type="text">
        </p>
        <p>
            邮箱：<input v-model="person.email" type="email">
        </p>
        <p>
            <button @click="updatePerson" type="button">保存</button>
        </p>
    </main>
</template>

<script>
    export default {
        data() {
            return {
                primary_key: '',
                db: null,
                person: {
                    name: '',
                    email: '',
                    created: null
                }
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
                if (!this.db || !this.primary_key) return;

                //获取事务(默认为所有对象存储，事务类型为read)
                let transaction = this.db.transaction(['people'], 'readonly');
                //请求对象存储
                let store = transaction.objectStore('people');

                const key = this.primary_key;

                let request = store.get(key);

                request.onsuccess = e => {
                    console.log("%c read person success", "color: green");
                    console.dir(e.target.result);

                    this.person = e.target.result || this.person;
                }

                request.onerror = () => {
                    console.log("%c fail to read person", "color: red");
                }
            },
            updatePerson() {
                if (!this.db) return;

                console.log("%c about to update person", "color: green");

                //获取事务(默认为所有对象存储，事务类型为read)
                let transaction = this.db.transaction(['people'], 'readwrite');
                //请求对象存储
                let store = transaction.objectStore('people');

                const person = this.person;
                person.updated = new Date().getTime();

                let request = store.put(person);

                request.onsuccess = () => {
                    console.log("%c update person success", "color: green");
                }

                request.onerror = () => {
                    console.log("%c fail to update person", "color: red");
                }
            }
        },
        mounted() {
            this.init();
        }
    }
</script>
