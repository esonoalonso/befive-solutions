import Container from './Container'

export default function Section({
  children,
  id,
  className = '',
  bg = 'primary',
  containerClassName = '',
}) {
  return (
    <section
      id={id}
      className={`py-xl md:py-2xl ${bg === 'secondary' ? 'bg-bg-secondary' : 'bg-bg-primary'} ${className}`}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  )
}
