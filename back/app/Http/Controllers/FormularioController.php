<?php
namespace App\Http\Controllers;

use App\Models\Formulario;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Http\Requests\FormularioRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\View\View;

class FormularioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $formularios = Formulario::paginate();

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'data' => $formularios
            ], 200);
        }

        // Si no es JSON, retornar la vista
        return view('formulario.index', compact('formularios'))
            ->with('i', ($request->input('page', 1) - 1) * $formularios->perPage());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        $formulario = new Formulario();
        
        // No es necesario responder en JSON para formularios
        return view('formulario.create', compact('formulario'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FormularioRequest $request)
    {
        $formulario = Formulario::create($request->validated());

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Formulario creado con éxito',
                'data' => $formulario
            ], 201); // Código HTTP 201 para creación exitosa
        }

        // Si no es JSON, redirigir como antes
        return Redirect::route('formularios.index')
            ->with('success', 'Formulario creado con éxito.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, $id)
    {
        $formulario = Formulario::find($id);

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'data' => $formulario
            ], 200);
        }

        // Si no es JSON, retornar la vista
        return view('formulario.show', compact('formulario'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id): View
    {
        $formulario = Formulario::find($id);

        // No es necesario responder en JSON para formularios
        return view('formulario.edit', compact('formulario'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FormularioRequest $request, Formulario $formulario)
    {
        $formulario->update($request->validated());

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Formulario actualizado con éxito',
                'data' => $formulario
            ], 200);
        }

        // Si no es JSON, redirigir como antes
        return Redirect::route('formularios.index')
            ->with('success', 'Formulario actualizado con éxito');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        Formulario::find($id)->delete();

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Formulario eliminado con éxito'
            ], 200);
        }

        // Si no es JSON, redirigir como antes
        return Redirect::route('formularios.index')
            ->with('success', 'Formulario eliminado con éxito');
    }
}

