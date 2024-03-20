<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;




Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);


Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', [AuthController::class, 'user']);
    Route::post('/logout', [AuthController::class, 'logout']);
});



Route::get('/users', [UserController::class, 'index']);
Route::post('/add-users', [UserController::class, 'store']);
Route::put('/update-user/{id}', [UserController::class, 'update']);
Route::get('/edit-user/{id}', [UserController::class, 'show']);
Route::delete('/delete-user/{id}', [UserController::class, 'delete']);
Route::put('/api/update-password/{id}', [UserController::class, 'updatePassword']);