"use client"

import { CardWrapper } from "../CardWrapper/CardWrapper"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const mockData = Array.from({ length: 15 }).map((_, i) => ({
  id: i + 1,
  invoice: "1204500",
  customer: i === 0 ? "Paracetamol 500mg" : "Amoxicillin 250mg",
  date: "12/07/2025",
  total: i === 0 ? 32 : i < 2 ? 100 : 500,
  paid: i === 0 ? 32 : i < 2 ? 100 : 500,
  due: i === 0 ? 32 : i < 2 ? 100 : 500,
  status: i < 2 ? { text: "2 Days left to clear", color: "bg-red-100 text-red-500" }
         : i < 4 ? { text: "7 Days left to clear", color: "bg-yellow-100 text-yellow-600" }
         : { text: "20 Days left to clear", color: "bg-green-100 text-green-600" },
}))

const itemsPerPage = 5

export const TableHeaderItem = ({text}: {text: string}) => {
    return (
        <div className="flex flex-row gap-2 items-center">
            <Image src="/icons/progress-icon.svg" alt="Info" width={14} height={14} />
            <span>{text}</span>
        </div>
    )
}

export const CreditLedger = () => {
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(mockData.length / itemsPerPage)
  const paginatedData = mockData.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  return (
    <CardWrapper>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Credit Ledger</h2>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
                <TableHeaderItem text="Sr No"/>
            </TableHead>
            <TableHead>
                <TableHeaderItem text="Invoice Number"/>
            </TableHead>
            <TableHead>
                <TableHeaderItem text="Customer Name"/>
            </TableHead>
            <TableHead>
                <TableHeaderItem text="Date"/>
            </TableHead>
            <TableHead>
                <TableHeaderItem text="Total Amount"/>
            </TableHead>
            <TableHead>
                <TableHeaderItem text="Paid Amount"/>
            </TableHead>
            <TableHead>
                <TableHeaderItem text="Due Amount"/>
            </TableHead>
            <TableHead>
                <TableHeaderItem text="Status"/>
            </TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item, i) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.invoice}</TableCell>
              <TableCell>{item.customer}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.total}</TableCell>
              <TableCell>{item.paid}</TableCell>
              <TableCell>{item.due}</TableCell>
              <TableCell>
                <span className={`px-2 py-1 rounded text-xs font-medium ${item.status.color}`}>
                  {item.status.text}
                </span>
              </TableCell>
              <TableCell>
                <Button size="icon" variant="ghost">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="text-sm text-muted-foreground">
          Page {page} of {totalPages}
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage(p => Math.max(p - 1, 1))}
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
            onClick={() => setPage(p => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </CardWrapper>
  )
}
