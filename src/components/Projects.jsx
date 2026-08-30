import { Code2, ExternalLink } from 'lucide-react'
import { projects } from '../data/portfolio'
import Container from './Container'
import SectionHeader from './SectionHeader'

const accentClasses = {
  blue: 'from-blue-500 to-blue-100 dark:to-blue-950',
  green: 'from-green-500 to-green-100 dark:to-green-950',
  yellow: 'from-yellow-400 to-yellow-100 dark:to-yellow-950',
  red: 'from-red-500 to-red-100 dark:to-red-950'
}

export default function Projects () {
  return (
    <Container id='projects' className='py-20 sm:py-24'>
      <SectionHeader
        eyebrow='Projects'
        title='Production-ready systems engineered with scalable architecture and full-stack logic.'
      />

      <div className='grid gap-6 lg:grid-cols-2'>
        {projects.map(project => (
          <article
            key={project.title}
            className='material-card group overflow-hidden p-0'
          >
            <div
              className={`h-2 bg-linear-to-r ${accentClasses[project.accent]}`}
            />
            <div className='p-6 sm:p-7'>
              <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
                <div>
                  <h3 className='text-xl font-bold text-slate-950 dark:text-white'>
                    {project.title}
                  </h3>
                  <p className='mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300'>
                    {project.description}
                  </p>
                </div>
              </div>

              <div className='mt-5 flex flex-wrap gap-2'>
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className='rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-200'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className='mt-6 grid gap-2 sm:grid-cols-2'>
                {project.features.map(feature => (
                  <div
                    key={feature}
                    className='flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300'
                  >
                    <span
                      className='h-2 w-2 rounded-full bg-google-green'
                      aria-hidden='true'
                    />
                    {feature}
                  </div>
                ))}
              </div>

              <div className='mt-7 flex flex-wrap gap-3'>
                <a
                  href={project.github}
                  target={project.github === '#' ? undefined : '_blank'}
                  rel={project.github === '#' ? undefined : 'noreferrer'}
                  className={`secondary-button py-2.5 ${
                    project.github === '#'
                      ? 'pointer-events-none opacity-60'
                      : ''
                  }`}
                  aria-disabled={project.github === '#'}
                >
                  <Code2 size={17} aria-hidden='true' /> GitHub
                </a>
                <a
                  href={project.demo}
                  className='ghost-button py-2.5'
                  aria-label={`${project.title} live demo placeholder`}
                >
                  <ExternalLink size={17} aria-hidden='true' /> Live Demo
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Container>
  )
}
