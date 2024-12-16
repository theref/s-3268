import { useState, useEffect } from "react";
import onboard from "@/lib/web3";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const useWalletConnection = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [connecting, setConnecting] = useState(false);

  useEffect(() => {
    const checkConnection = async () => {
      const wallets = await onboard.state.get().wallets;
      if (wallets.length > 0) {
        const address = wallets[0].accounts[0].address;
        setWalletAddress(address);
        updateUserConnection(address);
      }
    };
    checkConnection();
  }, []);

  const updateUserConnection = async (address: string) => {
    try {
      const { error } = await supabase
        .from('users')
        .upsert({ 
          wallet_address: address,
          last_connected_at: new Date().toISOString()
        }, {
          onConflict: 'wallet_address'
        });

      if (error) throw error;
    } catch (error) {
      console.error('Error updating user connection:', error);
      toast.error("Failed to update connection status");
    }
  };

  const handleConnect = async () => {
    try {
      setConnecting(true);
      const wallets = await onboard.connectWallet();
      if (wallets[0]) {
        const address = wallets[0].accounts[0].address;
        setWalletAddress(address);
        await updateUserConnection(address);
        toast.success("Wallet connected successfully!");
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      toast.error("Failed to connect wallet");
    } finally {
      setConnecting(false);
    }
  };

  const handleDisconnect = async () => {
    const [primaryWallet] = onboard.state.get().wallets;
    if (primaryWallet) {
      await onboard.disconnectWallet({ label: primaryWallet.label });
      setWalletAddress("");
      toast.success("Wallet disconnected");
    }
  };

  return {
    walletAddress,
    connecting,
    handleConnect,
    handleDisconnect
  };
};