<?php

namespace App\Http\Controllers;

use App\Models\Users;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // Mostrar la lista de usuarios
    public function index(Request $request)
    {
        $users = Users::all();

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'data' => $users
            ], 200);
        }

        // Si no es JSON, retorna la vista
        return view('users.index', compact('users'));
    }

    // Mostrar el formulario de creación de usuario
    public function create()
    {
        // No se necesita respuesta JSON ya que es para mostrar el formulario
        return view('users.create');
    }

    // Guardar un nuevo usuario
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required',
            'code' => 'required|unique:users'
        ]);

        // Crear nuevo usuario
        $user = Users::create($request->all());

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Usuario creado con éxito',
                'data' => $user
            ], 201); // Código HTTP 201 para creación
        }

        // Si no es JSON, redirige como antes
        return redirect()->route('users.index')->with('success', 'Usuario creado con éxito');
    }

    // Mostrar un usuario específico
    public function show(Request $request, Users $user)
    {
        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'data' => $user
            ], 200);
        }

        // Si no es JSON, retorna la vista
        return view('users.show', compact('user'));
    }

    // Mostrar el formulario de edición de usuario
    public function edit(Users $user)
    {
        // No se necesita respuesta JSON ya que es para mostrar el formulario
        return view('users.edit', compact('user'));
    }

    // Actualizar un usuario
    public function update(Request $request, Users $user)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . $user->id,
            'code' => 'required|unique:users,code,' . $user->id
        ]);

        // Actualizar el usuario
        $user->update($request->all());

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Usuario actualizado con éxito',
                'data' => $user
            ], 200);
        }

        // Si no es JSON, redirige como antes
        return redirect()->route('users.index')->with('success', 'Usuario actualizado con éxito');
    }

    // Eliminar un usuario
    public function destroy(Request $request, Users $user)
    {
        $user->delete();

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Usuario eliminado con éxito'
            ], 200);
        }

        // Si no es JSON, redirige como antes
        return redirect()->route('users.index')->with('success', 'Usuario eliminado con éxito');
    }
}

