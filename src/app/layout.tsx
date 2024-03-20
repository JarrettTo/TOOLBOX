import "@/styles/globals.css";

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
      <html lang="en">
      <body className="min-h-screen bg-white-smoke text-black-pearl antialiased">

      <div className="container max-w-7xl h-full pt-12">
        {children}
      </div>
      </body>
      </html>
  );
}
