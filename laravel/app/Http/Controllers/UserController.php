<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    public function index()
    {
        $users = User::all();
        if (is_null($users)) {
            return response()->json('Aucun utilisateur trouvé', 404);
        }
        return response()->json($users);
    }

    public function store(Request $request)
    {
        try {
            $user = new User;
            $user->nom = $request->input('nom');
            $user->prenom = $request->input('prenom');
            $user->email = $request->input('email');
            $user->telephone = $request->input('telephone');
            $user->sexe = $request->input('sexe');
            $user->nationalite = $request->input('nationalite');
            $user->photo = $request->input('photo');
            $user->role = $request->input('role');
            $user->adresse = $request->input('adresse');
            $user->ville = $request->input('ville');
            $user->save();

            return response()->json([
                'status' => 200,
                'message' => 'User added successfully'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Error adding user',
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $user = User::find($id);
            $user->nom = $request->input('nom');
            $user->prenom = $request->input('prenom');
            $user->email = $request->input('email');
            $user->telephone = $request->input('telephone');
            $user->sexe = $request->input('sexe');
            $user->nationalite = $request->input('nationalite');
            $user->photo = $request->input('photo');
            $user->adresse = $request->input('adresse');
            $user->ville = $request->input('ville');

            $user->update();

            return response()->json([
                'status' => 200,
                'message' => 'User Updated successfully'
            ]);

        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Error adding user',
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function show($id)
    {
        $user = User::find($id);
        return response()->json([
            'status' => 200,
            'user' => $user,
        ]);
    }

    public function delete($id)
    {
        $user = User::find($id);
        $user->delete();
        return response()->json([
            'status' => 200,
            'message' => 'User Deleted successfully'
        ]);
    }

    public function updatePassword(Request $request, $id)
    {
        $request->validate([
            'oldpassword' => 'required',
            'newpassword' => 'required|min:6',
            'confirmnewpassword' => 'required|same:newpassword',
        ]);

        $user = User::findOrFail($id);

        if (!Hash::check($request->oldpassword, $user->password)) {
            return response()->json(['error' => 'The old password is incorrect.'], 400);
        }

        $user->update([
            'password' => Hash::make($request->newpassword),
        ]);

        return response()->json(['status' => 200, 'message' => 'Password updated successfully.']);
    }
}