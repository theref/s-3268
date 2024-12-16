import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface NodeMonitoringChartProps {
  monitoringData: Array<{ time: string; cpu: number; memory: number; }>;
  isPremium: boolean;
}

export const NodeMonitoringChart = ({ monitoringData, isPremium }: NodeMonitoringChartProps) => {
  return (
    <div className="relative">
      {!isPremium && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A1D24] z-10 flex items-end justify-center pb-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400">
                <Crown className="w-4 h-4 mr-2" />
                Upgrade to Premium
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#1A1D24] border-[#2A2F38] text-white">
              <DialogHeader>
                <DialogTitle>Premium Features</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 mt-4">
                <div className="flex items-start gap-3">
                  <Crown className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-medium">Full Monitoring History</h4>
                    <p className="text-sm text-gray-400">Access complete historical data and trends</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Crown className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-medium">Email Alerts</h4>
                    <p className="text-sm text-gray-400">Get notified when your node needs attention</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Crown className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-medium">Advanced Analytics</h4>
                    <p className="text-sm text-gray-400">Deep insights into node performance</p>
                  </div>
                </div>
                <Button className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 mt-4">
                  Upgrade Now
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      )}
      <div className="h-[200px] mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={isPremium ? monitoringData : monitoringData.slice(-24)}>
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
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};