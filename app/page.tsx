'use client'

import { useState } from 'react'

export default function HomePage() {
  const [isSigningIn, setIsSigningIn] = useState(false)

  const handleSignIn = async () => {
    setIsSigningIn(true)
    // Simulate sign in process
    setTimeout(() => {
      alert('Welcome to the staging environment! Test away!')
      setIsSigningIn(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">6FB-AI</span>{' '}
                  <span className="block text-blue-600 xl:inline">Staging</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Transform your barbershop with AI-powered business optimization. Get intelligent insights, 
                  automated recommendations, and strategic guidance from 7 specialized AI agents.
                </p>
                
                {/* Key Features */}
                <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-md bg-blue-500 text-white">
                        🎯
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Strategic Business Coaching</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-md bg-green-500 text-white">
                        💰
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Revenue Optimization</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-md bg-purple-500 text-white">
                        📈
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Growth & Client Acquisition</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-md bg-red-500 text-white">
                        ⚙️
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">Operations Efficiency</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-8 sm:mt-10">
                  <button
                    onClick={handleSignIn}
                    disabled={isSigningIn}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                  >
                    {isSigningIn ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Launching system...
                      </>
                    ) : (
                      'Launch AI System'
                    )}
                  </button>
                  
                  <p className="mt-3 text-sm text-gray-500 text-center">
                    Staging Environment • Test & Development
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
        
        {/* Right side illustration/stats */}
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gradient-to-r from-blue-600 to-purple-600 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <div className="text-center text-white p-8">
              <h2 className="text-2xl font-bold mb-6">Real Results</h2>
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">+23%</div>
                  <div className="text-sm opacity-90">Monthly Revenue Growth</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">94%</div>
                  <div className="text-sm opacity-90">Client Retention Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl font-bold">87%</div>
                  <div className="text-sm opacity-90">Capacity Optimization</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section - Agent Preview */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Meet Your AI Agent Team
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Seven specialized AI agents working together to optimize every aspect of your barbershop business.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-2xl mx-auto">
                🎯
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Master Coach</h3>
              <p className="mt-2 text-base text-gray-500">Strategic guidance & coordination</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 text-2xl mx-auto">
                💰
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Financial Agent</h3>
              <p className="mt-2 text-base text-gray-500">Revenue optimization & analysis</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600 text-2xl mx-auto">
                📈
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Growth Agent</h3>
              <p className="mt-2 text-base text-gray-500">Expansion & scalability planning</p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-600 text-2xl mx-auto">
                ⚙️
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Operations Agent</h3>
              <p className="mt-2 text-base text-gray-500">Efficiency & workflow optimization</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-500">+ 3 more specialized agents working for your success</p>
          </div>
        </div>
      </div>
    </div>
  )
}