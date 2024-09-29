<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Http\Requests\QuestionRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\View\View;

class QuestionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $questions = Question::paginate();

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'data' => $questions
            ], 200);
        }

        // Si no es JSON, retornar la vista
        return view('question.index', compact('questions'))
            ->with('i', ($request->input('page', 1) - 1) * $questions->perPage());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        $question = new Question();

        // No es necesario responder en JSON para formularios
        return view('question.create', compact('question'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(QuestionRequest $request)
    {
        $question = Question::create($request->validated());

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Question creado con éxito',
                'data' => $question
            ], 201); // Código HTTP 201 para creación exitosa
        }

        // Si no es JSON, redirigir como antes
        return Redirect::route('questions.index')
            ->with('success', 'Question creado con éxito.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, $id)
    {
        $question = Question::find($id);

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'data' => $question
            ], 200);
        }

        // Si no es JSON, retornar la vista
        return view('question.show', compact('question'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id): View
    {
        $question = Question::find($id);

        // No es necesario responder en JSON para formularios
        return view('question.edit', compact('question'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(QuestionRequest $request, Question $question)
    {
        $question->update($request->validated());

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Question actualizado con éxito',
                'data' => $question
            ], 200);
        }

        // Si no es JSON, redirigir como antes
        return Redirect::route('questions.index')
            ->with('success', 'Question actualizado con éxito');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        Question::find($id)->delete();

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Question eliminado con éxito'
            ], 200);
        }

        // Si no es JSON, redirigir como antes
        return Redirect::route('questions.index')
            ->with('success', 'Question eliminado con éxito');
    }
}
