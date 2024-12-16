import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { NodeDetails } from "@/components/NodeDetails";
import { LaunchNodeForm } from "@/components/LaunchNodeForm";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { WalletIcon, Crown, Bell, History } from "lucide-react";

const nodes = [
  { 
    name: 'node1', 
    status: 'running', 
    region: 'us-west1', 
    ip: '35.12.34.56', 
    type: 'n1-standard-2', 
    cost: '$0.02',
    staked: '100,000 T',
    rewards: '250 T',
    uptime: '99.9%'
  },
  { 
    name: 'node2', 
    status: 'stopped', 
    region: 'us-central1', 
    ip: '35.12.34.56', 
    type: 'e2-medium', 
    cost: '$0.01',
    staked: '75,000 T',
    rewards: '180 T',
    uptime: '95.5%'
  },
  { 
    name: 'node3', 
    status: 'running', 
    region: 'us-east1', 
    ip: '35.12.34.56', 
    type: 'n2-standard-4', 
    cost: '$0.04',
    staked: '150,000 T',
    rewards: '375 T',
    uptime: '99.8%'
  },
];

const Dashboard = () => {
  const [selectedNode, setSelectedNode] = useState<typeof nodes[0] | null>(null);
  const [walletAddress, setWalletAddress] = useState("0x1234...5678");

  const handleDisconnect = () => {
    setWalletAddress("");
  };

  const totalStaked = nodes.reduce((acc, node) => {
    const staked = parseInt(node.staked.replace(/,/g, ''));
    return acc + staked;
  }, 0);

  const totalRewards = nodes.reduce((acc, node) => {
    const rewards = parseInt(node.rewards.replace(/,/g, ''));
    return acc + rewards;
  }, 0);

  return (
    <div className="min-h-screen bg-[#0F1116] text-white p-8">
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-medium">Node Dashboard</h1>
        
        <div className="flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Launch New Node
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#1A1D24] border-[#2A2F38] text-white">
              <DialogHeader>
                <DialogTitle>Launch New Node</DialogTitle>
              </DialogHeader>
              <LaunchNodeForm />
            </DialogContent>
          </Dialog>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="border-[#2A2F38] bg-[#1A1D24] text-white hover:bg-[#2A2F38]">
                <WalletIcon className="w-4 h-4 mr-2" />
                {walletAddress ? walletAddress : "Connect Wallet"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-[#1A1D24] border-[#2A2F38] text-white">
              <DropdownMenuItem 
                onClick={handleDisconnect}
                className="hover:bg-[#2A2F38] cursor-pointer"
              >
                Disconnect
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      
      {/* Subscription Tiers */}
      <div className="mb-12">
        <h2 className="text-2xl font-medium mb-6">Subscription Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-[#1A1D24] border border-[#2A2F38] rounded-lg p-6">
          <h3 className="text-sm text-gray-400 mb-2">Total Staked</h3>
          <p className="text-4xl font-medium">{totalStaked.toLocaleString()} T</p>
        </div>
        <div className="bg-[#1A1D24] border border-[#2A2F38] rounded-lg p-6">
          <h3 className="text-sm text-gray-400 mb-2">Total Rewards</h3>
          <p className="text-4xl font-medium">{totalRewards.toLocaleString()} T</p>
        </div>
        <div className="bg-[#1A1D24] border border-[#2A2F38] rounded-lg p-6">
          <h3 className="text-sm text-gray-400 mb-2">Active Nodes</h3>
          <p className="text-4xl font-medium">{nodes.filter(n => n.status === 'running').length}</p>
        </div>
      </div>

      <div className="rounded-lg border border-[#2A2F38] overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-[#2A2F38] hover:bg-[#1A1D24]">
              <TableHead className="text-gray-400">Name</TableHead>
              <TableHead className="text-gray-400">Status</TableHead>
              <TableHead className="text-gray-400">Region</TableHead>
              <TableHead className="text-gray-400">Staked</TableHead>
              <TableHead className="text-gray-400">Rewards</TableHead>
              <TableHead className="text-gray-400">Uptime</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {nodes.map((node) => (
              <TableRow 
                key={node.name} 
                className="border-[#2A2F38] hover:bg-[#1A1D24] cursor-pointer"
                onClick={() => setSelectedNode(node)}
              >
                <TableCell>{node.name}</TableCell>
                <TableCell>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    node.status === 'running' 
                      ? 'bg-[#1E3A8A] text-blue-400' 
                      : 'bg-[#2D3748] text-gray-400'
                  }`}>
                    {node.status}
                  </span>
                </TableCell>
                <TableCell>{node.region}</TableCell>
                <TableCell>{node.staked}</TableCell>
                <TableCell>{node.rewards}</TableCell>
                <TableCell>{node.uptime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Sheet open={!!selectedNode} onOpenChange={() => setSelectedNode(null)}>
        <SheetContent className="bg-[#1A1D24] border-l-[#2A2F38] text-white w-full sm:max-w-xl">
          {selectedNode && <NodeDetails node={selectedNode} />}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Dashboard;