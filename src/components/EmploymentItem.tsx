interface EmploymentItemProps {
  company: string;
  description: string;
  duration: string;
  title: string;
}

const EmploymentItem: React.FC<EmploymentItemProps> = ({
  company,
  description,
  duration,
  title,
}) => (
  <div className="grid grid-cols-[2fr_5fr] pt-5">
    <div>
      <h6 className="text-neutral-400">{duration}</h6>
    </div>

    <div>
      <h4 className="font-semibold">{title}</h4>
      <h5 className="pb-1 text-neutral-400">{company}</h5>
      <p>{description}</p>
    </div>
  </div>
);

export default EmploymentItem;
