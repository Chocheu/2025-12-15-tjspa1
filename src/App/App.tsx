import { useEffect, useState } from "react";
import Button from "../components/ui/Button/Button";

const App: React.FC = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    // componentDidMount
    // console.log("did mount");
    // setCounter(0); // inutile mais pour l'exemple => useState(0) à la place
    
    // componentDidUpdate
    console.log("counter effect", counter);

    return () => {
      // componentWillUnmount
    };
  }, [counter]);

  return (
    <div style={{ textAlign: "center" }}>
      valeur de counter :{counter}
      <hr />
      <Button
        onButtonClick={() => {
          setCounter(counter - 1);
        }}
      >
        -1
      </Button>
      <Button
        bgColor="skyblue"
        onButtonClick={() => {
          setCounter(counter + 1);

          console.log(counter);
        }}
      >
        +1
      </Button>
    </div>
  );
};

export default App;
