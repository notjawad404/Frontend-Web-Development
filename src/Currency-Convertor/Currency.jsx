import { Link} from 'react-router-dom';
import '../App.css'
import { useState } from "react";

import profile from '../assets/profile.jpg';


function CurrencyConvertor() {
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("PKR");
    const [amount, setAmount] = useState("");
    const conversionRate = 287.42;
    const [result, setResult] = useState("");
    const [error, setError] = useState("");

    const convertCurrency = () => {
        if (amount <= 0 || isNaN(amount)) {
            setError("Please enter a valid positive number.");
        }
        else {
            const convertedAmount = amount * conversionRate;
            setResult(
                `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`
            );
            setError("");
        }

    };

    return (
        <div className='w-3/4'>
                   <div className="grid grid-cols-2 gap-4 bg-gray-800 text-white">
          <div className="col-span-1 p-4">
            <p>
              Your Profile <span className="text-lg">&gt;</span> <span className='text-red-400 font-semibold text-lg'>Currency Convertor</span>
            </p>
          </div>
          <div className="col-span-1 p-4 flex justify-end">
            <img src={profile} alt="Profile Image" className="ml-48 w-10 h-8 rounded" />
            <Link className="px-2 mx-2 hover:text-cyan-400" to="/">
              John
            </Link>
            |
            <Link className="px-2 hover:text-cyan-400" to="/">
              Settings
            </Link>
            |
            <Link className="px-2 hover:text-cyan-400" to="/">
              Notifications
            </Link>
          </div>
        </div>
        <div className="bg-red-400 flex justify-center items-center h-full">
            <div className="container mx-96 p-10 bg-slate-400">
                <h1 className="mb-4 text-white text-center">Currency Converter</h1>

                <div className="bg-white rounded-lg p-10">
                    <div className="flex">
                        <div className="mr-2">
                            <label htmlFor="currency1" className="mx-3">
                                From:
                            </label>
                            <select
                                id="currency1"
                                className="block w-full py-2 px-10 border border-gray-300 rounded-md shadow-sm"
                                value={fromCurrency}
                                onChange={(e) => setFromCurrency(e.target.value)}
                            >
                                <option value="USD">USD</option>
                            </select>
                        </div>

                        <div className="mr-2">
                            <label htmlFor="currency2" className="mx-3">
                                To:
                            </label>
                            <select
                                id="currency2"
                                className="block w-full py-2 px-10 border border-gray-300 rounded-md shadow-sm"
                                value={toCurrency}
                                onChange={(e) => setToCurrency(e.target.value)}
                            >
                                <option value="PKR">PKR</option>
                            </select>
                        </div>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="amount">Amount:</label>
                        <br />
                        <input
                            type="number"
                            id="amount"
                            className="w-50 py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>

                    {error && <p className="text-red-500 mt-2">{error}</p>}

                    <button
                        onClick={convertCurrency}
                        className="mt-4 py-2 px-4 bg-indigo-500  rounded hover:bg-indigo-600"
                    >
                        Convert
                    </button>

                    <h2 id="result" className="mt-4">
                        {result}
                    </h2>
                </div>
            </div>
        </div>

        </div>
            );
}

export default CurrencyConvertor;
