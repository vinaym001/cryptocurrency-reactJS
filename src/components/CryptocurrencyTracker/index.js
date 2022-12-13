import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

const CryptocurrencyTracker = () => (
  <div className="bg-container">
    <h1 className="heading">Cryptocurrency Tracker</h1>
    <img
      src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
      className="img"
      alt="cryptocurrency"
    />
    <CryptocurrenciesList />
  </div>
)

export default CryptocurrencyTracker
