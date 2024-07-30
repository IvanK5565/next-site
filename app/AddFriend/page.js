import LeftPanel from "@/app/components/LeftPanel";
import CentralPanel from "@/app/components/AddFriend/CentralPanel";
import RightPanel from "@/app/components/RightPanel";
import "./addFriend.css";

export default function NewFriend() {
  return (
    <main className="container">
      <LeftPanel />
      <CentralPanel />
      <RightPanel />
    </main>
  );
}
