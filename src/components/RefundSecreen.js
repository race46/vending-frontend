export default ({balance}) => {
    return <div className="screen">
        <h4 className="text-green text-center">welcome</h4>
        <h5 className="text-green">Your balance: <b>{balance}</b> unit</h5>
        <h5 className="text-light">Selected Products: </h5>
        <h6 className="text-light">1 x coke = 15 unit</h6>
        <h5 className="text-green">Total = 15 unit</h5>
    </div>
}
