import Vue from "vue";
import VueRouter from "vue-router";

// ページコンポーネントをインポートする
import Index from "./views/Index.vue";
import About from "./views/About.vue";

// ルータをインストール
Vue.use(VueRouter);

// パスとコンポーネントのマッピング
const routes = [
    { path: "/", component: Index },
    { path: "/about", component: About },
];

// VueRouterインスタンスを作成する
const router = new VueRouter({
    mode: "history",
    routes,
});

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router;
