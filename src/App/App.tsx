import { emptyMeme, MemeSVGViewer, type ImageInterface } from "orsys-tjs-meme";
import MemeForm from "../components/functionnal/MemeForm/MemeForm";
import FlexH3Grow from "../components/layout/FlexH3Grow/FlexH3Grow";
import FlexV1Grow from "../components/layout/FlexV1Grow/FlexV1Grow";
import Footer from "../components/ui/Footer/Footer";
import Header from "../components/ui/Header/Header";
import Navbar from "../components/ui/Navbar/Navbar";
import React, { useEffect, useState } from "react";

type TImage = Array<ImageInterface>;

const App: React.FC = () => {
  const [images, setImages] = useState<TImage>([]);
  useEffect(() => {
    fetch("http://localhost:5629/images")
      .then((r) => r.json())
      .then((imgs) => setImages(imgs));
  }, []);

  return (
    <React.Fragment>
      <div>images : {JSON.stringify(images)}</div>
      <div className="App">
        <FlexH3Grow>
          <Header></Header>
          <Navbar></Navbar>
          <FlexV1Grow>
            <MemeSVGViewer
              meme={emptyMeme}
              image={undefined}
              basePath=""
            ></MemeSVGViewer>
            <MemeForm></MemeForm>
          </FlexV1Grow>
          <Footer></Footer>
        </FlexH3Grow>
      </div>
    </React.Fragment>
  );
};

export default App;
