<?php

use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\UserController;

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});

Route::middleware('guest')->group(function () {
    Route::get('login', [LoginController::class, 'showLoginForm'])->name('login');
    Route::post('login', [LoginController::class, 'login']);
    Route::get('register', function () {
        return view('register');
    })->name('register');
    Route::post('register', [RegisterController::class, 'store'])->name('register');
});

Route::post('logout', [LoginController::class, 'logout'])->name('logout')->middleware('auth');

Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard')->middleware('auth');

