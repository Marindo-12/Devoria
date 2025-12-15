interface SkillBarProps {
  name: string;
  percent: number;
}

export default function SkillBar({name, percent}: SkillBarProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-500 dark:text-white font-medium">{name}</span>
        <span className="text-gray-500  font-medium">{percent}%</span>
      </div>

      <div className="w-full h-3 rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full bg-purple-500"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}