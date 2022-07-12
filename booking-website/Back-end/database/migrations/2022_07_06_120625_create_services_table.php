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
            $table->string('description',500);
            $table->bigInteger('categoryId')->nullable(true)->unsigned();
            $table->string('image');
            $table->date('date')->nullable();
            $table->string('day')->nullable();
            $table->foreign('categoryId')->references('id')->on('categories')->onDelete('cascade')->onUpdate('cascade');
           $table->timestamps();
        });


        DB::table('services')->insert(
            array(
                'serviceName'=>'Carpet washing',
                'description'=>'Carpet cleaners provide a deep clean to refresh your carpet and neutralise any lingering odours.Using even the most powerful traditional vacuum cleaner is not going to remove all the hidden dirt and dust that lives deep within your carpets and rugs to leave them looking and smelling clean',
                // 'date'=>'',
                // 'day'=>'',
                'image'=>'service1.jpg'

            )
            );
        DB::table('services')->insert(
            array(
                'serviceName'=>'Sofa washing',
                'description'=>'with all cleaning – furniture, car interiors, counters, etc.  its best to know what your working with. Checking the furniture care codes will help you understand which solvents or cleaners you can use. Once you find the corect solutions and apply liquid to the upholstery, make sure to blot with a dry towel  never rub.  ',
                // 'date'=>'',
                // 'day'=>'',
                'image'=>'service2.jpg'

            )
            );
        DB::table('services')->insert(
            array(
                'serviceName'=>'Window Cleaning',
                'description'=>'The best homemade window cleaning solution is to just mix two gallons of water and about a teaspoon of dishwashing liquid together in your bucket. ',
                // 'date'=>'',
                // 'day'=>'',
                'image'=>'service3.jpg'

            )
            );
        DB::table('services')->insert(
            array(
                'serviceName'=>'House garden cleaning',
                'description'=>'Try to get into the habit of giving your mower a brush down after every use. If you don’t, the damp mulch of warm grass cuttings can meld themselves to the blades and the inside of the mower casing, making mowing much harder work next time. ',
                // 'date'=>'',
                // 'day'=>'',
                'image'=>'service4.jpg'

            )
            );
        DB::table('services')->insert(
            array(
                'serviceName'=>'Cleaning the kitchen',
                'description'=>'Cleaning the kitchen might seem a little overwhelming, but once you get going, you will find a groove and feel a sense of accomplishment ',
                // 'date'=>'',
                // 'day'=>'',
                'image'=>'service5.jpg'

            )
            );
        DB::table('services')->insert(
            array(
                'serviceName'=>'Hospital & Health Care',
                'description'=>'Keeping hospitals clean is a crucial patient safety issue. The importance of the hospital environment in patient care has only recently been recognized widely in infection prevention and control (IPC).  ',
                // 'date'=>'',
                // 'day'=>'',
                'image'=>'service6.jpg'

            )
            );
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
