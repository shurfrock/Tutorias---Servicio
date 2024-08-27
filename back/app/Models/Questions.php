<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Questions extends Model
{
    use HasFactory;
    public function form()
    {
        return $this->belongsTo(Form::class);
    }
    public function options()
    {
        return $this->hasMany(Questions_Options::class);
    }
}
