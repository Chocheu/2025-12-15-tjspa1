import Button from "../components/ui/Button/Button";

function App() {
  return (
    <div>
      Demat Breizh
      <br />
      <Button
        bgColor="tomato"
        onButtonClick={() => {
          console.log("Annie?");
        }}
      >
        Are you okay?
      </Button>
      <Button
        children={"Luke"}
        onButtonClick={() => {
          console.log("Je suis tonn père !");
        }}
      />
      <Button
        bgColor="aquamarine"
        onButtonClick={() => {
          console.log("In space");
        }}
      >
        <div>dac</div>
      </Button>
      <Button
        onButtonClick={() => {
          console.log("CANCEL KULTURE !");
        }}
      >
        <div>la réponse est</div>
        <div>42</div>
      </Button>
    </div>
  );
}

export default App;
