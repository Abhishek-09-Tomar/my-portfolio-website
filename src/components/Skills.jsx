import { skills } from '../data/portfolio'
import Container from './Container'
import SectionHeader from './SectionHeader'

export default function Skills () {
  return (
    <Container id='skills' className='py-20 sm:py-24'>
      <SectionHeader
        eyebrow='Skills'
        title='Core technical stack tuned for backend scalability and practical AI.'
      />

      <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
        {skills.map(({ title, icon: Icon, items }) => (
          <article key={title} className='material-card p-6'>
            <div className='mb-5 flex items-center gap-3'>
              <span className='inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50 text-google-blue dark:bg-slate-900'>
                <Icon size={21} aria-hidden='true' />
              </span>
              <h3 className='text-lg font-bold text-slate-950 dark:text-white'>
                {title}
              </h3>
            </div>

            <div className='flex flex-wrap gap-2.5'>
              {items.map(item => (
                <span
                  key={item}
                  className='rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200'
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Container>
  )
}
