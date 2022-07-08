<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $table="users";
    protected $fillable = ['userName','phone','email','password'];

    use HasFactory;
}
