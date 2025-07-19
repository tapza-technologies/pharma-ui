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

// Mock data for stock overview
const mockData = [
  { id: 1, medicine: "Paracetamol 500mg", qty: 32, threshold: 32 },
  { id: 2, medicine: "Amoxicillin 250mg", qty: 100, threshold: 100 },
  { id: 3, medicine: "Amoxicillin 250mg", qty: 500, threshold: 1000 },
  { id: 4, medicine: "Amoxicillin 250mg", qty: 500, threshold: 1000 },
  { id: 5, medicine: "Amoxicillin 250mg", qty: 500, threshold: 1000 },
  { id: 6, medicine: "Amoxicillin 250mg", qty: 500, threshold: 1000 },
  { id: 7, medicine: "Amoxicillin 250mg", qty: 500, threshold: 1000 },
  { id: 8, medicine: "Amoxicillin 250mg", qty: 500, threshold: 1000 },
  { id: 9, medicine: "Amoxicillin 250mg", qty: 500, threshold: 1000 },
  { id: 10, medicine: "Amoxicillin 250mg", qty: 500, threshold: 1000 },
  { id: 11, medicine: "Amoxicillin 250mg", qty: 500, threshold: 1000 },
  { id: 12, medicine: "Amoxicillin 250mg", qty: 500, threshold: 1000 },
  { id: 13, medicine: "Amoxicillin 250mg", qty: 500, threshold: 1000 },
  { id: 14, medicine: "Amoxicillin 250mg", qty: 500, threshold: 1000 },
  { id: 15, medicine: "Amoxicillin 250mg", qty: 500, threshold: 1000 },
];

const itemsPerPage = 8;

function getStockStatus(qty: number, threshold: number) {
  if (threshold === 0) return { percent: 100, color: "bg-yellow-400" };
  const percent = Math.round((qty / threshold) * 100);
  let color = "bg-yellow-400";
  if (percent < 60) color = "bg-red-400";
  else if (percent < 80) color = "bg-yellow-400";
  else color = "bg-yellow-400";
  return { percent, color };
}

export const StockOverviewTable = () => {
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
          <TableRow>
            <TableHead>
              <div className="flex flex-row gap-2 items-center">
                <Image
                  src="/icons/table-header-pill-icon.svg"
                  alt="Info"
                  width={14}
                  height={14}
                />
                <span>Medicine</span>
              </div>
            </TableHead>
            <TableHead>Qty</TableHead>
            <TableHead>Threshold Qty</TableHead>
            <TableHead>Stock Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item) => {
            const { percent, color } = getStockStatus(item.qty, item.threshold);
            return (
              <TableRow key={item.id} className="border-none h-[55px]">
                <TableCell className="w-[350px]">{item.medicine}</TableCell>
                <TableCell className="w-[200px]">{item.qty}</TableCell>
                <TableCell className="w-[200px]">{item.threshold}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-4 bg-gray-100 rounded overflow-hidden">
                      <div
                        className={`${color} h-4`}
                        style={{
                          width: `${percent}%`,
                          transition: "width 0.3s",
                        }}
                      />
                    </div>
                    <span className="text-sm font-medium">{percent}%</span>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
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
