<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Exceptions\JWTException;
use JWTAuth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function login(Request $request){
        $credentials = $request->only('email', 'password');

        try{
            $token = JWTAuth::attempt($credentials);

            if(!$token) {
                return response()->json(['error' => 'Credenciales invalidas'], 400);
            }
        }catch(JWTException $e){
            return response()->json(['error', 'No se pudo crear el token'], 500);
        }

        $user = JWTAuth::user();

        return response()->json([
            'token' => $token,
            'user'  => $user
        ]);
    }

    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'name'  => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);

        if($validator->fails()) {
            return response()->json($validator->errors(), 400);
        }

        $user = User::create([
            'name'  => $request->get('name'),
            'email' => $request->get('email'),
            'password'  => Hash::make($request->get('password'))
        ]);

        $token =JWTAuth::fromUser($user);

        return response()->json([
            'user'  => $user,
            'token' => $token
        ]);
    }
}
