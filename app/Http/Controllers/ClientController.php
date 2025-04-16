<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Client;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;


class ClientController extends Controller
{
    public function index() {
        Log::info("Index function");
        $clients = Client::all();

        // Log the clients data for debugging
        Log::info($clients);
    
        return Inertia::render('ClientComponent', [
            'clients' => $clients,
        ]);
    }
    
}
