import { CardWrapper } from "@/components/custom/CardWrapper/CardWrapper";
import { Card } from "@/components/custom/Card/Card";
import Image from "next/image";
import { SalesRefundReportTable } from "@/components/custom/SalesRefundReportTable/SalesRefundReportTable";

export default function RefundReportPage() {
  const cardConfig = [
    {
      icon: <Image src="/icons/admin.svg" alt="Admin" width={36} height={36} />,
      title: "Add Manually",
      description:
        "View comprehensive analytics and key metrics for your practice.",
      actionCTAs: [{ label: "Add Now" }],
      color: "green",
      backgroundColor: "linear-gradient(117deg, #FFF -15.79%, #D0F2E7 102.61%)",
      buttonColor: "#00C283",
    },
    {
      icon: (
        <Image
          src="/icons/medical.svg"
          alt="Medical Sales"
          width={36}
          height={36}
        />
      ),
      title: "Using Billing Id",
      description:
        "View comprehensive analytics and key metrics for your practice.",
      actionCTAs: [{ label: "Add Now" }],
      color: "violet",
      backgroundColor: "linear-gradient(117deg, #FFF -15.79%, #FDE699 102.61%)",
      buttonColor: "#FEC320",
    },
  ];

  return (
    <div>
      <p className="text-2xl font-medium">Add a sales refund</p>
      <div className="flex flex-row gap-4 pt-[20px] py-[32px]">
        {cardConfig.map((currentCard, label) => {
          return (
            <div key={label} className="max-w-[424px]">
              <Card {...currentCard} />
            </div>
          );
        })}
      </div>

      <p className="text-2xl font-medium">Find sales refund report</p>
      <div className="pt-[20px] py-[32px]">
        <CardWrapper className="flex flex-col">
          <h1 className="">Form elements here...</h1>
        </CardWrapper>
      </div>

      <p className="text-2xl font-medium">Sales Refund Report</p>
      <div className="pt-[20px] py-[32px] ">
        <CardWrapper className="flex flex-col gap-[20px]">
          <SalesRefundReportTable />
        </CardWrapper>
      </div>
    </div>
  );
}
