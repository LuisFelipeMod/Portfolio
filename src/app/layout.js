import { Montserrat } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/cursor";


const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Luis Modesto",
  description: "https://github.com/LuisFelipeMod",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        {children}
        <Cursor/>
      </body>
      
    </html>
  );
}
