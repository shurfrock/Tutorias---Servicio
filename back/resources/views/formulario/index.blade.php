@extends('layouts.app')

@section('template_title')
    Formularios
@endsection

@section('content')
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header">
                        <div style="display: flex; justify-content: space-between; align-items: center;">

                            <span id="card_title">
                                {{ __('Formularios') }}
                            </span>

                             <div class="float-right">
                                <a href="{{ route('formularios.create') }}" class="btn btn-primary btn-sm float-right"  data-placement="left">
                                  {{ __('Create New') }}
                                </a>
                              </div>
                        </div>
                    </div>
                    @if ($message = Session::get('success'))
                        <div class="alert alert-success m-4">
                            <p>{{ $message }}</p>
                        </div>
                    @endif

                    <div class="card-body bg-white">
                        <div class="table-responsive">
                            <table class="table table-striped table-hover">
                                <thead class="thead">
                                    <tr>
                                        <th>No</th>
                                        
									<th >Category Id</th>
									<th >Questions Id</th>
									<th >Titulo</th>
									<th >Descripción</th>
									<th >Estado</th>
									<th >Categoria</th>
                                    <th >Creado</th>
                                    <th >Actualizado</th>


                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($formularios as $formulario)
                                        <tr>
                                            <td>{{ ++$i }}</td>
                                            
										<td >{{ $formulario->category_id }}</td>
										<td >{{ $formulario->questions_id }}</td>
										<td >{{ $formulario->title }}</td>
										<td >{{ $formulario->description }}</td>
										<td >{{ $formulario->status }}</td>
										<td >{{ $formulario->category }}</td>
                                        <td >{{ $formulario->created_at }}</td>
                                        <td >{{ $formulario->updated_at }}</td>


                                            <td>
                                                <form action="{{ route('formularios.destroy', $formulario->id) }}" method="POST">
                                                    <a class="btn btn-sm btn-primary " href="{{ route('formularios.show', $formulario->id) }}"><i class="fa fa-fw fa-eye"></i> {{ __('Show') }}</a>
                                                    <a class="btn btn-sm btn-success" href="{{ route('formularios.edit', $formulario->id) }}"><i class="fa fa-fw fa-edit"></i> {{ __('Edit') }}</a>
                                                    @csrf
                                                    @method('DELETE')
                                                    <button type="submit" class="btn btn-danger btn-sm" onclick="event.preventDefault(); confirm('Are you sure to delete?') ? this.closest('form').submit() : false;"><i class="fa fa-fw fa-trash"></i> {{ __('Delete') }}</button>
                                                </form>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                {!! $formularios->withQueryString()->links() !!}
            </div>
        </div>
    </div>
@endsection
