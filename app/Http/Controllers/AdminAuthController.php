<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class AdminAuthController extends Controller
{
    public function showLoginForm()
    {
       
        if (Auth::check() && Auth::user()->role === 'Admin') {
            return redirect()->route('admin.dashboard');
        }

        return Inertia::render('Admin/LoginAdmin');
    }

    public function login(Request $request)
    {
        $validated = $request->validate([
            'username' => 'required|string',
            'key' => 'required|string|size:8',
        ], [
            'username.required' => 'Username harus diisi',
            'key.required' => 'Key harus diisi',
            'key.size' => 'Key harus terdiri dari 8 karakter',
        ]);

    
        $user = User::where('username', $validated['username'])
            ->where('key', strtoupper($validated['key']))
            ->first();

       
        if (!$user) {
            return back()->withErrors([
                'key' => 'Username atau key tidak valid.',
            ])->withInput($request->only('username'));
        }

  
        if ($user->role !== 'Admin') {
            return back()->withErrors([
                'key' => 'Anda tidak memiliki akses sebagai admin.',
            ])->withInput($request->only('username'));
        }


        Auth::login($user, $request->has('remember'));
        $request->session()->regenerate();
        return redirect()->intended(route('admin.dashboard'))
            ->with('success', 'Login berhasil! Selamat datang, ' . $user->username);
    }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('admin.login')
            ->with('success', 'Anda telah logout.');
    }
}

