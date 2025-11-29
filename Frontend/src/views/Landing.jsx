import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';

const Landing = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col">
            {/* Navbar */}
            <nav className="p-6 flex justify-between items-center max-w-7xl mx-auto w-full">
                <div className="flex items-center gap-2 text-blue-600 font-bold text-2xl">
                    <Wallet className="w-8 h-8" />
                    <span>CampusWallet</span>
                </div>
                <div className="flex gap-4">
                    <Link to="/login" className="px-6 py-2 rounded-full text-gray-600 hover:text-blue-600 font-medium transition">
                        Login
                    </Link>
                    <Link to="/signup" className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                        Get Started
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="flex-1 flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto mt-10 mb-20">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    Live on Aptos Testnet
                </div>

                <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
                    Turn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Academic Wins</span> <br />
                    Into Real Rewards
                </h1>

                <p className="text-xl text-gray-600 max-w-2xl mb-10 leading-relaxed">
                    The first digital wallet that rewards you for attending classes, acing quizzes, and participating in campus events. Redeem points for food, subscriptions, and exclusive perks.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                    <Link to="/signup" className="px-8 py-4 rounded-xl bg-blue-600 text-white text-lg font-bold hover:bg-blue-700 transition shadow-xl shadow-blue-200 flex items-center justify-center gap-2">
                        Start Earning Now <ArrowRight className="w-5 h-5" />
                    </Link>
                    <a href="#features" className="px-8 py-4 rounded-xl bg-white text-gray-700 text-lg font-bold hover:bg-gray-50 transition border border-gray-200 shadow-sm">
                        Learn More
                    </a>
                </div>

                {/* Stats / Trust */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <GraduationCap className="w-10 h-10 text-secondary mb-4 mx-auto" />
                        <div className="text-3xl font-bold text-gray-900">100%</div>
                        <div className="text-gray-500">Academic Focus</div>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <Wallet className="w-10 h-10 text-blue-600 mb-4 mx-auto" />
                        <div className="text-3xl font-bold text-gray-900">Instant</div>
                        <div className="text-gray-500">Reward Payouts</div>
                    </div>
                    <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                        <ShieldCheck className="w-10 h-10 text-accent mb-4 mx-auto" />
                        <div className="text-3xl font-bold text-gray-900">Secure</div>
                        <div className="text-gray-500">Blockchain Backed</div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Landing;
