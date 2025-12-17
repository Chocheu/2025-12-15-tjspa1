import { Link } from "react-router";

const Home: React.FC = () => {
  return (
    <div>
      <h1>Binvenue mon gars !</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        possimus. Quo, odio obcaecati porro alias placeat consequatur labore et
        modi illum harum, possimus temporibus, dicta officiis sunt tempore
        aperiam! Obcaecati.
      </p>
      <p>Actions :</p>
      <ul>
        <li>
          <Link to="/thumbnail">Thumbnail</Link>
        </li>
        <li>
          <Link to="/editor">Meme EdiThor</Link>
        </li>
        <li>
          <Link to="/editor/3">Meme EdiThor - 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
