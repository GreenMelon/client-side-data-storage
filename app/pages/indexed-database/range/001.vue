<template>
    <main>
        <h1>获取所有数据</h1>

        <form>
            <h2>添加用户</h2>
            <p>
                花名：<input v-model="name" type="text">
            </p>
            <p>
                年龄：<input v-model="age" type="number">
            </p>
            <p>
                <button @click="addPerson" type="button">提交</button>
            </p>
            <p>
                <button @click="getAllPerson" type="button">获取所有数据</button>
            </p>
        </form>

        <ul>
            <li v-for="item in people">{{ item }}</li>
        </ul>

        <form>
            <h2>搜索用户</h2>
            <p>
                start：<input v-model="start" type="text">
            </p>
            <p>
                end：<input v-model="end" type="text">
            </p>
            <p>
                <label for="name">
                    <input v-model="index" id="name" name="index" type="radio" value="name">花名
                </label>
                <label for="age" name="index">
                    <input v-model="index" id="age" name="index" type="radio" value="age">年龄
                </label>
            </p>
            <p>
                <button @click="searchPerson" type="button">提交</button>
            </p>
        </form>

        <ul>
            <li v-for="item in list">{{ item }}</li>
        </ul>

    </main>
</template>

<script>
    export default {
        data() {
            return {
                db: null,

                name: '',
                age: '',
                people: [],

                start: '',
                end: '',
                index: 'name',
                list: []
            }
        },
        methods: {
            init() {
                let db = this.db;

                const openRequest = indexedDB.open('idb6', 1);

                openRequest.onupgradeneeded = e => {
                    console.log("%c running onupgradeneeded", "color: blue");

                    db = e.target.result;

                    if (!db.objectStoreNames.contains('people')) {
                        let peopleOS = db.createObjectStore('people', {
                            keyPath: 'id',
                            autoIncrement: true
                        });

                        peopleOS.createIndex('id', 'id', { unique: true });
                        peopleOS.createIndex('name', 'name', { unique: false });
                        peopleOS.createIndex('age', 'age', { unique: false });
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
                    age: this.age,
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
            getAllPerson() {
                let transaction = this.db.transaction(['people'], 'readonly');
                let store = transaction.objectStore('people');

                let cursor = store.openCursor();
                this.people = [];

                cursor.onsuccess = e => {
                    let cursor = e.target.result;
                    if (cursor) {
                        this.people.push(cursor.value);
                        cursor.continue();
                    }
                };

                transaction.oncomplete = () => {
                    console.log("%c oncomplete", "color: green");
                }
            },
            searchPerson() {
                const start = this.index === 'age' ? +this.start : this.start;
                const end = this.index === 'age' ? +this.end : this.end;

                if (!start && !end) return ;

                let range;

                if (start && end) {
                    range = IDBKeyRange.bound(start, end);
                }
                else if (start) {
                    range = IDBKeyRange.lowerBound(start);
                }
                else {
                    range = IDBKeyRange.upperBound(end);
                }

                let transaction = this.db.transaction(['people'], 'readonly');
                let store = transaction.objectStore('people');

                let index = store.index(this.index);
                this.list = [];

                index.openCursor(range).onsuccess = e => {
                    let res = e.target.result;
                    if (res) {
                        this.list.push(res.value);
                        res.continue();
                    }
                }

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
