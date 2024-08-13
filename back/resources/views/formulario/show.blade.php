@extends('layouts.app')

@section('template_title')
    {{ $formulario->name ?? __('Show') . " " . __('Formulario') }}
@endsection

@section('content')
    <section class="content container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header" style="display: flex; justify-content: space-between; align-items: center;">
                        <div class="float-left">
                            <span class="card-title">{{ __('Show') }} Formulario</span>
                        </div>
                        <div class="float-right">
                            <a class="btn btn-primary btn-sm" href="{{ route('formularios.index') }}"> {{ __('Back') }}</a>
                        </div>
                    </div>

                    <div class="card-body bg-white">
                        
                                <div class="form-group mb-2 mb20">
                                    <strong>Category Id:</strong>
                                    {{ $formulario->category_id }}
                                </div>
                                <div class="form-group mb-2 mb20">
                                    <strong>Questions Id:</strong>
                                    {{ $formulario->questions_id }}
                                </div>
                                <div class="form-group mb-2 mb20">
                                    <strong>Title:</strong>
                                    {{ $formulario->title }}
                                </div>
                                <div class="form-group mb-2 mb20">
                                    <strong>Description:</strong>
                                    {{ $formulario->description }}
                                </div>
                                <div class="form-group mb-2 mb20">
                                    <strong>Status:</strong>
                                    {{ $formulario->status }}
                                </div>
                                <div class="form-group mb-2 mb20">
                                    <strong>Category:</strong>
                                    {{ $formulario->category }}
                                </div>


                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
