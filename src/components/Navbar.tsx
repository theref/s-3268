const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 px-6 py-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-medium text-[#141413]">Web3 SaaS</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#docs" className="text-[#141413] hover:text-[#141413]/80 transition-colors">Docs</a>
        </div>

        <button className="bg-[#F2FF44] text-[#141413] px-4 py-2 rounded-lg font-medium hover:bg-[#E6FF00] transition-colors">
          Connect Wallet
        </button>
      </div>
    </nav>
  );
};

export default Navbar;