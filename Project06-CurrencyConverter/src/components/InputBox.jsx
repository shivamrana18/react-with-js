import React, {useId} from 'react'
import './InputBox.css'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
   const amountInputId = useId()

    return (
        <div className="cont1">
            <div className="valueSec">
                <label htmlFor={amountInputId}  className="label1">
                    {label}
                </label>
                <br></br>
                <input
                    id={amountInputId}
                    className="inputField"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="currencyChangeDiv">
                <label className="label2">Currency Type</label>
                <br></br>
                <select
                    className="dropdown"
                    value={selectCurrency}
                    onChange={(e) => {
                        onCurrencyChange && onCurrencyChange(e.target.value)}}
                    disabled={currencyDisable}
                >
                    
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;

// ************* code for other use
// function InputBox({
//     label,
//     amount,
//     onAmountChange,
//     onCurrencyChange,
//     currencyOptions = [],
//     selectCurrency = "usd",
//     amountDisable = false,
//     currencyDisable = false,
//     className = "",
// }){

//     return (
//     <>
//     <div className="wholePage">
//    <div className="container">
//        <div className="container-child1">
//            <label htmlFor={amountInputId}>
//            {label}
//            </label>
//            <br></br>
//            <input type="number" name="fromValue" id="fromValue" placeholder="value to convert" 
//            id={amountInputId}
//            className="outline-none w-full bg-transparent py-1.5"
//            type="number"
//            placeholder="Amount"
//            disabled={amountDisable}
//            value={amount}
//            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
//            />
//            <select name="fromCurrencySelect" id="fromCurrencySelect"
//            className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
//            value={selectCurrency}
//            onChange={(e) => {
//                onCurrencyChange && onCurrencyChange(e.target.value)}}
//            disabled={currencyDisable}
//        >
//          {currencyOptions.map((currency) => (
//                    <option key={currency} value={currency}>
//                    {currency}
//                    </option>
//                ))}
           
//            </select>
//        </div>
//        <div className="container-child2">
//            <label htmlFor="toValue">
//                To
//            </label>
//            <br></br>
//            <input type="number" name="fromValue" id="toValue" placeholder="converted value" />
//        </div>
//        <button type="submit"><strong>Click here to convert</strong></button>
//    </div>
//    </div>
//     </>
//     )
// }

// export default InputBox