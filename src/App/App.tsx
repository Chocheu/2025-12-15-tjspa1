import MemeForm from "../components/functionnal/MemeForm/MemeForm";
import FlexH3Grow from "../components/layout/FlexH3Grow/FlexH3Grow";
import FlexV1Grow from "../components/layout/FlexV1Grow/FlexV1Grow";
import Footer from "../components/ui/Footer/Footer";
import Header from "../components/ui/Header/Header";
import MemeSvgViewer from "../components/ui/MemeSvgViewer/MemeSvgViewer";
import Navbar from "../components/ui/Navbar/Navbar";

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <FlexH3Grow>
        <Header></Header>
        <Navbar></Navbar>
        <FlexV1Grow>
          <MemeSvgViewer></MemeSvgViewer>
          <MemeForm></MemeForm>
        </FlexV1Grow>
        <Footer></Footer>
      </FlexH3Grow>
    </div>
  );
};

export default App;
