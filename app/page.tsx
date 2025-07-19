import { Card } from "@/components/custom/card/Card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {

  const cardConfig = [
    {
      icon: <Image src="/icons/admin.svg" alt="Admin" width={36} height={36} />,
      title: "Admin",
      description: "View comprehensive analytics and key metrics for your practice.",
      actionCTAs: [
        { label: "Add Vendor" },
        { label: "View Dashboard" }
      ],
      color: "green",
      backgroundColor: "linear-gradient(117deg, #FFF -15.79%, #D0F2E7 102.61%)",
      buttonColor: "#00C283",
    },
    {
      icon: <Image src="/icons/medical.svg" alt="Medical Sales" width={36} height={36} />,
      title: "Medical Sales",
      description: "View comprehensive analytics and key metrics for your practice.",
      actionCTAs: [
        { label: "Add Sales" },
        { label: "View Dashboard" }
      ],
      color: "yellow", 
      backgroundColor: "linear-gradient(117deg, #FFF -15.79%, #FDE699 102.61%)",
      buttonColor: "#FEC320",
    },
    {
      icon: <Image src="/icons/pharmacy.svg" alt="Pharmacy" width={36} height={36} />,
      title: "Pharmacy",
      description: "View comprehensive analytics and key metrics for your practice.",
      actionCTAs: [
        { label: "Add Purchase" },
        { label: "View Dashboard" }
      ],
      color: "purple",
      backgroundColor: "linear-gradient(135deg, #FEFDFE 0%, #DCD1F2 100%);",
      buttonColor: "#6B21A8",
    }
  ];
  

  return (
    <div>
      <Button>Hello</Button>
      <div className="flex flex-row gap-4">
      {
        cardConfig.map((currentCard, label) => {
          return (
            <Card key={label} {...currentCard} />
          )
        })
      }
      </div>
    </div>
  );
}
