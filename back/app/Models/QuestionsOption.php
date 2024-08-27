<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class QuestionsOption
 *
 * @property $id
 * @property $texto
 * @property $created_at
 * @property $updated_at
 *
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class QuestionsOption extends Model
{
    
    protected $perPage = 20;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['texto'];
    public function questions()
    {
        return $this->hasOne("App\Models\Question" , "id" , "options_id");
    }

}
