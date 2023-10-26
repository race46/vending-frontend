import {useState} from "react";
import {toast} from "react-toastify";

const updateProduct = (product, details, setDisable) => {
    setDisable(true)
    window.put(`/api/admin/products/${product.id}`, details, (r)=>{
        if(r.code === 202)
            toast.success(product.name + ' updated')
        else
            toast.error(r.message)
        setDisable(false)
    })
}
export default ({product}) => {

    const [details, setDetails] = useState({price: product.price, stock: product.stock})
    const [disable, setDisable] = useState(false)
    return <div className="col-12 col-sm-4 mb1">
        <div className="card">
            <div className="card-header h5">
                <b>{product.name}</b>
            </div>
            <div className="card-body">
                <label>Price in unit</label>
                <input className="form-control" placeholder="Price in unit" defaultValue={product.price} type="number" onChange={e => setDetails({price: e.target.value, stock: details.stock})}/>
                <label>Stock</label>
                <input className="form-control" placeholder="Stock" defaultValue={product.stock} type="number" onChange={e => setDetails({price: details.price, stock: e.target.value})}/>
                <button disabled={disable} className="btn btn-primary w100 mt1" onClick={e => updateProduct(product, details, setDisable)}>Apply</button>
            </div>
        </div>
    </div>
}