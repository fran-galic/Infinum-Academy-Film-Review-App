import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Header } from "@/components/shared/Header/Header";
import { Box, Flex } from "@chakra-ui/react";
import { SidebarNavigation } from "@/components/shared/SidebarNavigation/SidebarNavigation";
import { Fragment } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

//kako bi se postavila odgovarajuca boja na neki token?
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={inter.className} >
        <Providers>
          <Flex bg="#200050" color='white' px={4} gap={5} > 
             { children }
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
