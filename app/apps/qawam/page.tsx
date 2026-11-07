import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'قوام | تطبيقاتي',
  description: 'معلومات عن تطبيق قوام الإسلامي',
}

export default function QawamPage() {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8" dir="rtl">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/#apps"
          className="mb-8 inline-flex rounded-full px-4 py-2 text-gray-600 transition-colors hover:bg-white hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          العودة إلى التطبيقات
        </Link>

        <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-10">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/icon.png"
              alt="شعار تطبيق قوام"
              width={128}
              height={128}
              className="mb-6 rounded-2xl"
            />
            <h1 className="mb-4 text-4xl font-bold text-gray-900">قوام</h1>
            <p className="max-w-xl text-lg leading-relaxed text-gray-600">
              تطبيق إسلامي يساعد الأصدقاء على التواصل داخل مجتمع آمن ومفيد.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-blue-50 p-6">
              <h2 className="mb-3 text-xl font-bold text-gray-900">عن التطبيق</h2>
              <p className="leading-relaxed text-gray-700">
                يتيح قوام لأعضاء المجتمع مشاركة الرسائل والنصائح، مع أدوات للإبلاغ عن
                المحتوى المسيء وحظر المستخدمين.
              </p>
            </div>
            <div className="rounded-2xl bg-green-50 p-6">
              <h2 className="mb-3 text-xl font-bold text-gray-900">الخصوصية</h2>
              <p className="leading-relaxed text-gray-700">
                نوضح في سياسة الخصوصية البيانات التي يجمعها التطبيق وكيفية استخدامها
                وحمايتها.
              </p>
              <Link
                href="/qawwam/privacy"
                className="mt-5 inline-flex rounded-full bg-green-600 px-5 py-2.5 font-semibold text-white transition-colors hover:bg-green-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-600 focus-visible:ring-offset-2"
              >
                قراءة سياسة الخصوصية
              </Link>
            </div>
          </div>
        </article>
      </div>
    </main>
  )
}
