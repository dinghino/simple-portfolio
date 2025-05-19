import { FC } from "react";

interface SkillItemProps {
  name: string;
  icon?: React.ReactNode;
  link?: string;
}

export const SkillItem: FC<SkillItemProps> = ({ name, icon, link }) => (
  <div className="flex items-center gap-2">
    {icon && <span className="text-xl">{icon}</span>}
    {link ? (
      <a href={link} target="_blank" rel="noopener noreferrer" className="underline">
        {name}
      </a>
    ) : (
      <span>{name}</span>
    )}
  </div>
);
