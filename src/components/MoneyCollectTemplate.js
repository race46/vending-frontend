import {useState} from "react";
import {toast} from "react-toastify";

const collectMoney = (m, count, setDisable, setMoneys) => {
    setDisable(true)
    window.put(`/api/admin/money/${m.unit}/collect`, {count}, (res) =>{
        if(res.code === 400){
            toast.error(res.message)
        }
        if(res.code === 202){
            toast.success("money collected")
            window.get("/api/admin/moneys", setMoneys)
        }
        setDisable(false)
    }, (err) => {
        setDisable(false)
        toast.error(err.message)
    })
}

export default ({m, setMoneys}) => {
    const [disable, setDisable] = useState(false)
    const [count, setCount] = useState(0)
    return <div className="col-12 col-sm-3 mb1">
        <div className="card">
            <div className="card-header h5">
                <b>{m.unit} unit</b>
            </div>
            <div className="card-body">
                <label>Count ({m.count})</label>
                <input className="form-control" placeholder="Count" type="number" onChange={e => setCount(parseInt(e.target.value))}/>
                <button disabled={disable} className="btn btn-danger w100 mt1" onClick={e => collectMoney(m, count, setDisable, setMoneys)}>Collect</button>
            </div>
        </div>
    </div>
}