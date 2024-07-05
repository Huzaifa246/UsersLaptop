import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import Footer from "./Components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enclair Technologies",
  description: "Made by Huzaifa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={inter.className}>
        <HeaderComponent />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
