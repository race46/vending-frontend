const refund = (setBalance, moneys, setRefundCoins, setDisable) => {
    setBalance(0)
    setRefundCoins(moneys.length)
    setDisable(true)
    while (moneys.pop());

    setTimeout(() => {
        setDisable(false)
        setRefundCoins(0)
    }, 1500)
}

export default ({setBalance, moneys, setRefundCoins, disable, setDisable}) => {
    return <div className="mt1">

        <div className="w100 p-1">
            <button className="w100 btn btn-danger" disabled={disable} onClick={e => refund(setBalance, moneys, setRefundCoins, setDisable)}><h4>REFUND</h4></button>
        </div>

    </div>

}
