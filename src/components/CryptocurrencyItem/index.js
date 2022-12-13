import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoDetails
  return (
    <li className="table-heading1">
      <div className="logo-name-container">
        <img src={currencyLogo} className="logo" alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="dollar-container">
        <p>{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
