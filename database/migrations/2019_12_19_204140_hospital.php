<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Hospital extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hospitals', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nome', 100);
            $table->string('usuario', 20);
            $table->string('descricao', 200);
            $table->string('senha', 20);
            $table->integer('telefone', 11);
            $table->string('endereco', 50);
            $table->double('lat', 10, 1);
            $table->double('lon', 10, 1);
            $table->unsignedInteger('a_pos');
            $table->unsignedInteger('a_neg');
            $table->unsignedInteger('b_pos');
            $table->unsignedInteger('b_neg');
            $table->unsignedInteger('ab_pos');
            $table->unsignedInteger('ab_neg');
            $table->unsignedInteger('o_pos');
            $table->unsignedInteger('o_neg');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('hospitals');
    }
}
