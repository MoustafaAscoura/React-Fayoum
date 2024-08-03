import { useState } from "react"
import CardInfo from "../CardInfo/CardInfo"

export default function Card () {
    
    const [today, setToday] = useState(new Date())


    return <div className="Card" style={{width: '18 rem'}}>
        <img src="https://base-prod.rspb-prod.magnolia-platform.com/.imaging/focalpoint/_WIDTH_x_HEIGHT_/dam/jcr:71eda09d-9010-474a-8404-cba78c2489d6/654943777-Species-Swallow-flying-over-water.jpg" className="card-img-top" alt="card-image"/>
        <hr/>
        <div className="card-body">
        
        <CardInfo/>
        <p className="card-text">Todays date: {today.toLocaleString()}</p>
        <button className="btn btn-primary" onClick={(event) => {
            setToday(new Date())
        }}>Update Date</button>
        </div>
    </div>
}