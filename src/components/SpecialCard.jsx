import React from 'react'
import img from "../components/assets/img/special.PNG"
import arrow from "../components/assets/refresh.svg";
import {special} from "../../src/var";

export default function SpecialCard() {
    const [visible, setVisible]=React.useState(false);
    const [data, setData] = React.useState([]);
    const [random, setRandom] = React.useState(0);
    const [theme, setTheme]=React.useState(0)
    const toggleVisibleCard=()=>{
        setVisible(!visible)
    }
    const randomId = () => {
        setRandom(Math.floor(0 + Math.random() * (99+ 1 - 0)));
      };
      React.useEffect(() => {
        async function fetchData() {
          const data = await fetch(
            "https://6318c47f6b4c78d91b2e8e5f.mockapi.io/special"
          );
          const resp = await data.json();
          setData(resp[random]);
        }
        fetchData();
      }, [random]);
      console.log(Object.keys(special[0]))
  return (
        <>
          <button className="block m-auto"  onClick={randomId}>  <img src={arrow} width="60" height="40"/></button>
         
            <div className='card' onClick={toggleVisibleCard}>
        {visible ? <SpecialCardFront data={data}/> : <SpecialCardBack/> }
            </div>
        </>
  
  
  )
}

const SpecialCardBack=()=>{
    return (
    <div className="rounded-10 w-250 h-350">
        <img className="rounded-10 w-250 h-350" src={img} alt="special-card-back"/>
    </div>
    )
}

const SpecialCardFront=({data})=>{
    return (
        <div className="rounded-10 w-250 h-350">
            <h2 className="title">{Object.keys(special[data.theme])}</h2>
            <p>{Object.values(special[data.theme])}</p>
            <b>{data.card.map(item=><p key={item}>{item}</p>)}</b>
        </div>
    )
}