<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;
class RegisterController extends Controller
{
    public function store(Request $request){
        $request->validate([
            "password" => "required|min:8", #valida que la contraseña contenga minimo 8 caracteres
            'email' => 'required|email|unique:users,email', #email único
            'code' => "required|min:9|unique:users,code", #codigo único

        ]);
        $user = new Users; #objeto creado en base al migrations Users, manda la info a la BD
        $user->name =$request->name;
        $user->email =$request->email;
        $user->code =$request->code;
        $user->password =$request->password;
        $user->save();
        return redirect()->route('register')->with("success","User created");

    }
}
