import LeftPanel from "./LeftPanel.js";
import CentralPanel from "./CentralPanel.js";
import RightPanel from "./RightPanel.js";

const Main = () => {
    return (
        <main className="container">
            <LeftPanel />
            <CentralPanel />
            <RightPanel />
        </main>
    )
}

export default Main