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
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger("options_id");
            $table->string("title");
            $table->string("question_type");
            $table->timestamps();

            // Definir la llave foránea
            $table->foreign('options_id')
                  ->references('id')->on('questions_options')
                  ->onDelete('cascade')  // Elimina automáticamente las preguntas si la opción es eliminada
                  ->onUpdate('cascade'); // Actualiza automáticamente las preguntas si la opción es actualizada
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Elimina la relación antes de eliminar la tabla
        Schema::table('questions', function (Blueprint $table) {
            $table->dropForeign(['options_id']);
        });

        Schema::dropIfExists('questions');
    }
};

