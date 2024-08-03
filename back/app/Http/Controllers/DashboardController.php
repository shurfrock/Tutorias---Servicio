<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    // Aplica middleware al constructor
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request)
    {
        // Verifica si el cliente solicita JSON
        if ($request->wantsJson()) {
            $user = Auth::user();  // Obtenemos el usuario autenticado
            return response()->json([
                'name' => $user->name,
                'email' => $user->email,
                'code' => $user->code
            ]);
        }

        // Si no es una solicitud JSON, se sigue mostrando la vista como antes
        return view('dashboard');
    }
}