import { TCategoryProps } from "@/types/common.data";


const stringToNumber = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
};

const HCategoryCard: React.FC<TCategoryProps> = ({ category }) => {
  const bgColors = [
    "bg-gray-100",
    "bg-red-100",
    "bg-yellow-100",
    "bg-green-100",
    "bg-blue-100",
    "bg-indigo-100",
    "bg-purple-100",
    "bg-pink-100",
    "bg-orange-100",
    "bg-teal-100",
    "bg-cyan-100",
    "bg-lime-100",
    "bg-emerald-100",
    "bg-amber-100",
    "bg-rose-100",
  ];

  // Convert the _id to a unique number using the hash function
  const categoryIndex = stringToNumber(category._id) % bgColors.length;
  const bgColorClass = bgColors[categoryIndex];

  return (
    <div>
      <div className={`p-4 rounded ${bgColorClass} cursor-pointer shadow-lg`}>
        <div className="flex items-center gap-2">
          {category.image === null ? (
            <img src={category.imageUrl} className="w-8" alt={category.name} />
          ) : (
            <img src={category.image} className="w-8" alt={category.name} />
          )}
          <span className=" text-lg hind-siliguri-normal">{category.name}</span>
        </div>
      </div>
    </div>
  );
};

export default HCategoryCard;
