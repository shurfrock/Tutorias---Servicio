<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\FormularioController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\QuestionsOptionController;
use App\Http\Controllers\DashboardController;
use Illuminate\Support\Facades\Route;

// Rutas de API para los diferentes recursos

// Login y Register
Route::post('login', [LoginController::class, 'store']); // Autenticación de usuario
Route::post('register', [RegisterController::class, 'store']); // Registro de usuario

// Formularios
Route::apiResource('formularios', FormularioController::class);

// Categorías
Route::apiResource('categories', CategoryController::class);

// Preguntas
Route::apiResource('questions', QuestionController::class);

// Opciones de preguntas
Route::apiResource('questions-options', QuestionsOptionController::class);

// Dashboard (si es necesario exponerlo como API)
Route::apiResource('dashboard-options', DashboardController::class);
