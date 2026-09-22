import ProjectCard from './ProjectCard';

const projects = [
  {
    imgSrc: import.meta.env.BASE_URL + 'images/project-1.png',
    title: 'Cloud Borneo Website',
    tags: ['WordPress', 'Divi', 'ACPT'],
    projectLink: 'https://cloudborneo.com',
  },
  {
    imgSrc: import.meta.env.BASE_URL + 'images/project-3.png',
    title: 'IKN Sentiment Analysis System',
    tags: ['Laravel 12', 'Naive Bayes', 'Machine Learning'],
    projectLink: 'https://github.com/fauzanryz/ikn-app',
  },
  {
    imgSrc: import.meta.env.BASE_URL + 'images/project-4.png',
    title: 'Rautama Housing Catalog Website',
    tags: ['Laravel', 'Bootstrap', 'MySQL'],
    projectLink: 'https://github.com/fauzanryz/rautama',
  },
  {
    imgSrc: import.meta.env.BASE_URL + 'images/project-5.png',
    title: 'Middleman Transaction Platform',
    tags: ['Laravel', 'Bootstrap', 'MySQL'],
    projectLink: 'https://github.com/fauzanryz/middleman',
  },
  {
    imgSrc: import.meta.env.BASE_URL + 'images/project-2.png',
    title: 'Library Information System',
    tags: ['CodeIgniter 4', 'Bootstrap', 'Web-based'],
    projectLink: 'https://github.com/fauzanryz/perpus-politala',
  },
  {
    imgSrc: import.meta.env.BASE_URL + 'images/project-6.png',
    title: 'Personal Expense Tracking App',
    tags: ['Ionic 5', 'TypeScript', 'Angular', 'SQLite'],
    projectLink: 'https://github.com/fauzanryz/IonicPengeluaran',
  },
  {
    imgSrc: import.meta.env.BASE_URL + 'images/project-8.png',
    title: 'Online Student Admission System',
    tags: ['CodeIgniter 4', 'Bootstrap', 'MySQL'],
    projectLink: 'https://github.com/fauzanryz/project-ppdb-online',
  },
  {
    imgSrc: import.meta.env.BASE_URL + 'images/project-7.png',
    title: 'Vocational School Profile Website',
    tags: ['PHP', 'Bootstrap', 'MySQL'],
    projectLink: 'https://github.com/fauzanryz/smkmuhplh',
  },
];

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="headline-2 text-[25px] lg:text-4xl mb-8 reveal-up text-left">Projects</h2>

        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:grid lg:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] lg:gap-x-4 lg:gap-y-5 lg:overflow-visible">
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <div key={key} className="w-[80%] md:w-[55%] shrink-0 snap-center lg:w-auto">
              <ProjectCard imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
