const educationData = [
  {
    school: 'Politeknik Negeri Tanah Laut',
    period: '2022 - 2025',
    degree: 'Associate Degree (D3)',
    major: 'Information Technology',
  },
  {
    school: 'SMKS Muhammadiyah Pelaihari',
    period: '2019 - 2022',
    degree: 'Vocational High School',
    major: 'Office Administration',
  },
  {
    school: 'SMPN 3 Pelaihari',
    period: '2016 - 2019',
    degree: 'Junior High School',
    location: 'Tanah Laut, Kalimantan Selatan',
  },
  {
    school: 'SDN Panggung 1',
    period: '2010 - 2016',
    degree: 'Elementary School',
    location: 'Tanah Laut, Kalimantan Selatan',
  },
];

function Education() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up mb-8 text-left">Education</h2>

        <div className="space-y-5">
          {educationData.map((edu, index) => (
            <div key={index} className="group relative overflow-hidden reveal-up">
              <div className="flex items-stretch gap-3 md:gap-5">
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-xl bg-zinc-800/50 flex items-center justify-center  border-zinc-700/50 group-hover:border-zinc-600 transition-all duration-300">
                    <span className="text-zinc-400 font-bold text-xs md:text-sm">{edu.period.split(' - ')[0]}</span>
                  </div>
                  {index < educationData.length - 1 && <div className="w-0.5 flex-1 bg-zinc-700/50 mt-2"></div>}
                </div>

                <div className="flex-1 pb-5">
                  <div className="bg-zinc-800/50 rounded-2xl p-5 ring-inset ring-zinc-50/10 hover:bg-zinc-800 transition-colors duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-3 mb-2">
                      <h3 className="text-base sm:text-lg font-semibold text-zinc-50 text-left">{edu.school}</h3>
                      <p className="text-zinc-400 text-xs sm:text-sm text-left sm:text-right shrink-0">{edu.period}</p>
                    </div>

                    <p className="text-sm sm:text-base text-sky-400 font-medium text-left">{edu.degree}</p>
                    {edu.major && <p className="text-zinc-400 text-sm text-left">{edu.major}</p>}
                    {edu.location && <p className="text-zinc-400 text-sm text-left">{edu.location}</p>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
