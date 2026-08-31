import { useState } from 'react'
import { Code2, Mail, MapPin, Send, Users } from 'lucide-react'
import { personal } from '../data/portfolio'
import Container from './Container'
import SectionHeader from './SectionHeader'

const contactItems = [
  {
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: Mail
  },
  { label: 'Location', value: personal.location, href: null, icon: MapPin },
  {
    label: 'GitHub',
    value: personal.githubUsername,
    href: personal.github,
    icon: Code2
  },
  {
    label: 'LinkedIn',
    value: 'abhishek-tomar-7aa29127b',
    href: personal.linkedin,
    icon: Users
  }
]

export default function Contact () {
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async event => {
    event.preventDefault()
    setIsSubmitting(true)
    setStatus('Sending...')

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', '2433e3f3-7a25-4eff-a57a-ccef48a83e26')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (data.success) {
        setStatus('Thank you for reaching out! Your message has been sent.')
        form.reset()
      } else {
        setStatus(`Error: ${data.message || 'Something went wrong.'}`)
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('Something went wrong. Please try again or email me directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Container id='contact' className='py-20 sm:py-24'>
      <SectionHeader
        eyebrow='Contact'
        title='Let’s build something meaningful together.'
        description='I’m open to software engineering opportunities, technical collaborations, and AI-driven product development.'
      />

      <div className='grid gap-7 lg:grid-cols-[1fr_0.85fr]'>
        <form onSubmit={handleSubmit} className='material-card p-6 sm:p-8'>
          <div className='grid gap-5 sm:grid-cols-2'>
            <label className='block'>
              <span className='text-sm font-semibold text-slate-700 dark:text-slate-200'>
                Name
              </span>
              <input
                required
                name='name'
                type='text'
                autoComplete='name'
                className='mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-google-blue focus:ring-4 focus:ring-blue-100 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:ring-blue-950'
                placeholder='Your name'
              />
            </label>
            <label className='block'>
              <span className='text-sm font-semibold text-slate-700 dark:text-slate-200'>
                Email
              </span>
              <input
                required
                name='email'
                type='email'
                autoComplete='email'
                className='mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-google-blue focus:ring-4 focus:ring-blue-100 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:ring-blue-950'
                placeholder='your@email.com'
              />
            </label>
          </div>

          <label className='mt-5 block'>
            <span className='text-sm font-semibold text-slate-700 dark:text-slate-200'>
              Message
            </span>
            <textarea
              required
              name='message'
              rows='6'
              className='mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-google-blue focus:ring-4 focus:ring-blue-100 dark:border-slate-800 dark:bg-slate-900 dark:text-white dark:focus:ring-blue-950'
              placeholder='Write your message here...'
            />
          </label>

          <button
            type='submit'
            disabled={isSubmitting}
            className='primary-button mt-6 disabled:opacity-50'
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}{' '}
            <Send size={17} aria-hidden='true' />
          </button>

          {status && (
            <p
              className='mt-4 rounded-2xl bg-green-50 px-4 py-3 text-sm font-medium text-green-700 dark:bg-green-950/40 dark:text-green-200'
              role='status'
            >
              {status}
            </p>
          )}
        </form>

        <aside className='material-card p-6 sm:p-8'>
          <h3 className='text-xl font-bold text-slate-950 dark:text-white'>
            Let&apos;s connect
          </h3>
          <p className='mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300'>
            Got an opportunity? Let’s talk.
            <br />
            Currently open to: Software Engineering Internships · Backend
            Engineering · Full-Stack Development · AI-Integrated Products
          </p>

          <div className='mt-7 space-y-4'>
            {contactItems.map(({ label, value, href, icon: Icon }) => {
              const content = (
                <div className='flex items-center gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4 transition hover:bg-white dark:border-slate-800 dark:bg-slate-900 dark:hover:bg-slate-900/70'>
                  <span className='inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-google-blue shadow-sm dark:bg-slate-950'>
                    <Icon size={20} aria-hidden='true' />
                  </span>
                  <div>
                    <p className='text-xs font-semibold uppercase tracking-[0.18em] text-slate-500'>
                      {label}
                    </p>
                    <p className='mt-1 break-all text-sm font-semibold text-slate-800 dark:text-slate-100'>
                      {value}
                    </p>
                  </div>
                </div>
              )

              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              )
            })}
          </div>
        </aside>
      </div>
    </Container>
  )
}
