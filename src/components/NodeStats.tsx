import { Card } from "@/components/ui/card";

interface NodeStatsProps {
  nodes: any[];
}

export const NodeStats = ({ nodes }: NodeStatsProps) => {
  const totalStaked = nodes.reduce((acc, node) => {
    const staked = parseInt(node.staked.replace(/,/g, ''));
    return acc + staked;
  }, 0);

  const totalRewards = nodes.reduce((acc, node) => {
    const rewards = parseInt(node.rewards.replace(/,/g, ''));
    return acc + rewards;
  }, 0);

  const activeNodes = nodes.filter(n => n.status === 'running').length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <Card className="bg-[#1A1D24] border-[#2A2F38] p-6">
        <h3 className="text-sm text-gray-400 mb-2">Total Staked</h3>
        <p className="text-4xl font-medium text-white">{totalStaked.toLocaleString()} T</p>
      </Card>
      <Card className="bg-[#1A1D24] border-[#2A2F38] p-6">
        <h3 className="text-sm text-gray-400 mb-2">Total Rewards</h3>
        <p className="text-4xl font-medium text-white">{totalRewards.toLocaleString()} T</p>
      </Card>
      <Card className="bg-[#1A1D24] border-[#2A2F38] p-6">
        <h3 className="text-sm text-gray-400 mb-2">Active Nodes</h3>
        <p className="text-4xl font-medium text-white">{activeNodes}</p>
      </Card>
    </div>
  );
};