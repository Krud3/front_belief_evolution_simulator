import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/assets/images/background-call-to-action.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-blue-600 py-32"
    >
      {/* Usa <img> en lugar de <Image> */}
      <img
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2347}
        height={1244}
        loading="lazy" // Usar el atributo loading si deseas lazy loading
      />
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
          It's time to explore how opinions evolve. Use our simulator to gain valuable insights into social dynamics and discover trends over time. Start simulating now and make data-driven decisions with ease.
          </p>
          <Button href="/register" color="white" className="mt-10">
            Register
          </Button>
        </div>
      </Container>
    </section>
  );
}
