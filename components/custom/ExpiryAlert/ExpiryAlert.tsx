"use client";
import { Button } from "@/components/ui/button";
import { CardWrapper } from "../CardWrapper/CardWrapper";
import Image from "next/image";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const ExpiryAlert = () => {
  const data = {
    labels: ["Safe Stock", "Expiring Soon", "Expired"],
    datasets: [
      {
        data: [50, 30, 30],
        backgroundColor: ["#00C389", "#FDC437", "#F44336"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "50%",
    radius: "70%",
    layout: {
        padding: 0,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <CardWrapper className="w-[30vw] p-[20px]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center">
          <Image src="/icons/warning.svg" alt="Expiry" width={20} height={20} />
          <h1 className="text-2xl font-semibold">Expiry Alert</h1>
        </div>
        <Button variant="outline">View Report</Button>
      </div>

      <div className="flex justify-center">
        <Doughnut data={data} options={options} />
      </div>

      <div className="mt-4 flex justify-center gap-6 text-sm">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-[#00C389] rounded-full" />
          <span>
            Safe Stock <b>50</b>
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-[#FDC437] rounded-full" />
          <span>
            Expiring Soon <b>30</b>
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 bg-[#F44336] rounded-full" />
          <span>
            Expired <b>30</b>
          </span>
        </div>
      </div>
    </CardWrapper>
  );
};
