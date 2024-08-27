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
    public function index(Request $request): View
    {
        $questionsOptions = QuestionsOption::paginate();

        return view('questions-option.index', compact('questionsOptions'))
            ->with('i', ($request->input('page', 1) - 1) * $questionsOptions->perPage());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        $questionsOption = new QuestionsOption();

        return view('questions-option.create', compact('questionsOption'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(QuestionsOptionRequest $request): RedirectResponse
    {
        QuestionsOption::create($request->validated());

        return Redirect::route('questions-options.index')
            ->with('success', 'QuestionsOption created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show($id): View
    {
        $questionsOption = QuestionsOption::find($id);

        return view('questions-option.show', compact('questionsOption'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id): View
    {
        $questionsOption = QuestionsOption::find($id);

        return view('questions-option.edit', compact('questionsOption'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(QuestionsOptionRequest $request, QuestionsOption $questionsOption): RedirectResponse
    {
        $questionsOption->update($request->validated());

        return Redirect::route('questions-options.index')
            ->with('success', 'QuestionsOption updated successfully');
    }

    public function destroy($id): RedirectResponse
    {
        QuestionsOption::find($id)->delete();

        return Redirect::route('questions-options.index')
            ->with('success', 'QuestionsOption deleted successfully');
    }
}
