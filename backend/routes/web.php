<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/quizzes', function () {
    return response()->json([
        ['id' => 1, 'title' => 'Quiz de Matemática'],
        ['id' => 2, 'title' => 'Quiz de História'],
        ['id' => 3, 'title' => 'Quiz de Ciências'],
    ])->header('Access-Control-Allow-Origin', '*'); 
});