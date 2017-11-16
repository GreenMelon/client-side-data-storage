<template>
    <main>
        <h1>获取所有数据</h1>

        <form>
            <h2>添加用户</h2>
            <p>
                名字：<input v-model="name" type="text">
            </p>
            <p>
                邮箱：<input v-model="email" type="email">
            </p>
            <p>
                <button @click="addPerson" type="button">提交</button>
            </p>
            <p>
                <button @click="showAll" type="button">获取所有数据</button>
            </p>
        </form>

        <ul>
            <li v-for="item in people">{{ item }}</li>
        </ul>

    </main>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                email: '',
                db: null,
                people: []
            }
        },
        methods: {
            init() {
                let db = this.db;

                const openRequest = indexedDB.open('idb5', 1);

                openRequest.onupgradeneeded = e => {
                    console.log("%c running onupgradeneeded", "color: blue");

                    db = e.target.result;

                    if (!db.objectStoreNames.contains('people')) {
                        let peopleOS = db.createObjectStore('people', {
                            keyPath: 'email'
                        });
                    }
                };

                openRequest.onsuccess = e => {
                    console.log("%c running success", "color: green");
                    this.db = e.target.result;
                }
            },
            addPerson() {
                if (!this.db) return;

                console.log("%c about to add new person", "color: green");

                //获取事务(默认为所有对象存储，事务类型为read)
                let transaction = this.db.transaction(['people'], 'readwrite');
                //请求对象存储
                let store = transaction.objectStore('people');

                //定义用户
                const person = {
                    name: this.name,
                    email: this.email,
                    created: new Date().getTime()
                }

                let request = store.add(person);

                request.onsuccess = () => {
                    console.log("%c add new person success", "color: green");
                }

                request.onerror = () => {
                    console.log("%c fail to add new person", "color: red");
                }
            },
            showAll() {
                let transaction = this.db.transaction(['people'], 'readonly');
                let store = transaction.objectStore('people');

                let cursor = store.openCursor();
                this.people = [];

                cursor.onsuccess = e => {
                    let res = e.target.result;
                    if (res) {
                        this.people.push(res.value);
                        res.continue();
                    }
                };

                transaction.oncomplete = () => {
                    console.log("%c oncomplete", "color: green");
                }
            }
        },
        mounted() {
            this.init();
        }
    }
</script>
