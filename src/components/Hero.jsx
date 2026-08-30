import { ArrowDown, Download, Mail, Search, Sparkles } from 'lucide-react'
import { heroBadges, personal } from '../data/portfolio'

const dotColors = [
  'bg-google-blue',
  'bg-google-red',
  'bg-google-yellow',
  'bg-google-green'
]

export default function Hero () {
  return (
    <section
      id='home'
      className='relative overflow-hidden pt-28 sm:pt-32 lg:pt-36'
    >
      <div className='absolute left-1/2 top-24 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl dark:bg-blue-950/40' />
      <div className='absolute right-0 top-48 -z-10 h-64 w-64 rounded-full bg-green-100/70 blur-3xl dark:bg-green-950/30' />

      <div className='section-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]'>
        <div>
          <div className='mb-6 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-sm font-medium text-slate-700 shadow-soft dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-200'>
            <span className='google-dots' aria-hidden='true'>
              {dotColors.map(color => (
                <span key={color} className={color} />
              ))}
            </span>
            Software Engineering Intern Candidate · Summer 2027
          </div>

          <h1 className='max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-7xl dark:text-white'>
            Hi, I&apos;m <span className='gradient-text'>Abhishek Tomar</span>
          </h1>

          <p className='mt-5 text-xl font-semibold text-slate-800 sm:text-2xl dark:text-slate-100'>
            Software Engineering Intern Candidate | Full-Stack Developer | AI
            Software Engineer
          </p>

          <p className='mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300'>
            I&apos;m a B.Tech CSE student and software engineer focused on
            building scalable web applications, reliable backend systems,
            AI-powered tools, and clean software solutions using DSA, full-stack
            development, and modern engineering principles.
          </p>

          <div
            className='mt-6 flex max-w-2xl items-center gap-3 rounded-full border border-slate-200 bg-white px-5 py-4 shadow-soft dark:border-slate-800 dark:bg-slate-900'
            aria-label='Google-search-inspired portfolio focus'
          >
            <Search
              className='shrink-0 text-google-blue'
              size={20}
              aria-hidden='true'
            />
            <span className='truncate text-sm font-medium text-slate-700 sm:text-base dark:text-slate-200'>
              Abhishek Tomar software engineering intern summer 2027
            </span>
          </div>

          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
            <a href='#projects' className='primary-button'>
              View Projects <ArrowDown size={17} aria-hidden='true' />
            </a>
            <a
              href='/Abhishek_Tomar_Resume.pdf'
              className='secondary-button'
              download
            >
              Download Resume <Download size={17} aria-hidden='true' />
            </a>
            <a href={`mailto:${personal.email}`} className='ghost-button'>
              Contact Me <Mail size={17} aria-hidden='true' />
            </a>
          </div>

          <div
            className='mt-8 flex flex-wrap gap-3'
            aria-label='Profile highlights'
          >
            {heroBadges.map(badge => (
              <span
                key={badge}
                className='rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200'
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className='relative mx-auto w-full max-w-md lg:max-w-lg'>
          <div className='float-slow material-card relative overflow-hidden p-5 sm:p-7'>
            <div className='absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-google-blue via-google-red to-google-green' />
            <img
              src='/profile-card.svg'
              alt='Abhishek Tomar profile illustration'
              className='aspect-square w-full rounded-[1.5rem] object-cover'
              loading='eager'
            />
            <div className='mt-5 rounded-[1.5rem] bg-slate-50 p-5 dark:bg-slate-900'>
              <div className='flex items-center gap-2 text-sm font-semibold text-google-blue'>
                <Sparkles size={17} aria-hidden='true' /> Internship-ready
                profile
              </div>
              <p className='mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300'>
                Targeting Software Engineering Intern, Summer 2027 with strong
                fundamentals, practical full-stack projects, and consistent
                problem-solving.
              </p>
            </div>
          </div>

          <div className='absolute -bottom-4 -left-4 hidden rounded-3xl bg-white p-4 shadow-material ring-1 ring-slate-200 sm:block dark:bg-slate-900 dark:ring-slate-800'>
            <p className='text-xs font-semibold uppercase tracking-[0.2em] text-slate-500'>
              Focus
            </p>
            <p className='mt-1 text-sm font-bold text-slate-950 dark:text-white'>
              DSA + Backend + AI
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
