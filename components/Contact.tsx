'use client'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 via-green-50 to-red-50">
      <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-900">
          دعونا <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">نتواصل</span>
        </h2>
        
        <p className="text-xl text-gray-600 mb-12">
          هل لديك فكرة أم تريد التعاون؟ أود أن أسمع منك!
        </p>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email */}
          <a href="mailto:aiman.moulimai@gmail.com" className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all transform hover:scale-105">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 text-white flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">البريد الإلكتروني</h3>
            <p className="text-gray-600 break-all">aiman.moulimai@gmail.com</p>
          </a>

        </div>

        {/* Direct Email Button */}
        <a href="mailto:aiman.moulimai@gmail.com" className="inline-block px-8 py-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-red-300 transition-all transform hover:scale-105">
          أرسل لي بريداً
        </a>
      </div>
    </section>
  )
}
