import { emptyMeme, MemeSVGViewer, type ImageInterface } from "orsys-tjs-meme";
import MemeForm from "../components/functionnal/MemeForm/MemeForm";
import FlexH3Grow from "../components/layout/FlexH3Grow/FlexH3Grow";
import FlexV1Grow from "../components/layout/FlexV1Grow/FlexV1Grow";
import Footer from "../components/ui/Footer/Footer";
import Header from "../components/ui/Header/Header";
import Navbar from "../components/ui/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import { REST_API_URL, REST_API_RESOURCES } from "../config/constantes";

type TImage = Array<ImageInterface>;

const App: React.FC = () => {
  const [current, setCurrent] = useState(emptyMeme);
  const [images, setImages] = useState<TImage>([]);
  useEffect(() => {
    fetch(`${REST_API_URL}${REST_API_RESOURCES.images}`)
      .then((r) => r.json())
      .then((imgs) => setImages(imgs));
  }, []);

  return (
    <React.Fragment>
      <div className="App">
        <FlexH3Grow>
          <Header></Header>
          <Navbar></Navbar>
          <FlexV1Grow>
            <MemeSVGViewer
              image={images.find((item) => item.id === current.imageId)}
              meme={current}
              basePath=""
            ></MemeSVGViewer>
            <MemeForm
              images={images}
              meme={current}
              onMemeChange={(meme) => {
                setCurrent(meme);
              }}
            ></MemeForm>
          </FlexV1Grow>
          <Footer></Footer>
        </FlexH3Grow>
      </div>
    </React.Fragment>
  );
};

export default App;
