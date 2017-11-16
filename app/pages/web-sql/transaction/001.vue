<template>
    <main>
        <form>
            <p>
                title: <input v-model="title" type="text">
            </p>
            <br>
            <p>
                body: <textarea v-model="body"></textarea>
            </p>
            <p>
                <button @click="addNote" type="button">添加</button>
                <button @click="renderNotes" type="button">读取</button>
            </p>
        </form>

        <ul>
            <li v-for="item in notes">{{ item }}</li>
        </ul>
    </main>
</template>

<script>
    const isWebSqlOk = () => {
        return 'openDatabase' in window;
    };

    export default {
        data() {
            return {
                db: null,
                title: '',
                body: '',
                notes: []
            }
        },
        methods: {
            init() {
                if (!isWebSqlOk()) return;

                this.db = window.openDatabase('db1', '1', 'database 1', 5*1024*1024);

                this.db.transaction(tx => {
                    tx.executeSql('create table if not exists notes(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT, updated DATE)');
                }, () => {
                    console.log('%c error', 'color: red');
                }, () => {
                    console.log('%c ready', 'color: green');
                });
            },
            addNote() {
                const title = this.title;
                const body = this.body;
                const time = new Date().getTime();
                const value = `${title},${body},${time}`;

                this.db.transaction(tx => {
                    tx.executeSql("insert into notes(title,body,updated) values(" + value + ")");
                }, () => {
                    console.log('%c add error', 'color: red');
                }, () => {
                    console.log('%c add success', 'color: green');
                    this.renderNotes();
                });
            },
            renderNotes() {
                this.notes = [];

                this.db.readTransaction(tx => {
                    tx.executeSql("select * from notes order by updated desc", [], (tx, res) => {
                        this.notes = res.rows;
                    });

                }, () => {
                    console.log('%c render error', 'color: red');
                });
            }
        },
        mounted() {
            this.init();
        }
    }
</script>
