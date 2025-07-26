import { Label } from "@/components/ui/label";
import { CardWrapper } from "../CardWrapper/CardWrapper";
import { Input } from "@/components/ui/input";

export const BillingSummaryForm = () => {
  return (
    <CardWrapper className="mt-[20px] p-[20px]">
      <div className="flex flex-row gap-[18px]">
        <div className="flex flex-col gap-[10px] flex-1">
          <Label>{`Price(on MRP)`}</Label>
          <Input
            type="number"
            placeholder="Enter Price"
            className="w-full px-[20px] py-[24px] rounded-[6px]"
          />
        </div>
        <div className="flex flex-col gap-[10px] flex-1">
          <Label>{`Price( After Discount )`}</Label>
          <Input
            type="number"
            placeholder="Enter Price"
            className="w-full px-[20px] py-[24px] rounded-[6px]"
          />
        </div>
        <div className="flex flex-col gap-[10px] flex-1">
          <Label>{`Total Taxes`}</Label>
          <Input
            type="number"
            placeholder="Enter Price"
            className="w-full px-[20px] py-[24px] rounded-[6px]"
          />
        </div>
        <div className="flex flex-col gap-[10px] flex-1">
          <Label>{`Net Amount`}</Label>
          <Input
            type="number"
            placeholder="Enter Price"
            className="w-full px-[20px] py-[24px] rounded-[6px]"
          />
        </div>
      </div>
    </CardWrapper>
  );
};
