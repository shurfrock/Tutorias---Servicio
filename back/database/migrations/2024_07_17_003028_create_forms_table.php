<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('forms', function (Blueprint $table) {
            $table->engine="InnoDB";
            $table->id();
            $table->bigInteger("category_id")->unsigned();
            $table->bigInteger("questions_id")->unsigned();
            $table->string("title");
            $table->string("description");
            $table->boolean("status");
            $table->string("category");
            $table->dateTime("creation_date");
            $table->dateTime("update_date");
            $table->timestamps();
            $table->foreign("category_id")->references("id")->on("form__categories");
            $table->foreign("questions_id")->references("id")->on("questions")->onDelete("cascade");
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('forms');
    }
};
