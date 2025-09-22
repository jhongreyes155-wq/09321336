import { useActiveAccount, useDisconnect, useActiveWallet } from "thirdweb/react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface WalletStatusProps {
  onConnect: () => void;
}

export default function WalletStatus({ onConnect }: WalletStatusProps) {
  const activeAccount = useActiveAccount();
  const activeWallet = useActiveWallet();
  const { disconnect } = useDisconnect();
  const { toast } = useToast();

  const handleDisconnect = async () => {
    if (!activeWallet) return;
    try {
      disconnect(activeWallet);
      toast({
        title: "Wallet Disconnected",
        description: "Your wallet has been disconnected successfully.",
      });
    } catch (error) {
      toast({
        title: "Disconnection Failed",
        description: "Failed to disconnect wallet. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (activeAccount) {
    const address = activeAccount.address;
    const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;

    return (
      <div className="flex items-center space-x-3" data-testid="wallet-connected">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full connected-indicator"></div>
          <span className="text-sm text-muted-foreground">Connected</span>
        </div>
        <div className="flex items-center space-x-2 bg-secondary rounded-lg px-3 py-2">
          <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
          <span className="text-sm font-medium" data-testid="wallet-address">
            {shortAddress}
          </span>
        </div>
        <button
          onClick={handleDisconnect}
          className="text-muted-foreground hover:text-destructive p-1 transition-colors"
          data-testid="button-disconnect"
          title="Disconnect wallet"
        >
          <i className="fas fa-sign-out-alt"></i>
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-3" data-testid="wallet-disconnected">
      <span className="text-muted-foreground text-sm">Not connected</span>
      <Button 
        onClick={onConnect}
        className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium"
        data-testid="button-connect-wallet"
      >
        Connect Wallet
      </Button>
    </div>
  );
}
