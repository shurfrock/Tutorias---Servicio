<!DOCTYPE html>
<html lang="en" class="light">
    <!-- BEGIN: Head -->
    <head>
        <link rel="icon" href="../dist/images/pencil.png" >
        <title>Registrarse</title>
        <!-- BEGIN: CSS Assets-->
        <link rel="stylesheet" href="../dist/css/app.css" />
        <!-- END: CSS Assets-->

        <script type="text/javascript" src="../jquery-3.3.1.min.js"></script>
        <script type="text/javascript"></script>
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
    <!-- END: Head -->
    <body class="login">
        <div class="container">
            <div class="w-full min-h-screen p-5 md:p-20 flex items-center justify-center">
                <div class="w-96 intro-y">
                    <img class="mx-auto w-20" alt="Rocketman - Tailwind HTML Admin Template" src="../dist/images/logo.png">
                    <div class="text-white dark:text-slate-300 text-2xl font-medium text-center mt-14">Registrar una Nueva Cuenta</div>
                    <div class="px-5 py-8 mt-10 max-w-[450px] relative before:content-[''] before:z-[-1] before:w-[95%] before:h-full before:bg-slate-200 before:border before:border-slate-200 before:-mt-5 before:absolute before:rounded-lg before:mx-auto before:inset-x-0 before:dark:bg-darkmode-600/70 before:dark:border-darkmode-500/60">
                        <form action="{{ route('register') }}"  method="post">
                        @csrf
                        @if (session("success"))
                            <h6 class="alert alert-success">{{  session("success") }} </h6> <!-- Controller se cambia el mensaje-->

                        @endif
                        <!--todo lo que dice error es en caso de que se detecte que los parametros no se cumplan-->

                        @error("password")
                            <h6 class="alert alert-success">{{  $message }} </h6>
                        @enderror
                        @error("code")
                            <h6 class="alert alert-success">{{  $message }} </h6>
                        @enderror
                        @error("email")
                            <h6 class="alert alert-success">{{  $message }} </h6>
                        @enderror
                            <input type="text" name="name" id="name" class="form-control py-3 px-4 block" placeholder="Nombre Completo" required>
                            
                            
                            <label for="email"></label> 
                            <input type="text" name="email" id="email"   class="form-control py-3 px-4 block mt-4"  placeholder="Correo institucional" aria-label="Email"  required>
                            <input type="text" name="code" id="code"   class="form-control py-3 px-4 block mt-4"  placeholder="Código"   required>
                            <input type="password" name="password" id="password" class="form-control py-3 px-4 block mt-4" placeholder="Contraseña" required>
                            
                            
                            <div class="flex items-center text-slate-500 mt-4 text-xs sm:text-sm">
                                <input id="remember-me" type="checkbox" class="form-check-input border mr-2">
                                <label class="cursor-pointer select-none" for="remember-me">Acepto los terminos y condiciones </label required>
                            </div>
                            <div class="mt-5 xl:mt-8 text-center xl:text-left">
                    <input type="submit"  class="btn btn-primary w-full xl:mr-3" value="Registrarse">
                    <a href="login" class="btn btn-outline-secondary w-full mt-3">Iniciar Sesion</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <!-- BEGIN: JS Assets-->
        <script src="../dist/js/app.js"></script>
        <!-- END: JS Assets-->
         @yield('register') <!--#referenciador en caso de reutilizar la plantilla del registro-->
    </body>
</html>