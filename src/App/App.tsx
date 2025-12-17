import MemeForm from "../components/functionnal/MemeForm/MemeForm.store";
import FlexH3Grow from "../components/layout/FlexH3Grow/FlexH3Grow";
import FlexV1Grow from "../components/layout/FlexV1Grow/FlexV1Grow";
import Footer from "../components/ui/Footer/Footer";
import Header from "../components/ui/Header/Header";
import Navbar from "../components/ui/Navbar/Navbar";
import "../store/store";
import MemeSvgViewer from "../components/ui/MemeSvgViewer/MemeSvgViewer.store";

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <FlexH3Grow>
          <Header/>
          <Navbar/>
          <FlexV1Grow>
            <MemeSvgViewer basePath=""/>
            <MemeForm />
          </FlexV1Grow>
          <Footer />
        </FlexH3Grow>
      </div>
    </>
  );
};

export default App;
