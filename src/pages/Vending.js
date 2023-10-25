import Showcase from "../components/Showcase";
import Return from "../components/Return";
import ControlPanel from "../components/ControlPanel";
import {useEffect, useState} from "react";


export default () => {
    const [balance, setBalance] = useState(0)
    const [message, setMessage] = useState("")
    const [returnItem, setReturnItem] = useState({})

    useEffect(()=>{
        if(message)
        setTimeout(()=>{setMessage("")}, 3000)
    }, [message])

    return <div className="row app rounded fit-v mt1">
        <div className="col-8 fit">

            <div className="row fit h65">
                <Showcase setReturnItem={setReturnItem} setBalance={setBalance} setMessage={setMessage}/>
            </div>
            <div className="row p-b ">
                <Return returnItem={returnItem}/>
            </div>
        </div>
        <div className="col-4">
            <ControlPanel balance={balance} setBalance={setBalance} message={message}/>
        </div>
    </div>
}
