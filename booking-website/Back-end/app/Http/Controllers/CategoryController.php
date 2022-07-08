<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Service;


class CategoryController extends Controller
{
    public function index(){
        $categories = Category::all();

            return response()->json([
                'categories' => $categories
            ]);
        // return Category::all();
    }
    public  function show($id)
    {
        $service = Service::find($id);
        return response($service);

    }
}
