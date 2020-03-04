<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Hospital;

class HospitalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $hospitals = Hospital::all();
        return view('hospitals', compact('hospitals'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {  
       $hospital = new Hospital();
       $hospital->nome = $request->nome;
       $hospital->descricao=$request->descricao;
       $hospital->usuario=$request->usuario;
       $hospital->senha=$request->senha;
       $hospital->lat=$request->lat;
       $hospital->lon=$request->lon;
       $hospital->a_pos=$request->a_pos;
       $hospital->a_neg=$request->a_neg;
       $hospital->b_pos=$request->b_pos;
       $hospital->b_neg=$request->b_neg;
       $hospital->ab_pos=$request->ab_pos;
       $hospital->ab_neg=$request->ab_neg;
       $hospital->o_pos=$request->o_pos;
       $hospital->o_neg=$request->o_neg;
    
       $hospital->save();
       return redirect()->route('hospital');
}
    

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
       
        $novoNome = $request->nome;
        $hospital = Hospital::find($request->id);
        $hospital->nome = $novoNome;
        $hospital->save();
        return redirect()->route('hospital');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        Hospital::destroy($request->id);
        return redirect('/hospital');
    }
}
