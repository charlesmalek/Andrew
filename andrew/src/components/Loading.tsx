import { Truck } from "lucide-react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-subtle">
      <div className="text-center">
        <div className="bg-primary p-4 rounded-lg mx-auto mb-4 w-fit">
          <Truck className="h-12 w-12 text-primary-foreground animate-pulse" />
        </div>
        <h2 className="heading-sm text-primary mb-2">Andrew Distribution</h2>
        <p className="caption text-foreground">Loading...</p>
        
        {/* Loading Animation */}
        <div className="mt-6 flex justify-center">
          <div className="flex space-x-2">
            <div className="w-2 h-2 bg-accent-coral rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2 h-2 bg-accent-coral rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2 h-2 bg-accent-coral rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading; 