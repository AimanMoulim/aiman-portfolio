'use client'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-black bg-clip-text text-transparent">
            ManAi-SecDev
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
            مطور ومُبدع
          </p>
          
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            بناء تطبيقات مبتكرة تعطي تجارب ذات معنى
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#apps" className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-blue-400 transition-all transform hover:scale-105">
              عرض تطبيقاتي
            </a>
            <a href="mailto:aiman.moulimai@gmail.com" className="px-8 py-4 rounded-full border-2 border-green-500 text-green-600 font-semibold hover:bg-green-50 transition-all">
              تواصل معي
            </a>
          </div>

          {/* Contact info */}
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>aiman.moulimai@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
