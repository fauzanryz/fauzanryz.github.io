import { useState } from 'react';
import SkillCard from './SkillCard';

const skillItem = [
  { imgSrc: 'images/html.svg', label: 'HTML', desc: 'Structure' },
  { imgSrc: 'images/css3.svg', label: 'CSS', desc: 'Styling' },
  { imgSrc: 'images/javascript.svg', label: 'JavaScript', desc: 'Interaction' },
  { imgSrc: 'images/typescript.svg', label: 'TypeScript', desc: 'Language' },

  { imgSrc: 'images/bootstrap.svg', label: 'Bootstrap', desc: 'UI Framework' },
  { imgSrc: 'images/tailwindcss.svg', label: 'Tailwind CSS', desc: 'UI Framework' },

  { imgSrc: 'images/react.svg', label: 'React', desc: 'Frontend Framework' },

  { imgSrc: 'images/php.svg', label: 'PHP', desc: 'Backend' },
  { imgSrc: 'images/codeigniter.svg', label: 'CodeIgniter', desc: 'Backend Framework' },
  { imgSrc: 'images/laravel.svg', label: 'Laravel', desc: 'Backend Framework' },
  { imgSrc: 'images/aspnet.svg', label: 'ASP.NET', desc: 'Backend Framework' },

  { imgSrc: 'images/nodejs.svg', label: 'NodeJS', desc: 'Backend JavaScript' },
  { imgSrc: 'images/mysql.svg', label: 'MySQL', desc: 'Database' },

  { imgSrc: 'images/ionic.svg', label: 'Ionic', desc: 'Mobile Framework' },

  { imgSrc: 'images/python.svg', label: 'Python', desc: 'Programming' },
  { imgSrc: 'images/wordpress.svg', label: 'WordPress', desc: 'CMS' },

  { imgSrc: 'images/git.svg', label: 'Git', desc: 'Version Control' },
  { imgSrc: 'images/figma.svg', label: 'Figma', desc: 'UI/UX Design' },
];

function Skill() {
  const [showAll, setShowAll] = useState(false);

  // For mobile: show only 9 items initially, for desktop: show all
  const displayedSkills = showAll ? skillItem : skillItem.slice(0, 9);

  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Tools & Technologies</h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] text-left reveal-up">The core technologies and tools I use to build high-quality, modern, and high-performance digital products.</p>

        {/* Desktop: show all skills */}
        <div className="hidden md:grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] text-left">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up" />
          ))}
        </div>

        {/* Mobile: show limited skills with "Show More" button */}
        <div className="md:hidden">
          <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(250px,1fr))] text-left">
            {displayedSkills.map(({ imgSrc, label, desc }, key) => (
              <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes={key < 9 ? 'reveal-up' : ''} />
            ))}
          </div>

          {!showAll && skillItem.length > 9 && (
            <div className="text-left mt-5 reveal-up">
              <button onClick={() => setShowAll(true)} className="text-zinc-400 hover:text-zinc-200 transition-colors duration-300 font-medium inline-flex items-center gap-2 group">
                Show More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Skill;
