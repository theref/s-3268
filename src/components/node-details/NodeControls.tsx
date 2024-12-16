import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Power, RefreshCw, Terminal, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface NodeControlsProps {
  nodeId: string;
  status: string;
  onNodeDeleted?: () => void;
}

export const NodeControls = ({ nodeId, status, onNodeDeleted }: NodeControlsProps) => {
  const [isRestarting, setIsRestarting] = useState(false);

  const handleRestart = async () => {
    setIsRestarting(true);
    try {
      await supabase
        .from('nodes')
        .update({ status: 'running' })
        .eq('id', nodeId);
      toast.success('Node restarted successfully');
    } catch (error) {
      toast.error('Failed to restart node');
    } finally {
      setIsRestarting(false);
    }
  };

  const handleDelete = async () => {
    try {
      await supabase
        .from('nodes')
        .delete()
        .eq('id', nodeId);
      toast.success('Node deleted successfully');
      onNodeDeleted?.();
    } catch (error) {
      toast.error('Failed to delete node');
    }
  };

  return (
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
            status === 'running' ? 'text-red-500 hover:text-red-400' : 'text-green-500 hover:text-green-400'
          }`}
        >
          <Power className="mr-2 h-4 w-4" />
          {status === 'running' ? 'Stop Node' : 'Start Node'}
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
              <AlertDialogAction 
                className="bg-red-500 hover:bg-red-600 text-white"
                onClick={handleDelete}
              >
                Delete
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};