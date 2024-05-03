import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/header";
import { HomeData } from "@/utils/home-type";
import { getDataHome } from "@/utils/actions/get-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevMotors - Sua oficina especializada!",
  description: "Oficinal de carros em São Paulo",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { object }: HomeData = await getDataHome();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <span className="w-full flex items-center justify-center mx-auto mb-8">
          Todos direitos reservados {object.title} @
          {`${new Date().getFullYear()}`}
        </span>
      </body>
    </html>
  );
}
