import { useSelector } from "react-redux";
import MemeThumbnail from "../../components/layout/MemeThumbnail/MemeThumbnail";
import type { StoreState } from "../../store/store";
import { Link } from "react-router";
import { MemeSVGViewer } from "orsys-tjs-meme";

const Thumbnail: React.FC = () => {
  const ressources = useSelector((state: StoreState) => state.ressources);

  return (
    <MemeThumbnail>
      {ressources.memes.map((item) => (
        <Link to={"/editor/" + item.id} key={item.id}>
          <MemeSVGViewer
            image={ressources.images.find((image) => item.imageId === image.id)}
            meme={item}
            basePath=""
          />
          {item.titre}
        </Link>
      ))}
    </MemeThumbnail>
  );
};

export default Thumbnail;
