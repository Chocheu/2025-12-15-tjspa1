import Button from "../components/ui/Button/Button";

function App() {
  return (
    <div>
      Demat Breizh
      <br />
      <Button
        bgColor="tomato"
        onButtonClick={(param) => {
          console.log("J'ai cliqué !", param);
        }}
      >
        OK ?
      </Button>
      
      <Button
        children={"Luke"}
        onButtonClick={(param) => {
          console.log("Je suis tonn père !", param);
        }}
      />

      <Button
        bgColor="aquamarine"
        onButtonClick={(param) => {
          console.log("C'est OKAY !", param);
        }}
      >
        <div>dac</div>
      </Button>

      <Button
        onButtonClick={(param) => {
          console.log("CANCEL KULTURE !", param);
        }}
      >
        <div>la réponse est :</div>
        <div>42</div>
      </Button>
    </div>
  );
}

export default App;
