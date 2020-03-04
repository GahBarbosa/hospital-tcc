<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hospital extends Model {
    protected $table = 'hospitals';
    protected $fillable = ['nome','usuario','descricao',
    'senha','lat','lon','a_pos','a_neg','b_pos','b_neg','ab_pos','ab_neg','o_pos','o_neg'];

    public function create($data)
    {
        $hospital = new Hospital();
        $hospital->nome = $data->nome;
        $hospital->descricao=$data->descricao;
        $hospital->usuario=$data->usuario;
        $hospital->senha=$data->senha;
        $hospital->lat=$data->lat;
        $hospital->lon=$data->lon;
        $hospital->a_pos=$data->a_pos;
        $hospital->a_neg=$data->a_neg;
        $hospital->b_pos=$data->b_pos;
        $hospital->b_neg=$data->b_neg;
        $hospital->ab_pos=$data->ab_pos;
        $hospital->ab_neg=$data->ab_neg;
        $hospital->o_pos=$data->o_pos;
        $hospital->o_neg=$data->o_neg;
     
        $hospital->save();
    }
}