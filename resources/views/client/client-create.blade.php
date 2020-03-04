@extends('layout.app')

<?php

$title = (isset($client))  ? 'Edição de Cliente' : "Criação de Cliente";
?>
@section('title', $title)

@section('head')
<?php
        $css = asset('css');
        $js = asset('js');
?>
<link rel="stylesheet" href="{{ $css }}/jquery.css">
@endsection

@section('content')

<?php 
    $disableInput = (isset($client)) ? 'disabled' : '';
    $hiddenDiv = (isset($client)) ? '' : 'none';
?>

<div class="tab-pane">
    <form action="{{ route('client-store') }}" name="form"  method="POST">
        {{ csrf_field() }}
        <div id="tabs">
            <ul class="nav nav-tabs">
                <li class="nav-item"><a class="nav-link" href="#tabs-2">Dados Gerais</a></li>
                <li class="nav-item"><a class="nav-link" href="#tabs-3">Ecp</a></li>
                <li class="nav-item"><a class="nav-link" href="#tabs-4">Networks</a></li>
                @if(isset($products))<li class="nav-item"><a class="nav-link" href="#tabs-1">Produtos</a></li>@endif
                @if(isset($category))<li class="nav-item"><a class="nav-link" href="#tabs-5">Categoria</a></li>@endif
            </ul>
            <div id="tabs-1">
                @if(isset($products))
                <table id="sortTable" class="table table-hover table-striped table-custom table-sm rwd-table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Sku</th>
                            <th scope="col">Nome do Produto</th>
                            <th scope="col">Estoque Total</th>
                            <th scope="col">Custo</th>
                            <th scope="col">Valor de venda</th>
                            <th scope="col">Data da Requisição</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($products as $product)
                        <tr>
                            <td data-th="id">{{$product->product_id}}</td>
                            <td data-th="sku">{{$product->sku}}</td>
                            <td data-th="name">{{$product->name}}</td>
                            <td data-th="quantity">{{$product->quantity}}</td>
                            <td data-th="cost">{{$product->cost}}</td>
                            <td data-th="sale">{{$product->sale}}</td>
                            <td data-th="created_at">{{$product->created_at->format('d/m/Y')}}</td>
                            
                          </tr>
                        @endforeach
                    </tbody>
                </table>
                @endif
            </div>
            <div id="tabs-2">
                <br>
                <div class="form-group col-md-2" style="display:{{$hiddenDiv}}">
                    <label>ID</label>
                    <input type="text" name='cli_id' value="{{@$client->id}}" autocomplete="off" class="form-control form-control-sm" readonly>
                </div>
                <div class="form-group col-md-3">
                    <label>Nome</label>
                    <input type="text" name="clientName" value="{{@$client->clientName}}" autocomplete="off" class="form-control form-control-sm" required placeholder="">
                </div> 
                <div class="form-group col-md-3">
                    <label>CNPJ</label>
                    <input type="number" name="cnpj" value="{{@$client->cnpj}}" autocomplete="off" class="form-control form-control-sm" required placeholder="">
                </div>
                <div class="form-group col-md-3">
                    <label>Status</label>
                    <select name="status_id" class="form-control form-control-sm">
                        <option value="0">Inativo</option> 
                        <option value="1" selected>Ativo</option>
                    </select>
                </div>
                <div class="row">
                    <div class="form-group col-md-1">
                        <label>&nbsp;</label><br>
                        <button type="button" class="btn btn-danger" onclick="window.location.href='{{ route('client-list') }}'">Voltar</button>
                    </div>
                    <div class="form-group col-md-1">
                        <label>&nbsp;</label><br>
                        <button type="submit" class="btn btn-custom">Salvar</button>
                    </div>
            </div>
            </div>
            <div id="tabs-3">
                <div id="ecptabs">
                    <ul class="nav nav-tabs">
                        <li class="nav-item"><a class="nav-link" href="#ecptabs-1">Vtex</a></li>
                    </ul>
                </div>
                <div id="ecptabs-1"><br>
                    <div class="form-group col-md-2" style="display:{{$hiddenDiv}}">
                        <label>Ecp (id)</label>
                        <input type="text" name='ecp_id' value="1" autocomplete="off" class="form-control form-control-sm" readonly>
                    </div>
                    <div class="form-group col-md-3">
                        <label>Account Name</label>
                        <input type="text" name="vtex_acountName" value="{{@$client->vtex_acountName}}" autocomplete="off" class="form-control form-control-sm"  placeholder="">
                    </div>
                    <div class="form-group col-md-3">
                        <label>Environment</label>
                        <input type="text" name="vtex_environment" value="{{@$client->vtex_environment}}" autocomplete="off" class="form-control form-control-sm"  placeholder="">
                    </div>
                    <div class="form-group col-md-3">
                        <label>AppKey</label>
                        <input type="text" name="vtex_appKey" value="{{@$client->vtex_appKey}}" autocomplete="off" class="form-control form-control-sm"  placeholder="">
                    </div>
                    <div class="form-group col-md-3">
                        <label>AppToken</label>
                        <input type="text" name="vtex_appToken" value="{{@$client->vtex_appToken}}" autocomplete="off" class="form-control form-control-sm"  placeholder="">
                    </div>
                    <div class="form-group col-md-3">
                        <label>Url para Xml</label>
                        <input type="text" name="vtex_url" value="{{@$client->vtex_url}}" autocomplete="off" class="form-control form-control-sm"  placeholder="">
                    </div>    
                </div>
                <div class="row">
                        <div class="form-group col-md-1">
                            <label>&nbsp;</label><br>
                            <button type="button" class="btn btn-danger" onclick="window.location.href='{{ route('client-list') }}'">Voltar</button>
                        </div>
                        <div class="form-group col-md-1">
                            <label>&nbsp;</label><br>
                            <button type="submit" class="btn btn-custom">Salvar</button>
                        </div>
                </div>
            </div>
            <div id="tabs-4">
                <div id="networktabs">
                    <ul class="nav nav-tabs">
                        <li class="nav-item"><a class="nav-link" href="#networktabs-1">Analytics</a></li>
                        <li class="nav-item"><a class="nav-link" href="#networktabs-2">Google Ads</a></li>
                        <li class="nav-item"><a class="nav-link" href="#networktabs-3">Facebook Ads</a></li>
                    </ul>
                    <div id="networktabs-1">
                        <div class="form-group col-md-3">
                            <label>View ID</label>
                            <input type="number" name='analytics_id' value="{{@$client->analytics_id}}" autocomplete="off" class="form-control form-control-sm">
                        </div>
                        <hr/>
                        <label>Email para cadastro no analytics<br>
                        gabriel-araujo@onnedesk.iam.gserviceaccount.com</label>
                    </div>
                    <div id="networktabs-2"><br>
                        <div class="form-group col-md-3">
                            <label>Customer ID</label>
                            <input type="number" name="ads_id" value="{{@$client->ads_id}}" autocomplete="off" class="form-control form-control-sm"  placeholder="">
                        </div>
                    </div>
                    <div id="networktabs-3"><br>
                        <div class="form-group col-md-3">
                            <label>Access Token</label>
                            <input type="number" name="fb_accessToken" value="{{@$client->fb_accessToken}}" autocomplete="off" class="form-control form-control-sm"  placeholder="">
                        </div>
                        <div class="form-group col-md-3">
                            <label>App Secret</label>
                            <input type="number" name="fb_appSecret" value="{{@$client->fb_appSecret}}" autocomplete="off" class="form-control form-control-sm"  placeholder="">
                        </div>
                        <div class="form-group col-md-3">
                            <label>App ID</label>
                            <input type="number" name="fb_appId" value="{{@$client->fb_appId}}" autocomplete="off" class="form-control form-control-sm"  placeholder="">
                        </div>
                        <div class="form-group col-md-3">
                            <label>Account ID</label>
                            <input type="number" name="fb_adAccountId" value="{{@$client->fb_adAccountId}}" autocomplete="off" class="form-control form-control-sm"  placeholder="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group col-md-1">
                            <label>&nbsp;</label><br>
                            <button type="button" class="btn btn-danger" onclick="window.location.href='{{ route('client-list') }}'">Voltar</button>
                        </div>
                        <div class="form-group col-md-1">
                            <label>&nbsp;</label><br>
                            <button type="submit" class="btn btn-custom">Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </form>
</div>

@endsection

@section('scripts')

    <script>
        $(document).ready(function() {
            var max_fields      = 10;
            var wrapper   		= $(".input_fields_wrap");
            var add_button      = $(".add_field_button");
            
            var x = 1;
            $(add_button).click(function(e) {
                e.preventDefault();
                if(x < max_fields) {
                    x++;
                    $(wrapper).append('<div class="input-group mb-3">'+
                                '<input type="text" name="urlBackup[]" class="form-control form-control-sm" required/>'+
                                '<div class="input-group-append">'+
                                    '<button class="btn btn-sm remove_field" style="cursor:pointer;" title="Excluir">'+
                                        '<i class="fa fa-minus fa-md" style="color:red;"></i>'+
                                    '</button>'+
                                '</div>'+
                            '</div>');
                }
            });
            
            $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
                e.preventDefault(); $(this).parent('div').parent('div').remove(); x--;
            })
        });
        </script>
        <script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"
  integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30="
  crossorigin="anonymous"></script>
<script>
    $("#tabs").tabs();
    $("#ecptabs").tabs();
    $("#networktabs").tabs();
</script>

@endsection