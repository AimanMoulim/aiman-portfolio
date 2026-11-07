'use client'

import Link from 'next/link'
import { FormEvent, useState } from 'react'

const CONTACT_EMAIL = 'aiman.moulimai@gmail.com'
const EMAIL_SUBJECT = 'demande personnel de user'

export default function QawamRequestPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const body = `Email de l'utilisateur : ${email}\n\nDemande :\n${message}`
    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(body)}`

    window.location.href = mailtoUrl
  }

  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 lg:px-8" dir="rtl">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/apps/qawam"
          className="mb-8 inline-flex rounded-full px-4 py-2 text-gray-600 transition-colors hover:bg-white hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          العودة إلى معلومات التطبيق
        </Link>

        <article className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-10">
          <h1 className="text-3xl font-bold text-gray-900">إرسال طلب شخصي</h1>
          <p className="mt-3 leading-relaxed text-gray-600">
            اكتب طلبك، وسيفتح جهازك تطبيق البريد الإلكتروني لإرساله إلى مطوّر التطبيق.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="mb-2 block font-semibold text-gray-900">
                بريدك الإلكتروني
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="name@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 text-left outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-semibold text-gray-900">
                الطلب
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="اكتب طلبك هنا..."
                rows={7}
                className="w-full resize-y rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-yellow-500 px-5 py-3 font-semibold text-white transition-colors hover:bg-yellow-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2"
            >
              فتح البريد لإرسال الطلب
            </button>
          </form>

          <div className="mt-8 border-t border-gray-200 pt-6 text-center">
            <p className="mb-3 text-gray-600">Vous souhaitez supprimer vos données ?</p>
            <Link
              href="/qawwam/request/data-delete"
              className="font-semibold text-red-600 underline-offset-4 hover:underline"
            >
              Envoyer une demande de suppression
            </Link>
          </div>
        </article>
      </div>
    </main>
  )
}
