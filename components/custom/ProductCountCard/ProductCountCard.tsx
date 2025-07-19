export type ProductCountCardProps = {
    icon: React.ReactNode;
    count: number;
    description: string;
  };
  
  export const ProductCountCard = ({
    icon,
    count,
    description,
  }: ProductCountCardProps) => {
    return (
      <div
        className="rounded-xl w-[25vw] h-[150px] p-[20px] flex flex-col gap-[20px]"
        style={{ background: "var(--Color-Neutral-neutral-lightest, #F7F7F9)" }}
      >
        {icon}
        <div className="flex flex-col gap-[5px]">
          <p className="text-sm text-gray-500">{description}</p>
          <p className="text-2xl font-semibold">{count}</p>
        </div>
      </div>
    );
  };