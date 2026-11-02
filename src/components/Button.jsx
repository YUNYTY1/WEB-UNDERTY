export default function Button({ href, variant = 'solid', size = 'md', mono = false, icon: Icon, className = '', children, ...rest }) {
  const Tag = href ? 'a' : 'button'
  const styles = variant === 'solid' ? 'bg-cream text-ink hover:bg-white' : 'border border-line text-cream hover:border-cream/60'
  const sizes = size === 'lg' ? 'h-14 sm:h-[68px] pl-7 pr-3' : 'h-12 px-6'
  const font = mono ? 'font-mono text-[11px]' : 'font-body text-xs font-semibold'
  return (
    <Tag
      href={href}
      type={href ? undefined : 'button'}
      className={`inline-flex items-center justify-center gap-3 rounded-full uppercase tracking-[0.14em] transition-colors ${styles} ${sizes} ${font} ${className}`}
      {...rest}
    >
      {children}
      {Icon &&
        (size === 'lg' && variant === 'solid' ? (
          <span className="grid h-10 w-10 place-items-center rounded-full bg-black/10 sm:h-[52px] sm:w-[52px]"><Icon size={18} aria-hidden="true" /></span>
        ) : (
          <Icon size={size === 'lg' ? 18 : 15} aria-hidden="true" />
        ))}
    </Tag>
  )
}
