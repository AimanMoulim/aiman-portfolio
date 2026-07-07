'use client'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <span className="font-bold text-gray-900 hidden sm:inline">Aiman</span>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="#apps" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
            التطبيقات
          </a>
          <a href="#contact" className="text-gray-600 hover:text-green-600 font-medium transition-colors">
            تواصل
          </a>
          <a href="mailto:aiman.moulimai@gmail.com" className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-blue-300 transition-all transform hover:scale-105">
            بريد
          </a>
        </div>
      </nav>
    </header>
  )
}
