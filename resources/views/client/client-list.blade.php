@extends('layout.app')

@section('title','Clientes')

@section('content')
<?php
     $count = 0;
     $status[-1] = (isset($filter->statusId) && $filter->statusId == -1) ? 'selected' : '';
     $status[0] = (isset($filter->statusId) && $filter->statusId == 0) ? 'selected' : '';
     $status[1] = (isset($filter->statusId) && $filter->statusId == 1) ? 'selected' : '';
?>
<div class="tab-pane">
     <!-- FORM BUSCA... ini -->
     <form action="{{ route('client-filter') }}" method="POST" name="form">
     {{ csrf_field() }} 
     <div class="row">
        <div class="form-group col-md-4">
            <label>Clientes</label>
            <input type="text" name="ClientName" id="ClientName" class="form-control form-control-sm" value='{{$filter->ClientName}}'>
        </div>

        <div class="form-group col-md-2">
            <label>Status</label>
            <select name="status_id" class="form-control form-control-sm">
                <option value="-1" {{$status[-1]}}>Todos</option>
                <option value="1" {{$status[1]}}>Ativo</option>
                <option value="0" {{$status[0]}}>Inativo</option>
            </select>
        </div> 
        <div class="form-group col-md-4">
            <br>
            <button class="btn btn-sm btn-custom">Filtrar</button>
        </div>  
        <div class="form-group col-md-2">
            <label>&nbsp;</label><br>
            <a href="{{route('client-create')}}"><i class="fas fa-plus-circle fa-2x" style="color:green" title="Cadastrar Cliente"></i> </a>
        </div> 
    </div>
    </form>
</div>

<table id="sortTable" class="table table-hover table-striped table-custom table-sm rwd-table">
    <thead>
        <tr>
            <th scope="col">Refer Id</th>
            <th scope="col">Nome</th>
            <th scope="col">CNPJ</th>
            <th scope="col">Status</td>
            <th scope="col"></th>

        </tr>
    </thead>
    <tbody>
        @foreach($clients as $client)
        <tr>
            <td data-th="id">{{$client->id}}</td>
            <td data-th="nome">{{$client->clientName}}</td>
            <td data-th="nome">{{$client->cnpj}}</td>
            <td data-th="status" >
            @if($client->status_id ===  0)
            <span name="status" style="font-size: 1em; color: Red;">
                <i class="fas fa-circle"></i>
            </span>
            @else
            <span name="status" style="font-size: 1em; color: Green;">
                <i class="fas fa-circle"></i>
            </span>
            @endif
            </td>
            <td data-th="action"> <a href="{{ route('client-edit', $client->id) }}"><i class="fa fa-edit fa-lg"></a></td>
        </tr>
        @endforeach
    </tbody>
</table>
@endsection