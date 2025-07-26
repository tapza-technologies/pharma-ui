import { Label } from "@/components/ui/label";
import { CardWrapper } from "../CardWrapper/CardWrapper";
import { Input } from "@/components/ui/input";

export const PatientInformationForm = () => {
  return (
    <CardWrapper className="mt-[32px] p-[20px]">
      <div className="flex flex-col gap-[12px]">
        <div className="flex flex-row gap-[20px]">
          <div className="flex flex-col gap-[10px] flex-1">
            <Label>Saluation</Label>
            <Input
              type="text"
              placeholder="Enter Saluation"
              className="w-full px-[20px] py-[24px] rounded-[6px]"
            />
          </div>
          <div className="flex flex-col gap-[10px] flex-1">
            <Label>Phone Number</Label>
            <Input
              type="number"
              placeholder="+91 9xxxxxxxxx"
              className="w-full px-[20px] py-[24px] rounded-[6px]"
            />
          </div>
          <div className="flex flex-col gap-[10px] flex-1">
            <Label>Name</Label>
            <Input
              type="text"
              placeholder="Enter Patient Name"
              className="w-full px-[20px] py-[24px] rounded-[6px]"
            />
          </div>
        </div>
        <div className="flex flex-row gap-[20px]">
          <div className="flex flex-col gap-[10px] flex-1">
            <Label>Age</Label>
            <Input
              type="number"
              placeholder="Enter Age"
              className="w-full px-[20px] py-[24px] rounded-[6px]"
            />
          </div>
          <div className="flex flex-col gap-[10px] flex-1">
            <Label>In Time</Label>
            <Input
              type="number"
              placeholder="Enter In Time"
              className="w-full px-[20px] py-[24px] rounded-[6px]"
            />
          </div>
          <div className="flex flex-col gap-[10px] flex-1">
            <Label htmlFor="role">Gender</Label>
            <Input
              type="text"
              placeholder="Select Gender"
              className="w-full px-[20px] py-[24px] rounded-[6px]"
            />
          </div>
          <div className="flex flex-col gap-[10px] flex-1">
            <Label htmlFor="role">Address</Label>
            <Input
              type="Address"
              placeholder="Enter Address"
              className="w-full px-[20px] py-[24px] rounded-[6px]"
            />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};
