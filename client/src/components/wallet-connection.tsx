import { externalWallets } from "@/lib/thirdweb";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface WalletConnectionProps {
  onWalletModalOpen: () => void;
  onSocialModalOpen: () => void;
}

export default function WalletConnection({ onWalletModalOpen, onSocialModalOpen }: WalletConnectionProps) {
  return (
    <Card className="rounded-2xl border border-border shadow-lg p-8" data-testid="wallet-connection-card">
      <h3 className="text-2xl font-bold text-foreground mb-6 text-center" data-testid="wallet-connection-title">
        Choose Your Wallet
      </h3>
      
      {/* External Wallets Section */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center" data-testid="external-wallets-title">
          <i className="fas fa-external-link-alt text-muted-foreground mr-2"></i>
          External Wallets
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {externalWallets.map((wallet) => (
            <div
              key={wallet.id}
              className="wallet-option bg-background border border-border rounded-xl p-4 cursor-pointer hover:border-primary transition-all duration-200"
              onClick={onWalletModalOpen}
              data-testid={`wallet-option-${wallet.id.replace(/\./g, '-')}`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${wallet.color} rounded-lg flex items-center justify-center`}>
                  <i className={`${wallet.icon} text-white`}></i>
                </div>
                <div>
                  <h5 className="font-medium text-foreground">{wallet.name}</h5>
                  <p className="text-xs text-muted-foreground">{wallet.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* In-App Wallet Section */}
      <div className="border-t border-border pt-8">
        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center" data-testid="social-login-title">
          <i className="fas fa-user-circle text-muted-foreground mr-2"></i>
          In-App Wallet (Social Login)
        </h4>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6">
          <p className="text-sm text-muted-foreground mb-4 text-center" data-testid="social-login-description">
            Connect instantly using your existing social accounts - no need to manage private keys or seed phrases.
          </p>
          <Button
            onClick={onSocialModalOpen}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            data-testid="button-social-login"
          >
            Continue with Social Login
          </Button>
        </div>
      </div>
    </Card>
  );
}
