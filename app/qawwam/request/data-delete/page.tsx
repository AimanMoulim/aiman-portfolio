'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'

const CONTACT_EMAIL = 'aiman.moulimai@gmail.com'
const EMAIL_SUBJECT = 'demande de suppression des données utilisateur'

export default function DataDeleteRequestPage() {
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const body = `Email de l'utilisateur : ${email}\n\nDétails de la demande de suppression :\n${details}`
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
  }

  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8" dir="rtl">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/qawwam/request"
          className="mb-8 inline-flex rounded-full px-4 py-2 text-gray-600 transition-colors hover:bg-white hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          العودة إلى صفحة الطلبات
        </Link>

        <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-10">
          <h1 className="text-3xl font-bold text-gray-900">طلب حذف البيانات</h1>
          <p className="mt-3 leading-relaxed text-gray-600">
            أدخل بريدك الإلكتروني ووضّح طلب حذف حسابك وبياناتك. سيفتح جهازك تطبيق البريد
            الإلكتروني لإرسال الطلب.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="delete-email" className="mb-2 block font-semibold text-gray-900">
                بريدك الإلكتروني
              </label>
              <input
                id="delete-email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="name@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-left outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
              />
            </div>

            <div>
              <label htmlFor="delete-details" className="mb-2 block font-semibold text-gray-900">
                تفاصيل الطلب
              </label>
              <textarea
                id="delete-details"
                name="details"
                required
                value={details}
                onChange={(event) => setDetails(event.target.value)}
                placeholder="وضّح الحساب أو البيانات التي تريد حذفها..."
                rows={7}
                className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-200"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-red-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
            >
              فتح البريد لإرسال الطلب
            </button>
          </form>
        </article>
      </div>
    </main>
  )
}
