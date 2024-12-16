import { Card } from "@/components/ui/card";

interface NodeStatsProps {
  staked: string;
  rewards: string;
  uptime: string;
  region: string;
}

export const NodeStats = ({ staked, rewards, uptime, region }: NodeStatsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card className="bg-[#242830] border-[#2A2F38] p-4">
        <h3 className="text-sm text-gray-400 mb-2">Staked Amount</h3>
        <p className="text-2xl font-medium">{staked}</p>
      </Card>
      <Card className="bg-[#242830] border-[#2A2F38] p-4">
        <h3 className="text-sm text-gray-400 mb-2">Total Rewards</h3>
        <p className="text-2xl font-medium">{rewards}</p>
      </Card>
      <Card className="bg-[#242830] border-[#2A2F38] p-4">
        <h3 className="text-sm text-gray-400 mb-2">Uptime</h3>
        <p className="text-2xl font-medium">{uptime}</p>
      </Card>
      <Card className="bg-[#242830] border-[#2A2F38] p-4">
        <h3 className="text-sm text-gray-400 mb-2">Region</h3>
        <p className="text-2xl font-medium">{region}</p>
      </Card>
    </div>
  );
};