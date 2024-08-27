<?php

namespace App\Http\Controllers;


use App\Models\Users;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // Mostrar la lista de usuarios
    public function index()
    {
        $users = Users::all();
        return view('users.index', compact('users'));
    }

    // Mostrar el formulario de creación de usuario
    public function create()
    {
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

        Users::create($request->all());
        return redirect()->route('users.index')->with('success', 'Usuario creado con éxito');
    }

    // Mostrar un usuario específico
    public function show(Users $user)
    {
        return view('users.show', compact('user'));
    }

    // Mostrar el formulario de edición de usuario
    public function edit(Users $user)
    {
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

        $user->update($request->all());
        return redirect()->route('users.index')->with('success', 'Usuario actualizado con éxito');
    }

    // Eliminar un usuario
    public function destroy(Users $user)
    {
        $user->delete();
        return redirect()->route('users.index')->with('success', 'Usuario eliminado con éxito');
    }
}

