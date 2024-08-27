<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Questions_Options extends Model
{
    use HasFactory;
    public function form()
    {
        return $this->belongsTo(Questions::class);
    }
}
