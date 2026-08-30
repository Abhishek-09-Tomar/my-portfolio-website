import { ExternalLink } from 'lucide-react'
import { codingProfiles } from '../data/portfolio'
import Container from './Container'
import SectionHeader from './SectionHeader'

export default function CodingProfiles () {
  return (
    <Container id='coding' className='py-20 sm:py-24'>
      <SectionHeader
        eyebrow='Coding Profiles'
        title='Problem-solving and project presence in one clean view.'
      />

      <div className='grid gap-5 md:grid-cols-3'>
        {codingProfiles.map(
          ({ name, username, highlight, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target='_blank'
              rel='noreferrer'
              className='material-card group block p-6'
              aria-label={`Open ${name} profile`}
            >
              <div className='mb-6 flex items-center justify-between'>
                <span className='inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-google-blue dark:bg-slate-900'>
                  <Icon size={22} aria-hidden='true' />
                </span>
                <ExternalLink
                  className='text-slate-400 transition group-hover:text-google-blue'
                  size={18}
                  aria-hidden='true'
                />
              </div>
              <h3 className='text-xl font-bold text-slate-950 dark:text-white'>
                {name}
              </h3>
              <p className='mt-2 text-sm font-semibold text-slate-700 dark:text-slate-200'>
                {username}
              </p>
              <p className='mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300'>
                {highlight}
              </p>
            </a>
          )
        )}
      </div>
    </Container>
  )
}
