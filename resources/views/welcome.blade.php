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
        <main-layout />
    </div>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>