import PropTypes from "prop-types";


const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes
}) => {
    return (
        <div className={'flex items-center gap-3 ring-2 ring-inset ring-slate-500 rounded-2xl p-3 hover:bg-slate-500 transition-colors group '
            + classes}>
            <figure className="bg-slate-700 rounded-lg overflow-hidden p-2 group-hover:bg-slate-500 transition-colors">
                <img
                src={imgSrc}
                width={32}
                height={32}
                alt={label}
                />
            </figure>
            <div>
                <h3>{label}</h3>
                <p className="text-zinc-900 text-sm">
                    {desc}
                </p>
            </div>
        </div>
    )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
}

export default SkillCard