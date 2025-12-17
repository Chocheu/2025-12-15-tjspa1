import type React from "react";
import StandAloneMemeForm from "./MemeForm";
import type { IMemeFormStored } from "./MemeForm.interface";
import { useDispatch, useSelector } from "react-redux";
import { type StoreDispatch, type StoreState } from "../../../store/store";
import { update } from "../../../store/current";
import { saveCurrent } from "../../../store/asyncCaller";

const MemeForm: React.FC<IMemeFormStored> = (props) => {
  const images = useSelector((state: StoreState) => state.ressources.images);
  const current = useSelector((state: StoreState) => state.current.meme);
  const dispatch = useDispatch<StoreDispatch>();

  return (
    <StandAloneMemeForm
      {...props}
      images={images}
      meme={current}
      onMemeChange={(meme) => {
        dispatch(update(meme));
      }}
      onMemeSave={(meme) => {
        dispatch(saveCurrent(meme));
      }}
    ></StandAloneMemeForm>
  );
};

export default MemeForm;
