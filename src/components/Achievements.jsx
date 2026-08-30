import { achievements } from '../data/portfolio';
import Container from './Container';
import SectionHeader from './SectionHeader';

export default function Achievements() {
  return (
    <Container id="achievements" className="py-20 sm:py-24">
      <SectionHeader
        eyebrow="Achievements"
        title="Signals of consistency, discipline, and competitive mindset."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {achievements.map(({ title, icon: Icon }) => (
          <article key={title} className="material-card p-6">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-google-green dark:bg-green-950/50">
              <Icon size={22} aria-hidden="true" />
            </div>
            <h3 className="text-base font-bold leading-7 text-slate-950 dark:text-white">{title}</h3>
          </article>
        ))}
      </div>
    </Container>
  );
}
