<template>
    <div class="w-full p-2">
        <div class="flex h-10">
            <div class="w-1/6 bg-gray-300 h-10 justify-self-start rounded-sm">
                <!-- 文字列の上下中央寄せ h-8 leading-8 text-center-->
                <div class="flex justify-center p-1">
                    <p class="bg-white w-1/2 h-8 leading-8 text-center rounded-sm">Table</p>
                    <p class="pg-gray-400 w-1/2 h-8 leading-8 text-center rounded-sm">Chart</p>
                </div>
            </div>
            <div class="w-4/6 h-8 justify-self-center"></div>
            <div class="w-1/6 h-8 justify-self-end">
                <select name="sort" id="" class="form-control">
                    <option value="latest">latest</option>
                    <option value="latest">oldest</option>
                </select>
            </div>
        </div>
        <div class="mx-auto flex py-4">
            <div class="w-1/4 h-28 mx-auto border-solid border-2 bg-zinc-800 text-white text-left rounded-md shadow-md">
                <div class="p-3 border-white border-b-2">
                    <h1>TOTAL ORDERS</h1>
                </div>
            </div>
            <div class="w-1/4 h-28 mx-auto border-solid border-2 bg-white text-zinc-800 text-left rounded-md shadow-md">
                <h1>PRODUCT SOLD</h1>
            </div>
            <div class="w-1/4 h-28 mx-auto border-solid border-2 bg-white text-zinc-800 text-left rounded-md shadow-md">
                <h1>REVENUE</h1>
            </div>
            <div class="w-1/4 h-28 mx-auto border-solid border-2 bg-white text-zinc-800 text-left rounded-md shadow-md">
                <h1>TOTAL VISITOR</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {},
};
</script>
