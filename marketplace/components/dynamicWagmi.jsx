import { connectorsForWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';

import {
    argentWallet,
    coinbaseWallet,
    imTokenWallet,
    injectedWallet,
    ledgerWallet,
    metaMaskWallet,
    omniWallet,
    rainbowWallet,
    trustWallet,
    walletConnectWallet,
} from '@rainbow-me/rainbowkit/wallets';

import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';

import { mainnet, polygon, optimism , bscTestnet , polygonMumbai} from 'wagmi/chains';
import React from 'react';
import { ParticleNetwork } from '@particle-network/auth';

import { particleWallet } from '@particle-network/rainbowkit-ext';

function DynamicWagmi(props) {
    
    const particle = new ParticleNetwork({
        projectId: process.env.NEXT_PUBLIC_PROJECT_ID  ,
        clientKey: process.env.NEXT_PUBLIC_CLIENT_KEY ,
        appId: process.env.NEXT_PUBLIC_APP_ID ,
    });
    const { chains, provider, webSocketProvider } = configureChains(
        [mainnet, polygon, optimism, polygonMumbai , bscTestnet],
        [publicProvider()]
    );
    const popularWallets = {
        groupName: 'Popular',
        wallets: [
            particleWallet({ chains, authType: 'google' }),
            particleWallet({ chains, authType: 'facebook' }),
            particleWallet({ chains, authType: 'apple' }),
            particleWallet({ chains }),
            injectedWallet({ chains }),
            rainbowWallet({ chains }),
            coinbaseWallet({ appName: 'RainbowKit demo', chains }),
            metaMaskWallet({ chains }),
            walletConnectWallet({ chains }),
        ],
    };

    const connectors = connectorsForWallets([
        popularWallets,
        {
            groupName: 'Other',
            wallets: [
                argentWallet({ chains }),
                trustWallet({ chains }),
                omniWallet({ chains }),
                imTokenWallet({ chains }),
                ledgerWallet({ chains }),
            ],
        },
    ]);

    const wagmiClient = createClient({
        autoConnect: true,
        connectors,
        provider,
        webSocketProvider,
    });

    return (
        <>
            {wagmiClient && (
                <WagmiConfig client={wagmiClient}>
                    <RainbowKitProvider chains={chains}>{props.children}</RainbowKitProvider>
                </WagmiConfig>
            )}
        </>
    );
}

export default DynamicWagmi;