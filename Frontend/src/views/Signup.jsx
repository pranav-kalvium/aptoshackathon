import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';

const Signup = () => {
    const [role, setRole] = useState('student'); // 'student' | 'admin'
    const navigate = useNavigate();

    const handleSignup = () => {
        // Mock signup logic
        localStorage.setItem('userRole', role);
        navigate('/dashboard');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-md overflow-hidden">
                {/* Header */}
                <div className="bg-blue-600 p-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                    <p className="text-blue-100">Join Campus Wallet today</p>
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
                            <Lock className="w-4 h-4" /> Admin
                        </button>
                    </div>

                    {/* Form */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                            <div className="relative">
                                <User className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="john@university.edu"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
                                />
                            </div>
                        </div>

                        <button
                            onClick={handleSignup}
                            className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200 flex items-center justify-center gap-2 mt-4"
                        >
                            Create Account <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-gray-500 text-sm">
                            Already have an account?{' '}
                            <Link to="/login" className="text-blue-600 font-bold hover:underline">
                                Log In
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
