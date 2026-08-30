import { experiences } from '../data/portfolio'
import Container from './Container'
import SectionHeader from './SectionHeader'

export default function Experience () {
  return (
    <Container id='experience' className='py-20 sm:py-24'>
      <SectionHeader
        eyebrow='Experience'
        title='Hands-on engineering exposure across internships, full-stack systems, and AI tools.'
      />

      <div className='mx-auto max-w-4xl'>
        {experiences.map((experience, index) => (
          <article
            key={`${experience.company}-${experience.role}`}
            className='relative pl-10'
          >
            {index !== experiences.length - 1 && (
              <span
                className='absolute left-[0.92rem] top-8 h-full w-px bg-slate-200 dark:bg-slate-800'
                aria-hidden='true'
              />
            )}
            <span className='absolute left-0 top-2 grid h-8 w-8 place-items-center rounded-full bg-white shadow-soft ring-1 ring-slate-200 dark:bg-slate-900 dark:ring-slate-800'>
              <span
                className='h-3 w-3 rounded-full bg-google-blue'
                aria-hidden='true'
              />
            </span>

            <div className='material-card mb-6 p-6'>
              <div className='flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between'>
                <div>
                  <h3 className='text-lg font-bold text-slate-950 dark:text-white'>
                    {experience.role} - {experience.company}
                  </h3>
                  <p className='mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300'>
                    {experience.description}
                  </p>
                </div>
                <span className='shrink-0 rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:bg-slate-900 dark:text-slate-300'>
                  {experience.period}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  )
}
