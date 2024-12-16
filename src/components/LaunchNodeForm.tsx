import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { HelpCircle } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface FormData {
  stakeSize: string;
  apiKey: string;
  location: string;
}

const locations = [
  { id: "nyc1", name: "New York" },
  { id: "sfo2", name: "San Francisco" },
  { id: "ams3", name: "Amsterdam" },
  { id: "sgp1", name: "Singapore" },
  { id: "lon1", name: "London" },
];

export const LaunchNodeForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<FormData>({
    defaultValues: {
      stakeSize: "",
      apiKey: "",
      location: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    try {
      // Here you would typically make an API call to launch the node
      console.log("Launching node with data:", data);
      toast.success("Node launch initiated! This will cost 0.1 ETH. Please confirm the transaction in your wallet.");
    } catch (error) {
      toast.error("Failed to launch node. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 mb-6">
          <p className="text-sm text-blue-400">
            Launching a node requires a one-time payment of 0.1 ETH. Basic tier includes 24h monitoring. 
            <span className="block mt-1">
              Upgrade to premium for full monitoring history and email alerts.
            </span>
          </p>
        </div>

        <FormField
          control={form.control}
          name="stakeSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stake Size (T Tokens)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  min="100000"
                  placeholder="100000"
                  className="bg-[#1E2128] border-[#2A2F38]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="apiKey"
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center gap-2">
                <FormLabel>Digital Ocean API Key</FormLabel>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#1A1D24] border-[#2A2F38] text-white">
                      <p>You can generate an API key in your Digital Ocean account settings.</p>
                      <a 
                        href="https://docs.digitalocean.com/reference/api/create-personal-access-token/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 block mt-1"
                      >
                        Learn how to create an API key
                      </a>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <FormControl>
                <Input
                  {...field}
                  type="password"
                  placeholder="Enter your API key"
                  className="bg-[#1E2128] border-[#2A2F38]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="bg-[#1E2128] border-[#2A2F38]">
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="bg-[#1A1D24] border-[#2A2F38]">
                  {locations.map((location) => (
                    <SelectItem 
                      key={location.id} 
                      value={location.id}
                      className="text-white focus:bg-[#2A2F38] focus:text-white"
                    >
                      {location.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? "Launching..." : "Launch Node"}
        </Button>
      </form>
    </Form>
  );
};
