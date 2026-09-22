const workExperiences = [
  {
    company: 'PT Barito Berlian Motor',
    period: 'Feb 2026 - Present',
    position: 'IT Programmer',
    description: 'Developing and maintaining internal systems to support dealership sales, service, and operational activities.',
    points: ['Application Development', 'System Maintenance', 'Database Management'],
  },
  {
    company: 'Monochrome / Lamoria Pictures',
    period: 'Oct 2022 - Present',
    position: 'Photographer',
    description: 'Producing promotional and event photography content for various clients.',
    points: ['Event Photography', 'Promotional Content', 'Wedding & Events', 'Videography'],
  },
  {
    company: 'Cloud Borneo',
    period: 'Jan 2024 - Present',
    position: 'Freelance Website Developer',
    description: 'Building and maintaining company website for hosting and digital service operations.',
    points: ['WordPress Development', 'Divi Builder', 'ACPT Customization', 'Website Maintenance'],
  },
  {
    company: 'Teaching Factory',
    period: 'Feb 2024 - Jul 2024',
    position: 'Website Developer',
    description: 'Developed educational websites supporting academic and operational activities.',
    points: ['Frontend Development', 'Backend Development', 'PHP Frameworks', 'MySQL', 'WordPress'],
  },
];

function Works() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 text-[25px] lg:text-4xl reveal-up mb-8 text-left">Experience</h2>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-zinc-700"></div>

          <div className="space-y-5 md:space-y-8">
            {workExperiences.map((work, index) => (
              <div key={index} className="relative pl-8 reveal-up">
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-2 h-2 bg-sky-400 rounded-full -translate-x-[3.5px]"></div>

                <div className="bg-zinc-800/50 rounded-2xl p-4 md:p-5 ring-inset ring-zinc-50/10 hover:bg-zinc-800 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-3 mb-1.5 md:mb-2">
                    <h3 className="text-xs md:text-base lg:text-lg font-semibold text-zinc-50 text-left">{work.company}</h3>
                    <p className="text-zinc-400 text-xs sm:text-sm text-left sm:text-right shrink-0">{work.period}</p>
                  </div>

                  <p className="text-sky-400 text-xs md:text-[15px] lg:text-base font-medium text-left mb-1.5 md:mb-2">{work.position}</p>
                  <p className="text-zinc-400 text-xs md:text-sm text-left mb-2 md:mb-3">{work.description}</p>

                  <div className="flex flex-wrap gap-1.5 md:gap-2 text-left">
                    {work.points.map((point, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 md:text-xs md:px-3 md:py-1 bg-zinc-700/50 text-zinc-300 rounded-md">
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
