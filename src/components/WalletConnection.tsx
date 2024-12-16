import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { WalletIcon } from "lucide-react";
import { useWalletConnection } from "@/hooks/useWalletConnection";

export const WalletConnection = () => {
  const { walletAddress, connecting, handleConnect, handleDisconnect } = useWalletConnection();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="outline" 
          className="border-[#2A2F38] bg-[#1A1D24] text-white hover:bg-[#2A2F38]"
          onClick={!walletAddress ? handleConnect : undefined}
          disabled={connecting}
        >
          <WalletIcon className="w-4 h-4 mr-2" />
          {connecting ? "Connecting..." : walletAddress 
            ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` 
            : "Connect Wallet"}
        </Button>
      </DropdownMenuTrigger>
      {walletAddress && (
        <DropdownMenuContent className="bg-[#1A1D24] border-[#2A2F38] text-white">
          <DropdownMenuItem 
            onClick={handleDisconnect}
            className="hover:bg-[#2A2F38] cursor-pointer"
          >
            Disconnect
          </DropdownMenuItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};