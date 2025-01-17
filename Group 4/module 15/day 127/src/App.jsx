import { TbCalculatorFilled } from "react-icons/tb";
import image from './assets/Screenshot.png'
import { useState} from "react";

function App() {
  const [amount, setAmount] = useState('');
  const [years, setYears] = useState('');
  const [rate, setRate] = useState('');
  const [type, setType] = useState('0');
  const [result, setResult] = useState(null);

  console.log(amount);
  console.log(years);
  console.log(rate);
  console.log(type);

  const calculate  = () => {
    if (!amount || !years || !rate) {
      alert("Please, fill in all the fields!");
      return;
    }

    const mortgageAmount = parseFloat(amount);
    const monthlyRate = parseFloat(rate) / 12 / 100;
    const totalPayments = parseInt(years) * 12;

    let monthlyPayment;

    if (type === "0") {
      monthlyPayment = 
      mortgageAmount * 
        (monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / 
        (Math.pow(1 + monthlyRate, totalPayments) - 1);
    } else {
      monthlyPayment = mortgageAmount * monthlyRate;
    }

    setResult(monthlyPayment.toFixed(2));
    console.log(monthlyPayment)
  }

  const clearAll = () => {
    setAmount("");
    setYears("");
    setRate("");
    setType("0");
    setResult(null);
  };
  
  return (
    <>
      <div className="min-h-screen w-full bg-[#E3F4FC] flex items-center justify-center p-5 sm:p-10 md:p-10 lg:p-10">
        <div className="rounded-2xl flex flex-col md:flex-row bg-white sm:w-[95%] md:w-[87%] lg:w-[63%] w-[100%] shadow-2xl shadow-slate-300 justify-center items-stretch h-[900px] md:h-[500px] max-sm:rounded-bl-[60px]">
          <div className="md:w-[50%] w-[100%] h-full p-5 sm:p-10 flex flex-col gap-4 rounded-2xl flex-grow">
            <span className="flex justify-between items-center mb-3">
              <h1 className="text-xl font-bold">Mortgage Calculator</h1>
              <button onClick={clearAll} className="text-sm underline text-gray-600">Clear All</button>
            </span>
            <span>
              <p className="text-md mb-2">Mortgage Amount</p>
              <span className="flex items-center border-2 border-gray-400 rounded-md h-9">
                <p className="bg-[#E2F4FE] rounded-md w-9 h-full flex items-center justify-center">$</p>
                <input onChange={(e) => setAmount(e.target.value)} value={amount} type="number" className="rounded-md w-full outline-none px-1"/>
              </span>
            </span>
            <span className="flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-between gap-4">
              <span>
                <p className="text-md mb-2">Mortgage Term</p>
                <span className="flex items-center border-2 border-gray-400 rounded-md h-9">
                  <input onChange={(e) => setYears(e.target.value)} value={years} type="number" className="rounded-md w-full outline-none px-1"/>
                  <p className="bg-[#E2F4FE] rounded-md w-20 h-full flex items-center justify-center">years</p>
                 </span>
              </span>
              <span>
                <p className="text-md mb-2">Interest Rate</p>
                <span className="flex items-center border-2 border-gray-400 rounded-md h-9">
                  <input onChange={(e) => setRate(e.target.value)} value={rate} type="number" className="rounded-md w-full outline-none px-1"/>
                  <p className="bg-[#E2F4FE] rounded-md w-9 h-full flex items-center justify-center">%</p>
                 </span>
              </span>
            </span>
            <span className="flex flex-col justify-between gap-2">
              <p className="text-md">Mortgage Type</p>
              <label className="flex items-center px-3 border-2 border-gray-400 rounded-md h-9">
                <input onChange={(e) => setType(e.target.value)} checked={type === '0'} type="radio" name="mortgageType" value="0" className="me-3 h-3 w-3"/>
                <p className="font-medium">Repayment</p>
              </label>
              <label className="flex items-center px-3 border-2 border-gray-400 rounded-md h-9">
                <input onChange={(e) => setType(e.target.value)} checked={type === '1'} type="radio" name="mortgageType" value="1" className="me-3 h-3 w-3"/>
                <p className="font-medium">Interest Only</p>
              </label>
            </span>
            <button onClick={calculate} className="bg-[#D9DB30] my-3 py-2 px-5 rounded-3xl font-semibold flex items-center justify-center w-[100%] sm:w-max"><TbCalculatorFilled className="me-3"/> <p>Calculate Repayments</p></button>
          </div>
          {result === '' ? (
          <div className="bg-[#133040] md:w-[50%] w-[100%] h-full p-5 sm:p-10 rounded-tr-2xl rounded-br-2xl rounded-bl-[60px] flex flex-col gap-3 items-center text-white flex-grow">
            <img src={image} alt="" className="w-44" />
            <h2 className="font-semibold text-lg">Results shown here</h2>
            <p className="text-center text-sm text-gray-400">Complete the form and click "Calculate Repayments" to see what your monthly repayments would be.</p>
          </div>
          ) : (
            <div className="bg-[#133040] md:w-[50%] w-[100%] h-full p-5 sm:p-10 rounded-tr-2xl rounded-br-2xl rounded-bl-[60px] flex flex-col gap-3 text-white flex-grow">
              <h2 className="font-semibold text-lg">Your results</h2>
              <p className="text-base text-gray-300 mb-6">Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.</p>
              <table className="bg-[#0E2431]  border-separate border-spacing-y-1 p-3 shadow-[0px_-6px_0px_0px_#D9DB30] rounded-md">
                <tbody>
                  <tr>
                    <td className="text-base text-gray-300 text-start">Your monthly repayments</td>
                  </tr>
                  <tr>
                    <td className="text-4xl font-semibold text-[#D9DB30] text-start border-b border-gray-600 pb-5">${result}</td>
                  </tr>
                  <tr>
                    <td className="text-base text-gray-300 text-start pt-3">Total you'll repay over the term</td>
                  </tr>
                  <tr>
                    <td className="text-2xl font-semibold text-start">${(result * 12 * years).toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
          </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App