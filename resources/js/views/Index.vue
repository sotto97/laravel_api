<template>
    <div class="w-full p-2">
        <div class="flex h-10">
            <div class="w-1/6 bg-gray-300 h-10 justify-self-start rounded-sm">
                <!-- 文字列の上下中央寄せ h-8 leading-8 text-center-->
                <div class="flex justify-center p-1">
                    <p class="bg-white w-1/2 h-8 leading-8 text-center rounded-sm cursor-pointer">Table</p>
                    <p class="w-1/2 h-8 leading-8 text-center rounded-sm cursor-pointer hover:bg-gray-400">Chart</p>
                </div>
            </div>
            <div class="w-4/6 h-8 justify-self-center"></div>
            <div class="w-1/6 h-8 justify-self-end">
                <select name="sort" id="" class="form-control">
                    <option value="latest">Latest</option>
                    <option value="latest">Last Month</option>
                    <option value="latest">Oldest</option>
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
        <div class="flex">
            <div class="w-7/12 p-2">
                <div class="flex">
                    <h1 class="w-1/3 font-semibold text-xl">Recent Order</h1>
                    <p class="w-1/3"></p>
                    <p class="w-1/3 text-right font-semibold cursor-pointer">View All ></p>
                </div>
                <table class="w-full text-center border-collapse border border-slate-500">
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
            <div class="w-5/12 p-2">
                <h1 class="font-semibold text-xl">Stock Report</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {},
};
</script>
