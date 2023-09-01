import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import AuthProvider from "@/components/AuthProvider/AuthProvider";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "TechNova",
  description: "This is the landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
      <ThemeProvider>
      <AuthProvider>
        <div className="container">
        <Navbar />
        <div className="children">{children}</div>
        <Footer />
        </div>
      </AuthProvider>
      </ThemeProvider>
      </body>
    </html>
  );
}
