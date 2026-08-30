import { quickInfo } from '../data/portfolio'
import Container from './Container'
import SectionHeader from './SectionHeader'

export default function About () {
  return (
    <Container id='about' className='py-20 sm:py-24'>
      <SectionHeader
        eyebrow='About'
        title='Bridging backend systems, modern web tools, and AI integration.'
      />

      <div className='grid gap-8 lg:grid-cols-[0.95fr_1.05fr]'>
        <article className='material-card p-7 sm:p-9'>
          <h3 className='text-2xl font-bold text-slate-950 dark:text-white'>
            About Me
          </h3>
          <p className='mt-5 text-base leading-8 text-slate-600 dark:text-slate-300'>
            I&apos;m Abhishek Tomar, a B.Tech Computer Science student at
            Galgotias University, expected to graduate in July 2027. I&apos;m
            focused on software engineering, full-stack development, backend
            systems, AI integration, and data structures and algorithms. I enjoy
            building practical, scalable, and user-friendly applications that
            solve real problems. My goal is to become a strong software engineer
            by combining computer science fundamentals, clean code, product
            thinking, and consistent problem-solving.
          </p>
        </article>

        <div className='grid gap-4 sm:grid-cols-2'>
          {quickInfo.map(({ label, icon: Icon }) => (
            <div key={label} className='material-card p-5'>
              <div className='mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-google-blue dark:bg-blue-950/60'>
                <Icon size={21} aria-hidden='true' />
              </div>
              <p className='text-sm font-bold text-slate-900 dark:text-white'>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  )
}
