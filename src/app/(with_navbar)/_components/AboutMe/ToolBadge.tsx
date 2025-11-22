import MYImage from "@/components/Ui/MYImage";
import { TSkill } from "@/types/skill";

const ToolBadge = ({ skill }: { skill: TSkill }) => (
  <div className="text-dark dark:text-white border border-border px-2 md:px-2 py-3 rounded-xl flex items-center gap-2">
    <div className="">
      <MYImage src={skill.image} alt={skill.name} width={40} height={40} />
    </div>
    <div>
      <h5 className="text-base 2xl:text-lg font-medium">{skill.name}</h5>
      <p className="text-sm 2xl:text-base text-gray-600 dark:text-gray-400">
        {skill.tag}
      </p>
    </div>
  </div>
);

export default ToolBadge;
