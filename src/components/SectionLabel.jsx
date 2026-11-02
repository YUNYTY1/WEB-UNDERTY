export default function SectionLabel({ children, className = '' }) {
  return (
    <p className={`label-mono flex items-center gap-4 text-mute ${className}`}>
      <span className="h-px w-10 bg-mute/60" aria-hidden="true" />
      {children}
    </p>
  )
}
