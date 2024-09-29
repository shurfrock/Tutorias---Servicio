<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;

class RegisterController extends Controller
{
    public function store(Request $request)
    {
        // Validación de la solicitud
        $request->validate([
            'password' => 'required|min:8', // valida que la contraseña tenga mínimo 8 caracteres
            'email' => 'required|email|unique:users,email', // email único
            'code' => 'required|min:9|unique:users,code', // código único
        ]);

        // Crear nuevo usuario
        $user = new Users;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->code = $request->code;
        // Asegúrate de encriptar la contraseña antes de guardarla
        $user->password = bcrypt($request->password);
        $user->save();

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'User created successfully',
                'user' => $user
            ], 201); // Código HTTP 201 para creación exitosa
        }

        // Si no es JSON, redirigir como antes
        return redirect()->route('register')->with('success', 'User created');
    }
}
