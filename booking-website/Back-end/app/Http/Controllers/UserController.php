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
   public function edit($id){
  return User::find($id);
//    return $user = $user->toJson();

   } 

   public function update(Request $request,$id)
   {
       $user=User::find($id);
       $user->update([
       'userName'=>$request->input('userName'),
       'email'=>$request->input('email'),
       'phone'=>$request->input('phone'),
       'password'=>$request->input('password'),
   ]);
   $user->save();
   return $user;
}
}


