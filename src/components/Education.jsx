import { GraduationCap } from 'lucide-react'
import Container from './Container'
import SectionHeader from './SectionHeader'

export default function Education () {
  return (
    <Container id='education' className='py-20 sm:py-24'>
      <SectionHeader
        eyebrow='Education'
        title='Academic foundation in Computer Science and Engineering.'
      />

      <div className='mx-auto max-w-3xl material-card p-7 sm:p-9'>
        <div className='flex flex-col gap-5 sm:flex-row sm:items-center'>
          <div className='inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-3xl bg-blue-50 text-google-blue dark:bg-blue-950/60'>
            <GraduationCap size={30} aria-hidden='true' />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-slate-950 dark:text-white'>
              Galgotias University
            </h3>
            <p className='mt-2 text-base font-medium text-slate-700 dark:text-slate-200'>
              B.Tech in Computer Science and Engineering
            </p>
            <div className='mt-4 flex flex-wrap gap-3 text-sm font-semibold text-slate-600 dark:text-slate-300'>
              <span className='rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-900'>
                Expected Graduation: July 2027
              </span>
              <span className='rounded-full bg-slate-100 px-3 py-1.5 dark:bg-slate-900'>
                CGPA: 7.6
              </span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
