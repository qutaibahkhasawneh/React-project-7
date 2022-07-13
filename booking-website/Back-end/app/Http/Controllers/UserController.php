<?php

namespace App\Http\Controllers;
use App\Models\User;
use Validator;
use Illuminate\Http\Request;
// use Illuminate\Routing\Controller;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();
        return response()->json($users);
    }
    public function show($id){
        $users =User::find($id);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request ,User $User)
    {
        $request->validate([
        'userName',
        'phone',
        'email',
        'password',

        ]);
        // return User::create($request->all());
        $User->userName=$request->userName;
         $User->phone=$request->phone;
         $User->email=$request->email;
         $User->password=$request->password;
       
        $User->save(); 
    }


    public function log( Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['validation_errors'=>$validator->errors(),'status'=> 401]);
        }

        $user = User::where('email', $request->email)->first();
        if ($user) {
            if ($request->password == $user->password) {
                $logged_user = [ "id" => $user->id ,'userName' =>$user->userName , 'email' => $user->email ,'phone'=> $user->phone ];
                return response()->json([
                    'logged_user'=>$logged_user,
                     'status'=> 200,
                     'message'=> 'Logged In successfully'
                    ]);
            } else {
                return response()->json(['error'=>'Check email and password']);
            }
        } else {
            return response()->json(['error'=>'email dose not exist']);
        }


    }


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


