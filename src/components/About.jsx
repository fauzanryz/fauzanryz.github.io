const aboutItems = [
  {
    label: 'Projects done',
    number: 10,
  },
  {
    label: 'Years of experience',
    number: 4,
  },
];

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <div className="grid md:grid-cols-[2fr_1fr] gap-10 mb-10">
            <div>
              <p className="text-zinc-300 md:text-lg leading-relaxed text-left reveal-up mb-5">
                Hi! I&apos;m <span className="font-bold text-zinc-100">Fauzan</span>, born in Tanah Laut, Kalimantan Selatan. I am a Web Developer and Freelance Photographer, focusing on building modern, fast, and high-performance websites.
              </p>
              <p className="text-zinc-300 md:text-lg leading-relaxed text-left reveal-up">
                I also offer photo and video production services, blending creativity and technology to produce impactful visual work.
              </p>
            </div>

            <div className="space-y-2 text-zinc-300 text-sm md:text-base text-left md:pr-2 reveal-up">
              <p>
                <span className="font-bold text-zinc-100">Age:</span> 21
              </p>
              <p>
                <span className="font-bold text-zinc-100">Residence:</span> Indonesia
              </p>
              <p>
                <span className="font-bold text-zinc-100">Address:</span> Banjarmasin, Kalimantan Selatan
              </p>
              <p>
                <span className="font-bold text-zinc-100">E-mail:</span> fauzanes22@gmail.com
              </p>
              <p>
                <span className="font-bold text-zinc-100">Phone:</span> +62 882-4284-4873
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 md:gap-10 reveal-up">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-1">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
