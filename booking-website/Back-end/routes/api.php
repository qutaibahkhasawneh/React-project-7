<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\servicesController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('/apiservices',[servicesController::class , 'index']);
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Route::resource('users', UserController::class);
Route::put('/users/{id}',[UserController::class,'update']);
Route::get('/users/{id}',[UserController::class,'edit']);

Route::get('/categories',[CategoryController::class, 'index']);
Route::get('/category/{id}',[CategoryController::class, 'show']);
Route::post('/contacts',[ContactController::class, 'store']);


