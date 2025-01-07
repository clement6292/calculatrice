import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('0'); // Initialiser à '0'
  const [result, setResult] = useState(''); // État pour le résultat


  function handleClick(value) {
    const mappedValue = value === 'x' ? '*' : value === '÷' ? '/' : value;
    setInput(prevInput => prevInput === '0' ? mappedValue : prevInput + mappedValue);
  }

  function handleClear() {
    setInput('0');
    setResult('');
  }

  function handleCalculate() {
    try {
      const evalResult = eval(input.replace(/x/g, '*').replace(/÷/g, '/'));
      setResult(evalResult.toString()); // Mettre à jour le résultat
    } catch (error) {
      setResult('Erreur');
    }
  }


  function handleDelete() {
    setInput(prevInput => prevInput.length > 1 ? prevInput.slice(0, -1) : '0'); // Supprimer un caractère, mais garder '0'
  }

  return (
    <div className="flex justify-center items-center h-screen">
       <div className="w-[270px]">
        <div className="w-full bg-gray-800 p-1 rounded-xl">
          <div className="flex flex-col h-24 bg-[#AACBAC] m-4 items-center justify-center rounded-lg">
            <div className="w-full text-sm pr-3 text-end">{input}</div> {/* Affiche l'opération */}
            <input 
              type="text" 
              value={result || '0'} // Affiche le résultat ou '0'
              readOnly 
              className="w-full p-2 text-2xl bg-transparent border-none text-right"
            />
          </div>
          <div className="flex flex-wrap gap-3 justify-center items-center py-4">
            <button onClick={handleClear} className="control w-1/4 p-2 bg-red-500 text-white rounded hover:bg-red-600">C</button>
            <button onClick={handleDelete} className="control w-1/4 p-2 bg-gray-500 text-white rounded hover:bg-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="#FFFfff" width="1.5rem">
                <path d="M576 128c0-35.3-28.7-64-64-64H205.3c-17 0-33.3 6.7-45.3 18.7L9.4 233.4c-6 6-9.4 14.1-9.4 22.6s3.4 16.6 9.4 22.6L160 429.3c12 12 28.3 18.7 45.3 18.7H512c35.3 0 64-28.7 64-64V128zm-305 47c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
              </svg>
            </button>
            <button onClick={() => handleClick('%')} className="operator w-1/4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">%</button>
            <button onClick={() => handleClick('x')} className="operator w-1/4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">x</button>
            <button onClick={() => handleClick('7')} className="num w-1/4 p-2 bg-gray-200 rounded hover:bg-gray-300">7</button>
            <button onClick={() => handleClick('8')} className="num w-1/4 p-2 bg-gray-200 rounded hover:bg-gray-300">8</button>
            <button onClick={() => handleClick('9')} className="num w-1/4 p-2 bg-gray-200 rounded hover:bg-gray-300">9</button>
            <button onClick={() => handleClick('÷')} className="operator w-1/4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">÷</button>
            <button onClick={() => handleClick('4')} className="num w-1/4 p-2 bg-gray-200 rounded hover:bg-gray-300">4</button>
            <button onClick={() => handleClick('5')} className="num w-1/4 p-2 bg-gray-200 rounded hover:bg-gray-300">5</button>
            <button onClick={() => handleClick('6')} className="num w-1/4 p-2 bg-gray-200 rounded hover:bg-gray-300">6</button>
            <button onClick={() => handleClick('-')} className="operator w-1/4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">-</button>
            <button onClick={() => handleClick('3')} className="num w-1/4 p-2 bg-gray-200 rounded hover:bg-gray-300">3</button>
            <button onClick={() => handleClick('2')} className="num w-1/4 p-2 bg-gray-200 rounded hover:bg-gray-300">2</button>
            <button onClick={() => handleClick('1')} className="num w-1/4 p-2 bg-gray-200 rounded hover:bg-gray-300">1</button>
            <button onClick={() => handleClick('+')} className="operator w-1/4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600">+</button>
            <button onClick={() => handleClick('0')} className="num zero w-1/2 p-2 bg-gray-200 rounded hover:bg-gray-300">0</button>
            <button onClick={() => handleClick('.')} className="num w-1/4 p-2 bg-gray-200 rounded hover:bg-gray-300">.</button>
            <button onClick={handleCalculate} className="operator w-1/4 p-2 bg-green-500 text-white rounded hover:bg-green-600">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;