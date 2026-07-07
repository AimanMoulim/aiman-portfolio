'use client'

import Image from 'next/image'

interface App {
  isImage: any
  id: string
  name: string
  description: string
  icon: string
  color: string
  status: string
}

const apps: App[] = [
  {
    id: '1',
    name: 'قوام',
    description: 'تطبيق إسلامي يساعد الأصدقاء على التواصل',
    icon: '/icon.png',
    color: 'white',
    status: 'تم إطلاقه',
    isImage: true
  }
]

export default function Apps() {
  return (
    <section id="apps" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
            <span className="bg-black bg-clip-text text-transparent">تطبيقاتي</span>
          </h2>
          <p className="text-xl text-gray-600">مشاريع أطورها بشغف</p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app, index) => (
            <div
              key={app.id}
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="h-full rounded-2xl bg-white p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-200 transform hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${app.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform overflow-hidden`}>
                  {app.isImage ? (
                    <Image
                      src={app.icon}
                      alt={app.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-3xl text-white">{app.icon}</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {app.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-base mb-6 leading-relaxed">
                  {app.description}
                </p>

                {/* Status Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm font-semibold">
                    {app.status}
                  </span>
                  <button className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold hover:shadow-lg transition-all transform hover:scale-105 opacity-0 group-hover:opacity-100">
                    معرفة المزيد
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mt-16 text-center">
          <div className="inline-block animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-gray-600 text-lg">
              المزيد من التطبيقات قريباً... 🚀
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
