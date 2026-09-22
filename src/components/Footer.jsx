import { ButtonPrimary } from './Button';

const sitemap = [
  {
    label: 'Home',
    href: '#home',
  },
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Services',
    href: '#services',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact Me',
    href: '#contact',
  },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/fauzanryz',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/fauzanryz/',
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/fauzanryz',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/fauzanryz',
  },
];

function Footer() {
  return (
    <footer className="section">
      <div className="container">
        <div className="md:grid md:grid-cols-2">
          <div className="mb-8 md:mb-0">
            <h2 className="headline-1 text-[25px] lg:text-[45px] text-left mb-2 md:mb-8 md:max-w-[12ch] reveal-up">Let&apos;s Work Together!</h2>

            <ButtonPrimary href="mailto:fauzanes22@gmail.com" label="Start Project" icon="chevron_right" classes="reveal-up !h-9 !px-3 !text-xs md:!text-sm !gap-1.5 !pr-2.5" />
          </div>

          <div className="hidden md:grid grid-cols-2 gap-4 md:pl-20 text-left">
            <div>
              <p className="text-xs md:text-sm mb-2 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} className="block text-xs md:text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs md:text-sm mb-2 reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a href={href} target="_blank" className="block text-xs md:text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center pt-6 md:pt-10 mb-8">
          <p className="text-zinc-500 text-xs md:text-sm reveal-up">
            © 2025 <span className="text-zinc-200">Fauzan</span> All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
