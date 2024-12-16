const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-24">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[#F8FAFF]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at center, #E2E8F3 2px, transparent 2px)`,
          backgroundSize: '48px 48px',
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

        <button className="inline-flex items-center gap-2 bg-[#F2FF44] text-[#141413] px-6 py-3 rounded-lg font-medium hover:bg-[#E6FF00] transition-colors">
          Launch App
        </button>
      </div>
    </div>
  );
};

export default Hero;