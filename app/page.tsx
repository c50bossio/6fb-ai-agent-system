export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">6FB-AI</span>
            <span className="block text-blue-600">Staging</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Transform your barbershop with AI-powered business optimization.
          </p>
          <div className="mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg">
              Launch AI System
            </button>
            <p className="mt-3 text-sm text-gray-500">
              Staging Environment • Test & Development
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}