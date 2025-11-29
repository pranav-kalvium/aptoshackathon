import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Shield, ArrowRight } from 'lucide-react';

const Auth = () => {
    const [role, setRole] = useState('student'); // 'student' | 'admin'
    const navigate = useNavigate();

    const handleLogin = () => {
        // Mock login logic
        // In real app, this would trigger Photon SDK or Admin Auth
        localStorage.setItem('userRole', role);
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-md overflow-hidden">
                {/* Header */}
                <div className="bg-primary p-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                    <p className="text-blue-100">Login to access your Campus Wallet</p>
                </div>

                {/* Role Selection */}
                <div className="p-8">
                    <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
                        <button
                            onClick={() => setRole('student')}
                            className={`flex-1 py-3 rounded-lg text-sm font-bold transition flex items-center justify-center gap-2 ${role === 'student' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <User className="w-4 h-4" /> Student
                        </button>
                        <button
                            onClick={() => setRole('admin')}
                            className={`flex-1 py-3 rounded-lg text-sm font-bold transition flex items-center justify-center gap-2 ${role === 'admin' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            <Shield className="w-4 h-4" /> Admin
                        </button>
                    </div>

                    {/* Form (Simplified for Mock) */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                {role === 'student' ? 'Email or Phone' : 'Admin ID'}
                            </label>
                            <input
                                type="text"
                                placeholder={role === 'student' ? 'student@university.edu' : 'admin_01'}
                                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-blue-100 outline-none transition"
                            />
                        </div>

                        <button
                            onClick={handleLogin}
                            className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                        >
                            Login as {role === 'student' ? 'Student' : 'Admin'} <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <p className="text-center text-gray-400 text-sm mt-6">
                        Powered by Aptos & Photon SDK
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Auth;
