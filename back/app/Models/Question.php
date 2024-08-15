<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Question
 *
 * @property $id
 * @property $title
 * @property $question_type
 * @property $created_at
 * @property $updated_at
 *
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Question extends Model
{
    
    protected $perPage = 20;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['title', 'question_type', 'options_id'];

    public function formulario()
    {
        return $this->hasOne("App\Models\Formulario" , "id" , "questions _id");
    }
    public function options()
    {
        return $this->hasMany("App\Models\QuestionsOption" , "options_id" , "id");
    }

}
