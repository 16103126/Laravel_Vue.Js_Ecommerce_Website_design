<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">

        <title>Shoppye -eCommerce Site</title>
        <link href="{{asset('css/app.css')}}">

       
    </head>
    <body>
        <div id=app>
            <mainapp class="mb-3"></mainapp>
            <router-view></router-view>
   
        </div>


    <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
