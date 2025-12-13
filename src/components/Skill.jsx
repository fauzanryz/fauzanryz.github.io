import SkillCard from './SkillCard';

const skillItem = [
  { imgSrc: import.meta.env.BASE_URL + 'images/html.svg', label: 'HTML', desc: 'Structure' },
  { imgSrc: import.meta.env.BASE_URL + 'images/css3.svg', label: 'CSS', desc: 'Styling' },
  { imgSrc: import.meta.env.BASE_URL + 'images/javascript.svg', label: 'JavaScript', desc: 'Interaction' },
  { imgSrc: import.meta.env.BASE_URL + 'images/typescript.svg', label: 'TypeScript', desc: 'Language' },

  { imgSrc: import.meta.env.BASE_URL + 'images/bootstrap.svg', label: 'Bootstrap', desc: 'UI Framework' },
  { imgSrc: import.meta.env.BASE_URL + 'images/tailwindcss.svg', label: 'TailwindCSS', desc: 'UI Framework' },

  { imgSrc: import.meta.env.BASE_URL + 'images/react.svg', label: 'React', desc: 'Framework' },

  { imgSrc: import.meta.env.BASE_URL + 'images/php.svg', label: 'PHP', desc: 'Backend' },
  { imgSrc: import.meta.env.BASE_URL + 'images/codeigniter.svg', label: 'CodeIgniter', desc: 'Framework' },
  { imgSrc: import.meta.env.BASE_URL + 'images/laravel.svg', label: 'Laravel', desc: 'Framework' },
  { imgSrc: import.meta.env.BASE_URL + 'images/aspnet.svg', label: 'ASP.NET', desc: 'Framework' },

  { imgSrc: import.meta.env.BASE_URL + 'images/nodejs.svg', label: 'Node.js', desc: 'Runtime' },
  { imgSrc: import.meta.env.BASE_URL + 'images/mysql.svg', label: 'MySQL', desc: 'Database' },

  { imgSrc: import.meta.env.BASE_URL + 'images/ionic.svg', label: 'Ionic', desc: 'Framework' },

  { imgSrc: import.meta.env.BASE_URL + 'images/python.svg', label: 'Python', desc: 'Language' },
  { imgSrc: import.meta.env.BASE_URL + 'images/wordpress.svg', label: 'WordPress', desc: 'CMS' },

  { imgSrc: import.meta.env.BASE_URL + 'images/git.svg', label: 'Git', desc: 'Control' },
  { imgSrc: import.meta.env.BASE_URL + 'images/figma.svg', label: 'Figma', desc: 'Design' },
];

function Skill() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up text-left">Tools & Technologies</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] text-left reveal-up">The core technologies and tools I use to build high-quality, modern, and high-performance digital products.</p>

        {/* Mobile: 2 columns grid */}
        <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3 text-left">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;
