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
    public function index(Request $request): View
    {
        $questions = Question::paginate();

        return view('question.index', compact('questions'))
            ->with('i', ($request->input('page', 1) - 1) * $questions->perPage());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): View
    {
        $question = new Question();

        return view('question.create', compact('question'));
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(QuestionRequest $request): RedirectResponse
    {
        Question::create($request->validated());

        return Redirect::route('questions.index')
            ->with('success', 'Question created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show($id): View
    {
        $question = Question::find($id);

        return view('question.show', compact('question'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id): View
    {
        $question = Question::find($id);

        return view('question.edit', compact('question'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(QuestionRequest $request, Question $question): RedirectResponse
    {
        $question->update($request->validated());

        return Redirect::route('questions.index')
            ->with('success', 'Question updated successfully');
    }

    public function destroy($id): RedirectResponse
    {
        Question::find($id)->delete();

        return Redirect::route('questions.index')
            ->with('success', 'Question deleted successfully');
    }
}
