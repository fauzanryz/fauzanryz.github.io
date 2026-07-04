const knowledgeItems = [
  { title: 'Full Stack Dev', icon: 'code' },
  { title: 'Database', icon: 'database' },
  { title: 'System Analysis', icon: 'monitoring' },
  { title: 'UI/UX Design', icon: 'palette' },
  { title: 'Video Editing', icon: 'movie' },
  { title: 'Marketing', icon: 'campaign' },
  { title: 'Social Media', icon: 'share' },
  { title: 'Management', icon: 'business_center' },
  { title: 'Communication', icon: 'forum' },
  { title: 'Teamwork', icon: 'group_work' },
  { title: 'Problem Solving', icon: 'lightbulb' },
  { title: 'Adaptability', icon: 'autorenew' },
];

function Knowledges() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up mb-5 text-left">Knowledges</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {knowledgeItems.map(({ title, icon }, key) => (
            <div key={key} className="reveal-up">
              <div className="group pl-3.5 pr-2.5 py-3 md:px-4 md:py-2.5 rounded-md bg-gradient-to-r from-zinc-800/80 to-zinc-800/40 ring-2 ring-inset ring-zinc-50/10 text-zinc-300 hover:bg-zinc-600 hover:ring-zinc-50/30 hover:text-zinc-100 transition-colors duration-300">
                <div className="flex flex-col items-start gap-1.5 text-left md:flex-row md:items-center md:gap-2">
                  <span className="material-symbols-rounded text-xl md:text-lg shrink-0 text-sky-400">{icon}</span>
                  <span className="font-medium text-[11px] sm:text-xs md:text-sm leading-tight">{title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Knowledges;
