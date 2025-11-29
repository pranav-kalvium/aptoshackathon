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
      dappConfig={{
        network: Network.TESTNET,
        aptosConnectDappId: '342786332008-u4hfhikfajph0g7qiqs0p50aebcvf333.apps.googleusercontent.com'
      }}
      onError={(error) => {
        console.error('Wallet error:', error);
      }}
    >
      {children}
    </AptosWalletAdapterProvider>
  );
}