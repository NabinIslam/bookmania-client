import Header from "@/components/shared/Header";
import "../globals.css";
import { Montserrat } from "next/font/google";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";

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
        <TanstackQueryProvider>
          <Header />
          {children}
        </TanstackQueryProvider>
      </body>
    </html>
  );
}
