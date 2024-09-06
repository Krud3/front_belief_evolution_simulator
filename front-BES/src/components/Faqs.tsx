import { Container } from '@/components/Container'
import backgroundImage from '@/assets/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'Lorem ipsum dolor sit amet?',
      answer:
        'Consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
    },
    {
      question: 'Quisque vehicula nunc sit amet libero euismod?',
      answer: 'Absolutely, we are happy to take your money in all forms.',
    },
    {
      question: 'Ut enim ad minim veniam, quis nostrud exercitation?',
      answer:
        'Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.',
    },
  ],
  [
    {
      question: 'Sed ut perspiciatis unde omnis?',
      answer:
        'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      question:
        'Excepteur sint occaecat cupidatat non proident?',
      answer:
        'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
    },
    {
      question: 'Nor again is there anyone who loves?',
      answer:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
    },
  ],
  [
    {
      question: 'Nam libero tempore, cum soluta nobis?',
      answer:
        'Et harum quidem rerum facilis est et expedita distinctio.',
    },
    {
      question: 'Temporibus autem quibusdam?',
      answer: 'In life it’s really better to never expect anything at all.',
    },
    {
      question: 'At vero eos et accusamus?',
      answer:
        'Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
    },
  ],
]


export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <img
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        loading="lazy"
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
