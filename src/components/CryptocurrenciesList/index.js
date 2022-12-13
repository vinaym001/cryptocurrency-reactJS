import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoCurrencyData: [], isLoading: true}

  componentDidMount() {
    this.getDataFromApi()
  }

  getDataFromApi = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const cryptoData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoCurrencyData: cryptoData, isLoading: false})
  }

  render() {
    const {isLoading} = this.state
    const {cryptoCurrencyData} = this.state
    return (
      <div className="list-container">
        <ul className="ul-container">
          <li className="table-heading">
            <div>
              <p>Coin Type</p>
            </div>
            <div className="dollar-container">
              <p>USD</p>
              <p>EURO</p>
            </div>
          </li>
          {isLoading ? (
            <div testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            cryptoCurrencyData.map(eachItem => (
              <CryptocurrencyItem key={eachItem.id} cryptoDetails={eachItem} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
