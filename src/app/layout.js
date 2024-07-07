import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "./Components/HeaderComponent/HeaderComponent";
import Footer from "./Components/Footer/footer";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Enclair Technologies",
  description: "Made by Huzaifa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content="laptops, Enclair Technologies, student laptops, professional laptops, gaming laptops" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <HeaderComponent />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
