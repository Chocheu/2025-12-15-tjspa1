import React from "react";
import { MemeSVGViewer } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import type { StoreState } from "../../../store/store";

interface IMemeSvgViewerProps {
  basePath: "/" | "";
}

const MemeSvgViewer: React.FC<IMemeSvgViewerProps> = (props) => {
  const images = useSelector((state: StoreState) => state.ressources.images);
  const current = useSelector((state: StoreState) => state.current.meme);

  return (
    <MemeSVGViewer
      {...props}
      image={images.find((item) => item.id === current.imageId)}
      meme={current}
    />
  );
};

export default MemeSvgViewer;
