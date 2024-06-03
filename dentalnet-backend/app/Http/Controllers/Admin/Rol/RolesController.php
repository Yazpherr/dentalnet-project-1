<?php

namespace App\Http\Controllers\Admin\Rol;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use App\Http\Controllers\Controller;

class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        // Filtro por nombre de rol
        $name = $request->search;

        $roles = Role::where("name","like","%".$name."%")->orderBy("id","desc")->get();

        return response()->json([
            "roles" => $roles->map(function($rol) {
                return [
                    "id" => $rol,
                    "name" => $rol->name,
                    "permision" => $rol->permission,
                    "created_at" => $rol->created_at->format("Y-m-d h:i:s")

                ];
            }),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $is_role = Role::where("name", $request->name)->first();

        if($is_role){
            return response()->json([
                "message" => 403,
                "message_text" => "El nombre del rol ya existe"
            ]);
        }

        $role = Role::create([
            'guard_name' => 'api',
            'name' => $request->name,
        ]);
        // ["register_rol","edit_rol","register_paciente"];
        foreach ($permisions as $key => $permision) {
            $role->givePermissionTo('permision');
        }
        return response()->json([
            "message" => 200,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $is_role = Role::where("id","<>",$id)->where("name", $request->name)->first();
 
        if($is_role){
            return response()->json([
                "message" => 403,
                "message_text" => "El nombre del rol ya existe"
            ]);
        }

        $role = Role::findOrFail($id);

        $role->update($request->all());
        //["register_rol","edit_rol","register_paciente"];
        $role->syncPermissions($request->permisions);
        return response()->json([
            "message" => 200,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $role = Role::findOrFail($id);
        $role->delete();
        return response()->json([
            "message" => 200,
        ]);
    }
}
