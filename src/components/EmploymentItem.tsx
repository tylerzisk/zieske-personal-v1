import LinkArrow from "./link-arrow.svg";

interface EmploymentItemProps {
  company: string;
  description: string;
  duration: string;
  link: string;
  title: string;
}

const EmploymentItem: React.FC<EmploymentItemProps> = ({
  company,
  description,
  duration,
  link,
  title,
}) => (
  <a
    className="grid grid-cols-[2fr_5fr] my-1 p-1 gap-1 rounded-lg transition delay-50 duration-300 ease-in-out outline outline-zinc-950 hover:outline-zinc-700 hover:bg-zinc-900"
    href={link}
    target="_blank"
  >
    <h6 className="text-neutral-400">{duration}</h6>

    <div>
      <div className="flex flex-column items-center justify-between">
        <h4 className="font-semibold">{title}</h4>
        <LinkArrow fill="white" height={24} width={24} />
      </div>
      <h5 className="pb-1 text-neutral-400">{company}</h5>

      <p>{description}</p>
    </div>
  </a>
);

export default EmploymentItem;
