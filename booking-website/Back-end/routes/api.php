<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

use App\Http\Controllers\servicesController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\DateController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\FeedbackController;
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
Route::post('users/log',[ UserController::class, 'log']);

Route::post('/users',[UserController::class,'store']);
Route::get('/user',[UserController::class,'index']);
Route::get('/user/{id}',[UserController::class,'show']);


// Route::resource('users', UserController::class);
Route::put('/users/{id}',[UserController::class,'update']);
Route::get('/users/{id}',[UserController::class,'edit']);

Route::get('/categories',[CategoryController::class, 'index']);
Route::get('/category/{id}',[CategoryController::class, 'show']);
Route::post('/contacts',[ContactController::class, 'store']);
Route::post('/Booking',[BookingController::class, 'store']);
Route::get('/date',[DateController::class, 'index']);
Route::post('/selectDate/{id}',[DateController::class, 'selectDate']);

// routes for comment

Route::get('apicomment',[CommentController::class , 'CommentAPI']);
// Route::post('addComment',[CommentController::class , 'addComment']);
Route::post('addcomm',[CommentController::class , 'addComm']);
//routes for feedback
Route::post('/feedback',[FeedbackController::class, 'store']);
Route::get('/feedbacks',[FeedbackController::class, 'index']);
