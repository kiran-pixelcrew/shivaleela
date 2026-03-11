import React from 'react';

interface SectionSeparatorProps {
  title: string;
  subtitle: string;
  id?: string;
}

const SectionSeparator: React.FC<SectionSeparatorProps> = ({
  title,
  subtitle,
  id,
}) => {
  return (
    <section
      id={id}
      className="relative w-full scroll-mt-32 pt-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-4xl font-bold text-balance text-[#1e1e1e] capitalize sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto max-w-4xl text-sm tracking-wide text-balance text-[#1e1e1e] opacity-80 sm:text-xl">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionSeparator;
