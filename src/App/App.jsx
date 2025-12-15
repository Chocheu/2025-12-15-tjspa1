import Button from "../components/ui/Button/Button";

function App() {
  return (
    <div>
      Demat Breizh
      <br />
      <Button
        title={"clique moi !"}
        onButtonClick={(param) => {
          console.log("J'ai cliqué !", param);
        }}
      />
      <Button
        title="ok"
        onButtonClick={(param) => {
          console.log("C'est OKAY !", param);
        }}
      />
    </div>
  );
}

export default App;
