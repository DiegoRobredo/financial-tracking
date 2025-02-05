"use client";

import Header from "@/app/components/core/header";
import Sidebar from "@/app/components/core/sidebar";
import Content from "@/app/components/core/content";
import Footer from "@/app/components/core/footer";
import { View } from "@/app/components/core/types";
import { useState, FC } from "react";


const Home: FC = () => {
  const [view, setView] = useState<View>("profit_loss");

  return (
    <div className="grid grid-rows-[4rem_1fr] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-row w-full h-full">
        <Sidebar setView={setView} />
        <div className="grid grid-rows-[1fr_4rem] w-full h-full">
          <Content view={view} />
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default Home;