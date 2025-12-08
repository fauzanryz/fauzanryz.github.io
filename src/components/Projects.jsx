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
        <h2 className="headline-2 mb-8 reveal-up">Portfolio Highlights</h2>

        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard key={key} imgSrc={imgSrc} title={title} tags={tags} projectLink={projectLink} classes="reveal-up" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
