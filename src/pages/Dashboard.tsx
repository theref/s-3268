import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { NodeDetails } from "@/components/NodeDetails";
import { useState } from "react";

const nodes = [
  { name: 'node1', status: 'running', region: 'us-west1', ip: '35.12.34.56', type: 'n1-standard-2', cost: '$0.02' },
  { name: 'node2', status: 'stopped', region: 'us-central1', ip: '35.12.34.56', type: 'e2-medium', cost: '$0.01' },
  { name: 'node3', status: 'running', region: 'us-east1', ip: '35.12.34.56', type: 'n2-standard-4', cost: '$0.04' },
  { name: 'node4', status: 'running', region: 'us-west1', ip: '35.12.34.56', type: 'n1-standard-2', cost: '$0.02' },
  { name: 'node5', status: 'stopped', region: 'us-central1', ip: '35.12.34.56', type: 'e2-medium', cost: '$0.01' },
];

const Dashboard = () => {
  const [selectedNode, setSelectedNode] = useState<typeof nodes[0] | null>(null);

  return (
    <div className="min-h-screen bg-[#0F1116] text-white p-8">
      <h1 className="text-4xl font-medium mb-12">Welcome back, John</h1>
      
      <h2 className="text-2xl mb-6">Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="bg-[#1A1D24] border-[#2A2F38] p-6">
          <h3 className="text-sm text-gray-400 mb-2">Active Nodes</h3>
          <p className="text-4xl font-medium">5</p>
        </Card>
        <Card className="bg-[#1A1D24] border-[#2A2F38] p-6">
          <h3 className="text-sm text-gray-400 mb-2">Total Nodes</h3>
          <p className="text-4xl font-medium">10</p>
        </Card>
        <Card className="bg-[#1A1D24] border-[#2A2F38] p-6">
          <h3 className="text-sm text-gray-400 mb-2">Total Cost</h3>
          <p className="text-4xl font-medium">$0.00</p>
        </Card>
      </div>

      <h2 className="text-2xl mb-6">Your Nodes</h2>
      <div className="rounded-lg border border-[#2A2F38] overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-[#2A2F38] hover:bg-[#1A1D24]">
              <TableHead className="text-gray-400">Name</TableHead>
              <TableHead className="text-gray-400">Status</TableHead>
              <TableHead className="text-gray-400">Region</TableHead>
              <TableHead className="text-gray-400">IP</TableHead>
              <TableHead className="text-gray-400">Type</TableHead>
              <TableHead className="text-gray-400">Cost</TableHead>
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
                <TableCell>{node.ip}</TableCell>
                <TableCell>
                  <span className="px-3 py-1 rounded-full bg-[#2D3748] text-gray-300">
                    {node.type}
                  </span>
                </TableCell>
                <TableCell>{node.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Sheet open={!!selectedNode} onOpenChange={() => setSelectedNode(null)}>
        <SheetContent className="bg-[#1A1D24] border-l-[#2A2F38] text-white w-full sm:max-w-xl">
          <SheetHeader>
            <SheetTitle className="text-white">Node Details</SheetTitle>
          </SheetHeader>
          {selectedNode && <NodeDetails node={selectedNode} />}
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Dashboard;