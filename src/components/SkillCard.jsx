import PropTypes from 'prop-types';

function SkillCard({ imgSrc, label, desc, classes }) {
  return (
    <div className={'flex items-center gap-2 md:gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-2.5 md:p-3 hover:bg-zinc-800 transition-colors duration-300 group min-h-[70px] ' + classes}>
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-10 h-10 md:w-12 md:h-12 p-2 group-hover:bg-zinc-900 transition-colors duration-300 shrink-0">
        <img src={imgSrc} width={32} height={32} alt={label} />
      </figure>

      <div className="flex-1 min-w-0">
        <h3 className="text-left text-sm md:text-base truncate">{label}</h3>

        <p className="text-zinc-400 text-xs md:text-sm text-left">{desc}</p>
      </div>
    </div>
  );
}

SkillCard.PropTypes = {
  imgSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
};

export default SkillCard;
