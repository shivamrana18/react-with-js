import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './components/getCurrencyCall'
import './components/InputBox.css'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div className='transparentBcg'>
    <div
        className="container"
        // style={{
        //     backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        // }}
    >
        <div className="child1">
            <div className="childDiv1">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                       
                    }}
                >
                    <div className="fromCurrency">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => {
                              console.log(currency)
                              setFrom(currency)}}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="swapBtnDiv">
                        <button
                            type="button"
                            className="swapBtn"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="toCurrency">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    {/* <button type="submit" className="submitBtn">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button> */}
            <button type="submit" className="submitBtn2">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
        </div>
    </div>
);
}

export default App
