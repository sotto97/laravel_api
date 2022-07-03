<template>
    <div class="w-full p-2">
        <!-- タイトル -->
        <div class="p-2">
            <p class="font-semibold text-xl">Books</p>
        </div>
        <!-- 新規作成フォーム -->
        <div class="">
            <form @submit.prevent="addBook">
                <input type="text" v-model="title" name="title" id="" class="w-1/3 py-1 px-4 border-2 border-solid" />
                <input type="text" v-model="author" name="author" id="" class="w-1/3 py-1 px-4 border-2 border-solid" />
                <button type="submit" class="py-2 px-6 w-1/4 cursor-pointer bg-zinc-800 text-white rounded-md hover:bg-zinc-500 transition">新規登録</button>
            </form>
        </div>
        <!-- 一覧描画 -->
        <table class="w-full text-center border-collapse border border-slate-500">
            <thead class="">
                <tr class="border border-slate-600 h-12 hover:bg-zinc-800 hover:text-white cursor-pointer transition">
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>AUTHOR</th>
                    <th>CREATE</th>
                    <th>UPDATE</th>
                    <th>DEL</th>
                </tr>
            </thead>
            <tbody class="">
                <tr v-for="(book, index) in books.data" :key="index" class="border border-slate-600 h-12 hover:bg-zinc-800 hover:text-white cursor-pointer transition">
                    <td>{{ book.id }}</td>
                    <td>{{ book.title }}</td>
                    <td>{{ book.author }}</td>
                    <td>{{ book.created_at }}</td>
                    <td>{{ book.updated_at }}</td>
                    <td>
                        <v-btn @click="deleteBook(book.id)" text><v-icon class="hover:text-white bg-zinc-800 text-white">mdi-close-box</v-icon></v-btn>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { sharing } from "webpack";

export default {
    data: () => ({
        books: [],
        message: "",
        title: "",
        author: "",
    }),
    methods: {
        getBooks: function () {
            axios
                .get("/api/books")
                .then((res) => {
                    this.books = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        loseBooks: function () {
            this.books = "";
        },
        addBook: function () {
            axios
                .post("/api/books", {
                    title: this.title,
                    author: this.author,
                })
                .then((res) => {
                    console.log(res);
                    this.title = "";
                    this.author = "";
                    this.getBooks();
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        deleteBook: function (id) {
            axios
                .delete("/api/books/" + id)
                .then((res) => {
                    console.log(res);
                    this.getBooks();
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
    mounted() {
        this.getBooks();
    },
};
</script>
