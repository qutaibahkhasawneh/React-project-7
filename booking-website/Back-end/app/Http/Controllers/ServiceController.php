<?php

namespace App\Http\Controllers;
use App\Models\Service;

use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public  function ServiceAPI()
    {
        $service = Service::all();
        return $service;

    } public  function Show($id)
    {
        $service = Service::find($id);
        return $service;


    }

}
