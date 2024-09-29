<?php
namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Http\Requests\CategoryRequest;
use Illuminate\Support\Facades\Redirect;
use Illuminate\View\View;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $categories = Category::paginate();

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'data' => $categories
            ], 200);
        }

        // Si no es JSON, retornar la vista
        return view('category.index', compact('categories'))
            ->with('i', ($request->input('page', 1) - 1) * $categories->perPage());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        $category = new Category();

        // No es necesario responder en JSON para formularios
        return view('category.create', compact('category'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CategoryRequest $request)
    {
        $category = Category::create($request->validated());

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Categoría creada con éxito',
                'data' => $category
            ], 201); // Código HTTP 201 para creación exitosa
        }

        // Si no es JSON, redirigir como antes
        return Redirect::route('categories.index')
            ->with('success', 'Categoría creada con éxito.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request, $id)
    {
        $category = Category::find($id);

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'data' => $category
            ], 200);
        }

        // Si no es JSON, retornar la vista
        return view('category.show', compact('category'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id): View
    {
        $category = Category::find($id);

        // No es necesario responder en JSON para formularios
        return view('category.edit', compact('category'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(CategoryRequest $request, Category $category)
    {
        $category->update($request->validated());

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Categoría actualizada con éxito',
                'data' => $category
            ], 200);
        }

        // Si no es JSON, redirigir como antes
        return Redirect::route('categories.index')
            ->with('success', 'Categoría actualizada con éxito');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, $id)
    {
        Category::find($id)->delete();

        // Verificar si la solicitud es JSON
        if ($request->expectsJson()) {
            return response()->json([
                'success' => true,
                'message' => 'Categoría eliminada con éxito'
            ], 200);
        }

        // Si no es JSON, redirigir como antes
        return Redirect::route('categories.index')
            ->with('success', 'Categoría eliminada con éxito');
    }
}
