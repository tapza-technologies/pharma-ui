import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardWrapper } from "../CardWrapper/CardWrapper";

export const PaymentModeForm = () => {
  return (
    <CardWrapper className="mt-[20px] p-[20px]">
      <div className="flex flex-row gap-[18px]">
        <div className="flex flex-col gap-[10px] flex-1">
          <Label>Payment Mode</Label>
          <Input
            type="text"
            placeholder="Select Payment Mode"
            className="w-full px-[20px] py-[24px] rounded-[6px]"
          />
        </div>
        <div className="flex flex-col gap-[10px] flex-1">
          <Label>Total Paid</Label>
          <Input
            type="text"
            placeholder="Select Payment Mode"
            className="w-full px-[20px] py-[24px] rounded-[6px]"
          />
        </div>
        <div className="flex flex-col gap-[10px] flex-1">
          <Label>Curent Due</Label>
          <Input
            type="text"
            placeholder="Select Payment Mode"
            className="w-full px-[20px] py-[24px] rounded-[6px]"
          />
        </div>
      </div>
    </CardWrapper>
  );
};
