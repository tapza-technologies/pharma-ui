"use client";

import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const NavBar = () => {

  const pathname = usePathname();

  const breadcrumbItems = pathname.split("/").filter(Boolean);

  return (
    <div className="flex flex-row justify-between items-center h-[70px] bg-white px-[64px] py-[14px] border-b border-gray-200 fixed top-0 left-0 z-10 w-full">
      <div className="flex flex-row gap-2 items-center">
        <Image src="/icons/navbar-logo.svg" alt="Logo" width={20} height={20} />
        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-sm font-medium">
                CRM
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {breadcrumbItems.map((item, index) => (
              <div className="flex flex-row gap-2 items-center" key={index}>
              <BreadcrumbItem key={index}>
                <BreadcrumbLink className="text-sm font-medium">
                  {item}
                </BreadcrumbLink>
              </BreadcrumbItem>
              {index < breadcrumbItems.length - 1 && (
                <BreadcrumbSeparator />
              )}
              </div>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex flex-row gap-[24px] items-center">
        <Image
          src="/icons/notification.svg"
          alt="Notification"
          width={20}
          height={20}
        />

        <div className="flex flex-row gap-[14px] items-center">
          <div className="bg-[#D0F2E7] p-[12px] text-[#00C283] rounded-[6px]">
            <span className="text-[14px] font-semibold">A</span>
          </div>

          <div className="flex flex-col">
            <div className="text-[16px] font-semibold">Krishna vamsi</div>
            <div className="text-[14px] font-medium text-[#667085]">Admin</div>
          </div>
        </div>
      </div>
    </div>
  );
};
