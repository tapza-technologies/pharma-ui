import { MedicalSalesSideBar } from "@/components/custom/MedicalSalesSideBar/MedicalSalesSideBar";

export default function MedicalSalesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-row">
            <div className="w-[20vw] h-screen bg-white">
                <MedicalSalesSideBar />
            </div>
            <div className="w-[80vw] h-screen bg-muted p-[20px]">
            {children}
            </div>
        </div>
    )
}