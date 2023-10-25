import {useEffect, useState} from "react";
import Product from "./Product";


export default ({setReturnItem, setBalance, setMessage}) => {
    const [products, setProducts] = useState([])
    const [disableAll, setDisableAll] = useState(false)
    useEffect(() => {
        window.get("/api/machine/products", setProducts)
    },[disableAll])
    return <>{products.map(p => <Product key={p.id} p={p} setReturnItem={setReturnItem} disableAll={disableAll} setMessage={setMessage} setDisableAll={setDisableAll} setBalance={setBalance}/>)}</>
}
