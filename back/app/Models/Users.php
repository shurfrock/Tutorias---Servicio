<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Hash;

class Users extends Authenticatable
{
    use Notifiable;

    protected $fillable = ['name', 'email', 'password', 'code'];

    // Mutador para encriptar la contraseña
    public function setPasswordAttribute($value)
    {
        $this->attributes['password'] = Hash::make($value);
    }
    public function forms()
    {
        return $this->hasMany(Form::class);
    }
}