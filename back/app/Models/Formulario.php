<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Formulario
 *
 * @property $id
 * @property $category_id
 * @property $questions_id
 * @property $title
 * @property $description
 * @property $status
 * @property $category
 * @property $creation_date
 * @property $update_date
 * @property $created_at
 * @property $updated_at
 *
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Formulario extends Model
{
    
    protected $perPage = 20;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = ['category_id', 'questions_id', 'title', 'description', 'status', 'category'];
    public function category()
    {
        return $this->hasMany("App\Models\Category" , "categories_id" , "id");
    }
    public function questions()
    {
        return $this->hasMany("App\Models\Questions" , "questions_id" , "id");
    }

}
