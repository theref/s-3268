import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Power, RefreshCw, Terminal, Trash2 } from "lucide-react";
import { useState } from "react";

// Sample monitoring data
const monitoringData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  cpu: Math.floor(Math.random() * 60) + 20,
  memory: Math.floor(Math.random() * 40) + 30,
  rewards: Math.floor(Math.random() * 10) + 5,
}));

interface NodeDetailsProps {
  node: {
    name: string;
    status: string;
    region: string;
    ip: string;
    type: string;
    cost: string;
    staked: string;
    rewards: string;
    uptime: string;
  };
}

export function NodeDetails({ node }: NodeDetailsProps) {
  const [isRestarting, setIsRestarting] = useState(false);

  const handleRestart = () => {
    setIsRestarting(true);
    setTimeout(() => setIsRestarting(false), 2000);
  };

  return (
    <div className="space-y-6 pt-6">
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-[#242830] border-[#2A2F38] p-4">
          <h3 className="text-sm text-gray-400 mb-2">Staked Amount</h3>
          <p className="text-2xl font-medium">{node.staked}</p>
        </Card>
        <Card className="bg-[#242830] border-[#2A2F38] p-4">
          <h3 className="text-sm text-gray-400 mb-2">Total Rewards</h3>
          <p className="text-2xl font-medium">{node.rewards}</p>
        </Card>
        <Card className="bg-[#242830] border-[#2A2F38] p-4">
          <h3 className="text-sm text-gray-400 mb-2">Uptime</h3>
          <p className="text-2xl font-medium">{node.uptime}</p>
        </Card>
        <Card className="bg-[#242830] border-[#2A2F38] p-4">
          <h3 className="text-sm text-gray-400 mb-2">Region</h3>
          <p className="text-2xl font-medium">{node.region}</p>
        </Card>
      </div>

      <div className="h-[200px] mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={monitoringData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2A2F38" />
            <XAxis dataKey="time" stroke="#828179" />
            <YAxis stroke="#828179" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#242830', 
                border: '1px solid #2A2F38',
                borderRadius: '8px',
                color: '#fff'
              }} 
            />
            <Line type="monotone" dataKey="cpu" name="CPU Usage" stroke="#3B82F6" strokeWidth={2} />
            <Line type="monotone" dataKey="memory" name="Memory Usage" stroke="#10B981" strokeWidth={2} />
            <Line type="monotone" dataKey="rewards" name="Rewards/Hour" stroke="#F2FF44" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-4 mt-6">
        <h3 className="text-lg font-medium">Management Controls</h3>
        <div className="grid grid-cols-2 gap-4">
          <Button 
            variant="outline" 
            className="w-full bg-[#242830] border-[#2A2F38] hover:bg-[#2A2F38]"
            onClick={handleRestart}
            disabled={isRestarting}
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${isRestarting ? 'animate-spin' : ''}`} />
            Restart Node
          </Button>
          <Button 
            variant="outline" 
            className="w-full bg-[#242830] border-[#2A2F38] hover:bg-[#2A2F38]"
          >
            <Terminal className="mr-2 h-4 w-4" />
            Console
          </Button>
          <Button 
            variant="outline" 
            className={`w-full bg-[#242830] border-[#2A2F38] hover:bg-[#2A2F38] ${
              node.status === 'running' ? 'text-red-500 hover:text-red-400' : 'text-green-500 hover:text-green-400'
            }`}
          >
            <Power className="mr-2 h-4 w-4" />
            {node.status === 'running' ? 'Stop Node' : 'Start Node'}
          </Button>
          
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button 
                variant="outline" 
                className="w-full bg-[#242830] border-[#2A2F38] hover:bg-[#2A2F38] text-red-500 hover:text-red-400"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Delete Node
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-[#1A1D24] border-[#2A2F38] text-white">
              <AlertDialogHeader>
                <AlertDialogTitle>Delete Node</AlertDialogTitle>
                <AlertDialogDescription className="text-gray-400">
                  Are you sure you want to delete this node? This will unstake your T tokens and stop earning rewards.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-[#242830] border-[#2A2F38] hover:bg-[#2A2F38] text-white">
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction className="bg-red-500 hover:bg-red-600 text-white">
                  Delete
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
}