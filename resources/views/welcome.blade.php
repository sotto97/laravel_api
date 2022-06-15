<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Example</title>
    <link href="/css/app.css" rel="stylesheet">
</head>

<body>
    <div id="app">
        <div>
            Navigation
            <ul>
                <li>
                    <router-link to="/">
                        HOME
                    </router-link>
                </li>
                <li>
                    <router-link to="/about">
                        ABOUT
                    </router-link>
                </li>
            </ul>
        </div>
        <div>
            Contents
            <router-view />
        </div>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>