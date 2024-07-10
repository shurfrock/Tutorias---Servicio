<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
</head>
<body>
    <div class="container">
        @if (Auth::check())
            <h1>Bienvenido, {{ Auth::user()->name }}</h1>
            <p>Email: {{ Auth::user()->email }}</p>
            <p>Code: {{ Auth::user()->code }}</p>

            <form action="{{ route('logout') }}" method="POST">
                @csrf
                <button type="submit" class="btn btn-primary">Cerrar Sesión</button>
            </form>
        @else
            <script>
                window.location.href = "{{ route('login') }}";
            </script>
        @endif
    </div>
</body>
</html>