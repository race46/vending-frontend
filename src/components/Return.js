import {useEffect, useState} from "react";

export default ({returnItem}) => {
    const [item, setItem] = useState({})
    useEffect(() => {
        if(returnItem.id){
            setItem(returnItem)
        }
        setTimeout(()=> {
            setItem({})
        }, 1500)
    }, [returnItem])
    return <div className="p-3">
    <div className="return-frame w100">
        {item.id ? <img src={"/api/img/" + item.img} className="rem10"/> : <></>}
    </div>
    </div>
}
