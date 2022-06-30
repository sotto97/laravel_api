<template>
    <div>
        <div class="flex">
            <div class="w-7/12 p-2">
                <p class="font-semibold text-xl pt-3">Books</p>
            </div>
        </div>
        <div>
            <button @click="getBooks">これを押してね</button>
            <button @click="loseBooks">消してね</button>
            {{ this.books }}
        </div>
        <table class="w-full text-center border-collapse border border-slate-500">
            <thead class="">
                <tr class="border border-slate-600 h-12 hover:bg-zinc-800 hover:text-white cursor-pointer transition">
                    <th>ID</th>
                    <th>TITLE</th>
                    <th>CREATE</th>
                    <th>UPDATE</th>
                </tr>
            </thead>

            <tbody class="">
                <tr class="border border-slate-600 h-12 hover:bg-zinc-800 hover:text-white cursor-pointer transition">
                    <td>Daniel Ropes</td>
                    <td>INV-MC300</td>
                    <td>March 12,2020</td>
                    <td>$25,000</td>
                </tr>
                <tr class="h-12 border border-slate-600 hover:bg-zinc-800 hover:text-white cursor-pointer transition">
                    <td>Daniel Ropes</td>
                    <td>INV-MC300</td>
                    <td>March 12,2020</td>
                    <td>$25,000</td>
                </tr>
                <tr class="h-12 border border-slate-600 hover:bg-zinc-800 hover:text-white cursor-pointer transition">
                    <td>Daniel Ropes</td>
                    <td>INV-MC300</td>
                    <td>March 12,2020</td>
                    <td>$25,000</td>
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
    }),
    methods: {
        getBooks: function () {
            axios
                .get("/api/books")
                .then((res) => {
                    this.books = res.data;
                })
                .catch((error) => {
                    console.log("取得できませんでした。");
                    // this.message = error;
                });
        },
        loseBooks: function () {
            this.books = "";
        },
    },
};
</script>
