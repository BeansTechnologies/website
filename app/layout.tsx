import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {Metadata} from "next";

const inter = Inter({ subsets: ['latin'] })

const getBaseUrl = () => {
    return process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
}

export const metadata: Metadata = {
    metadataBase: new URL(getBaseUrl()),
    title: {
        default: "Beans Technologies",
        template: "%s | Beans Technologies",
    },
    description: "High-quality open-source software solution for web developers.",
    alternates: {
        canonical: getBaseUrl(),
    },
    openGraph: {
        title: {
            default: "Beans Technologies",
            template: "%s | Beans Technologies",
        },
        description: "High-quality open-source software solution for web developers.",
        type: "website",
        url: getBaseUrl(),
    },
    twitter: {
        card: "summary",
        title: "Beans Technologies",
        description: "High-quality open-source software solution for web developers.",
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
        <body className={`${inter.className}`}>
          <Navbar/>

          <div className={"z-[2] pointer-events-none bg-noisy fixed opacity-40 h-screen w-screen top-0 left-0 bg-blend-normal"}></div>

          <div className="w-full h-screen bg-black z-[1] relative">
              {children}
          </div>

          <Footer/>
        </body>
      </html>
  )
}
