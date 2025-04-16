<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;

class Client extends Model
{
   /** @use HasFactory<\Database\Factories\UserFactory> */
   use HasFactory, Notifiable;

   /**
    * The attributes that are mass assignable.
    *
    * @var list<string>
    */
   protected $fillable = [
       'f_name',
       'l_name',
       'age',
       'room_id',
       'email',
   ];

   /**
    * The attributes that should be hidden for serialization.
    *
    * @var list<string>
    */
   protected $hidden = [
    //    'password',
    //    'remember_token',
   ];

   /**
    * Get the attributes that should be cast.
    *
    * @return array<string, string>
    */
   protected function casts(): array
   {
       return [
        //    'email_verified_at' => 'datetime',
        //    'password' => 'hashed',
       ];
   }
}
