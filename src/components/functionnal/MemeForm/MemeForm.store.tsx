import type React from "react";
import StandAloneMemeForm from "./MemeForm";
import type { IMemeFormStored } from "./MemeForm.interface";

const MemeForm: React.FC<IMemeFormStored>= (props: Props) => {
  return <StandAloneMemeForm images={} meme={} onMemeChange={}></StandAloneMemeForm>;
};

export default MemeForm;
