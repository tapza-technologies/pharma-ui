import { Button } from "@/components/ui/button";

export type actionCTA = {
  label: string;
  onClick?: () => void;
};

export type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  actionCTAs: actionCTA[];
  backgroundColor: string;
  buttonColor: string;
};

export const Card = ({
  icon,
  title,
  description,
  actionCTAs,
  backgroundColor,
  buttonColor,
}: CardProps) => {
  return (
    <div
      className="rounded-xl p-[24px] flex-1"
      style={{ background: backgroundColor }}
    >
      <div className="flex flex-col gap-[20px]">
        <div className="flex items-center gap-[20px]">
          {icon}
          <h3 className="text-2xl font-semibold">{title}</h3>
        </div>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex flex-row gap-2">
          <Button
            key={actionCTAs[0].label}
            variant="secondary"
            style={{ backgroundColor: buttonColor, color: "white" }}
            className="p-[20px]"
          >
            {actionCTAs[0].label}
          </Button>
          <Button
            key={actionCTAs[1].label}
            variant="secondary"
            style={{ backgroundColor: "white", color: buttonColor}}
            className="p-[20px]"
          >
            {actionCTAs[1].label}
          </Button>
        </div>
      </div>
    </div>
  );
};
