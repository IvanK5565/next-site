import Header from "@/app/components/Header";
import LeftPanel from "@/app/components/LeftPanel.js";
import CentralPanel from "@/app/components/CentralPanel.js";
import RightPanel from "@/app/components/RightPanel.js";

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <LeftPanel />
        <CentralPanel />
        <RightPanel />
      </main>
    </>
  );
}
