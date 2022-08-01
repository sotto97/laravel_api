<template>
    <div class="w-full p-2">
        <!-- タイトル -->
        <div class="p-2 flex">
            <div class="w-1/2">
                <p class="font-semibold text-xl">位置情報</p>
            </div>
        </div>
        <!-- 位置情報取得ボタン -->
        <div class="">
            <form @submit.prevent="getLocation">
                <button type="submit" class="py-2 px-4 w-1/6 cursor-pointer bg-zinc-800 text-white rounded-md hover:bg-zinc-500 transition">位置情報を取得する</button>
            </form>
        </div>
        <!-- 一覧描画 -->
        <table class="w-full text-center border-collapse border border-slate-500">
            <thead class="">
                <tr class="border border-slate-600 h-12 hover:bg-zinc-800 hover:text-white cursor-pointer transition">
                    <th>県</th>
                    <th>緯度</th>
                    <th>経度</th>
                </tr>
            </thead>
            <tbody class="">
                <tr>
                    <td></td>
                    <td>{{ lat }}</td>
                    <td>{{ lng }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data: () => ({
        lat: "", // 緯度
        lng: "", // 経度
        // alertSuccess: false,
        // alertFail: false,
    }),
    methods: {
        getLocation() {
            navigator.geolocation.getCurrentPosition(this.success, this.error);
        },
        success(position) {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
        },
        error(error) {
            switch (error.code) {
                case 1: //PERMISSION_DENIED
                    alert("位置情報の利用が許可されていません");
                    break;
                case 2: //POSITION_UNAVAILABLE
                    alert("現在位置が取得できませんでした");
                    break;
                case 3: //TIMEOUT
                    alert("タイムアウトになりました");
                    break;
                default:
                    alert("現在位置が取得できませんでした");
                    break;
            }
        },
    },
};
</script>
