<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class DashboardController extends Controller
{
    // Aplicar middleware al constructor
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('dashboard');  // Redirige a la vista del dashboard si el usuario está autenticado
    }
}