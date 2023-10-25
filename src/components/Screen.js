
export default ({balance, message}) => {

    return <div className="screen">
        <h4 className="text-green text-center">welcome</h4>
        <h5 className="text-green">Your balance: <b>{balance}</b> unit</h5>
        <h5 className="red">{message}</h5>
    </div>
}
