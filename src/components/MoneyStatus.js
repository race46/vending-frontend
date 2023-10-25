import MoneyCollectTemplate from "./MoneyCollectTemplate";


export default ({moneys, setMoneys}) => {

    return <div className="row">
        <h1 className="mt1">Moneys</h1>
        {moneys.map(m => <MoneyCollectTemplate m={m} setMoneys={setMoneys}/>)}
    </div>
}