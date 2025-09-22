import { useActiveAccount, useActiveWallet, useDisconnect } from "thirdweb/react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function ConnectionDetails() {
  const activeAccount = useActiveAccount();
  const activeWallet = useActiveWallet();
  const { disconnect } = useDisconnect();
  const { toast } = useToast();
  const [isDisconnecting, setIsDisconnecting] = useState(false);

  if (!activeAccount) return null;

  const address = activeAccount.address;
  const shortAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;

  const handleDisconnect = async () => {
    if (!activeWallet) return;
    setIsDisconnecting(true);
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
    } finally {
      setIsDisconnecting(false);
    }
  };

  const handleViewOnExplorer = () => {
    const explorerUrl = `https://etherscan.io/address/${address}`;
    window.open(explorerUrl, '_blank');
  };

  const handleSwitchNetwork = () => {
    toast({
      title: "Network Switching",
      description: "Network switching functionality would be implemented here.",
    });
  };

  return (
    <Card className="mt-8 rounded-2xl border border-border shadow-lg p-8" data-testid="connection-details">
      <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
        <div className="w-3 h-3 bg-green-500 rounded-full mr-3 connected-indicator"></div>
        Wallet Connected
      </h3>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-foreground mb-3" data-testid="account-info-title">
            Account Information
          </h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-muted-foreground">Address</span>
              <span className="font-mono text-sm" data-testid="account-address">
                {shortAddress}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-muted-foreground">Full Address</span>
              <span className="font-mono text-xs text-muted-foreground" data-testid="full-address" title={address}>
                {address}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-muted-foreground">Network</span>
              <span className="text-foreground" data-testid="network-name">
                Ethereum Mainnet
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-border">
              <span className="text-muted-foreground">Wallet Type</span>
              <span className="text-foreground" data-testid="wallet-type">
                {activeWallet?.id || "Unknown"}
              </span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-foreground mb-3" data-testid="quick-actions-title">
            Quick Actions
          </h4>
          <div className="space-y-2">
            <Button
              onClick={handleSwitchNetwork}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2 px-4 rounded-lg font-medium transition-colors"
              data-testid="button-switch-network"
            >
              Switch Network
            </Button>
            <Button
              onClick={handleViewOnExplorer}
              variant="secondary"
              className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-2 px-4 rounded-lg font-medium transition-colors"
              data-testid="button-view-explorer"
            >
              View on Explorer
            </Button>
            <Button
              onClick={handleDisconnect}
              disabled={isDisconnecting}
              variant="destructive"
              className="w-full bg-destructive hover:bg-destructive/90 text-destructive-foreground py-2 px-4 rounded-lg font-medium transition-colors"
              data-testid="button-disconnect-detailed"
            >
              {isDisconnecting ? "Disconnecting..." : "Disconnect"}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
