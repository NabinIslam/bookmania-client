import Header from "@/components/shared/Header";
import "../globals.css";
import { Montserrat } from "next/font/google";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import { Toaster } from "@/components/ui/sonner";
import { UserProvider } from "@/providers/UserContext";

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function CommonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.className} antialiased`}>
        <UserProvider>
          <TanstackQueryProvider>
            <Header />
            {children}
            <Toaster />
          </TanstackQueryProvider>
        </UserProvider>
      </body>
    </html>
  );
}
