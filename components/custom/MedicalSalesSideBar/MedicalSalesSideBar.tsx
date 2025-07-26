"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MedicalSalesSideBar = () => {
  return (
    <div className="py-[16px] px-[12px] flex flex-col gap-[12px]">
      <MedicalSalesSideBarItem label="Sales" href="/medical-sales/sales" />
      <MedicalSalesSideBarItem
        label="Bulk Sales"
        href="/medical-sales/bulk-sales"
      />
      <MedicalSalesSideBarItem
        label="GST Sales"
        href="/medical-sales/gst-sales"
      />
      <MedicalSalesSideBarItem
        label="Sales Report"
        href="/medical-sales/sales-report"
      />
      <MedicalSalesSideBarItem
        label="Refund Report"
        href="/medical-sales/refund-report"
      />
    </div>
  );
};

export type MedicalSalesSideBarItemProps = {
  label: string;
  href: string;
};

export const MedicalSalesSideBarItem = ({
  label,
  href,
}: MedicalSalesSideBarItemProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div
        className={`${
          isActive ? "bg-[#F7F7F9] text-[#03B0EF]" : "bg-white"
        } rounded-[8px] px-[16px] py-[16px] flex flex-row gap-[12px] items-center text-sm hover:bg-[#F7F7F9]`}
      >
        <Image src="/icons/sales-sidebar-icon.svg" alt="Medical Sales" width={20} height={20} />
        {label}
      </div>
    </Link>
  );
};
