import LeftPanel from "@/app/components/LeftPanel.js";
import CentralPanel from "@/app/components/CentralPanel.js";
import RightPanel from "@/app/components/RightPanel.js";

export default function Home() {
  return (
    <>
      <main className="container">
        <LeftPanel />
        <CentralPanel />
        <RightPanel />
      </main>
    </>
  );
}
