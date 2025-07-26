"use client";

import { AddMedicineTable } from "@/components/custom/AddMedicinesTable/AddMedicineTable";
import { BillingSummaryForm } from "@/components/custom/BillingSummaryForm/BillingSummaryForm";
import { MedicalSalesButton } from "@/components/custom/MedicalSalesButton/MedicalSalesButton";
import { MedicineDetailsTable } from "@/components/custom/MedicineDetailsTable/MedicineDetailsTable";
import { PatientInformationForm } from "@/components/custom/PatientInformation/PatientInformationForm";
import { PaymentModeForm } from "@/components/custom/PaymentModeForm/PaymentModeForm";
import Image from "next/image";

export default function SalesPage() {
  return (
    <div>
      <div>
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-medium">Patient Information</p>
          <div className="flex flex-row gap-[10px]">
            <MedicalSalesButton
              icon={
                <Image
                  src="/icons/print-file-blue.svg"
                  alt="Medical Sales"
                  width={20}
                  height={20}
                />
              }
              label="Save as Draft"
              onClick={() => {}}
              color="#03B0EF"
            />
            <MedicalSalesButton
              icon={
                <Image
                  src="/icons/delete-icon.svg"
                  alt="Clear"
                  width={20}
                  height={20}
                />
              }
              label="Clear"
              onClick={() => {}}
              color="#EB3B48"
            />
            <MedicalSalesButton
              icon={
                <Image
                  src="/icons/print-file-green.svg"
                  alt="Save & Paid"
                  width={20}
                  height={20}
                />
              }
              label="Save & Paid"
              onClick={() => {}}
              color="#00C283"
            />
            <MedicalSalesButton
              icon={
                <Image
                  src="/icons/print-file-black.svg"
                  alt="Print"
                  width={20}
                  height={20}
                />
              }
              label="Print"
              onClick={() => {}}
              color="#000000"
            />
          </div>
        </div>

        <PatientInformationForm />
      </div>

      <div className="mt-[32px]">
        <div className="flex flex-row justify-between items-center">
          <p className="text-xl font-medium">Medical Sales</p>
          <div className="flex flex-row gap-[10px]">
            <MedicalSalesButton
              icon={
                <Image
                  src="/icons/delete-icon.svg"
                  alt="Clear"
                  width={20}
                  height={20}
                />
              }
              label="Delete All Medicines"
              onClick={() => {}}
              color="#EB3B48"
            />
            <MedicalSalesButton
              label="+ Add Medicine"
              onClick={() => {}}
              color="#000000"
            />
          </div>
        </div>

        <div className="mt-[20px]">
        <AddMedicineTable />
        </div>
      </div>

      <div className="mt-[32px]">
        <p className="text-xl font-medium">Billing Summary</p>
        <BillingSummaryForm />
      </div>

      <div className="mt-[32px]">
        <p className="text-xl font-medium">Payment Mode</p>
        <PaymentModeForm />
      </div>
    </div>
  );
}
