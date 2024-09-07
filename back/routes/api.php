<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormularioController;

Route::get('/formularios', [FormularioController::class, 'index']);
Route::post('/formularios', [FormularioController::class, 'store']);
Route::get('/formularios/{id}', [FormularioController::class, 'show']);
Route::put('/formularios/{id}', [FormularioController::class, 'update']);
Route::delete('/formularios/{id}', [FormularioController::class, 'destroy']);

