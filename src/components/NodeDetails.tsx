import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { NodeStats } from "./node-details/NodeStats";
import { NodeMonitoringChart } from "./node-details/NodeMonitoringChart";
import { NodeControls } from "./node-details/NodeControls";

// Sample monitoring data
const monitoringData = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  cpu: Math.floor(Math.random() * 60) + 20,
  memory: Math.floor(Math.random() * 40) + 30,
}));

interface NodeDetailsProps {
  node: {
    id: string;
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
  onNodeDeleted?: () => void;
}

export function NodeDetails({ node, onNodeDeleted }: NodeDetailsProps) {
  // Fetch user subscription level
  const { data: userData } = useQuery({
    queryKey: ['user-subscription'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');
      
      const { data: userData } = await supabase
        .from('users')
        .select('subscription_level')
        .eq('id', user.id)
        .single();
      
      return userData;
    }
  });

  const isPremium = userData?.subscription_level === 'premium' || userData?.subscription_level === 'enterprise';

  return (
    <div className="space-y-6 pt-6">
      <NodeStats
        staked={node.staked}
        rewards={node.rewards}
        uptime={node.uptime}
        region={node.region}
      />

      <NodeMonitoringChart
        monitoringData={monitoringData}
        isPremium={isPremium}
      />

      <NodeControls
        nodeId={node.id}
        status={node.status}
        onNodeDeleted={onNodeDeleted}
      />
    </div>
  );
}