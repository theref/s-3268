import { Button } from "@/components/ui/button";
import { History, Crown, Bell, Archive } from "lucide-react";

export const SubscriptionTiers = () => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-medium mb-6">Subscription Tiers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#1A1D24] border border-[#2A2F38] rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <History className="w-5 h-5 text-blue-400" />
            <h3 className="text-xl font-medium">Basic</h3>
          </div>
          <ul className="space-y-3 text-gray-400 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Launch nodes (0.1 ETH per node)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Last 24 hours monitoring
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Basic node management
            </li>
          </ul>
          <p className="text-sm text-gray-500">Current Plan</p>
        </div>

        <div className="bg-[#1A1D24] border border-[#2A2F38] rounded-lg p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-yellow-500 text-black text-xs px-3 py-1 transform rotate-45 translate-x-8 translate-y-4">
            PREMIUM
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Crown className="w-5 h-5 text-yellow-500" />
            <h3 className="text-xl font-medium">Premium</h3>
          </div>
          <ul className="space-y-3 text-gray-400 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> All Basic features
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Complete monitoring history
            </li>
            <li className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-yellow-500" /> Email alerts for node issues
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Priority support
            </li>
          </ul>
          <Button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400">
            Upgrade Now
          </Button>
        </div>

        <div className="bg-[#1A1D24] border border-[#2A2F38] rounded-lg p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-3 py-1 transform rotate-45 translate-x-8 translate-y-4">
            ENTERPRISE
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Archive className="w-5 h-5 text-blue-400" />
            <h3 className="text-xl font-medium">Enterprise</h3>
          </div>
          <ul className="space-y-3 text-gray-400 mb-6">
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> All Premium features
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Encrypted node backups on Arweave
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> Automated recovery
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-400">✓</span> 24/7 dedicated support
            </li>
          </ul>
          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400">
            Contact Sales
          </Button>
        </div>
      </div>
    </div>
  );
};