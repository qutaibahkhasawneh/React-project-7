<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = [
        'userName',
        'phone ',
        'email',
        'password',
    ];
    protected $table="users";

    use HasFactory;
}
