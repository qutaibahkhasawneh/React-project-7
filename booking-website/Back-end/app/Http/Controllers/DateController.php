<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DateController extends Controller
{
  public function index(Request $request)
    {

        $Booking = Date::all();
    
        

        return response()->json([
            'd'=>$Booking,
            'status' => true,
            'message' => " add successfully!",
        ], 200);
        
    }

     public function selectDate(Request $request,Date $Date)
    {
      
         $id=$request->id;
         $Date = Date::find($id); 
         $Date->name=$request->name;
         $Date->active=$request->active;
 
       
                 $Date->save();
return response()->json([
            'status' => true,
            'message' => "Movie update successfully!",
        ], 200);
     }
}
