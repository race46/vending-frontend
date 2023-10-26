import Fan from "../icons/fan.svg";
import {useEffect, useState} from "react";

export default () => {
    const [status, setStatus] = useState({cooling: true, temperature: 30})
    useEffect(()=>{
        setInterval(()=>{
            window.get("/api/machine/hearth-beat", setStatus)
        }, 500)
    },[])
    return <><h1 className="text-center">Vending Machine</h1>
        <div className="d-flex">
            <img alt="" className={status.cooling ? "animation-spin" : ""} src={Fan}/>
            <h3 className="ml">Temperature: {status.temperature.toFixed(2)}°</h3>
        </div>
    </>
}
