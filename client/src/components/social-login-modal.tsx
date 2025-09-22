import { ConnectButton } from "thirdweb/react";
import { client, wallets, socialOptions } from "@/lib/thirdweb";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface SocialLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SocialLoginModal({ isOpen, onClose }: SocialLoginModalProps) {
  const { toast } = useToast();

  const handleSocialLogin = (provider: string) => {
    toast({
      title: "Connecting...",
      description: `Connecting with ${provider}`,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg w-full p-6" data-testid="social-modal">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground flex items-center justify-between">
            Choose Login Method
            <button
              onClick={onClose}
              className="text-muted-foreground hover:text-foreground p-1"
              data-testid="button-close-social-modal"
            >
              <i className="fas fa-times"></i>
            </button>
          </DialogTitle>
        </DialogHeader>
        
        <p className="text-muted-foreground text-sm mb-6 text-center" data-testid="social-modal-description">
          Select your preferred social login method to create an in-app wallet
        </p>
        
        {/* Social Login Grid */}
        <div className="social-login-grid mb-6">
          {socialOptions.map((option) => (
            <Button
              key={option.id}
              variant="outline"
              className="bg-background hover:bg-secondary border border-border rounded-lg p-3 flex flex-col items-center space-y-2 h-auto"
              onClick={() => handleSocialLogin(option.name)}
              data-testid={`social-login-${option.id}`}
            >
              <i className={`${option.icon} ${option.color} text-xl`}></i>
              <span className="text-xs font-medium text-foreground">{option.name}</span>
            </Button>
          ))}
        </div>

        {/* Thirdweb Connect Button for In-App Wallet */}
        <div className="mb-6">
          <ConnectButton
            client={client}
            connectModal={{
              privacyPolicyUrl: "https://eyaizero-admin-template.vercel.app/",
              size: "wide",
              termsOfServiceUrl: "https://eyaizero-app.web.app",
              title: "eyaizero - Social Login",
              titleIcon: "https://eyaizero-app.web.app/logo.png",
            }}
            wallets={[wallets[0]]} // Only in-app wallet for social login
            onConnect={() => {
              toast({
                title: "Wallet Connected",
                description: "Your in-app wallet has been created and connected.",
              });
              onClose();
            }}
          />
        </div>

        <div className="pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center" data-testid="social-wallet-notice">
            Your social login will create a secure wallet that only you can access
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
