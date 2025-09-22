import { useState } from "react";
import { ConnectButton } from "thirdweb/react";
import { client, wallets, externalWallets } from "@/lib/thirdweb";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface WalletModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WalletModal({ isOpen, onClose }: WalletModalProps) {
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  const handleWalletConnect = (walletId: string) => {
    setIsConnecting(true);
    toast({
      title: "Connecting...",
      description: `Attempting to connect to ${walletId}`,
    });
    
    // The actual connection will be handled by thirdweb's ConnectButton
    setTimeout(() => {
      setIsConnecting(false);
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full p-6" data-testid="wallet-modal">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground flex items-center justify-between">
            Connect Wallet
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground p-1"
              data-testid="button-close-modal"
            >
              <i className="fas fa-times"></i>
            </button>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {externalWallets.slice(0, 2).map((wallet) => (
            <div
              key={wallet.id}
              className="wallet-option bg-background border border-border rounded-lg p-4 cursor-pointer hover:border-primary transition-all"
              onClick={() => handleWalletConnect(wallet.name)}
              data-testid={`modal-wallet-${wallet.id.replace(/\./g, '-')}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 ${wallet.color} rounded-lg flex items-center justify-center`}>
                    <i className={`${wallet.icon} text-white text-sm`}></i>
                  </div>
                  <span className="font-medium text-foreground">{wallet.name}</span>
                </div>
                <i className="fas fa-arrow-right text-muted-foreground"></i>
              </div>
            </div>
          ))}
          
          {/* Thirdweb Connect Button */}
          <div className="pt-4">
            <ConnectButton
              client={client}
              connectModal={{
                privacyPolicyUrl: "https://eyaizero-admin-template.vercel.app/",
                size: "compact",
                termsOfServiceUrl: "https://eyaizero-app.web.app",
                title: "eyaizero",
                titleIcon: "https://eyaizero-app.web.app/logo.png",
              }}
              wallets={wallets}
              onConnect={() => {
                toast({
                  title: "Wallet Connected",
                  description: "Your wallet has been connected successfully.",
                });
                onClose();
              }}
            />
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center" data-testid="terms-notice">
            By connecting your wallet, you agree to our{" "}
            <a 
              href="https://eyaizero-app.web.app" 
              className="text-primary hover:underline"
              data-testid="link-terms-modal"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a 
              href="https://eyaizero-admin-template.vercel.app/" 
              className="text-primary hover:underline"
              data-testid="link-privacy-modal"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
