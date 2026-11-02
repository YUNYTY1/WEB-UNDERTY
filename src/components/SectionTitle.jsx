import { Fragment } from 'react'

// parts: [{ t: texto, m: true si va en gris, br: true si hay salto de línea después }]
export default function SectionTitle({ parts, as: Tag = 'h2', className = '', mutedClass = 'text-dim' }) {
  return (
    <Tag className={`section-title ${className}`}>
      {parts.map((p, i) => (
        <Fragment key={i}>
          <span className={p.m ? mutedClass : ''}>{p.t}</span>
          {p.br && <br />}
        </Fragment>
      ))}
    </Tag>
  )
}
