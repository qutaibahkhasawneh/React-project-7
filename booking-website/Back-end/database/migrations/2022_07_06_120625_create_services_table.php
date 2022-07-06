<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateServicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('serviceName');
            $table->bigInteger('categoryId')->nullable(false)->unsigned();
            $table->string('image');
            $table->date('date');
            $table->string('day');
            $table->foreign('categoryId')->references('id')->on('categories')->onDelete('cascade')->onUpdate('cascade');   
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
        Schema::dropIfExists('services');
    }
}
