import {useEffect, useState} from "react";
import Screen from "./Screen";
import MoneyButton from "./MoneyButton";
import ProcessButtons from "./ProcessButtons";
import RefundMoneyIcon from "./RefundMoneyIcon";
import Heading from "./Heading";

const moneys = []
window.moneys = moneys


export default ({balance, setBalance, message}) => {
    const [refundCoins, setRefundCoins] = useState(0)
    const [disable, setDisable] = useState(false)


    return <div>

        <Heading/>

        <Screen balance={balance} message={message}/>

        <MoneyButton balance={balance} setBalance={setBalance} moneys={moneys} disable={disable}/>

        <ProcessButtons setBalance={setBalance} moneys={moneys} setRefundCoins={setRefundCoins} setDisable={setDisable} disable={disable}/>

        <RefundMoneyIcon refundCoins={refundCoins}/>

    </div>
}
