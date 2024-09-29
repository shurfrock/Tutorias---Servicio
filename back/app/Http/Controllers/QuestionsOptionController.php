<?php
namespace App\Http\Controllers;

use App\Models\QuestionsOption;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Http\Requests\QuestionsOptionRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\View\View;

class QuestionsOptionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $questionsOptions = QuestionsOption::paginate();

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'data' => $questionsOptions
            ], 200);
        }

        // Si no es JSON, retornar la vista
        return view('questions-option.index', compact('questionsOptions'))
            ->with('i', ($request->input('page', 1) - 1) * $questionsOptions->perPage());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        $questionsOption = new QuestionsOption();

        // No es necesario responder en JSON para formularios
        return view('questions-option.create', compact('questionsOption'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(QuestionsOptionRequest $request)
    {
        $questionsOption = QuestionsOption::create($request->validated());

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'QuestionsOption creado con éxito',
                'data' => $questionsOption
            ], 201); // Código HTTP 201 para creación exitosa
        }

        // Si no es JSON, redirigir como antes
        return Redirect::route('questions-options.index')
            ->with('success', 'QuestionsOption creado con éxito.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, $id)
    {
        $questionsOption = QuestionsOption::find($id);

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'data' => $questionsOption
            ], 200);
        }

        // Si no es JSON, retornar la vista
        return view('questions-option.show', compact('questionsOption'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id): View
    {
        $questionsOption = QuestionsOption::find($id);

        // No es necesario responder en JSON para formularios
        return view('questions-option.edit', compact('questionsOption'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(QuestionsOptionRequest $request, QuestionsOption $questionsOption)
    {
        $questionsOption->update($request->validated());

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'QuestionsOption actualizado con éxito',
                'data' => $questionsOption
            ], 200);
        }

        // Si no es JSON, redirigir como antes
        return Redirect::route('questions-options.index')
            ->with('success', 'QuestionsOption actualizado con éxito');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        QuestionsOption::find($id)->delete();

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'QuestionsOption eliminado con éxito'
            ], 200);
        }

        // Si no es JSON, redirigir como antes
        return Redirect::route('questions-options.index')
            ->with('success', 'QuestionsOption eliminado con éxito');
    }
}
