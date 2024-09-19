<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\FormularioController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\QuestionController;
use App\Http\Controllers\QuestionsOptionController;
use App\Http\Controllers\DashboardController;

Route::apiResource('login', LoginController::class);
Route::apiResource('register', RegisterController::class);
Route::apiResource('formularios', FormularioController::class);
Route::apiResource('categories', CategoryController::class);
Route::apiResource('questions', QuestionController::class);
Route::apiResource('questions-options', QuestionsOptionController::class);
Route::apiResource('dashboard-options', DashboardController::class);