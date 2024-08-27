<div class="row padding-1 p-1">
    <div class="col-md-12">
        
        <div class="form-group mb-2 mb20">
            <label for="category_id" class="form-label">{{ __('Category Id') }}</label>
            <input type="text" name="category_id" class="form-control @error('category_id') is-invalid @enderror" value="{{ old('category_id', $formulario?->category_id) }}" id="category_id" placeholder="Category Id">
            {!! $errors->first('category_id', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="questions_id" class="form-label">{{ __('Questions Id') }}</label>
            <input type="text" name="questions_id" class="form-control @error('questions_id') is-invalid @enderror" value="{{ old('questions_id', $formulario?->questions_id) }}" id="questions_id" placeholder="Questions Id">
            {!! $errors->first('questions_id', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="title" class="form-label">{{ __('Titulo') }}</label>
            <input type="text" name="title" class="form-control @error('title') is-invalid @enderror" value="{{ old('title', $formulario?->title) }}" id="title" placeholder="Tiulo">
            {!! $errors->first('title', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="description" class="form-label">{{ __('Descripción') }}</label>
            <input type="text" name="description" class="form-control @error('description') is-invalid @enderror" value="{{ old('description', $formulario?->description) }}" id="description" placeholder="Descripcion">
            {!! $errors->first('description', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="status" class="form-label">{{ __('Estado') }}</label>
            <input type="text" name="status" class="form-control @error('status') is-invalid @enderror" value="{{ old('status', $formulario?->status) }}" id="status" placeholder="Estado">
            {!! $errors->first('status', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>
        <div class="form-group mb-2 mb20">
            <label for="category" class="form-label">{{ __('Categoria') }}</label>
            <input type="text" name="category" class="form-control @error('category') is-invalid @enderror" value="{{ old('category', $formulario?->category) }}" id="category" placeholder="Categoria">
            {!! $errors->first('category', '<div class="invalid-feedback" role="alert"><strong>:message</strong></div>') !!}
        </div>



    </div>
    <div class="col-md-12 mt20 mt-2">
        <button type="submit" class="btn btn-primary">{{ __('Submit') }}</button>
    </div>
</div>