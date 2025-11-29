import React from 'react';
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';
import { PetraWallet } from 'petra-plugin-wallet-adapter';
import { MartianWallet } from '@martianwallet/aptos-wallet-adapter';
import { Network } from '@aptos-labs/ts-sdk';

export default function AptosProvider({ children }) {
    const wallets = [
        new PetraWallet(),
        new MartianWallet(),
    ];

    return (
        <AptosWalletAdapterProvider
            plugins={wallets}
            autoConnect={false}
            optInWallets={['Petra', 'Martian']}
            dappConfig={{
                network: Network.TESTNET
            }}
            onError={(error) => {
                console.error('Wallet error:', error);
            }}
        >
            {children}
        </AptosWalletAdapterProvider>
    );
}