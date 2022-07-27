<template>
    <v-app>
        <!-- ハンバーガーメニュー -->
        <v-navigation-drawer app v-model="drawer" clipped>
            <v-container>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title grey--text text-darken-2"> メニュー </v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>
                <v-list dense nav>
                    <v-list-group v-for="nav_list in nav_lists" :key="nav_list.name" :prepend-icon="nav_list.icon" no-action :append-icon="nav_list.lists ? undefined : ''">
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>{{ nav_list.name }}</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="list in nav_list.lists" :key="list.name" :to="list.link">
                            <v-list-item-content>
                                <v-list-item-title>{{ list }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                </v-list>
            </v-container>
        </v-navigation-drawer>
        <!-- タイトルとheaderバーの色の設定 -->
        <v-app-bar color="grey darken-4" dark app clipped-left>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Dashboard</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
                <!-- コメント機能 -->
                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" text>
                            <v-badge overlap color="green" content="6"> <v-icon medium color=""> mdi-message-text </v-icon> </v-badge>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-subheader class="font-semibold">通知一覧</v-subheader>
                        <v-list-item v-for="notice in notification" :key="notice.context">
                            <v-list-item-component>
                                <v-list-item-title>{{ notice.context }}</v-list-item-title>
                            </v-list-item-component>
                        </v-list-item>
                    </v-list>
                </v-menu>
                <!-- 設定タブ -->
                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn v-on="on" text><v-icon>mdi-dots-vertical</v-icon></v-btn>
                    </template>
                    <v-list>
                        <v-list-item v-for="support in supports" :key="support.name" :to="support.link">
                            <v-list-item-icon>
                                <v-icon>{{ support.icon }}</v-icon>
                            </v-list-item-icon>
                            <v-list-item-component>
                                <v-list-item-title>{{ support.name }}</v-list-item-title>
                            </v-list-item-component>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
            <!-- headerの下のタブ -->
            <template v-slot:extension>
                <v-tabs v-model="tab" align-with-title>
                    <v-tabs-slider color="white"></v-tabs-slider>
                    <v-tab v-for="item in items" :key="item.name" :to="item.link">
                        {{ item.name }}
                    </v-tab>
                </v-tabs>
                <!-- DarkThemeを設定するtoggle -->
                <v-switch v-model="$vuetify.theme.dark" inset label="Dark" persistent-hint></v-switch>
            </template>
        </v-app-bar>
        <v-main>
            <router-view />
        </v-main>
        <!-- footerの部分 -->
        <v-footer color="grey darken-4" dark app>Shimo's</v-footer>
    </v-app>
</template>

<script>
export default {
    data() {
        return {
            darkMode: false,
            drawer: null,
            supports: [
                { name: "よくある問い合わせ", icon: "mdi-vuetify", link: "/support" },
                { name: "Discordコミュニティーに参加", icon: "mdi-discord", link: "/discord-community" },
                { name: "バグの報告", icon: "mdi-bug", link: "/report-a-bug" },
                { name: "Github issueに登録", icon: "mdi-github", link: "/github-issue-board" },
            ],
            notification: [
                { id: 1, context: "たけしさんからメッセージがあります。" },
                { id: 2, context: "たけしさんからメッセージがあります。" },
                { id: 3, context: "たけしさんからメッセージがあります。" },
                { id: 4, context: "たけしさんからメッセージがあります。" },
            ],
            nav_lists: [
                {
                    name: "ダッシュボード",
                    icon: "mdi-vuetify",
                    lists: ["Quick Start", "Pre^made layouts"],
                },
                { name: "分析グラフ", icon: "mdi-cogs" },
                { name: "各マスタ", icon: "mdi-palette", lists: ["部位マスタ", "種目マスタ"] },
                { name: "設定", icon: "mdi-view-dashboard", lists: ["API explorer", "Alerts"] },
                { name: "Directives", icon: "mdi-function" },
                { name: "Preminum themes", icon: "mdi-vuetify" },
            ],
            items: [
                { name: "Summary", link: "/" },
                { name: "Statics", link: "/statics" },
                { name: "Overview", link: "/overview" },
                { name: "Book", link: "/books" },
            ],
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        };
    },
    methods: {
        toggleDarkMode: function () {
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            this.darkMode = !this.darkMode;
        },
    },
    computed: {
        switchLabel: function () {
            return this.darkMode ? "light" : "dark";
        },
    },
};
</script>
