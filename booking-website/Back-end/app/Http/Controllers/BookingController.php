<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;
class BookingController extends Controller
{
     public function store(Request $request,Booking $Booking)
    {

        $id=$request->id;
        
         $Booking->date=$request->date;
         $Booking->place=$request->place;
          $Booking->room=$request->room;
               $Booking->phone=$request->phone;
                    $Booking->time=$request->time;
       
                      $Booking->save();
             return response()->json([
            'status' => true,
            'message' => "Movie update successfully!",
        ], 200);
     }

    
}
