import React from "react";
import img from "../components/assets/img/usual.png";
import arrow from "../components/assets/refresh.svg";
import one from "../components/assets/one.svg";
import two from "../components/assets/two.svg";
import three from "../components/assets/three.svg";
import four from "../components/assets/four.svg";
import five from "../components/assets/five.svg";

export default function UsualCard() {
  const [visible, setVisible] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [random, setRandom] = React.useState(0);
  const [themeCart, setTheme]=React.useState("dark")

  const toggleCard = () => {
    setVisible(!visible);
  };
  const randomId = () => {
    setRandom(Math.floor(0 + Math.random() * (99+ 1 - 0)));
  };

  React.useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        "https://6318c47f6b4c78d91b2e8e5f.mockapi.io/usual"
      );
      const resp = await data.json();
      setData(resp[random]);
    }
    fetchData();
  }, [random]);


  return (
    <div>
      <button className="block m-auto">
        <img src={arrow} width="60" height="40" onClick={randomId} />
      </button>
      <div className="card" onClick={toggleCard}>
        {visible ? <CardFront data={data} theme={themeCart} /> : <CardBack />}
      </div>
    </div>
  );
}

const CardBack = () => {
  return (
    <div>
      <img src={img} alt="special-card-back" className="rounded-10 w-250 h-350"/>
    </div>
  );
};

const CardFront = ({ data, theme }) => {
  return (
    <div>
      <div className={theme}>
      <h2 className="title">{data.theme}</h2>
      <div className="flex items-center mb-15 pb-10 border-b-2 border-dashed">
        <img src={one} alt="one-dice" width="27" />
        <p className="mx-8 w-50 text-small">слова</p>
        <p className="flex-1 text-large">{data.card[0]}</p>
      </div>
      <div className="flex items-center mb-15 pb-10 border-b-2 border-dashed border-grey">
        <img src={two} alt="two-dice" width="27" />
        <p className="mx-8 w-50 text-small">наоборот</p>
        <p className="flex-1 text-large">{data.card[1]}</p>
      </div>
      <div className="flex items-center mb-15 pb-10 border-b-2 border-dashed border-grey">
        <img src={three} alt="three-dice" width="27" />
        <p className="mx-8 w-50 text-small">рисунок</p>
        <p className="flex-1 text-large">{data.card[2]}</p>
      </div>
      <div className="flex items-center mb-15 pb-10 border-b-2 border-dashed">
        <img src={four} alt="four-dice" width="27" />
        <p className="mx-8 w-50 text-small">жесты</p>
        <p className="flex-1 text-large">{data.card[3]}</p>
      </div>
      <div className="flex items-center mb-15 pb-10 border-b-2 border-dashed">
        <img src={five} alt="five-dice" width="27" />
        <p className="mx-8 w-50 text-small">да/нет</p>
        <p className="flex-1 text-large">{data.card[4]}</p>
      </div>
      </div>
    </div>
  );
};
