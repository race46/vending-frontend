export default ({balance, setBalance, moneys, disable}) => {
    const addMoney = (unit) => {
        moneys.push(unit)
        setBalance(balance + unit)
        console.log(moneys)
    }

    return <div className="d-flex">
        <div className="w25 p-1">
            <button className="w100 btn btn-success" disabled={disable} onClick={e => addMoney(1)}>+1 unit</button>
        </div>

        <div className="w25 p-1">
            <button className="w100 btn btn-success" disabled={disable} onClick={e => addMoney(5)}>+5 unit</button>
        </div>

        <div className="w25 p-1">
            <button className="w100 btn btn-success" disabled={disable} onClick={e => addMoney(10)}>+10 unit</button>
        </div>

        <div className="w25 p-1">
            <button className="w100 btn btn-success" disabled={disable} onClick={e => addMoney(20)}>+20 unit</button>
        </div>

    </div>
}
