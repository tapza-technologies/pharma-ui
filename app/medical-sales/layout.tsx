import { MedicalSalesSideBar } from "@/components/custom/MedicalSalesSideBar/MedicalSalesSideBar";

export default function MedicalSalesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row">
        <div className="fixed top-[70px] left-0 h-[calc(100vh-70px)] w-[20vw] bg-white overflow-y-auto z-40">
          <MedicalSalesSideBar />
        </div>
            <div className="w-[80vw] min-h-screen bg-muted p-[20px] ml-[20vw] mt-[70px]">
            {children}
            </div>
        </div>
    )
}