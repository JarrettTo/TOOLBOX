import HomeNavbar from "@/components/HomeNavbar";
import Banner from "@/components/Banner";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Toolbox",
  description: "Toolbox",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html
          lang="en"
          className={cn(
              "bg-white-smoke text-black-pearl antialiased light",
              inter.className
          )}
      >
          <body className="min-h-screen pt-12 bg-white-smoke text-black-pearl antialiased">
              <Banner/>
              <HomeNavbar />

            <div className="container max-w-7xl mx-auto h-full pt-12">
                {children}
            </div>
          </body>
      </html>
  );
}
