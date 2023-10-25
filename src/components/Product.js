import {useState} from "react";

const buy = (p, setReturnItem, setDisableAdd, setBalance, setMessage) => {
    setDisableAdd(true)
    window.post("/api/machine/buy", {productId:p.id, moneys:window.moneys}, (res)=> {
        if(res.success){
            setReturnItem(p)
            while (window.moneys.pop());
            res.exchanges.forEach(e => window.moneys.push(e))
            setBalance(window.moneys.reduce((a,b) => a + b, 0))
        }
        setMessage(res.message)
        setDisableAdd(false)
    })

}


export default ({p, setReturnItem, disableAll, setDisableAll, setBalance, setMessage}) => {
    const[disableAdd, setDisableAdd] = useState(p.stock === 0)
    return <div className="col-4 p-1">
        <div className="card">
            <img src={`/api/img/${p.img}`} className="card-img-top h5rem" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">Price: {p.price} unit</p>
                <p className="card-text">Stock: {p.stock} </p>

                <button className="btn btn-success w100" disabled={disableAdd || disableAll} onClick={e => buy(p,setReturnItem, setDisableAll, setBalance, setMessage)}>BUY</button>

            </div>
        </div>
    </div>
}