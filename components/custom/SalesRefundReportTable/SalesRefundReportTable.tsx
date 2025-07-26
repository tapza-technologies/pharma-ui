"use client";

import { CardWrapper } from "../CardWrapper/CardWrapper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

// Mock data for sales refund report
const mockData = [
  { 
    id: 1, 
    date: "12/07/2025", 
    medicine: "Paracetamol 500mg", 
    qty: 32, 
    batch: 32, 
    expiry: 32, 
    mrp: 32, 
    availableQty: 32 
  },
  { 
    id: 2, 
    date: "12/07/2025", 
    medicine: "Amoxicillin 250mg", 
    qty: 100, 
    batch: 100, 
    expiry: 100, 
    mrp: 100, 
    availableQty: 100 
  },
  { 
    id: 3, 
    date: "12/07/2025", 
    medicine: "Amoxicillin 250mg", 
    qty: 500, 
    batch: 500, 
    expiry: 500, 
    mrp: 500, 
    availableQty: 500 
  },
  { 
    id: 4, 
    date: "12/07/2025", 
    medicine: "Amoxicillin 250mg", 
    qty: 500, 
    batch: 500, 
    expiry: 500, 
    mrp: 500, 
    availableQty: 500 
  },
  { 
    id: 5, 
    date: "12/07/2025", 
    medicine: "Amoxicillin 250mg", 
    qty: 500, 
    batch: 500, 
    expiry: 500, 
    mrp: 500, 
    availableQty: 500 
  },
  { 
    id: 6, 
    date: "12/07/2025", 
    medicine: "Amoxicillin 250mg", 
    qty: 500, 
    batch: 500, 
    expiry: 500, 
    mrp: 500, 
    availableQty: 500 
  },
  { 
    id: 7, 
    date: "12/07/2025", 
    medicine: "Amoxicillin 250mg", 
    qty: 500, 
    batch: 500, 
    expiry: 500, 
    mrp: 500, 
    availableQty: 500 
  },
  { 
    id: 8, 
    date: "12/07/2025", 
    medicine: "Amoxicillin 250mg", 
    qty: 500, 
    batch: 500, 
    expiry: 500, 
    mrp: 500, 
    availableQty: 500 
  },
  { 
    id: 9, 
    date: "12/07/2025", 
    medicine: "Amoxicillin 250mg", 
    qty: 500, 
    batch: 500, 
    expiry: 500, 
    mrp: 500, 
    availableQty: 500 
  },
  { 
    id: 10, 
    date: "12/07/2025", 
    medicine: "Amoxicillin 250mg", 
    qty: 500, 
    batch: 500, 
    expiry: 500, 
    mrp: 500, 
    availableQty: 500 
  },
  { 
    id: 11, 
    date: "12/07/2025", 
    medicine: "Amoxicillin 250mg", 
    qty: 500, 
    batch: 500, 
    expiry: 500, 
    mrp: 500, 
    availableQty: 500 
  },
  { 
    id: 12, 
    date: "12/07/2025", 
    medicine: "Amoxicillin 250mg", 
    qty: 500, 
    batch: 500, 
    expiry: 500, 
    mrp: 500, 
    availableQty: 500 
  },
  { 
    id: 13, 
    date: "12/07/2025", 
    medicine: "Amoxicillin 250mg", 
    qty: 500, 
    batch: 500, 
    expiry: 500, 
    mrp: 500, 
    availableQty: 500 
  },
  { 
    id: 14, 
    date: "12/07/2025", 
    medicine: "Amoxicillin 250mg", 
    qty: 500, 
    batch: 500, 
    expiry: 500, 
    mrp: 500, 
    availableQty: 500 
  },
  { 
    id: 15, 
    date: "12/07/2025", 
    medicine: "Amoxicillin 250mg", 
    qty: 500, 
    batch: 500, 
    expiry: 500, 
    mrp: 500, 
    availableQty: 500 
  },
];

const itemsPerPage = 6;

export const SalesRefundReportTable = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(mockData.length / itemsPerPage);
  const paginatedData = mockData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <CardWrapper className="rounded-[12px] border border-[rgba(240,240,243,0.5)] bg-white w-full">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-50">
            <TableHead className="text-center">
              <div className="flex flex-row gap-2 items-center justify-center">
                <Image
                  src="/icons/table-header-pill-icon.svg"
                  alt="Info"
                  width={14}
                  height={14}
                />
                <span>Order ID</span>
              </div>
            </TableHead>
            <TableHead className="text-center">
              <div className="flex flex-row gap-2 items-center justify-center">
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 2V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 8H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 4H5C3.89543 4 3 4.89543 3 6V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V6C21 4.89543 20.1046 4 19 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Date</span>
              </div>
            </TableHead>
            <TableHead className="text-center">
              <div className="flex flex-row gap-2 items-center justify-center">
                <Image
                  src="/icons/table-header-pill-icon.svg"
                  alt="Info"
                  width={14}
                  height={14}
                />
                <span>Medicine</span>
              </div>
            </TableHead>
            <TableHead className="text-center">
              <div className="flex flex-row gap-2 items-center justify-center">
                <Image
                  src="/icons/table-header-pill-icon.svg"
                  alt="Info"
                  width={14}
                  height={14}
                />
                <span>Qty</span>
              </div>
            </TableHead>
            <TableHead className="text-center">
              <div className="flex flex-row gap-2 items-center justify-center">
                <Image
                  src="/icons/table-header-pill-icon.svg"
                  alt="Info"
                  width={14}
                  height={14}
                />
                <span>Batch</span>
              </div>
            </TableHead>
            <TableHead className="text-center">
              <div className="flex flex-row gap-2 items-center justify-center">
                <Image
                  src="/icons/table-header-pill-icon.svg"
                  alt="Info"
                  width={14}
                  height={14}
                />
                <span>Expiry</span>
              </div>
            </TableHead>
            <TableHead className="text-center">
              <div className="flex flex-row gap-2 items-center justify-center">
                <Image
                  src="/icons/table-header-pill-icon.svg"
                  alt="Info"
                  width={14}
                  height={14}
                />
                <span>MRP</span>
              </div>
            </TableHead>
            <TableHead className="text-center">
              <div className="flex flex-row gap-2 items-center justify-center">
                <Image
                  src="/icons/table-header-pill-icon.svg"
                  alt="Info"
                  width={14}
                  height={14}
                />
                <span>Avl. Qty</span>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item) => (
            <TableRow key={item.id} className="border-none h-[55px]">
              <TableCell className="text-center">{item.id}</TableCell>
              <TableCell className="text-center">{item.date}</TableCell>
              <TableCell className="text-center">{item.medicine}</TableCell>
              <TableCell className="text-center">{item.qty}</TableCell>
              <TableCell className="text-center">{item.batch}</TableCell>
              <TableCell className="text-center">{item.expiry}</TableCell>
              <TableCell className="text-center">{item.mrp}</TableCell>
              <TableCell className="text-center">{item.availableQty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-[35px] mt-4">
        <div className="text-sm text-muted-foreground">
          Page {page} of {totalPages}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Button>
          {[...Array(totalPages)].map((_, i) => (
            <Button
              key={i}
              variant={page === i + 1 ? "default" : "outline"}
              size="icon"
              onClick={() => setPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </div>
    </CardWrapper>
  );
};
