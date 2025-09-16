// src/components/Layout.tsx
import React from "react";
import Navbar from "./Navbar"; // Criaremos este
import Footer from "./Footer"; // Criaremos este

interface LayoutProps {
  onNavigate: (page: string) => void;
  currentPage: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({
  onNavigate,
  currentPage,
  children,
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col font-sans text-gray-800">
      <Navbar onNavigate={onNavigate} currentPage={currentPage} />
      <main className="flex-grow container mx-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center animate-fade-in">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
