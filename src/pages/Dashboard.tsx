import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { NodeDetails } from "@/components/NodeDetails";
import { LaunchNodeForm } from "@/components/LaunchNodeForm";
import { SubscriptionTiers } from "@/components/SubscriptionTiers";
import { WalletConnection } from "@/components/WalletConnection";
import { NodeStats } from "@/components/NodeStats";

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

          <WalletConnection />
        </div>
      </div>

      <SubscriptionTiers />
      <NodeStats nodes={nodes} />

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
