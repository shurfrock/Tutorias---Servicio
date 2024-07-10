<?php
#aqui se crean las rutas para ejecutar tanto visttas como controladores

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RegisterController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/register', function () {
    return view('register');
})->name('register');

Route::post('/register' , [ RegisterController::class , "store"])->name('register');