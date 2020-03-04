<!DOCTYPE html>
<html>
  
    <?php
        $css = asset('css');
        $js = asset('js');
        // $images = asset('images');
        
        // $uri = $_SERVER['REQUEST_URI'];
        // $formWebsites = (strpos($uri,'videos')) ? 0 : 1;
    ?>

  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
        
    <!-- DataTables -->
    <link rel="stylesheet" href="{{ $css }}/dataTable.css">
    
    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossorigin="anonymous">
    
    <!-- Multiselect -->
    
    
    <!-- Custom CSS -->
    {{-- <link rel="stylesheet" href="{{ $css }}/dashboard.css"> --}}
    <link rel="stylesheet" href="{{ $css }}/custom.css">
    <link rel="stylesheet" href="{{ $css }}/themes/blue.css">

    <title>{{ env('APP_NAME')}}</title>
    @yield('head')
  </head>

  <body>
        
    @include('layout.header')

    <div id="wrapper" class="toggled">
        
        @include('layout.menu')

        <div id="page-content-wrapper">

            <br><br><br>
            
            <div class="container-fluid">
              
              @include('program.flash-message')
              
			        @yield('content')
                
            </div>

        </div>

    </div>

    @include('js.scripts')

    @yield('scripts')
  </body>
</html>