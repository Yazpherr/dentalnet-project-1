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
        // QUE EL FILTRO POR NOMBRE DE ROL
        if(!auth('api')->user()->can('list_rol')){
            return response()->json(["message" => "EL USUARIO NO ESTA AUTORIZADO"],403);
        }
        $name = $request->search;

        $roles = Role::where("name","like","%".$name."%")->orderBy("id","desc")->get();

        return response()->json([
            "roles" => $roles->map(function($rol) {
                return [
                    "id" => $rol->id,
                    "name" => $rol->name,
                    "permision" => $rol->permissions,
                    "permision_pluck" => $rol->permissions->pluck("name"),
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
        if(!auth('api')->user()->can('register_rol')){
            return response()->json(["message" => "EL USUARIO NO ESTA AUTORIZADO"],403);
        }
        $is_role = Role::where("name",$request->name)->first();

        if($is_role){
            return response()->json([
                "message" => 403,
                "message_text" => "EL NOMBRE DEL ROL YA EXISTE"
            ]);
        }

        $role = Role::create([
            'guard_name' => 'api',
            'name' => $request->name,
        ]);
        // ["register_rol","edit_rol","register_paciente"];
        foreach ($request->permisions as $key => $permision) {
            $role->givePermissionTo($permision);
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
        if(!auth('api')->user()->can('edit_rol')){
            return response()->json(["message" => "EL USUARIO NO ESTA AUTORIZADO"],403);
        }
        $role = Role::findOrFail($id);
        return response()->json([
            "id" => $role->id,
            "name" => $role->name,
            "permision" => $role->permissions,
            "permision_pluck" => $role->permissions->pluck("name"),
            "created_at" => $role->created_at->format("Y-m-d h:i:s")
        ]);
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        if(!auth('api')->user()->can('edit_rol')){
            return response()->json(["message" => "EL USUARIO NO ESTA AUTORIZADO"],403);
        }
        $is_role = Role::where("id","<>",$id)->where("name",$request->name)->first();

        if($is_role){
            return response()->json([
                "message" => 403,
                "message_text" => "EL NOMBRE DEL ROL YA EXISTE"
            ]);
        }

        $role = Role::findOrFail($id);

        $role->update($request->all());
        // ["register_rol","edit_rol","register_paciente"];
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
        if(!auth('api')->user()->can('delete_rol')){
            return response()->json(["message" => "EL USUARIO NO ESTA AUTORIZADO"],403);
        }
        $role = Role::findOrFail($id);
        if($role->users->count() > 0){
            return response()->json([
                "message" => 403,
                "message_text" => "EL ROL SELECCIONADO NO SE PUEDE ELIMINAR POR MOTIVOS QUE YA TIENE USUARIOS RELACIONADOS"
            ]);
        }
        $role->delete();
        return response()->json([
            "message" => 200,
        ]);
    }
}
