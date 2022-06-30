<template>
    <div class="w-full p-2">
        <div class="flex h-10">
            <div class="w-1/6 bg-gray-300 mt-2 h-10 justify-self-start rounded-sm">
                <!-- 文字列の上下中央寄せ h-8 leading-8 text-center-->
                <div class="flex justify-center p-1">
                    <p class="bg-white w-1/2 h-8 leading-8 text-center rounded-sm cursor-pointer">Table</p>
                    <p class="w-1/2 h-8 leading-8 text-center rounded-sm cursor-pointer hover:bg-gray-400 transition">Chart</p>
                </div>
            </div>
            <div class="w-4/6 h-8 justify-self-center"></div>
            <div class="w-1/6 h-8 justify-self-end">
                <v-select :items="items" class="p-0" label="Sort" solo></v-select>
            </div>
        </div>
        <div class="mx-auto flex py-4">
            <div class="w-1/4 h-28 mx-auto border-solid border-2 bg-zinc-800 text-white text-left rounded-md shadow-md">
                <div class="p-3">
                    <h1>TOTAL ORDERS</h1>
                </div>
                <div class="w-11/12 mx-auto border-zinc-400 border-b-2"></div>
                <div class="flex p-3 w-full">
                    <div class="w-1/2 pt-1 text-left">
                        <p class="font-semibold text-lg">40,251</p>
                    </div>
                    <div class="relative w-1/2">
                        <div class="absolute pb-4 text-right text-xs inset-x-0 bottom-0">30%</div>
                    </div>
                </div>
            </div>
            <div class="w-1/4 h-28 mx-auto border-solid border-2 bg-white text-zinc-800 text-left rounded-md shadow-md">
                <div class="p-3">
                    <h1>PRODUCT SOLD</h1>
                </div>
                <div class="w-11/12 mx-auto border-zinc-400 border-b-2"></div>
                <div class="flex p-3 w-full">
                    <div class="w-1/2 pt-1 text-left">
                        <p class="font-semibold text-lg">125,198</p>
                    </div>
                    <div class="relative w-1/2">
                        <div class="absolute pb-4 text-right text-xs inset-x-0 bottom-0">40%</div>
                    </div>
                </div>
            </div>
            <div class="w-1/4 h-28 mx-auto border-solid border-2 bg-white text-zinc-800 text-left rounded-md shadow-md">
                <div class="p-3">
                    <h1>REVENUE</h1>
                </div>
                <div class="w-11/12 mx-auto border-zinc-400 border-b-2"></div>
                <div class="flex p-3 w-full">
                    <div class="w-1/2 pt-1 text-left">
                        <p class="font-semibold text-lg">132,302,100</p>
                    </div>
                    <div class="relative w-1/2">
                        <div class="absolute pb-4 text-right text-xs inset-x-0 bottom-0">10%</div>
                    </div>
                </div>
            </div>
            <div class="w-1/4 h-28 mx-auto border-solid border-2 bg-white text-zinc-800 text-left rounded-md shadow-md">
                <div class="p-3">
                    <h1>TOTAL VISITOR</h1>
                </div>
                <div class="w-11/12 mx-auto border-zinc-400 border-b-2"></div>
                <div class="flex p-3 w-full">
                    <div class="w-1/2 pt-1 text-left">
                        <p class="font-semibold text-lg">62,878</p>
                    </div>
                    <div class="relative w-1/2">
                        <div class="absolute pb-4 text-right text-xs inset-x-0 bottom-0">12%</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex">
            <div class="w-7/12 p-2">
                <div class="flex w-full">
                    <div class="w-1/2">
                        <p class="font-semibold text-xl pt-3">Recent Order</p>
                    </div>
                    <div class="w-1/2 h-12 leading-8 pt-3 pr-2">
                        <p class="text-right text-zinc-500 hover:text-zinc-800 font-semibold cursor-pointer">View All ></p>
                    </div>
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
                <div class="flex w-full">
                    <div class="w-1/2">
                        <p class="font-semibold text-xl pt-3">Stock Report</p>
                    </div>
                    <div class="w-1/2 text-right">
                        <v-select :items="items" class="p-0" label="Sort" solo></v-select>
                    </div>
                </div>
                <div class="flex">
                    <div class="w-1/3">
                        <p class="h-8 leading-8">T-shirt</p>
                    </div>
                    <div class="w-2/3">
                        <v-progress-linear v-model="skill" color="black" height="25">
                            <template v-slot:default="{ value }">
                                <strong>{{ Math.ceil(value) }}%</strong>
                            </template>
                        </v-progress-linear>
                    </div>
                </div>
                <br />
                <div class="flex">
                    <div class="w-1/3">
                        <p class="h-8 leading-8">Denim Jacket</p>
                    </div>
                    <div class="w-2/3">
                        <v-progress-linear v-model="knowledge" color="black" height="25">
                            <strong>{{ Math.ceil(knowledge) }}%</strong>
                        </v-progress-linear>
                    </div>
                </div>
                <br />
                <div class="flex">
                    <div class="w-1/3">
                        <p class="h-8 leading-8">Skelton T-shirt</p>
                    </div>
                    <div class="w-2/3">
                        <v-progress-linear v-model="power" color="black" height="25">
                            <template v-slot:default="{ value }">
                                <strong>{{ Math.ceil(value) }}%</strong>
                            </template>
                        </v-progress-linear>
                    </div>
                </div>
                <br />
            </div>
        </div>
        <!-- bookコンポーネントの読み込み -->
        <book />
    </div>
</template>

<script>
export default {
    data: () => ({
        skill: 20,
        knowledge: 33,
        power: 78,
        tab: null,
        items: ["Latest", "Last", "Oldest"],
    }),
};
</script>
