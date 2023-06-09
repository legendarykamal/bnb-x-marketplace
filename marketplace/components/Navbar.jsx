import React from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  return (
    <div className="bg-pink-500">
      <AppBar position="static">
        <Toolbar className="flex justify-between items-center py-4">
          <Typography variant="h4" className="text-white font-bold">
            XBNB Marketplace
          </Typography>
          <div className="flex justify-center items-center">
            <Link href="/"  passHref>
              <Button color="inherit" className="text-white mr-6">
                Home
              </Button>
            </Link>
            <Link href="/createnft" passHref>
              <Button color="inherit" className="text-white mr-6">
                Sell NFT
              </Button>
            </Link>
            <Link href="/mynft" passHref>
              <Button color="inherit" className="text-white mr-6">
                My NFTs
              </Button>
            </Link>
            <Link href="/dashboard" passHref>
              <Button color="inherit" className="text-white mr-6">
                Dashboard
              </Button>
            </Link>
            <Link href="/sbtmint" passHref>
              <Button color="inherit" className="text-white mr-6">
                Mint SBT
              </Button>
            </Link>
            <Link href="https://chatmarketplace.vercel.app/" passHref>
              <Button color="inherit" className="text-white mr-6">
                Chat
              </Button>
            </Link>
            <ConnectButton />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
