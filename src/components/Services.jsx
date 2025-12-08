function Services() {
  const services = [
    {
      icon: 'draw',
      title: 'Web Design',
      description: 'Designing clean, modern, and user-friendly interface layouts that are visually appealing and aligned with branding.',
    },
    {
      icon: 'developer_mode',
      title: 'Web Development',
      description: 'Building responsive, fast, and scalable websites using the latest technologies and best development practices.',
    },
    {
      icon: 'photo_camera',
      title: 'Photo & Video Production',
      description: 'Producing high-quality photos and cinematic videos for branding, commercial needs, and digital storytelling.',
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="headline-2 text-left reveal-up">What I Do</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] text-left reveal-up">Here are the services I provide to support your digital presence and creative needs, helping you stand out with impactful and modern solutions.</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 reveal-up">
          {services.map(({ icon, title, description }, key) => (
            <div key={key} className="p-6 bg-zinc-800/40 rounded-2xl border border-zinc-700/30 hover:border-sky-400/50 transition-all duration-300 hover:-translate-y-1 text-left">
              <span className="material-symbols-rounded text-4xl mb-4 text-sky-400">{icon}</span>

              <h3 className="text-lg font-semibold mb-1">{title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
