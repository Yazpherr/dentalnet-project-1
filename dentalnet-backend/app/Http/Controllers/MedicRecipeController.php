<?php

namespace App\Http\Controllers;

use App\Models\MedicRecipe;
use Illuminate\Http\Request;

class MedicRecipeController extends Controller
{
    
    //public function __construct()
    //{
    //    $this->middleware('auth:sanctum');
    //    $this->middleware('doctor')->only(['index', 'show']);
    //}
    
    // Display a listing of the resource.
    public function index()
    {
        $medicRecipes = MedicRecipe::all();
        return response()->json($medicRecipes);
    }

    // Store a newly created resource in storage.
    public function store(Request $request)
    {
        // Validación de los datos de entrada
        $request->validate([
            'patient_id' => 'required|exists:patients,id',
            'doctor_id' => 'required|exists:doctors,id',
            'description' => 'required|string',
            'medications' => 'required|string',
            'date' => 'required|date',
        ]);

        try {
            // Crear la nueva receta médica
            $medicRecipe = new MedicRecipe();
            $medicRecipe->patient_id = $request->patient_id;
            $medicRecipe->doctor_id = $request->doctor_id;
            $medicRecipe->description = $request->description;
            $medicRecipe->medications = $request->medications;
            $medicRecipe->date = $request->date;
            $medicRecipe->save();

            // Devolver la respuesta JSON con la receta médica creada
            return response()->json($medicRecipe, 201);
        } catch (\Exception $e) {
            // Manejar cualquier excepción y devolver un mensaje de error
            return response()->json(['error' => 'Error al crear la receta médica', 'message' => $e->getMessage()], 500);
        }
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
