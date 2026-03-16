'use client';

import { useState } from 'react';

type FAQItem = {
  q: string;
  a: string;
};

const faqs: FAQItem[] = [
  {
    q: 'What classes are available at Shivaleela Natyalaya?',
    a: 'We currently offer Bharatanatyam and Carnatic Music classes, along with periodic workshops and special learning sessions for students at different levels.',
  },
  {
    q: 'Can beginners join?',
    a: 'Yes. Beginners are welcome. We guide new students from fundamentals, including posture, rhythm, and basic techniques, before moving to advanced lessons.',
  },
  {
    q: 'Is there an age limit for joining?',
    a: 'Students across age groups can enroll. We have age-appropriate learning paths for children, teens, and adults depending on experience and goals.',
  },
  {
    q: 'Do you provide trial classes?',
    a: 'Yes, trial or orientation sessions may be available based on schedule. Please contact us through the form to check current availability.',
  },
  {
    q: 'How can I register for classes?',
    a: 'You can register by using the contact form on this website. Share your preferred class, age, and availability, and our team will guide you through the next steps.',
  },
  {
    q: 'Where is Shivaleela located?',
    a: 'Our center is located in Hosakerehalli, BSK 3rd Stage, Bengaluru. You can find the full address in the footer section of the website.',
  },
  {
    q: 'Are online classes available?',
    a: 'Online options may be available for select programs and levels. Please contact us with your requirements to confirm current online batches.',
  },
  {
    q: 'Do students get performance opportunities?',
    a: 'Yes. Students may participate in productions, annual showcases, and cultural events based on readiness, commitment, and event schedules.',
  },
  {
    q: 'What should I bring for class?',
    a: 'Comfortable practice attire is recommended. Specific dress or material requirements are shared during onboarding based on the class you choose.',
  },
  {
    q: 'How quickly will I get a response after submitting the contact form?',
    a: 'We usually respond within 1–2 business days. If your query is urgent, please mention that in your message so we can prioritize it.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 py-16 sm:px-8 sm:py-20">
      <div className="space-y-3 sm:space-y-4">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <article
              key={i}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen
                ? 'border-primary/50 bg-card shadow-[0_14px_46px_-24px_hsl(var(--primary)/0.6)]'
                : 'border-border/80 bg-card/85 hover:-translate-y-0.5 hover:border-primary/35 hover:bg-accent/35'
                }`}
            >
              <div
                className={`pointer-events-none absolute inset-y-0 left-0 w-1.5 transition-all duration-300 ${isOpen ? 'bg-primary' : 'bg-transparent group-hover:bg-primary/50'
                  }`}
              />

              <button
                type="button"
                aria-controls={`faq-panel-${i}`}
                aria-label={`${isOpen ? 'Collapse' : 'Expand'}: ${item.q}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left sm:px-6 sm:py-5"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-6 min-w-6 items-center justify-center rounded-full border border-primary/30 bg-primary/10 px-1 text-[11px] font-semibold text-primary">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base font-medium leading-snug text-foreground sm:text-lg">
                    {item.q}
                  </span>
                </div>
                <span
                  className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${isOpen
                    ? 'rotate-45 border-primary/40 bg-primary/10 text-primary'
                    : 'border-border text-muted-foreground group-hover:border-primary/40 group-hover:text-primary'
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      d="M12 5v14M5 12h14"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                id={`faq-panel-${i}`}
                className={`grid transition-all duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
              >
                <div className="overflow-hidden">
                  <div className="px-13 pb-5 sm:px-[4.35rem] sm:pb-6">
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 px-5 py-4 text-center sm:mt-10 sm:px-6 sm:py-5">
        <p className="text-sm text-foreground sm:text-base">
          Still have questions?{' '}
          <a
            href="#contact"
            className="font-semibold text-primary underline-offset-4 transition-colors hover:text-primary/80 hover:underline"
          >
            Contact us
          </a>{' '}
          and we’ll help you with the right class and schedule.
        </p>
      </div>
    </section>
  );
};

export default FAQ;
