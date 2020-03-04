<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Hospital extends Model {
    protected $table = 'hospitals';
    protected $fillable = ['nome','usuario','descricao',
    'senha','lat','lon','a_pos','a_neg','b_pos','b_neg','ab_pos','ab_neg','o_pos','o_neg'];
}