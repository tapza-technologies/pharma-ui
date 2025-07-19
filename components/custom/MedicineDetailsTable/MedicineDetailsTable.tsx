'use client'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CardWrapper } from "../CardWrapper/CardWrapper";
import { TableHeaderItem } from "../CreditLedger/CreditLedger";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const itemsPerPage = 8;

const mockData = [
  {
    id: 1,
    invoice: "INV-001",
    customer: "Paracetamol 500mg",
    date: "01-03-2025",
    total: 32,
    paid: 32,
    due: 0,
    status: { text: "Expiring Soon", color: "bg-yellow-100 text-yellow-800" },
  },
  {
    id: 2,
    invoice: "INV-002",
    customer: "Amoxicillin 250mg",
    date: "01-03-2025",
    total: 100,
    paid: 100,
    due: 0,
    status: { text: "Expiring Soon", color: "bg-yellow-100 text-yellow-800" },
  },
  {
    id: 3,
    invoice: "INV-003",
    customer: "Amoxicillin 250mg",
    date: "01-03-2025",
    total: 500,
    paid: 500,
    due: 0,
    status: { text: "Expiring Soon", color: "bg-yellow-100 text-yellow-800" },
  },
  {
    id: 4,
    invoice: "INV-004",
    customer: "Amoxicillin 250mg",
    date: "01-03-2025",
    total: 500,
    paid: 0,
    due: 500,
    status: { text: "Expired", color: "bg-red-100 text-red-800" },
  },
  {
    id: 5,
    invoice: "INV-005",
    customer: "Amoxicillin 250mg",
    date: "01-03-2025",
    total: 500,
    paid: 0,
    due: 500,
    status: { text: "Expired", color: "bg-red-100 text-red-800" },
  },
  {
    id: 6,
    invoice: "INV-006",
    customer: "Amoxicillin 250mg",
    date: "01-03-2025",
    total: 500,
    paid: 0,
    due: 500,
    status: { text: "Expired", color: "bg-red-100 text-red-800" },
  },
  {
    id: 7,
    invoice: "INV-001",
    customer: "Paracetamol 500mg",
    date: "01-03-2025",
    total: 32,
    paid: 32,
    due: 0,
    status: { text: "Expiring Soon", color: "bg-yellow-100 text-yellow-800" },
  },
  {
    id: 8,
    invoice: "INV-002",
    customer: "Amoxicillin 250mg",
    date: "01-03-2025",
    total: 100,
    paid: 100,
    due: 0,
    status: { text: "Expiring Soon", color: "bg-yellow-100 text-yellow-800" },
  },
];

export const MedicineDetailsTable = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(mockData.length / itemsPerPage);
  const paginatedData = mockData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <CardWrapper className="w-full">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Medicine Details</h2>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <TableHeaderItem text="Sr No" />
            </TableHead>
            <TableHead>
              <TableHeaderItem text="Invoice Number" />
            </TableHead>
            <TableHead>
              <TableHeaderItem text="Customer Name" />
            </TableHead>
            <TableHead>
              <TableHeaderItem text="Date" />
            </TableHead>
            <TableHead>
              <TableHeaderItem text="Total Amount" />
            </TableHead>
            <TableHead>
              <TableHeaderItem text="Paid Amount" />
            </TableHead>
            <TableHead>
              <TableHeaderItem text="Due Amount" />
            </TableHead>
            <TableHead>
              <TableHeaderItem text="Status" />
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item, i) => (
            <TableRow key={item.id} className="h-[55px]">
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.invoice}</TableCell>
              <TableCell>{item.customer}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.total}</TableCell>
              <TableCell>{item.paid}</TableCell>
              <TableCell>{item.due}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${item.status.color}`}
                >
                  {item.status.text}
                </span>
              </TableCell>
              {/* <TableCell>
                <Button size="icon" variant="ghost">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-center mt-4 gap-[35px]">
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
            <ChevronLeft className="w-4 h-4" />
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
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </CardWrapper>
  );
};
