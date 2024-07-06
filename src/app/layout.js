import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { dbConnect } from "@/mongo";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Inter({ subsets: ["latin"], variable: "--font-poppinns" });

export const metadata = {
  title: "Learning Portal",
  description: "Explore || Learn || Build",
};

export default async function RootLayout({ children }) {
  const conn = await dbConnect();
  // console.log(conn);

  return (
    <html lang="en">
      <body className={cn(inter.className, poppins.className)}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
