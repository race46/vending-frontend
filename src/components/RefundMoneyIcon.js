import Coin from '../icons/coin.svg'

export default ({refundCoins}) => {
    return <div className="mt1">
        {new Array(refundCoins).fill(0).map(o => <img className="animate__animated animate__bounceIn" src={Coin}/>)}
    </div>
}
