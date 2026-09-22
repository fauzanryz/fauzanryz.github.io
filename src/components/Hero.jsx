import { ButtonPrimary, ButtonOutline } from './Button';

function Hero() {
  return (
    <section id="home" className="pt-22 md:pt-26">
      <div className="container flex flex-col-reverse md:grid md:grid-cols-2 md:items-center md:gap-10">
        <div>
          <div className="hidden md:flex items-center gap-3">
            <figure className="img-box w-9 h-9 rounded-lg">
              <img src={import.meta.env.BASE_URL + 'images/avatar-1.jpg'} width={40} height={40} alt="fauzan" className="img-cover" />
            </figure>

            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work
            </div>
          </div>

          <h2 className="hidden md:block headline-1 text-[28px] md:text-[40px] lg:text-[45px] max-w-[15ch] mt-5 mb-8 md:mb-10 text-left">I Build Fast, Modern & Reliable Web Applications</h2>

          <div className="hidden md:flex items-center gap-2 md:gap-3">
            <ButtonPrimary href={import.meta.env.BASE_URL + "documents/fauzan-resume.pdf"} label="Download CV" icon="download" target="_blank" classes="download-btn !h-10 md:!h-11 !px-3 md:!px-4 !text-xs md:!text-sm !gap-1.5 md:!gap-2 !pr-2.5 md:!pr-3" download="fauzan-resume.pdf" />

            <ButtonOutline href="#about" label="Scroll Down" icon="arrow_downward" classes="!h-10 md:!h-11 !px-3 md:!px-4 !text-xs md:!text-sm !gap-1.5 md:!gap-2 !pr-2.5 md:!pr-3" />
          </div>
        </div>

        <div className="mb-3 md:mb-0 flex justify-center">
          <div className="relative w-[280px] md:w-full md:max-w-[480px] lg:max-w-[380px] md:ml-auto">
            <figure className="relative w-full bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[40px] md:rounded-[60px] overflow-hidden">
              <img src={import.meta.env.BASE_URL + 'images/hero-banner.png'} width={656} height={800} alt="Fauzan" className="w-full" />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
