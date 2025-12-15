import Button from "../components/ui/Button/Button";

function App() {
  return (
    <div>
      Demat Breizh
      <br />
      <Button
        title={"clique moi !"}
        bgColor="tomato"
        onButtonClick={(param) => {
          console.log("J'ai cliqué !", param);
        }}
      />
      <Button
        title="ok"
        bgColor="aquamarine"
        onButtonClick={(param) => {
          console.log("C'est OKAY !", param);
        }}
      />
      <Button
        title="cancel"
        onButtonClick={(param) => {
          console.log("CANCELED !", param);
        }}
      />
    </div>
  );
}

export default App;
