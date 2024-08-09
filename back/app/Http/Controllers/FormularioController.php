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
    public function index(Request $request): View
    {
        $formularios = Formulario::paginate();

        return view('formulario.index', compact('formularios'))
            ->with('i', ($request->input('page', 1) - 1) * $formularios->perPage());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        $formulario = new Formulario();

        return view('formulario.create', compact('formulario'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FormularioRequest $request): RedirectResponse
    {
        Formulario::create($request->validated());

        return Redirect::route('formularios.index')
            ->with('success', 'Formulario created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show($id): View
    {
        $formulario = Formulario::find($id);

        return view('formulario.show', compact('formulario'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id): View
    {
        $formulario = Formulario::find($id);

        return view('formulario.edit', compact('formulario'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FormularioRequest $request, Formulario $formulario): RedirectResponse
    {
        $formulario->update($request->validated());

        return Redirect::route('formularios.index')
            ->with('success', 'Formulario updated successfully');
    }

    public function destroy($id): RedirectResponse
    {
        Formulario::find($id)->delete();

        return Redirect::route('formularios.index')
            ->with('success', 'Formulario deleted successfully');
    }
}
