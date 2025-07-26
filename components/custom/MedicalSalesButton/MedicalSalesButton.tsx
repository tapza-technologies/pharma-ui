import { Button } from "@/components/ui/button";

export type MedicalSalesButtonProps = {
  icon?: React.ReactNode;
  label: string;
  onClick: () => void;
  color: string;
  backgroundColor?: string;
};

export const MedicalSalesButton = ({
  icon,
  label,
  onClick,
  color,
  backgroundColor = "#FFFFFF",
}: MedicalSalesButtonProps) => {
  return (
    <Button
      onClick={onClick}
      className={`bg-white text-[${color}] px-[20px] py-[8px] rounded-[6px] flex flex-row gap-[6px] items-center hover:bg-[#F7F7F9] hover:text-[${color}]`}
    >
      {icon}
      {label}
    </Button>
  );
};
