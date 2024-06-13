<?php

namespace App\Http\Controllers;

use App\Models\MedicRecipe;
use Illuminate\Http\Request;

class MedicRecipeController extends Controller
{
    // Display a listing of the resource.
    public function index()
    {
        $medicRecipes = MedicRecipe::all();
        return response()->json($medicRecipes);
    }

    // Store a newly created resource in storage.
    public function store(Request $request)
    {
        $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'doctor_id' => 'required|exists:doctors,id',
            'description' => 'required|string',
            'medications' => 'required|string',
            'date' => 'required|date',
        ]);

        $medicRecipe = MedicRecipe::create($request->all());
        return response()->json($medicRecipe, 201);
    }

    // Display the specified resource.
    public function show($id)
    {
        $medicRecipe = MedicRecipe::findOrFail($id);
        return response()->json($medicRecipe);
    }

    // Update the specified resource in storage.
    public function update(Request $request, $id)
    {
        $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'doctor_id' => 'required|exists:doctors,id',
            'description' => 'required|string',
            'medications' => 'required|string',
            'date' => 'required|date',
        ]);

        $medicRecipe = MedicRecipe::findOrFail($id);
        $medicRecipe->update($request->all());
        return response()->json($medicRecipe);
    }

    // Remove the specified resource from storage.
    public function destroy($id)
    {
        $medicRecipe = MedicRecipe::findOrFail($id);
        $medicRecipe->delete();
        return response()->json(null, 204);
    }
}
