import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted p-4">
      <div className="bg-white rounded-xl shadow-xl overflow-hidden w-full max-w-5xl grid grid-cols-1 md:grid-cols-2">
        {/* Left Side Image & Text */}
        <div className="bg-[#4179D9] text-white flex flex-col items-center justify-center p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Welcome to HMS</h2>
          <p className="text-center text-sm mb-6">
            Your one-stop solution for streamlined hospital management and patient care.
          </p>
          {/* <div className="relative w-full h-96">
            <Image
              src="/login-image.png" // replace with your actual image path
              alt="Doctors"
              fill
              className="object-contain"
              priority
            />
          </div> */}
        </div>

        {/* Right Side Login Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center gap-[8px]">
          <h3 className="text-2xl font-bold mb-6 text-center">Login</h3>

          {/* Role Dropdown */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="role">Role</Label>
            <Select>
              <SelectTrigger className="mb-4 w-full py-[20px]">
              <SelectValue placeholder="Select Item" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="doctor">Doctor</SelectItem>
              <SelectItem value="nurse">Nurse</SelectItem>
            </SelectContent>
          </Select>
          </div>

          {/* Username */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="username">Username</Label>
            <Input id="username" placeholder="Enter your username" className="mb-4 py-[20px]" />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" className="mb-2 py-[20px]" />
          </div>

          {/* Remember me and Forgot Password */}
          <div className="flex items-center justify-between mb-4 text-sm">
            <div className="flex items-center space-x-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember">Remember me</Label>
            </div>
            <button className="text-blue-600 hover:underline">Forgot Password</button>
          </div>

          {/* Submit Button */}
          <Button className="w-full bg-[#4179D9] text-white py-[24px]">Sign in</Button>
        </div>
      </div>
    </div>
  );
}
