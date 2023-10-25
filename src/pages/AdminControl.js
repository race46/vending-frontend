import ProductManage from "../components/ProductManage";
import {useEffect, useState} from "react";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MoneyStatus from "../components/MoneyStatus";

const reset = (setProducts, setMoneys) => {
    setProducts([])
    setMoneys([])
    fetch("/api/admin/reset", {
        method: "post"
    }).then(r => {
        window.get('/api/machine/products', setProducts)
        window.get("/api/admin/moneys", setMoneys)
    })
}
export default () => {
    const [products, setProducts] = useState([])
    const [moneys, setMoneys] = useState([])

    useEffect(() => {
        window.get('/api/machine/products', setProducts)
        window.get("/api/admin/moneys", setMoneys)

    }, [])
    return <div className="row">
        <div className="d-flex justify-content-between mb1 mt1">
            <h1>Products</h1>
            <button className="btn btn-danger w25" onClick={e => reset(setProducts, setMoneys)}>RESET</button>
        </div>
        {products.map(p => <ProductManage product={p} key={p.id}/>)}

        <MoneyStatus moneys={moneys} setMoneys={setMoneys}/>
        <ToastContainer/>
    </div>
}