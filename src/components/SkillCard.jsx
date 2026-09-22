import PropTypes from 'prop-types';

function SkillCard({ imgSrc, label, desc, classes }) {
  return (
    <div
      className={
        'flex md:flex-row flex-col items-center justify-center md:justify-start gap-0 md:gap-3 md:ring-2 md:ring-inset md:ring-zinc-50/10 md:rounded-2xl md:p-3 hover:bg-zinc-800 transition-colors duration-300 group md:min-h-[70px] ' +
        classes
      }
    >
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-10 h-10 md:w-12 md:h-12 p-1.5 md:p-2 group-hover:bg-zinc-900 transition-colors duration-300 shrink-0">
        <img src={imgSrc} width={32} height={32} alt={label} className="w-full h-full object-contain" />
      </figure>

      <div className="flex-1 min-w-0 hidden md:block">
        <h3 className="text-left text-sm lg:text-base truncate">{label}</h3>

        <p className="text-zinc-400 text-xs lg:text-sm text-left truncate">{desc}</p>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
