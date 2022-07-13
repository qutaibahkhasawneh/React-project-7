<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\Models\Feedback;
class FeedbackController extends Controller
{
        public function index()
    {
        $matchThese = ['active' => 'active'];
        $Feedback = Feedback::where($matchThese)->get();
        return $Feedback;
     $Feedback = Feedback::select('feedbacks.*', 'users.userName')
        ->join('users', 'users.id', '=', 'feedbacks.userId')->get();
        return $com;
    
    }
    public function store(Request $request,Feedback $feedback)
    {
    	$request->validate([
            'title'=>'required',
            'body'=>'required',
        ]);
        $feedback->userId= $request->userId;
         $feedback->title=$request->title;
        $feedback->body=$request->body;
        $feedback->active=$request->active;
          $feedback->save();
       
        
    
     
    }
    
}
