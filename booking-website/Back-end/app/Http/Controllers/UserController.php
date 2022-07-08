<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
// use Illuminate\Routing\Controller;

class UserController extends Controller
{
//select users
// public function show($id)
//     {
//         return User::where('id',$id)->get();
//     }



    //select user data/id
   public function update($id){
  return User::find($id);
//    return $user = $user->toJson();

   } 
}
