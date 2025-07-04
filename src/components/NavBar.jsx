import React, { useState } from 'react';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    
    console.log('Searching for:', e.target.value);
  };

  const handleLogin = () => {
    
    console.log('Login clicked');
  };

  return (
    <div className="bg-neutral-50">
      
      <nav className="bg-white shadow-sm border-b border-neutral-200">
        <div className="max-w-[1345px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-neutral-800 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                    </svg>
                  </div>
                  <span className="ml-2 text-xl font-semibold text-neutral-800">TodoList</span>
                </div>
              </div>
            </div>

            
            <div className="flex items-center space-x-4">
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
                <input 
                  type="text" 
                  placeholder="Search todos..." 
                  value={searchTerm}
                  onChange={handleSearch}
                  className="pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent w-64 text-sm"
                />
              </div>

              
              <button 
                onClick={handleLogin}
                className="bg-neutral-800 cursor-pointer hover:bg-neutral-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;