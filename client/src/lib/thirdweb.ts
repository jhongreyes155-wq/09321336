import { createThirdwebClient } from "thirdweb";
import { inAppWallet, createWallet } from "thirdweb/wallets";

// Create thirdweb client with your client ID
export const client = createThirdwebClient({
  clientId: import.meta.env.VITE_THIRDWEB_CLIENT_ID || "your-client-id-here",
});

// Define available wallets
export const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "telegram",
        "farcaster",
        "email",
        "x",
        "passkey",
        "phone",
        "github",
        "tiktok",
        "coinbase",
        "guest",
        "facebook",
        "line",
        "twitch",
        "steam",
        "apple",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];

// External wallets configuration
export const externalWallets = [
  {
    id: "io.metamask",
    name: "MetaMask",
    description: "Browser extension",
    icon: "fab fa-firefox",
    color: "bg-orange-500",
  },
  {
    id: "com.coinbase.wallet",
    name: "Coinbase Wallet",
    description: "Mobile & extension",
    icon: "fab fa-bitcoin",
    color: "bg-blue-600",
  },
  {
    id: "me.rainbow",
    name: "Rainbow",
    description: "Mobile wallet",
    icon: "fas fa-rainbow",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
  },
  {
    id: "io.rabby",
    name: "Rabby",
    description: "Browser extension",
    icon: "fas fa-rabbit",
    color: "bg-indigo-600",
  },
  {
    id: "io.zerion.wallet",
    name: "Zerion",
    description: "Mobile & web",
    icon: "fas fa-circle",
    color: "bg-black",
  },
];

// Social login options configuration
export const socialOptions = [
  {
    id: "google",
    name: "Google",
    icon: "fab fa-google",
    color: "text-red-500",
  },
  {
    id: "discord",
    name: "Discord",
    icon: "fab fa-discord",
    color: "text-indigo-500",
  },
  {
    id: "telegram",
    name: "Telegram",
    icon: "fab fa-telegram",
    color: "text-blue-500",
  },
  {
    id: "x",
    name: "Twitter",
    icon: "fab fa-twitter",
    color: "text-blue-400",
  },
  {
    id: "github",
    name: "GitHub",
    icon: "fab fa-github",
    color: "text-gray-800",
  },
  {
    id: "apple",
    name: "Apple",
    icon: "fab fa-apple",
    color: "text-gray-800",
  },
  {
    id: "email",
    name: "Email",
    icon: "fas fa-envelope",
    color: "text-gray-600",
  },
  {
    id: "phone",
    name: "Phone",
    icon: "fas fa-phone",
    color: "text-green-500",
  },
];
