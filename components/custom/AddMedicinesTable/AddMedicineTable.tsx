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

const mockData = [
  {
    id: 1,
    date: "12/07/2025",
    medicine: "Paracetamol 500mg",
    qty: 32,
    batch: 32,
    expiry: "12/07/2026",
    mrp: 32,
    availableQty: 32,
  },
  {
    id: 2,
    date: "12/07/2025",
    medicine: "Amoxicillin 250mg",
    qty: 100,
    batch: 100,
    expiry: "12/07/2026",
    mrp: 100,
    availableQty: 100,
  },
  {
    id: 3,
    date: "12/07/2025",
    medicine: "Amoxicillin 250mg",
    qty: 500,
    batch: 500,
    expiry: "12/07/2026",
    mrp: 500,
    availableQty: 500,
  },
  {
    id: 4,
    date: "12/07/2025",
    medicine: "Amoxicillin 250mg",
    qty: 500,
    batch: 500,
    expiry: "12/07/2026",
    mrp: 500,
    availableQty: 500,
  },
  {
    id: 5,
    date: "12/07/2025",
    medicine: "Amoxicillin 250mg",
    qty: 500,
    batch: 500,
    expiry: "12/07/2026",
    mrp: 500,
    availableQty: 500,
  },
  {
    id: 6,
    date: "12/07/2025",
    medicine: "Amoxicillin 250mg",
    qty: 500,
    batch: 500,
    expiry: "12/07/2026",
    mrp: 500,
    availableQty: 500,
  },
];

export const AddMedicineTable = () => {
  return (
    <CardWrapper className="w-full">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead><TableHeaderItem text="Sr No" /></TableHead>
            <TableHead><TableHeaderItem text="Date" /></TableHead>
            <TableHead><TableHeaderItem text="Medicine Name" /></TableHead>
            <TableHead><TableHeaderItem text="Qty" /></TableHead>
            <TableHead><TableHeaderItem text="Batch" /></TableHead>
            <TableHead><TableHeaderItem text="Expiry" /></TableHead>
            <TableHead><TableHeaderItem text="MRP" /></TableHead>
            <TableHead><TableHeaderItem text="Available Qty" /></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockData.map((item) => (
            <TableRow key={item.id} className="h-[55px]">
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.medicine}</TableCell>
              <TableCell>{item.qty}</TableCell>
              <TableCell>{item.batch}</TableCell>
              <TableCell>{item.expiry}</TableCell>
              <TableCell>{item.mrp}</TableCell>
              <TableCell>{item.availableQty}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </CardWrapper>
  );
};
