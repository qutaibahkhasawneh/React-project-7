<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Booking;
class BookingController extends Controller
{
     public function store(Request $request,Booking $Booking)
    {

        $id=$request->id;
        $Booking->userId= $request->userId;
        $Booking->serviceId= $request->serviceId;
         $Booking->date=$request->date;
         $Booking->city=$request->city;
         

          $Booking->time=$request->time;
          $Booking->street=$request->street;
          $Booking->save();
             return response()->json([
            'status' => true,
            'message' => "Booking update successfully!",
        ], 200);
     }

    
}
