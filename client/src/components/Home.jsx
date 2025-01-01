import Card from './Card.jsx'
import {useEffect, useState} from "react";
import log from "eslint-plugin-react/lib/util/log.js";

export default function Home() {

    const [cardData, setCardData] = useState(["00000"])


    useEffect(() =>{
       fetch("http://localhost:3000/")
           .then((data) => data.json())
           .then((data) => setCardData(data))
    },[cardData])

    const generateCards = cardData.map((item) => (
        <Card  key = {item._id} id = {item._id} {...item}/>
    ))



    return (
        <>
            <div className="home flex flex-col items-center justify-center">
                {generateCards}
            </div>
        </>
    )
}
