const knowledgeItems = [
  { title: 'Full Stack Dev', icon: 'code' },
  { title: 'Database Design', icon: 'database' },
  { title: 'System Analysis', icon: 'monitoring' },
  { title: 'Project Planning', icon: 'checklist' },
  { title: 'Digital Marketing', icon: 'campaign' },
  { title: 'API Development', icon: 'data_object' },
  { title: 'Version Control', icon: 'sync_alt' },
  { title: 'UI/UX Design', icon: 'palette' },
  { title: 'Agile Methodology', icon: 'group' },
  { title: 'Documentation', icon: 'article' },
];

function Knowledges() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up mb-5 text-left">Knowledges</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 reveal-up">
          {knowledgeItems.map(({ title, icon }, key) => (
            <div
              key={key}
              className="reveal-up group px-3 py-2 md:px-4 md:py-2.5 rounded-full bg-gradient-to-r from-zinc-800/80 to-zinc-800/40 ring-2 ring-inset ring-zinc-50/10 text-zinc-300 hover:ring-sky-400/50 hover:text-sky-400 hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-1.5 md:gap-2 justify-center md:justify-start">
                <span className="material-symbols-rounded text-base md:text-lg group-hover:rotate-12 transition-transform duration-300 hidden md:inline">{icon}</span>
                <span className="font-medium text-[10px] md:text-sm truncate">{title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Knowledges;
