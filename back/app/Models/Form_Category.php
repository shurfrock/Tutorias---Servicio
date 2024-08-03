<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form_Category extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsToMany(Form::class);
    }
}
