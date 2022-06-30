import Vue from "vue";
import VueRouter from "vue-router";

// ページコンポーネントをインポートする
import Index from "./views/Index.vue";
import About from "./views/About.vue";
import Demo from "./views/Demo.vue";
import Statics from "./views/Statics.vue";
import Overview from "./views/Overview.vue";
import Books from "./views/Books.vue";

// ルータをインストール
Vue.use(VueRouter);

// パスとコンポーネントのマッピング
const routes = [
    { path: "/", component: Index },
    { path: "/about", component: About },
    { path: "/demo", component: Demo },
    { path: "/statics", component: Statics },
    { path: "/overview", component: Overview },
    { path: "/books", component: Books },
];

// VueRouterインスタンスを作成する
const router = new VueRouter({
    mode: "history",
    routes,
});

// VueRouterインスタンスをエクスポートする
// app.jsでインポートするため
export default router;
