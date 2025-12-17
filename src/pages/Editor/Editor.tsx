import FlexV1Grow from "../../components/layout/FlexV1Grow/FlexV1Grow";
import MemeForm from "../../components/functionnal/MemeForm/MemeForm.store";
import MemeSvgViewer from "../../components/ui/MemeSvgViewer/MemeSvgViewer.store";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, update } from "../../store/current";
import type { StoreDispatch, StoreState } from "../../store/store";

const Editor: React.FC = () => {
  const param = useParams();
  const memes = useSelector((state: StoreState) => state.ressources.memes);
  const dispatch = useDispatch<StoreDispatch>();
  const nav = useNavigate();
  
  useEffect(() => {
    if (undefined === param.id) {
      dispatch(clear());
    } else {
      const paramId = Number(param.id);
      if (Number.isNaN(paramId)) {
        nav("/");
        return;
      }

      const foundMeme = memes.find((item) => paramId === item.id);
      if (undefined === foundMeme) {
        nav("/");
        return;
      }
      dispatch(update(foundMeme));
    }
  }, [param.id, nav, dispatch, memes]);

  return (
    <FlexV1Grow>
      <MemeSvgViewer basePath="" />
      <MemeForm />
    </FlexV1Grow>
  );
};

export default Editor;
