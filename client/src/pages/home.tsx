import { useState } from "react";
import WalletConnection from "@/components/wallet-connection";
import WalletStatus from "@/components/wallet-status";
import WalletModal from "@/components/wallet-modal";
import SocialLoginModal from "@/components/social-login-modal";
import ConnectionDetails from "@/components/connection-details";
import { useActiveAccount } from "thirdweb/react";

export default function Home() {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isSocialModalOpen, setIsSocialModalOpen] = useState(false);
  const activeAccount = useActiveAccount();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <i className="fas fa-cube text-primary-foreground text-sm"></i>
              </div>
              <h1 className="text-xl font-bold text-foreground" data-testid="app-title">
                eyaizero
              </h1>
            </div>
            
            <WalletStatus onConnect={() => setIsWalletModalOpen(true)} />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4" data-testid="hero-title">
            Connect Your Wallet
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto" data-testid="hero-description">
            Choose from a variety of wallet options to securely connect to the decentralized web. 
            Support for both external wallets and social login through in-app wallets.
          </p>
          
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm" data-testid="feature-card-security">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-blue-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Secure Connection</h3>
              <p className="text-sm text-muted-foreground">
                End-to-end encrypted wallet connections with industry-standard security protocols.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm" data-testid="feature-card-social">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-users text-purple-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Social Login</h3>
              <p className="text-sm text-muted-foreground">
                Connect using your favorite social platforms - no seed phrases required.
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-xl border border-border shadow-sm" data-testid="feature-card-wallets">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-wallet text-green-600 text-xl"></i>
              </div>
              <h3 className="font-semibold text-foreground mb-2">Multiple Wallets</h3>
              <p className="text-sm text-muted-foreground">
                Support for MetaMask, Coinbase, Rainbow, and many other popular wallet providers.
              </p>
            </div>
          </div>
        </div>

        {/* Wallet Connection Component */}
        <WalletConnection 
          onWalletModalOpen={() => setIsWalletModalOpen(true)}
          onSocialModalOpen={() => setIsSocialModalOpen(true)}
        />

        {/* Connection Details (shown when connected) */}
        {activeAccount && <ConnectionDetails />}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <a 
                href="https://eyaizero-admin-template.vercel.app/" 
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                data-testid="link-privacy"
              >
                Privacy Policy
              </a>
              <a 
                href="https://eyaizero-app.web.app" 
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                data-testid="link-terms"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                data-testid="link-support"
              >
                Support
              </a>
            </div>
            <div className="text-muted-foreground text-sm" data-testid="footer-credit">
              Powered by thirdweb • Built with ❤️
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <WalletModal 
        isOpen={isWalletModalOpen}
        onClose={() => setIsWalletModalOpen(false)}
      />
      <SocialLoginModal 
        isOpen={isSocialModalOpen}
        onClose={() => setIsSocialModalOpen(false)}
      />
    </div>
  );
}
