export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center';

  return (
    <div className={`mb-10 flex flex-col ${alignment}`}>
      {eyebrow && (
        <span className="mb-3 rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-google-blue dark:bg-blue-950/50">
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-3xl text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      )}
    </div>
  );
}
