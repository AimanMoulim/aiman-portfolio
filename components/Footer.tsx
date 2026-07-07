'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center mb-3">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <p className="text-gray-600">بناء تطبيقات رائعة</p>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center">
            <div className="text-center">
              <h4 className="font-bold text-gray-900 mb-4">روابط سريعة</h4>
              <div className="space-y-2">
                <a href="#apps" className="block text-gray-600 hover:text-blue-600 transition-colors">التطبيقات</a>
                <a href="#contact" className="block text-gray-600 hover:text-green-600 transition-colors">تواصل</a>
                <a href="mailto:aiman.moulimai@gmail.com" className="block text-gray-600 hover:text-red-600 transition-colors">بريد</a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center md:justify-end gap-4">
           
            <a href="mailto:aiman.moulimai@gmail.com" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-green-500 text-gray-700 hover:text-white flex items-center justify-center transition-all transform hover:scale-110">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">
            © {currentYear} manAI-SecDev جميع الحقوق محفوظة. <br />
          </p>
        </div>
      </div>
    </footer>
  )
}
