<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Form extends Model
{
    use HasFactory;
    public function user()
    {
        return $this->belongsTo(Users::class);
    }
    public function category()
    {
        return $this->hasOne(Form_Category::class);
    }
    public function questions()
    {
        return $this->hasMany(Questions::class);
    }
}
