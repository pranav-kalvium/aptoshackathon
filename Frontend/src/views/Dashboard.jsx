import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import { Wallet, History, Gift, Upload, Users, CheckCircle } from 'lucide-react';

const Dashboard = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState('student');

    useEffect(() => {
        const storedRole = localStorage.getItem('userRole');
        if (!storedRole) {
            navigate('/login');
        } else {
            setRole(storedRole);
        }
    }, [navigate]);

    if (role === 'admin') {
        return <AdminDashboard />;
    }

    return <StudentDashboard />;
};

const StudentDashboard = () => {
    const [balance, setBalance] = useState(0);
    // Mock data for UI preview
    const history = [
        { id: 1, type: 'EARN', reason: 'Perfect Attendance - CS101', amount: 50, date: '2023-10-25' },
        { id: 2, type: 'REDEEM', reason: 'Cafeteria Coupon', amount: 200, date: '2023-10-24' },
    ];

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="container mx-auto p-6 max-w-6xl">
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-900">Hello, Student 👋</h1>
                    <p className="text-gray-500">Here's your academic reward summary</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Balance Card */}
                    <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl shadow-lg text-white relative overflow-hidden">
                        <div className="relative z-10">
                            <div className="flex items-center gap-2 opacity-80 mb-1">
                                <Wallet className="w-5 h-5" />
                                <span className="text-sm font-medium">Wallet Balance</span>
                            </div>
                            <div className="text-4xl font-bold mb-4">{balance} <span className="text-2xl opacity-75">CPT</span></div>
                            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm px-4 py-2 rounded-lg text-sm font-semibold transition">
                                View Details
                            </button>
                        </div>
                        <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-4 translate-y-4">
                            <Wallet className="w-32 h-32" />
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center gap-3">
                        <h3 className="font-bold text-gray-700 mb-2">Quick Actions</h3>
                        <button className="w-full py-3 rounded-xl bg-blue-50 text-blue-600 font-bold hover:bg-blue-100 transition flex items-center justify-center gap-2">
                            <Gift className="w-5 h-5" /> Redeem Rewards
                        </button>
                        <button className="w-full py-3 rounded-xl bg-gray-50 text-gray-700 font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2">
                            <History className="w-5 h-5" /> View History
                        </button>
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-bold text-gray-900">Recent Activity</h3>
                        <button className="text-blue-600 text-sm font-semibold hover:underline">View All</button>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {history.map((item) => (
                            <div key={item.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition">
                                <div className="flex items-center gap-4">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.type === 'EARN' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>
                                        {item.type === 'EARN' ? <CheckCircle className="w-5 h-5" /> : <Gift className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{item.reason}</div>
                                        <div className="text-xs text-gray-500">{item.date}</div>
                                    </div>
                                </div>
                                <div className={`font-bold ${item.type === 'EARN' ? 'text-green-600' : 'text-orange-600'}`}>
                                    {item.type === 'EARN' ? '+' : '-'}{item.amount} CPT
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <header className="bg-white shadow-sm p-4 border-b border-gray-200">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="font-bold text-xl text-gray-800 flex items-center gap-2">
                        <Shield className="w-6 h-6 text-blue-600" /> Admin Console
                    </div>
                    <div className="text-sm text-gray-500">Logged in as Admin</div>
                </div>
            </header>

            <main className="container mx-auto p-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="text-gray-500 text-sm font-medium mb-1">Total Students</div>
                        <div className="text-3xl font-bold text-gray-900">1,240</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="text-gray-500 text-sm font-medium mb-1">Points Distributed</div>
                        <div className="text-3xl font-bold text-blue-600">85.4k</div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="text-gray-500 text-sm font-medium mb-1">Pending Redemptions</div>
                        <div className="text-3xl font-bold text-orange-500">12</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Upload Section */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                            <Upload className="w-5 h-5 text-gray-500" /> Upload Attendance
                        </h3>
                        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition cursor-pointer">
                            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Upload className="w-6 h-6" />
                            </div>
                            <p className="text-gray-900 font-medium">Click to upload CSV/Excel</p>
                            <p className="text-sm text-gray-500 mt-1">or drag and drop file here</p>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition">
                                Process File
                            </button>
                        </div>
                    </div>

                    {/* Recent Actions */}
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-gray-500" /> Recent Approvals
                        </h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-600">S{i}</div>
                                        <div>
                                            <div className="text-sm font-bold text-gray-900">Student #{i}</div>
                                            <div className="text-xs text-gray-500">Redeemed: Event Pass</div>
                                        </div>
                                    </div>
                                    <button className="text-xs font-bold text-green-600 bg-green-100 px-3 py-1 rounded-full">Approved</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
