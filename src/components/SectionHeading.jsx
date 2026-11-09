export default function SectionHeading({ eyebrow, title, text, light = false, center = false }) {
  return <div className={`${center ? 'text-center mx-auto' : ''} max-w-2xl mb-12`}>
    <div className={`eyebrow ${light ? 'text-cyan-300' : ''}`}>{eyebrow}</div>
    <h2 className={`section-title ${light ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    {text && <p className={`mt-4 leading-7 ${light ? 'text-slate-300' : 'text-slate-500'}`}>{text}</p>}
  </div>
}