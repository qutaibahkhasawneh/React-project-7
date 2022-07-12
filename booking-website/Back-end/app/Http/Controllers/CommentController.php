<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public  function CommentAPI()
    {
        $com = Comment::select('comments.*', 'users.userName')
        ->join('users', 'users.id', '=', 'comments.userId')->get();
        return $com;
    }


    // public function addComment(Request $request)
    // {

    //     $comment = new Comment();
    //     $comment->comment = $request->comment;
    //     $comment->userId = $request->userid;
    //     $comment->save();


    // }

    public function addComm(Request $request)
    {
        $comment = new Comment();

        $comment->comment= $request->comment;
        $comment->userId= $request->userid;
        $comment->save();

    }
}
