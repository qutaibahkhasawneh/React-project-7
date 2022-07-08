<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BookingController extends Controller
{
<<<<<<< HEAD
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

=======
    
>>>>>>> 6ffe7aca99bbb3247d23488843a4490bd249e8a3
}
