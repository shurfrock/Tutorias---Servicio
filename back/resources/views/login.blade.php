<!DOCTYPE html>
<html lang="en" class="light">
    <head>
        <link rel="icon" href="../dist/images/pencil.png">
        <title>Iniciar Sesión</title>
        <link rel="stylesheet" href="../dist/css/app.css" />
        <script type="text/javascript" src="../jquery-3.3.1.min.js"></script>
    </head>
    <style>
        body {
            background: linear-gradient(135deg, #5681bd, #001a5f); 
            position: relative; 
        }
        .btn-primary {
            background-color: #4a90e2; 
            color: white; 
            border: none; 
            border-radius: 5px; 
            padding: 10px 20px; 
            cursor: pointer; 
            transition: background-color 0.3s; 
        }
        .btn-primary:hover {
            background-color: #357ab8; 
        }
        .btn-outline-secondary {
            background-color: transparent; 
            color: #4a90e2; 
            border: 2px solid #4a90e2; 
            border-radius: 5px; 
            padding: 8px 18px;
            cursor: pointer; 
            transition: background-color 0.3s, color 0.3s;
        }
        .btn-outline-secondary:hover {
            background-color: #4a90e2;
            color: #ffffff;
        }
        .login-title-container {
            background-color: rgba(255, 255, 255, 0.5); 
            border-radius: 10px; 
            padding: 5px 10px; 
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); 
            margin: 20px 0; 
            display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 50px; 
        }
        .box {
            background: rgba(255, 255, 255, 0.8); 
            backdrop-filter: blur(10px); 
            border-radius: 15px; 
        }
    </style>
    <body class="login">
        <div class="container">
            <div class="w-full min-h-screen p-5 md:p-20 flex items-center justify-center">
                <div class="w-96 intro-y">
                    <img class="mx-auto w-20" alt="Logo" src="../dist/images/logo.png">
                    <div class="text-white dark:text-slate-300 text-2xl font-medium text-center mt-14">Iniciar Sesión</div>
                    <div class="px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
                        <form action="{{ route('login') }}" method="post">
                            @csrf
                            @if (session("success"))
                                <h6 class="alert alert-success">{{ session("success") }}</h6>
                            @endif
                            @error("email")
                                <h6 class="alert alert-danger">{{ $message }}</h6>
                            @enderror
                            @error("password")
                                <h6 class="alert alert-danger">{{ $message }}</h6>
                            @enderror
                            <label for="email">Correo Electrónico</label>
                            <input type="email" name="email" id="email" class="form-control py-3 px-4 block mt-4" placeholder="Correo institucional" required>
                            <label for="password" class="mt-4">Contraseña</label>
                            <input type="password" name="password" id="password" class="form-control py-3 px-4 block mt-4" placeholder="Contraseña" required>
                            <div class="flex items-center text-slate-500 mt-4 text-xs sm:text-sm">
                                <input id="remember-me" type="checkbox" class="form-check-input border mr-2">
                                <label class="cursor-pointer select-none" for="remember-me">Recuérdame</label>
                            </div>
                            <div class="mt-5 xl:mt-8 text-center xl:text-left">
                                <input type="submit" class="btn btn-primary w-full xl:mr-3" value="Iniciar Sesión">
                                <a href="register" class="btn btn-outline-secondary w-full mt-3">Registrarse</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        
        <script src="../dist/js/app.js"></script>
    </body>
</html>