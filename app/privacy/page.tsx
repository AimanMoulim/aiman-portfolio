import Link from 'next/link'

const SECTIONS = [
  {
    title: 'البيانات التي نجمعها',
    body: 'اسم المستخدم وبيانات الحساب المستخدمة لتسجيل الدخول، ورمز المجتمع الذي تنتمي إليه على التطبيق، والرسائل والنصائح التي تكتبها داخل المجتمع، والبلاغات التي ترسلها.',
  },
  {
    title: 'الموقع الجغرافي',
    body: 'نستخدم موقعك فقط لحساب أوقات الصلاة. لا نشارك موقعك مع أي عضو آخر.',
  },
  {
    title: 'الإشعارات',
    body: 'نرسل إشعارات محلية على جهازك لتنبيهك بأوقات الصلاة. يمكنك إيقافها في أي وقت من إعدادات الهاتف.',
  },
  {
    title: 'التخزين والحماية',
    body: 'تُخزَّن البيانات في خدمات Firebase التابعة لـ Google. تُشفَّر رسائل المجتمع قبل إرسالها، وقائمة الأعضاء المحظورين تبقى على جهازك فقط.',
  },
  {
    title: 'المشاركة داخل المجتمع',
    body: 'يرى أعضاء مجتمعك اسم المستخدم والرسائل والنصائح التي تنشرها. يرى مالك المجتمع البلاغات المرسلة عن الرسائل.',
  },
  {
    title: 'الإبلاغ والحظر',
    body: 'يمكنك الضغط مطولاً على أي رسالة للإبلاغ عنها أو حظر صاحبها. المحتوى المسيء غير مسموح به.',
  },
  {
    title: 'حذف حسابك وبياناتك',
    body: 'من صفحة الملف الشخصي اختر "حذف الحساب نهائياً" لحذف حسابك ورسائلك ونتيجة اختبارك وعضويتك في المجتمع. لا يمكن التراجع عن هذا الإجراء.',
  },
  {
    title: 'التواصل',
    body: 'لأي استفسار حول الخصوصية، تواصل مع مطوّر التطبيق عبر البريد الإلكتروني المذكور في صفحة التطبيق على Google Play.',
  },
]

export const metadata = {
  title: 'سياسة الخصوصية | قوام',
  description: 'سياسة الخصوصية لتطبيق قوام',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8" dir="rtl">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/apps/qawam"
          className="mb-8 inline-flex rounded-full px-4 py-2 text-gray-600 transition-colors hover:bg-white hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          العودة إلى معلومات التطبيق
        </Link>

        <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-10">
          <header className="mb-8 border-b border-gray-200 pb-6">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">سياسة الخصوصية</h1>
            <p className="mt-3 text-gray-600">تطبيق قوام</p>
          </header>

          <div className="space-y-6">
            {SECTIONS.map((section) => (
              <section key={section.title} className="rounded-2xl bg-gray-50 p-5">
                <h2 className="mb-2 text-xl font-bold text-gray-900">{section.title}</h2>
                <p className="leading-relaxed text-gray-700">{section.body}</p>
              </section>
            ))}
          </div>
        </article>
      </div>
    </main>
  )
}
