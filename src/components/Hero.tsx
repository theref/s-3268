import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 dot-pattern" style={{
          opacity: 0.5
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <h1 className="text-[80px] leading-[1] font-medium tracking-[-0.02em] text-[#141413] mb-8">
          Web3 SaaS<br />Platform
        </h1>
        
        <div className="max-w-[600px] mx-auto mb-12">
          <p className="text-xl text-[#141413]/80">
            Connect your wallet and start building<br />
            in the decentralized world.
          </p>
        </div>

        <button 
          onClick={() => navigate('/dashboard')}
          className="inline-flex items-center gap-2 bg-[#F2FF44] text-[#141413] px-6 py-3 rounded-lg font-medium hover:bg-[#E6FF00] transition-colors"
        >
          Launch App
        </button>
      </div>
    </div>
  );
};

export default Hero;