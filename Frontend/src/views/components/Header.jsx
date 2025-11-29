import React, { useState } from 'react';

const Header = () => {
    const [walletAddress, setWalletAddress] = useState(null);

    const connectWallet = async () => {
        // Simulate Photon SDK login
        // In real implementation: const user = await Photon.login();
        const mockAddress = "0x1234567890abcdef";
        setWalletAddress(mockAddress);

        // Register with Backend
        try {
            const response = await fetch('http://localhost:3000/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ walletAddress: mockAddress })
            });
            const data = await response.json();
            console.log('Logged in:', data);
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <div className="text-xl font-bold text-blue-600">Campus Wallet</div>
            <div>
                {walletAddress ? (
                    <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-mono">
                        {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                    </span>
                ) : (
                    <button
                        onClick={connectWallet}
                        className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
                    >
                        Connect Wallet
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
